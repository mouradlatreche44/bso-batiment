/* ============================================================
   BSO Bâtiment — Premium Motion Pack
   GSAP · ScrollTrigger · Lenis · Magnetic · Cursor · Tilt
============================================================ */
(function () {
  'use strict';

  /* ── Respect reduced-motion ── */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  /* ── 1. (Lenis disabled — using native scroll) ── */

  /* ── 2. GSAP + ScrollTrigger reveals ── */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Text headline split (manual, no plugin) — wrap each word in a span and fade-up
    document.querySelectorAll('[data-split]').forEach((el) => {
      const words = el.textContent.trim().split(/(\s+)/);
      el.innerHTML = words.map((w) => /\s/.test(w) ? w : `<span class="split-w" style="display:inline-block;will-change:transform,opacity">${w}</span>`).join('');
      gsap.from(el.querySelectorAll('.split-w'), {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    // Generic reveal upgrade — replaces the IntersectionObserver-based opacity transitions
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      const fromX = el.classList.contains('reveal-left') ? -50 : el.classList.contains('reveal-right') ? 50 : 0;
      const fromY = fromX === 0 ? 40 : 0;
      gsap.fromTo(el,
        { x: fromX, y: fromY, opacity: 0, filter: 'blur(6px)' },
        {
          x: 0, y: 0, opacity: 1, filter: 'blur(0px)',
          duration: 1.0, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });

    // Counter numbers
    document.querySelectorAll('.counter').forEach((el) => {
      const target = parseFloat(el.dataset.target || el.textContent) || 0;
      const suffix = el.dataset.suffix || '';
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target, duration: 1.8, ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString('fr-FR') + suffix; },
          });
        },
      });
    });

    // Parallax on hero image background
    document.querySelectorAll('section').forEach((sec) => {
      const img = sec.querySelector(':scope > .absolute.inset-0 > img, :scope > div.absolute.inset-0 > img');
      if (img && sec.offsetHeight > 400) {
        gsap.to(img, {
          yPercent: 12, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }
    });

    // Service cards — staggered scale-in
    const cards = document.querySelectorAll('.service-card, .process-card, .review-card, .atout-card');
    if (cards.length) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.9, ease: 'expo.out', stagger: 0.08,
          scrollTrigger: { trigger: cards[0].parentElement, start: 'top 80%' },
        }
      );
    }
  }

  /* ── 3. Magnetic buttons ── */
  document.querySelectorAll('.btn-primary, .btn-outline-light').forEach((btn) => {
    let raf = null;
    btn.style.willChange = 'transform';
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
    btn.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      btn.style.transform = '';
    });
  });

  /* ── 4. Tilt effect on cards (3D hover) ── */
  document.querySelectorAll('.service-card, .review-card, .process-card').forEach((card) => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.4s cubic-bezier(0.32,0.72,0,1)';
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ── 5. (Custom cursor disabled) ── */

  /* ── 6. Marquee pause on hover ── */
  document.querySelectorAll('.marquee-track').forEach((mq) => {
    mq.addEventListener('mouseenter', () => mq.style.animationPlayState = 'paused');
    mq.addEventListener('mouseleave', () => mq.style.animationPlayState = 'running');
  });

  /* ── 7. Page transition fade ── */
  const overlay = document.createElement('div');
  overlay.id = 'page-fade';
  overlay.style.cssText = 'position:fixed;inset:0;background:#0a1f44;z-index:9998;pointer-events:none;opacity:0;transition:opacity .55s cubic-bezier(.32,.72,0,1)';
  document.body.appendChild(overlay);
  document.querySelectorAll('a[href$=".html"]').forEach((a) => {
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      e.preventDefault();
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      setTimeout(() => { window.location.href = href; }, 480);
    });
  });
  window.addEventListener('pageshow', () => {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  });

})();
