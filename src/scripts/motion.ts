/**
 * Motion layer. GSAP + ScrollTrigger for scroll-linked work, Lenis for smooth
 * scrolling. Everything here is additive: with JavaScript off, or with
 * prefers-reduced-motion, the page is complete and static.
 *
 * Hooks in markup:
 *   [data-reveal]            rise-and-fade in once when scrolled to (CSS hides it only when html.has-motion)
 *   [data-split]             headline split into words that rise in on load (once per session)
 *   [data-count="90"]        number counts up from 0 when scrolled to
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;

function startLenis() {
  if (lenis || reduced()) return;
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.documentElement.classList.add('has-lenis');
}

function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return Array.from(el.querySelectorAll<HTMLElement>('.w'));
  const words = (el.textContent || '').trim().split(/\s+/);
  el.textContent = '';
  const spans = words.map((w, i) => {
    const wrap = document.createElement('span');
    wrap.className = 'wm';
    const inner = document.createElement('span');
    inner.className = 'w';
    inner.textContent = w + (i < words.length - 1 ? ' ' : '');
    wrap.appendChild(inner);
    el.appendChild(wrap);
    return inner;
  });
  el.dataset.splitDone = '1';
  return spans;
}

function init() {
  ctx?.revert();
  ctx = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (reduced()) {
    document.documentElement.classList.add('no-motion');
    document.documentElement.classList.remove('has-motion');
    return;
  }
  document.documentElement.classList.add('has-motion');
  startLenis();

  ctx = gsap.context(() => {
    // --- Intro: headline words + arc seal, once per session -------------------
    const intro = document.querySelector<HTMLElement>('[data-split]');
    if (intro) {
      let played = false;
      try { played = sessionStorage.getItem('ef-intro') === '1'; } catch {}
      // The module loads after `load`; on a slow connection the headline has been
      // readable for a while, and re-animating it would read as a glitch — unless the
      // preloader is still covering the page, in which case nothing has been seen yet.
      const preloading = document.documentElement.classList.contains('is-preloading');
      if (performance.now() > 2500 && !preloading) played = true;
      const words = splitWords(intro);
      if (!played) {
        const run = () => gsap.fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.045, delay: 0.1 });
        if (preloading) { gsap.set(words, { yPercent: 110 }); document.addEventListener('ef:preloaded', run, { once: true }); }
        else run();
        try { sessionStorage.setItem('ef-intro', '1'); } catch {}
      }
    }

    // --- Reveals ---------------------------------------------------------------
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      // Anything already on screen when the layer arrives is simply shown.
      if (el.getBoundingClientRect().top < window.innerHeight) { gsap.set(el, { opacity: 1, y: 0 }); return; }
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    // Groups: children rise one after another.
    gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
      const items = Array.from(group.children) as HTMLElement[];
      if (!items.length) return;
      if (group.getBoundingClientRect().top < window.innerHeight) { gsap.set(items, { opacity: 1, y: 0 }); return; }
      gsap.to(items, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.07,
        scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      });
    });

    // --- Header CTA yields to the hero's own button ------------------------------
    const hero = document.querySelector<HTMLElement>('.hero');
    const headerCta = document.querySelector<HTMLElement>('[data-header-cta]');
    if (hero && headerCta) {
      headerCta.classList.add('is-hidden');
      ScrollTrigger.create({
        trigger: hero, start: 'bottom 96px',
        onEnter: () => headerCta.classList.remove('is-hidden'),
        onLeaveBack: () => headerCta.classList.add('is-hidden'),
      });
    }

    // --- Counters ---------------------------------------------------------------
    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const to = parseFloat(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      const state = { v: 0 };
      gsap.to(state, {
        v: to, duration: 1.4, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => { el.textContent = Math.round(state.v) + suffix; },
      });
    });
  });

  ScrollTrigger.refresh();
}

document.addEventListener('astro:page-load', init);
// Loaded after `load`, so the initial astro:page-load has already fired.
if (document.readyState !== 'loading') init();
document.addEventListener('astro:before-swap', () => {
  ctx?.revert();
  ctx = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
document.addEventListener('astro:after-swap', () => { lenis?.scrollTo(0, { immediate: true }); });
