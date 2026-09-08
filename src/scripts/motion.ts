/**
 * Motion layer. GSAP + ScrollTrigger for scroll-linked work, Lenis for smooth
 * scrolling. Everything here is additive: with JavaScript off, or with
 * prefers-reduced-motion, the page is complete and static.
 *
 * Hooks in markup:
 *   [data-reveal]            rise-and-fade in once when scrolled to (CSS hides it only when html.has-motion)
 *   [data-split]             headline split into words that rise in on load (once per session)
 *   [data-count="90"]        number counts up from 0 when scrolled to
 *   [data-lifecycle]         home lifecycle section: sticky arc + stacked stage blocks [data-stage-block]
 *   [data-section="01"]      page sections that drive the header arc's progress
 *   [data-header-arc]        the header mark
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
      // readable for a while, and re-animating it would read as a glitch.
      if (performance.now() > 2500) played = true;
      const words = splitWords(intro);
      if (!played) {
        gsap.fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.045, delay: 0.1 });
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

    // --- Lifecycle: stacked stage blocks drive the sticky arc ------------------
    const life = document.querySelector<HTMLElement>('[data-lifecycle]');
    if (life) {
      const arc = life.querySelector<HTMLElement>('.arc');
      const titles = Array.from(life.querySelectorAll<HTMLElement>('[data-stage-title]'));
      const blocks = Array.from(life.querySelectorAll<HTMLElement>('[data-stage-block]'));
      const setStage = (id: string) => {
        if (arc) arc.dataset.active = id;
        titles.forEach((t) => t.classList.toggle('is-active', t.dataset.stageTitle === id));
        blocks.forEach((b) => b.classList.toggle('is-active', b.dataset.stageBlock === id));
      };
      blocks.forEach((block) => {
        ScrollTrigger.create({
          trigger: block, start: 'top 55%', end: 'bottom 55%',
          onEnter: () => setStage(block.dataset.stageBlock!),
          onEnterBack: () => setStage(block.dataset.stageBlock!),
        });
      });
      setStage(blocks[0]?.dataset.stageBlock || '01');
    }

    // --- Header arc as page progress ----------------------------------------------
    const headerArc = document.querySelector<HTMLElement>('[data-header-arc]');
    const sections = gsap.utils.toArray<HTMLElement>('[data-section]');
    if (headerArc && sections.length) {
      headerArc.classList.add('is-progress');
      headerArc.dataset.progress = '00';
      sections.forEach((s, i) => {
        const prev = i === 0 ? '00' : sections[i - 1].dataset.section!;
        ScrollTrigger.create({
          trigger: s, start: 'top 70%',
          onEnter: () => { headerArc.dataset.progress = s.dataset.section; },
          onLeaveBack: () => { headerArc.dataset.progress = prev; },
        });
      });
    }
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
