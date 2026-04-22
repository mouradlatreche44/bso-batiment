/**
 * ============================================================
 *  FICHIER DE CONFIGURATION CLIENT — À MODIFIER PAR CLIENT
 * ============================================================
 *  Pour un nouveau client : dupliquer le repo GitHub, puis
 *  modifier UNIQUEMENT ce fichier + remplacer les images
 *  dans /assets/img/
 * ============================================================
 */

window.CLIENT = {

  // ── IDENTITÉ ─────────────────────────────────────────────
  nom:          "Dépannage 60",
  slogan:       "Plomberie & Électricité",
  description:  "Votre partenaire pour tous vos dépannages et travaux dans l'Oise.",

  // ── CONTACT ──────────────────────────────────────────────
  telephone:      "0761183322",
  telephoneAff:   "07 61 18 33 22",   // version affichée
  email:          "testebudget@gmail.com",
  adresse:        "Longueuil-Sainte-Marie, 60126",
  departement:    "Oise (60)",

  // ── ZONE D'INTERVENTION ──────────────────────────────────
  zoneHero:       "Intervention rapide dans tout l'Oise (60)",
  communes: [
    "Longueuil-Sainte-Marie", "Compiègne", "Creil", "Beauvais", "Senlis",
    "Chantilly", "Noyon", "Nogent-sur-Oise", "Clermont",
    "Crépy-en-Valois", "Pontpoint", "Verberie", "Lacroix-Saint-Ouen",
    "Chambly", "Lamorlaye", "Gouvieux", "Méru", "Margny-lès-Compiègne"
  ],
  departementCode: "Oise (60)",

  // ── DISPONIBILITÉ ────────────────────────────────────────
  horaires: [
    { jours: "Lundi — Vendredi",    heures: "7h — 20h" },
    { jours: "Samedi",              heures: "8h — 18h" },
    { jours: "Dimanche & Urgences", heures: "Sur appel" },
  ],

  // ── COULEURS ─────────────────────────────────────────────
  // Changez ici pour adapter l'identité visuelle du client
  couleurs: {
    primary:  "#1e3a5f",   // Bleu marine
    accent:   "#d97706",   // Ambre/orange
    cream:    "#fdfbf7",   // Fond crème
  },

  // ── RÉSEAUX SOCIAUX ──────────────────────────────────────
  // Mettez "#" si le client n'a pas le réseau
  reseaux: {
    facebook:  "#",
    instagram: "#",
    tiktok:    "#",
    linkedin:  "#",
    youtube:   "#",
  },

  // ── MARQUES / PARTENAIRES ────────────────────────────────
  marques: ["Atlantic", "Grohe", "Porcher"],

  // ── SERVICES PRINCIPAUX ──────────────────────────────────
  // Modifiez les titres et listes selon le métier du client
  services: [
    {
      id:     "plomberie",
      titre:  "Installation & Réparation",
      label:  "Plomberie",
      soustitre: "Installation & réparation",
      description: "De la fuite discrète au remplacement complet de votre réseau, nous maîtrisons chaque étape de la plomberie résidentielle.",
      image:  "/assets/img/plomberie-installation.jpeg",
      points: [
        "Recherche et réparation de fuites (apparentes et encastrées)",
        "Remplacement de robinetterie Grohe & Porcher",
        "Débouchage de canalisations et siphons",
        "Pose de sanitaires (WC, lavabo, douche, baignoire)",
        "Raccordement et remplacement de tuyauterie cuivre ou PER",
      ],
    },
    {
      id:     "electricite",
      titre:  "Mise aux normes & Câblage",
      label:  "Électricité",
      soustitre: "Mise aux normes & câblage",
      description: "Un tableau vétuste, des prises qui sautent, un éclairage défaillant ? Nous remettons votre installation aux normes en toute sécurité.",
      image:  "/assets/img/tableau-electrique.jpeg",
      points: [
        "Mise en conformité NF C 15-100 de votre tableau",
        "Remplacement de disjoncteurs et interrupteurs différentiels",
        "Installation de prises, interrupteurs et points lumineux",
        "Diagnostic de pannes et courts-circuits",
        "Câblage complet pour construction neuve ou rénovation",
      ],
    },
    {
      id:     "chauffage",
      titre:  "Chauffe-eau & Radiateurs",
      label:  "Chauffage",
      soustitre: "Chauffe-eau & chauffage",
      description: "Du remplacement d'un ballon d'eau chaude à l'entretien de vos radiateurs, nous vous guidons vers la solution la plus économique et durable.",
      image:  "/assets/img/chauffe-eau.jpeg",
      points: [
        "Installation de chauffe-eau Atlantic (électrique, thermodynamique)",
        "Remplacement de ballon d'eau chaude défectueux",
        "Purge et entretien de radiateurs",
        "Diagnostic de pannes de chauffage",
        "Conseil personnalisé selon votre consommation",
      ],
    },
  ],

  // ── STATISTIQUES (section chiffres) ──────────────────────
  stats: [
    { valeur: "820 000", label: "habitants desservis dans l'Oise" },
    { valeur: "<1h",     label: "délai d'intervention urgence" },
    { valeur: "100%",    label: "tarif fixe, sans surprise" },
    { valeur: "7j/7",    label: "disponibilité urgences" },
  ],

  // ── AVIS CLIENTS ─────────────────────────────────────────
  avis: [
    {
      nom:    "Sophie M.",
      ville:  "Compiègne",
      note:   5,
      date:   "Il y a 2 semaines",
      texte:  "Intervention rapide un dimanche matin pour une fuite sous évier. Tarif annoncé avant de commencer, travail propre. Je recommande !",
      avatar: "SM",
    },
    {
      nom:    "Jean-Pierre L.",
      ville:  "Creil",
      note:   5,
      date:   "Il y a 1 mois",
      texte:  "Remplacement de mon chauffe-eau en moins de 2h. Très professionnel, explications claires sur le matériel posé. Excellent rapport qualité-prix.",
      avatar: "JL",
    },
    {
      nom:    "Martine D.",
      ville:  "Senlis",
      note:   5,
      date:   "Il y a 3 semaines",
      texte:  "Tableau électrique entièrement revu aux normes. Travail soigné, aucune mauvaise surprise sur la facture. Très satisfaite.",
      avatar: "MD",
    },
    {
      nom:    "Thomas R.",
      ville:  "Chantilly",
      note:   4,
      date:   "Il y a 2 mois",
      texte:  "Rénovation complète de la salle de bain. Délais respectés, beau résultat. Je referai appel à eux sans hésiter.",
      avatar: "TR",
    },
    {
      nom:    "Françoise B.",
      ville:  "Beauvais",
      note:   5,
      date:   "Il y a 1 semaine",
      texte:  "Urgence un vendredi soir, arrivée en 45 minutes. Problème réglé rapidement. Rassurante et efficace.",
      avatar: "FB",
    },
  ],

  // ── GOOGLE MAPS ──────────────────────────────────────────
  // Remplacez l'URL embed par celle du client (Google Maps → Partager → Intégrer)
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84696.2!2d2.7!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5f4a3b4b3b3b3%3A0x0!2sOise!5e0!3m2!1sfr!2sfr!4v1",

  // ── COPYRIGHT ────────────────────────────────────────────
  annee: "2025",
};
