// Pictogrammes artisan dessinés main — style stroke, trait organique
// Tous en viewBox 64x64, trait courant, currentColor

window.BSOIcons = {
  // Truelle de maçon
  trowel: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 52 L28 36 L42 22 L50 14"/>
    <path d="M6 58 L14 50"/>
    <path d="M18 46 L10 54 L6 58"/>
    <path d="M44 24 Q48 18 54 16 L58 12 Q58 8 54 6 Q48 4 42 8 L38 12 Q36 16 40 20 L44 24 Z" fill="currentColor" fill-opacity="0.1"/>
    <path d="M50 14 L40 24"/>
  </svg>`,

  // Mur de briques
  brick: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="14" width="16" height="10" rx="1"/>
    <rect x="24" y="14" width="16" height="10" rx="1"/>
    <rect x="42" y="14" width="16" height="10" rx="1"/>
    <rect x="14" y="26" width="16" height="10" rx="1"/>
    <rect x="32" y="26" width="16" height="10" rx="1"/>
    <rect x="6" y="38" width="16" height="10" rx="1"/>
    <rect x="24" y="38" width="16" height="10" rx="1"/>
    <rect x="42" y="38" width="16" height="10" rx="1"/>
    <path d="M4 50 L60 50" stroke-width="2.5"/>
  </svg>`,

  // Maison avec cheminée (gros œuvre)
  house: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 30 L32 10 L56 30"/>
    <path d="M12 28 L12 54 L52 54 L52 28"/>
    <rect x="26" y="36" width="12" height="18" rx="1"/>
    <rect x="16" y="36" width="7" height="7"/>
    <rect x="41" y="36" width="7" height="7"/>
    <path d="M44 14 L44 22 L50 22 L50 20"/>
    <circle cx="33" cy="45" r="0.8" fill="currentColor"/>
  </svg>`,

  // Marteau + clé croisés (outils)
  tools: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 12 L52 22 L48 26 L38 16 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M38 16 L12 42"/>
    <path d="M8 48 L14 54 L18 50 L12 44 Z" fill="currentColor" fill-opacity="0.15"/>
    <path d="M12 42 L10 44 L10 46 L12 48 L14 50"/>
    <circle cx="50" cy="46" r="6"/>
    <path d="M46 42 L38 50 L36 48 L44 40"/>
    <path d="M36 48 L30 54"/>
  </svg>`,

  // Niveau à bulle
  level: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="24" width="56" height="16" rx="2"/>
    <rect x="26" y="28" width="12" height="8" rx="2" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="30" cy="32" r="1.2" fill="currentColor"/>
    <path d="M12 28 L12 36 M18 28 L18 36 M44 28 L44 36 M50 28 L50 36"/>
  </svg>`,

  // Isolation / thermomètre-maison
  insulation: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 28 L32 12 L54 28 L54 54 L10 54 Z"/>
    <path d="M16 34 L16 48 M22 34 L22 48 M28 34 L28 48 M34 34 L34 48 M40 34 L40 48 M46 34 L46 48"/>
    <path d="M16 40 L46 40" stroke-dasharray="2 2"/>
    <circle cx="48" cy="18" r="6" fill="currentColor" fill-opacity="0.15"/>
    <path d="M48 14 L48 18 L51 20"/>
  </svg>`,

  // Pinceau / ravalement
  brush: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 10 L54 26 L46 34 L30 18 Z" fill="currentColor" fill-opacity="0.1"/>
    <path d="M30 18 L14 34 Q10 38 12 42 Q14 46 18 44 Q22 42 22 38 L26 34"/>
    <path d="M8 48 Q14 50 18 44"/>
    <path d="M46 34 L52 40"/>
  </svg>`,

  // Casque de chantier
  helmet: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 44 Q8 28 20 22 L20 18 Q20 14 24 14 L40 14 Q44 14 44 18 L44 22 Q56 28 56 44"/>
    <path d="M4 44 L60 44 L60 50 L4 50 Z"/>
    <path d="M32 14 L32 26"/>
    <path d="M24 18 L24 26 M40 18 L40 26"/>
  </svg>`,

  // Bouclier coche (décennale)
  shield: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6 L54 14 L54 32 Q54 48 32 58 Q10 48 10 32 L10 14 Z" fill="currentColor" fill-opacity="0.08"/>
    <path d="M22 32 L29 39 L44 24"/>
  </svg>`,

  // Médaille RGE
  medal: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6 L24 22 M44 6 L40 22"/>
    <circle cx="32" cy="38" r="16" fill="currentColor" fill-opacity="0.1"/>
    <path d="M26 36 L30 40 L38 32"/>
    <path d="M16 6 L24 6 L20 18 M48 6 L40 6 L44 18"/>
  </svg>`,

  // Horloge 48h
  clock: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="34" r="22" fill="currentColor" fill-opacity="0.08"/>
    <path d="M32 22 L32 34 L42 38"/>
    <path d="M28 8 L36 8 M30 4 L34 4"/>
    <path d="M32 8 L32 12"/>
  </svg>`,

  // Euro / devis
  euro: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" fill="currentColor" fill-opacity="0.08"/>
    <path d="M42 22 Q36 18 30 22 Q24 26 24 32 Q24 38 30 42 Q36 46 42 42"/>
    <path d="M20 28 L36 28 M20 34 L34 34"/>
  </svg>`,

  // Téléphone
  phone: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8 L22 8 Q24 8 25 10 L28 20 Q28 22 26 23 L22 26 Q24 34 32 40 Q40 47 48 49 L51 45 Q52 43 54 43 L64 46 Q66 47 66 49 L66 57 Q66 60 63 60 Q32 58 10 35 Q8 28 8 14 Q8 8 14 8 Z" transform="scale(0.85) translate(6 4)"/>
  </svg>`,

  // Flèche
  arrow: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 32 L52 32 M38 18 L52 32 L38 46"/>
  </svg>`,

  // Email
  mail: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="14" width="52" height="36" rx="3"/>
    <path d="M6 18 L32 36 L58 18"/>
  </svg>`,

  // Location pin
  pin: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58 Q52 36 52 24 Q52 12 32 12 Q12 12 12 24 Q12 36 32 58 Z" fill="currentColor" fill-opacity="0.1"/>
    <circle cx="32" cy="24" r="6"/>
  </svg>`,

  // Quote
  quote: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 40 L16 28 Q16 20 24 18 L22 24 Q20 26 20 30 L28 30 L28 40 Z" fill="currentColor" fill-opacity="0.1"/>
    <path d="M36 40 L36 28 Q36 20 44 18 L42 24 Q40 26 40 30 L48 30 L48 40 Z" fill="currentColor" fill-opacity="0.1"/>
  </svg>`,

  // Étoile
  star: `<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6 L39 24 L58 25 L43 37 L48 56 L32 46 L16 56 L21 37 L6 25 L25 24 Z"/>
  </svg>`,

  // Check
  check: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 32 L27 45 L50 20"/>
  </svg>`,

  // Document
  doc: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4 L42 4 L52 14 L52 60 L14 60 Z" fill="currentColor" fill-opacity="0.08"/>
    <path d="M42 4 L42 14 L52 14"/>
    <path d="M20 24 L46 24 M20 32 L46 32 M20 40 L38 40"/>
  </svg>`,

  // Calendrier / planning
  calendar: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="48" rx="3" fill="currentColor" fill-opacity="0.08"/>
    <path d="M8 24 L56 24"/>
    <path d="M20 8 L20 18 M44 8 L44 18"/>
    <circle cx="22" cy="36" r="1.5" fill="currentColor"/>
    <circle cx="32" cy="36" r="1.5" fill="currentColor"/>
    <circle cx="42" cy="36" r="1.5" fill="currentColor"/>
    <circle cx="22" cy="46" r="1.5" fill="currentColor"/>
    <circle cx="32" cy="46" r="1.5" fill="currentColor"/>
  </svg>`,

  // Œil / visite
  eye: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 32 Q16 14 32 14 Q48 14 60 32 Q48 50 32 50 Q16 50 4 32 Z" fill="currentColor" fill-opacity="0.08"/>
    <circle cx="32" cy="32" r="8"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
  </svg>`,

  // Poignée de main
  handshake: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28 L20 28 L26 34 L36 30 L44 34 L60 28"/>
    <path d="M20 28 L28 36 L36 36 L40 40"/>
    <path d="M4 36 L10 36 L14 40 L14 48 L10 48 L4 44"/>
    <path d="M60 36 L54 36 L50 40 L50 48 L54 48 L60 44"/>
    <path d="M24 22 L32 18 L40 22"/>
  </svg>`,

  // Menu
  menu: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20 L54 20 M10 32 L54 32 M10 44 L54 44"/>
  </svg>`,

  // Chevron down
  chevron: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 24 L32 40 L48 24"/>
  </svg>`,

  // Plus
  plus: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 14 L32 50 M14 32 L50 32"/>
  </svg>`,

  // Soleil (Vaucluse)
  sun: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="10" fill="currentColor" fill-opacity="0.15"/>
    <path d="M32 6 L32 14 M32 50 L32 58 M6 32 L14 32 M50 32 L58 32 M13 13 L19 19 M45 45 L51 51 M13 51 L19 45 M45 19 L51 13"/>
  </svg>`
};

// Helper pour injecter un icon
window.bsoIcon = function(name, cls) {
  const svg = window.BSOIcons[name];
  if (!svg) return '';
  return svg.replace('<svg ', `<svg class="${cls || ''}" `);
};
