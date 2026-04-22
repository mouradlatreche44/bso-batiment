# Site Multiservice — Template

Site vitrine type pour artisans **multiservice** (plomberie, électricité, chauffage, climatisation, dépannage urgence).
HTML statique + Tailwind CSS via CDN — aucune build chain requise. Prêt à rebrander en quelques minutes.

## Stack technique

- HTML5 statique (7 pages, navigation cohérente)
- [Tailwind CSS](https://tailwindcss.com/) via CDN (config étendue inline)
- [Lucide Icons](https://lucide.dev/) via CDN (icônes UI)
- Icônes [Tabler](https://tabler.io/icons) inline (réassurance)
- Google Fonts : **Outfit** (titres) + **Inter** (corps) + **Kanit** (logo)
- Aucune dépendance backend, déployable sur n'importe quel hébergeur statique (Hostinger, Vercel, Netlify, GitHub Pages…)

## Structure

```
multipage/
├── index.html             # Accueil (hero, services, à propos, témoignages, FAQ, CTA)
├── a-propos.html          # Présentation entreprise + équipe
├── plomberie.html         # Service plomberie détaillé
├── electricite.html       # Service électricité détaillé
├── chauffage.html         # Service chauffage + climatisation
├── contact.html           # Formulaire + carte OpenStreetMap
├── mentions-legales.html  # Mentions légales / RGPD
├── package.json           # Métadonnées projet
└── assets/
    └── img/               # Photos métier + logos partenaires
        └── brands/        # Logos de marques (Schneider, Hager, Grohe…)
```

## Identité visuelle

- **Palette brand** : rouge `#dc2626` (urgence/CTA) + navy `#0a1f44` (autorité)
- **Logo** : SVG inline 4 quadrants (clé/flocon/éclair/flamme) symbolisant les 4 métiers
- **Composants** : service cards, badges ronds rouges, before/after slider, marquees marques, dropdown nav, FAQ accordion, IntersectionObserver reveals

## Déploiement

Aucun build. Upload les fichiers HTML + le dossier `assets/` sur ton hébergeur. C'est tout.

Pour un déploiement automatique : connecte ce repo à Hostinger, Vercel ou Netlify — chaque push sur `master` redéploie le site.

## Rebranding rapide

1. **Nom & tél** : remplace `Dépannage 60` et `07 61 18 33 22` (recherche globale dans les 7 fichiers HTML)
2. **Couleurs** : modifie la section `tailwind.config.colors.brand` dans chaque fichier HTML (ou centralise via un JS partagé)
3. **Logo** : édite le SVG inline (chercher `aria-label="Dépannage 60"`) — change les couleurs des 4 quadrants
4. **Photos** : remplace les fichiers dans `assets/img/` en gardant les mêmes noms, ou édite les références
5. **Zone géographique** : remplace `Oise (60)` et la liste de communes dans les meta + footer
6. **Coordonnées carte** : modifie l'URL OpenStreetMap dans `contact.html`
7. **SEO** : mets à jour les balises `<title>`, `<meta name="description">` et `<meta name="keywords">` de chaque page

## Personnalisation des services

Le template couvre 4 métiers : plomberie / électricité / chauffage / climatisation.
Pour ajouter ou retirer un métier :
- Crée/supprime la page HTML correspondante
- Mets à jour le dropdown navigation (présent dans chaque page)
- Ajoute/retire la service card sur `index.html` et `a-propos.html`
- Adapte le quadrant du logo si besoin

## Crédits

Photos : Pexels, Wikimedia Commons (licences libres)
Polices : Google Fonts
Icônes : Lucide & Tabler Icons (MIT)

## Licence

MIT — libre d'utilisation pour tes projets clients.
