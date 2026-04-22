/**
 * ============================================================
 *  FICHIER DE CONFIGURATION CLIENT — BSO BÂTIMENT
 * ============================================================
 */

window.CLIENT = {

  // ── IDENTITÉ ─────────────────────────────────────────────
  nom:          "BSO Bâtiment",
  slogan:       "Maçonnerie · ITE · Rénovation",
  description:  "Construire, rénover, isoler votre habitat dans le Vaucluse depuis 2018.",

  // ── CONTACT ──────────────────────────────────────────────
  telephone:      "0773292452",
  telephoneAff:   "07 73 29 24 52",
  email:          "bso.construction@gmx.com",
  adresse:        "Vaucluse (84)",
  departement:    "Vaucluse (84)",

  // ── ZONE D'INTERVENTION ──────────────────────────────────
  zoneHero:       "Intervention dans tout le Vaucluse (84)",
  communes: [
    "Avignon", "Carpentras", "Orange", "Cavaillon", "L'Isle-sur-la-Sorgue",
    "Pertuis", "Apt", "Sorgues", "Le Pontet", "Vedène",
    "Monteux", "Bollène", "Vaison-la-Romaine", "Mazan", "Châteauneuf-de-Gadagne"
  ],
  departementCode: "Vaucluse (84)",

  // ── DISPONIBILITÉ ────────────────────────────────────────
  horaires: [
    { jours: "Lundi — Vendredi", heures: "8h — 18h" },
    { jours: "Samedi",           heures: "Sur rendez-vous" },
    { jours: "Devis gratuit",    heures: "Sous 48h" },
  ],

  // ── COULEURS ─────────────────────────────────────────────
  couleurs: {
    primary:  "#0a1f44",   // Bleu marine profond
    accent:   "#d97706",   // Orange terre
    cream:    "#fdfbf7",
  },

  // ── RÉSEAUX SOCIAUX ──────────────────────────────────────
  reseaux: {
    facebook:  "#",
    instagram: "#",
    tiktok:    "#",
    linkedin:  "#",
    youtube:   "#",
  },

  // ── MARQUES / PARTENAIRES ────────────────────────────────
  marques: ["Weber", "Knauf", "Sto", "Parexlanko", "Rockwool"],

  // ── CERTIFICATIONS ───────────────────────────────────────
  certifications: ["Garantie Décennale", "RGE / Qualibat", "Devis gratuit", "Intervention rapide"],
  depuis: "2018",

  // ── SERVICES PRINCIPAUX ──────────────────────────────────
  services: [
    {
      id:     "maconnerie",
      titre:  "Gros œuvre & Second œuvre",
      label:  "Maçonnerie générale",
      soustitre: "Bâtir solide, durable, garanti",
      description: "Fondations, élévation, ouvertures, extensions — nous maîtrisons l'ensemble du gros œuvre pour des constructions pérennes.",
      image:  "/assets/img/maconnerie.jpeg",
      points: [
        "Fondations & dallages béton armé",
        "Élévation de murs (parpaing, brique, pierre)",
        "Création d'ouvertures (portes, fenêtres, baies)",
        "Extensions et agrandissements",
        "Ravalement de façade",
      ],
    },
    {
      id:     "isolation-thermique",
      titre:  "ITE — Isolation Thermique Extérieure",
      label:  "Isolation thermique",
      soustitre: "Isoler par l'extérieur, économiser durablement",
      description: "ITE polystyrène, laine de roche ou biosourcée, bardage rapporté — éligible MaPrimeRénov' et CEE.",
      image:  "/assets/img/isolation.jpeg",
      points: [
        "ITE polystyrène expansé (PSE)",
        "ITE laine de roche (haute performance)",
        "ITE biosourcée (fibre de bois, liège)",
        "Bardage rapporté ventilé",
        "Montage dossier MaPrimeRénov' / CEE",
        "Audit thermique préalable",
      ],
    },
    {
      id:     "renovation",
      titre:  "Rénovation complète",
      label:  "Rénovation",
      soustitre: "De la dépose à la finition, un seul interlocuteur",
      description: "Cuisine, salle de bain, sols, plâtrerie, peinture — nous coordonnons tous les corps de métier pour votre rénovation clé en main.",
      image:  "/assets/img/renovation.jpeg",
      points: [
        "Rénovation salle de bain complète",
        "Rénovation cuisine clé en main",
        "Pose de sols (carrelage, parquet, vinyle)",
        "Plâtrerie & peinture",
        "Ouvertures & cloisonnement",
      ],
    },
  ],

  // ── STATISTIQUES ─────────────────────────────────────────
  stats: [
    { valeur: "2018",   label: "année de création" },
    { valeur: "10 ans", label: "garantie décennale" },
    { valeur: "RGE",    label: "Qualibat certifié" },
    { valeur: "48h",    label: "devis gratuit" },
  ],

  // ── AVIS CLIENTS ─────────────────────────────────────────
  avis: [
    {
      nom:    "Sophie D.",
      ville:  "Paris",
      note:   5,
      date:   "Il y a 1 mois",
      texte:  "Travail soigné et équipe à l'écoute. ITE réalisée en temps et en heure, façade impeccable. Je recommande sans réserve.",
      avatar: "SD",
    },
    {
      nom:    "Jean-Claude M.",
      ville:  "Avignon",
      note:   5,
      date:   "Il y a 2 mois",
      texte:  "Rénovation complète de notre maison ancienne. Sérieux, ponctuels, finitions au top. Très satisfait du résultat.",
      avatar: "JM",
    },
    {
      nom:    "Claire L.",
      ville:  "Carpentras",
      note:   5,
      date:   "Il y a 3 semaines",
      texte:  "Extension maçonnée parfaitement intégrée. Conseils avisés, devis respecté à l'euro près. Une vraie équipe de pros.",
      avatar: "CL",
    },
  ],

  // ── GOOGLE MAPS / OSM ────────────────────────────────────
  mapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=4.30,43.65,5.50,44.30&layer=mapnik&marker=43.9493,4.8055",

  // ── COPYRIGHT ────────────────────────────────────────────
  annee: "2026",
};
