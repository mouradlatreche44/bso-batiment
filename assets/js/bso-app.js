/* BSO Bâtiment — interactions globales */
(function() {
  const map = {
    'ic-pin1': 'pin', 'ic-ph1': 'phone', 'ic-m1': 'mail', 'ic-ph2': 'phone', 'ic-ph3': 'phone',
    'ic-doc1': 'doc', 'ic-sh1': 'shield', 'ic-md1': 'medal', 'ic-ck1': 'check',
    'ic-sh2': 'shield', 'ic-md2': 'medal', 'ic-eu1': 'euro', 'ic-cl1': 'clock',
    'ic-s1': 'trowel', 'ic-s2': 'insulation', 'ic-s3': 'house',
    'ic-a1': 'arrow', 'ic-a2': 'arrow', 'ic-a3': 'arrow',
    'ic-st1': 'phone', 'ic-st2': 'eye', 'ic-st3': 'doc', 'ic-st4': 'helmet',
    'ic-af1': 'handshake', 'ic-af2': 'check', 'ic-af3': 'brick', 'ic-af4': 'tools', 'ic-af5': 'arrow',
    'ic-stt1': 'calendar', 'ic-stt2': 'shield', 'ic-stt3': 'house', 'ic-stt4': 'clock',
    'ic-ct1': 'shield', 'ic-ct2': 'medal', 'ic-ct3': 'euro', 'ic-ct4': 'check', 'ic-ct5': 'doc',
    'ic-p1': 'pin','ic-p2': 'pin','ic-p3': 'pin','ic-p4': 'pin','ic-p5': 'pin','ic-p6': 'pin',
    'ic-p7': 'pin','ic-p8': 'pin','ic-p9': 'pin','ic-p10': 'pin','ic-p11': 'pin','ic-p12': 'pin',
    'fq1': 'plus','fq2': 'plus','fq3': 'plus','fq4': 'plus','fq5': 'plus','fq6': 'plus',
    'ic-cc1': 'phone', 'ic-cc2': 'mail', 'ic-cc3': 'pin', 'ic-sb1': 'arrow', 'ic-ftel': 'phone',
    'ic-burger': 'menu', 'ic-close': 'plus',
    'st1': 'star','st1b': 'star','st1c': 'star','st1d': 'star','st1e': 'star',
    'st2': 'star','st2b': 'star','st2c': 'star','st2d': 'star','st2e': 'star',
    'st3': 'star','st3b': 'star','st3c': 'star','st3d': 'star','st3e': 'star',
  };
  Object.entries(map).forEach(([id, icon]) => {
    const el = document.getElementById(id);
    if (el && window.BSOIcons) el.innerHTML = window.BSOIcons[icon] || '';
  });
  const closeIcon = document.getElementById('ic-close');
  if (closeIcon && closeIcon.firstElementChild) closeIcon.firstElementChild.style.transform = 'rotate(45deg)';

  /* Reveal */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => io.observe(el));

  /* Nav scroll */
  const nav = document.getElementById('nav');
  if (nav) window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 20); });

  /* Counters */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target; const target = +el.dataset.count; const duration = 1800; const start = performance.now();
          const animate = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.floor(eased * target);
            if (t < 1) requestAnimationFrame(animate); else el.textContent = target;
          };
          requestAnimationFrame(animate); counterIO.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }

  /* Mobile drawer */
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.add('open'));
    if (drawerClose) drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
  }
})();
