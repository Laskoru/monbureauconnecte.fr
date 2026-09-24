---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/ArticleLayout.astro"]
---

# Accueil de Mon Bureau Connecté

Portée : page d'accueil (mode Persuade), puis les pages qui en héritent (article, rubriques, outils). Public : télétravailleurs, joueurs et étudiants qui règlent ou équipent leur poste. Action attendue : se reconnaître dans la photo de poste, lire les repères, ouvrir un comparatif ou un guide par besoin. Preuve : les repères mesurés sur la photo, les vraies notes Amazon, 38 comparatifs. Contraintes : contraste 4,5:1, pas d'emoji, polices auto-hébergées, thème clair par défaut (Hugo refuse les fonds sombres), thème sombre en option.

## Direction contract

THESIS : le site se regarde comme une vidéo « desk setup tour » : une grande photo de poste annotée de points chauds mesurés, et les produits présentés comme les pièces du setup. Il refuse le gabarit du comparateur (cartes uniformes, médailles, étoiles) et l'austérité de l'ancienne Épure.
OWN-WORLD : blanc cassé chaud #F6F5F0, papier blanc, texte #14161A, un seul lime #C6F135 posé en aplat (surligneur, boutons pilules, jauges, points chauds). Cartes arrondies 16 px à ombre douce, pilules, Unbounded très gras, Onest, JetBrains Mono pour les mesures. Bandeau défilant des besoins.
STORY : le visiteur voit un poste réel avec ses repères (écran 122 cm, bureau 74 → 109 cm, assise 44 cm), donne sa taille et voit les repères se recalculer, puis choisit un problème ou une pièce et ouvre le comparatif qui la règle.
FIRST VIEWPORT : photo de poste pleine largeur qui respire ; à gauche sur 5 colonnes « Ton setup, pièce par pièce. » (Unbounded 900, « par pièce » surligné lime), le chapo, les boutons « Trouver par besoin » (lime) et « Régler mon poste », le champ pilule « Ta taille 175 cm » et le verdict ; sur la photo, trois points chauds lime apparaissant à 0,5 / 1,1 / 1,7 s. Sous 900 px, les points passent en liste sous le texte.
FORM : « desk setup tour » (candidat 1 de ma liste, IMPECCABLE'S PICK), retenu par Hugo sur maquettes (A2 Studio clair) contre l'assignation (candidat 3, cockpit) ; clé concept-seed : ae39457b.
FINISH : unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
