/**
 * apply-config.js
 * Lit window.CLIENT (défini dans client.config.js) et injecte
 * les données dans la page au chargement du DOM.
 */

(function () {
  const C = window.CLIENT;
  if (!C) return;

  /* ── Helpers ─────────────────────────────────────────── */
  function set(sel, val, attr) {
    document.querySelectorAll(sel).forEach(el => {
      if (attr) el.setAttribute(attr, val);
      else      el.innerHTML = val;
    });
  }
  function setAll(sel, val, attr) { set(sel, val, attr); }

  /* ── Couleurs CSS ────────────────────────────────────── */
  const root = document.documentElement;
  root.style.setProperty('--color-primary', C.couleurs.primary);
  root.style.setProperty('--color-accent',  C.couleurs.accent);
  root.style.setProperty('--color-cream',   C.couleurs.cream);

  /* ── Nom & identité ─────────────────────────────────── */
  set('[data-c="nom"]',      C.nom);
  set('[data-c="slogan"]',   C.slogan);
  set('[data-c="desc"]',     C.description);

  /* ── Contact ────────────────────────────────────────── */
  set('[data-c="tel"]',      C.telephoneAff);
  set('[data-c="email"]',    C.email);
  set('[data-c="adresse"]',  C.adresse);
  set('[data-c="zone"]',     C.zoneHero);
  set('[data-c="dept"]',     C.departement);
  document.querySelectorAll('[data-c="tel-link"]').forEach(el => {
    el.setAttribute('href', 'tel:' + C.telephone);
  });
  document.querySelectorAll('[data-c="email-link"]').forEach(el => {
    el.setAttribute('href', 'mailto:' + C.email);
  });

  /* ── Réseaux sociaux ─────────────────────────────────── */
  const rs = C.reseaux;
  set('[data-c="rs-facebook"]',  rs.facebook,  'href');
  set('[data-c="rs-instagram"]', rs.instagram, 'href');
  set('[data-c="rs-tiktok"]',    rs.tiktok,    'href');
  set('[data-c="rs-linkedin"]',  rs.linkedin,  'href');
  set('[data-c="rs-youtube"]',   rs.youtube,   'href');

  /* ── Stats chiffres ─────────────────────────────────── */
  C.stats.forEach((s, i) => {
    set(`[data-c="stat-val-${i}"]`,   s.valeur);
    set(`[data-c="stat-label-${i}"]`, s.label);
  });

  /* ── Copyright ──────────────────────────────────────── */
  set('[data-c="annee"]', C.annee);
  set('[data-c="copyright"]', `&copy; ${C.annee} ${C.nom} — Tous droits réservés.`);

  /* ── Communes ───────────────────────────────────────── */
  const communesEl = document.querySelector('[data-c="communes"]');
  if (communesEl) {
    communesEl.innerHTML = C.communes.map(c =>
      `<span class="inline-flex items-center px-3 py-1 rounded-full border border-[#e5e2dc] bg-white text-sm text-gray-600">${c}</span>`
    ).join('');
  }

  /* ── Horaires ───────────────────────────────────────── */
  const horairesEl = document.querySelector('[data-c="horaires"]');
  if (horairesEl) {
    horairesEl.innerHTML = C.horaires.map(h => `
      <div class="flex items-center justify-between py-2 border-b border-[#e5e2dc] last:border-0">
        <span class="text-gray-500 text-sm">${h.jours}</span>
        <span class="font-semibold text-sm ${h.heures === 'Sur appel' ? 'text-accent-500' : 'text-dark'}">${h.heures}</span>
      </div>`
    ).join('');
  }

  /* ── Google Maps ─────────────────────────────────────── */
  const mapIframe = document.querySelector('[data-c="maps"]');
  if (mapIframe) mapIframe.setAttribute('src', C.mapsEmbed);

  /* ── Titre de page ───────────────────────────────────── */
  document.title = `${C.nom} | ${C.slogan} — ${C.departement}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content',
    `${C.nom} — Votre ${C.slogan.toLowerCase()} de confiance dans l'${C.departement}. Intervention rapide, devis gratuit. Appelez le ${C.telephoneAff}.`
  );

})();
