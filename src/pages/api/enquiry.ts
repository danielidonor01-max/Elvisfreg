/**
 * Enquiry endpoint. Accepts the HTML form (multipart) from EnquiryForm.astro.
 * - Honeypot filled → respond as if sent, do nothing.
 * - Turnstile verified when TURNSTILE_SECRET_KEY is set.
 * - Sent via Resend when RESEND_API_KEY is set; otherwise logged (development).
 * - Replies JSON to fetch, or redirects to /contact/sent/ for plain form posts.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(''));

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: optionalText(160),
  email: z.string().trim().email().max(200),
  phone: optionalText(40),
  sector: optionalText(80),
  service: optionalText(80),
  location: optionalText(160),
  message: z.string().trim().min(10).max(4000),
  consent: z.literal('on'),
  website: optionalText(200), // honeypot
  variant: z.enum(['full', 'short']).optional(),
  turnstile: z.string().optional(),
});

function wantsJson(request: Request) {
  return (request.headers.get('accept') ?? '').includes('application/json');
}

function respond(request: Request, ok: boolean, status: number, error?: string) {
  if (wantsJson(request)) {
    return new Response(JSON.stringify({ ok, ...(error ? { error } : {}) }), {
      status,
      headers: { 'content-type': 'application/json' },
    });
  }
  return new Response(null, {
    status: 303,
    headers: { location: ok ? '/contact/sent/' : '/contact/?error=1' },
  });
}

async function verifyTurnstile(token: string | undefined, ip: string | undefined) {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY as string | undefined;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return Boolean(data.success);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let raw: Record<string, string>;
  try {
    const fd = await request.formData();
    raw = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : '']));
  } catch {
    return respond(request, false, 400, 'Could not read the form.');
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return respond(request, false, 422, 'Some fields are missing or invalid.');
  }
  const d = parsed.data;

  // Honeypot: pretend it worked.
  if (d.website) return respond(request, true, 200);

  if (!(await verifyTurnstile(d.turnstile, clientAddress))) {
    return respond(request, false, 403, 'Bot check failed. Reload the page and try again.');
  }

  const to = (import.meta.env.ENQUIRY_TO as string | undefined) || 'elvisfregnlgltd@gmail.com';
  const from = (import.meta.env.ENQUIRY_FROM as string | undefined) || 'Elvisfreg website <onboarding@resend.dev>';
  const apiKey = import.meta.env.RESEND_API_KEY as string | undefined;

  const lines = [
    `Name: ${d.name}`,
    d.company ? `Company: ${d.company}` : null,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    d.sector ? `Sector: ${d.sector}` : null,
    d.service ? `Service: ${d.service}` : null,
    d.location ? `Site location: ${d.location}` : null,
    '',
    d.message,
    '',
    `Sent from the website enquiry form (${d.variant ?? 'full'}).`,
  ].filter((l): l is string => l !== null);
  const text = lines.join('\n');
  const subject = `Enquiry: ${d.service || d.sector || 'general'} — ${d.name}${d.company ? `, ${d.company}` : ''}`;

  if (!apiKey) {
    console.log('[enquiry] RESEND_API_KEY not set; would send:\n' + text);
    return respond(request, true, 200);
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({ from, to, replyTo: d.email, subject, text });
    // Acknowledgement to the sender. Failure here should not fail the enquiry.
    resend.emails
      .send({
        from,
        to: d.email,
        subject: 'We received your enquiry',
        text: `Thank you, ${d.name}. We've received your enquiry and will reply by email.\n\nElvisfreg Nigeria Limited\n+234 706 998 6848`,
      })
      .catch(() => {});
    return respond(request, true, 200);
  } catch (err) {
    console.error('[enquiry] send failed', err);
    return respond(request, false, 502, 'The message could not be sent.');
  }
};
