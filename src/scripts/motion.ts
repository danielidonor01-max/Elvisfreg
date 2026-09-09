/**
 * Motion layer. GSAP + ScrollTrigger for scroll-linked work, Lenis for smooth
 * scrolling. Everything here is additive: with JavaScript off, or with
 * prefers-reduced-motion, the page is complete and static.
 *
 * Hooks in markup:
 *   [data-reveal]            rise-and-fade in once when scrolled to (CSS hides it only when html.has-motion)
 *   [data-reveal-group]      children rise one after another
 *   [data-split]             the hero headline: words rise in on load (once per session)
 *   h2.h2                    section titles: lines rise out of a mask as they arrive
 *   .hero                    photograph and text drift at different rates with the scroll
 *   .photo-parallax          a card photograph drifts inside its frame with the scroll
 *   [data-count="90"]        number counts up from 0 when scrolled to
 *   [data-gauge]             the needle sweeps to its reading as the section arrives, until touched
 *   .cv-auto                 sections rendered on approach: their hooks are wired when they render
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;
let splits: SplitText[] = [];

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

const onScreen = (el: Element) => el.getBoundingClientRect().top < window.innerHeight;
const deferred = (el: Element) => el.closest('.cv-auto') !== null;

/** Wires the scroll hooks under `root`. `all` includes elements inside .cv-auto sections. */
function wire(root: ParentNode, all: boolean) {
  const pick = <T extends Element>(sel: string) => gsap.utils.toArray<T>(sel, root).filter((el) => all || !deferred(el));

  // --- Reveals ---------------------------------------------------------------
  pick<HTMLElement>('[data-reveal]').forEach((el) => {
    // Anything already on screen when the layer arrives is simply shown.
    if (onScreen(el)) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  pick<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = Array.from(group.children) as HTMLElement[];
    if (!items.length) return;
    if (onScreen(group)) { gsap.set(items, { opacity: 1, y: 0 }); return; }
    gsap.to(items, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.07, scrollTrigger: { trigger: group, start: 'top 86%', once: true } });
  });

  // --- Titles: lines rise out of a mask ------------------------------------------
  pick<HTMLElement>('h2.h2').forEach((h) => {
    if (h.hasAttribute('data-split') || h.offsetParent === null || onScreen(h)) return;
    splits.push(SplitText.create(h, {
      type: 'lines', mask: 'lines', autoSplit: true, linesClass: 'ln',
      onSplit: (self) => gsap.from(self.lines, { yPercent: 105, duration: 0.85, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: h, start: 'top 88%', once: true } }),
    }));
  });

  // --- Photographs drift inside their frames --------------------------------------
  pick<HTMLElement>('.photo-parallax').forEach((fig) => {
    const pic = fig.querySelector('picture');
    if (!pic) return;
    gsap.fromTo(pic, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // --- Counters ---------------------------------------------------------------
  pick<HTMLElement>('[data-count]').forEach((el) => {
    const to = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const state = { v: 0 };
    gsap.to(state, {
      v: to, duration: 1.4, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => { el.textContent = Math.round(state.v) + suffix; },
    });
  });
}

function init() {
  ctx?.revert();
  ctx = null;
  splits.forEach((s) => s.revert());
  splits = [];
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (reduced()) {
    document.documentElement.classList.add('no-motion');
    document.documentElement.classList.remove('has-motion');
    return;
  }
  document.documentElement.classList.add('has-motion');
  startLenis();

  ctx = gsap.context(() => {
    // --- Intro: headline words, once per session ----------------------------------
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

    // --- Hero: photograph and text at different rates ---------------------------------
    const hero = document.querySelector<HTMLElement>('.hero');
    if (hero) {
      const photo = hero.querySelector<HTMLElement>('.photo');
      const text = hero.querySelector<HTMLElement>('.hero-text');
      const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
      if (photo) gsap.to(photo, { yPercent: 9, ease: 'none', scrollTrigger: st });
      if (text) gsap.to(text, { y: -56, opacity: 0.45, ease: 'none', scrollTrigger: st });
    }

    // --- Gauge: the needle sweeps to its reading as the section arrives ---------------
    const gauge = document.querySelector<HTMLElement>('[data-gauge]');
    const range = gauge?.querySelector<HTMLInputElement>('[data-range]');
    if (gauge && range) {
      let taken = false;
      gauge.addEventListener('pointerdown', () => { taken = true; }, { once: true });
      range.addEventListener('input', (e) => { if (e.isTrusted) taken = true; });
      ScrollTrigger.create({
        trigger: gauge, start: 'top 85%', end: 'top 30%',
        onUpdate: (self) => {
          if (taken) return;
          range.value = String(Math.round(self.progress * 75));
          range.dispatchEvent(new Event('input'));
        },
      });
    }

    wire(document, false);

    // Sections rendered on approach (content-visibility: auto, relevant within half a
    // viewport): wire their hooks once they are inside that band and have a layout.
    document.querySelectorAll<HTMLElement>('.cv-auto').forEach((section) => {
      const io = new IntersectionObserver((entries) => {
        if (!entries.some((en) => en.isIntersecting)) return;
        io.disconnect();
        requestAnimationFrame(() => { ctx?.add(() => wire(section, true)); ScrollTrigger.refresh(); });
      }, { rootMargin: '35% 0px' });
      io.observe(section);
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
  splits.forEach((s) => s.revert());
  splits = [];
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
document.addEventListener('astro:after-swap', () => { lenis?.scrollTo(0, { immediate: true }); });
