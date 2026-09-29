# Mon Bureau Connecté — PRODUCT.md

## Users
Télétravailleurs, joueurs et étudiants francophones qui équipent ou règlent leur poste de travail : chaise, bureau (assis-debout), périphériques, casque/webcam, PC gaming. Motivations fréquentes : mal de dos, poignets, bruit en visio, manque de place, budget. Registre : tutoiement.

## Job
Aider à choisir le bon matériel sur des critères mesurables (plage de réglage, charge admise, dB, autonomie) et à régler son poste avant d'acheter (outils gratuits), puis convertir via des recommandations produit vérifiées (affiliation Amazon, tag `monbureauconnecte-21`) — critères mesurables, limites de chaque produit écrites noir sur blanc, sources vérifiées citées. Les notes Amazon ne sont pas affichées (`siteConfig.amazon.showRatings: false`) tant qu'elles ne viennent pas de l'API officielle.

## Position
Comparateur indépendant « problème → solution » : guides par besoin (télétravail, setup gaming, ergonomie, mal de dos, poignets, petit bureau), par budget (petit / équilibré / setup complet), outils (calculateur de hauteur de bureau, poste de travail idéal, checklist ergonomie, guide PC gaming, lexique). Référents observés : bureau-ajustable.fr (encadré « notre top choix » noté, verdict rapide, tableau comparatif), Home Office Lab (gros titre + collage photo, cartes produit avec prix), chaises-ergonomiques.fr (« ce qu'on retient en 30 secondes »).

## Content model
Astro 7 statique (Node 22), collections dans `src/content.config.ts`. Articles Markdown : `title`, `description` (≤ 155 car.), `keywords`, `category` (mobilier | peripheriques | audio-visio | pc-gaming), `coverImage`/`coverAlt`, `products[]` (asin, title, image?, blurb, pros[], cons[], award?, search?), `topPick` (name, blurb, url, ctaLabel), `comparison` (columns/rows), `faq`, `sources`, `interactiveGuide`, `howto`. Guides `src/guides.ts`, budgets `src/budgets.ts`, lexique `src/lexique.ts`. Disponibilité produit : `src/lib/availability` (relevé hebdomadaire, un relevé de plus de 30 jours est ignoré), notes : `src/lib/ratings` (coupées par `amazon.showRatings`), images produit `public/products/`.

## Constraints
- Contraste ≥ 4,5:1, icônes SVG, pas d'emoji. Polices auto-hébergées. GA4 après consentement.
- Cibles tactiles ≥ 24 × 24 px (WCAG 2.2 AA), boutons 44 px. Bandeau cookies compact, Refuser et Accepter de même poids (CNIL).
- Pas de note ni de nombre d'avis Amazon affichés sans l'API officielle (contrat Partenaires).
- Le premier mot-clé d'un article produit sert de requête Amazon (`searchTopic`).
- Un produit en rupture bascule vers une recherche Amazon (ne jamais afficher « Notre choix » sur un produit indisponible).

## Evidence / assets
38 comparatifs, couvertures locales, images produit locales, schéma SVG du poste de travail idéal, calculateur de hauteur (ratios anthropométriques).

## Inferred (à confirmer par Hugo)
- Le trafic vient surtout de Google sur des requêtes « meilleur(e) X » et « mal de dos bureau » — supposé.
- Les lecteurs comparent sur mobile mais achètent sur desktop — supposé.
