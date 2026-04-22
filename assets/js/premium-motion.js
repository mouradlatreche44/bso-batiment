/* ============================================================
   BSO Bâtiment — Premium Motion Pack
   GSAP · ScrollTrigger · Lenis · Magnetic · Cursor · Tilt
============================================================ */
(function () {
  'use strict';

  /* ── Respect reduced-motion ── */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  /* ── 1. Lenis smooth scroll ── */
  if (window.Lenis) {
    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    window.__lenis = lenis;

    // Anchor links cooperate with Lenis
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('href');
        if (target && target.length > 1) {
          const el = document.querySelector(target);
          if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -90 }); }
        }
      });
    });
  }

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

  /* ── 5. Custom cursor follower (desktop only) ── */
  if (window.matchMedia('(pointer: fine)').matches && window.innerWidth > 900) {
    const dot = document.createElement('div');
    dot.id = 'bso-cursor';
    dot.innerHTML = '<span></span>';
    document.body.appendChild(dot);
    const style = document.createElement('style');
    style.textContent = `
      #bso-cursor{position:fixed;top:0;left:0;width:36px;height:36px;border:1.5px solid rgba(217,119,6,.45);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:difference;transform:translate(-50%,-50%);transition:width .35s cubic-bezier(.32,.72,0,1),height .35s cubic-bezier(.32,.72,0,1),background .25s ease,border-color .25s ease}
      #bso-cursor span{position:absolute;top:50%;left:50%;width:5px;height:5px;background:#d97706;border-radius:50%;transform:translate(-50%,-50%);transition:transform .35s cubic-bezier(.32,.72,0,1)}
      #bso-cursor.is-hover{width:62px;height:62px;background:rgba(217,119,6,.12);border-color:rgba(217,119,6,.85)}
      #bso-cursor.is-hover span{transform:translate(-50%,-50%) scale(1.6)}
      @media (max-width:900px){#bso-cursor{display:none}}
      a, button, .service-card, .process-card, .review-card, .atout-card, [data-cursor]{cursor:none}
    `;
    document.head.appendChild(style);
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    function tick() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    }
    tick();
    document.querySelectorAll('a, button, .service-card, .process-card, .review-card, .atout-card').forEach((el) => {
      el.addEventListener('mouseenter', () => dot.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => dot.classList.remove('is-hover'));
    });
  }

  /* ── 6. Marquee speed-up on hover ── */
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
