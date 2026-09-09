/**
 * Updates sign-up endpoint. Accepts the small form in UpdatesCta.astro.
 * Until a list provider is chosen, each address is forwarded to the company
 * mailbox and the sender gets a one-line acknowledgement.
 * - Honeypot filled → respond as if sent, do nothing.
 * - Sent via Resend when RESEND_API_KEY is set; otherwise logged (development).
 * - Replies JSON to fetch, or redirects to /updates/sent/ for plain form posts.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const schema = z.object({
  email: z.string().trim().email().max(200),
  website: z.string().trim().max(200).optional().or(z.literal('')), // honeypot
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
    headers: { location: ok ? '/updates/sent/' : '/?updates=error#updates' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let raw: Record<string, string>;
  try {
    const fd = await request.formData();
    raw = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : '']));
  } catch {
    return respond(request, false, 400, 'Could not read the form.');
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) return respond(request, false, 422, 'Enter a valid email address.');
  const d = parsed.data;

  if (d.website) return respond(request, true, 200);

  const to = (import.meta.env.ENQUIRY_TO as string | undefined) || 'elvisfregnlgltd@gmail.com';
  const from = (import.meta.env.ENQUIRY_FROM as string | undefined) || 'Elvisfreg website <onboarding@resend.dev>';
  const apiKey = import.meta.env.RESEND_API_KEY as string | undefined;

  const text = `${d.email} asked for insights and company updates from the website.`;

  if (!apiKey) {
    console.log('[updates] RESEND_API_KEY not set; would send:\n' + text);
    return respond(request, true, 200);
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({ from, to, replyTo: d.email, subject: `Updates sign-up: ${d.email}`, text });
    resend.emails
      .send({
        from,
        to: d.email,
        subject: "You're on the list",
        text: "Thank you. We'll write when there is something worth reading, and you can leave at any time by replying to say so.\n\nElvisfreg Nigeria Limited\n+234 706 998 6848",
      })
      .catch(() => {});
    return respond(request, true, 200);
  } catch (err) {
    console.error('[updates] send failed', err);
    return respond(request, false, 502, 'That did not send. Try again, or email us.');
  }
};
