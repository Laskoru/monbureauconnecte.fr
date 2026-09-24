---
# gstack: design-md-format=spec
name: Mon Bureau Connecté — Studio clair
description: Le site comme une vidéo « desk setup tour » : grande photo de poste annotée de points chauds, blanc cassé chaud, texte noir, un lime en surligneur et sur les actions, titres Unbounded.
colors:
  primary: "#14161A"
  on-primary: "#FFFFFF"
  background: "#F6F5F0"
  surface: "#FFFFFF"
  surface-alt: "#EFEEE8"
  text: "#14161A"
  text-muted: "#5E6168"
  border: "#E2E1DB"
  border-strong: "#B9B8B0"
  accent: "#C6F135"
  on-accent: "#14161A"
  accent-tint: "#EEF9C8"
  success: "#1C7C4A"
  warning: "#9A5A00"
  error: "#B3261E"
  dark-background: "#0F1013"
  dark-surface: "#17181C"
  dark-surface-alt: "#1E1F24"
  dark-text: "#F3F1EA"
  dark-text-muted: "#A4A39B"
  dark-border: "#2A2B31"
  dark-accent: "#D7FF3B"
typography:
  display:
    fontFamily: Unbounded
    fontWeight: 900
    fontSize: clamp(2rem, 1.2rem + 2.6vw, 3.4rem)
    lineHeight: 1.04
    letterSpacing: -0.03em
  headline:
    fontFamily: Unbounded
    fontWeight: 800
    fontSize: clamp(1.5rem, 1.1rem + 1.3vw, 2.15rem)
    lineHeight: 1.05
    letterSpacing: -0.03em
  title:
    fontFamily: Unbounded
    fontWeight: 700
    fontSize: 1.15rem
    lineHeight: 1.25
  body:
    fontFamily: Onest
    fontSize: 1.0625rem
    lineHeight: 1.6
  label:
    fontFamily: Onest
    fontWeight: 600
    fontSize: 0.85rem
  mono:
    fontFamily: JetBrains Mono
    fontFeature: tnum
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 72px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
  input:
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.text}"
---

# Mon Bureau Connecté — Studio clair

## Overview

**Creative North Star :** « ton setup, pièce par pièce ». Le site se regarde comme une vidéo de présentation de poste : une grande photo réelle, des points chauds qui révèlent chaque réglage avec sa mesure, et des produits présentés comme les pièces d'un setup.
**Product context :** comparateur indépendant français « problème → solution » pour télétravailleurs, joueurs et étudiants : 38 comparatifs, 5 outils de réglage, affiliation Amazon avec les vraies notes, jamais retouchées.
**Mode per surface :** accueil = Persuade ; comparatifs, guides et pages fixes = Read ; outils = Operate.
**Reference sites :** makerstations.io, bestdesksetups.com, bureau-ajustable.fr, rtings.com.
**Key characteristics :**
- Une photo de poste en grand, annotée de points chauds lime qui apparaissent l'un après l'autre.
- Blanc cassé chaud, texte noir, un seul lime #C6F135 en surligneur, sur les boutons et les jauges.
- Unbounded très gras pour les titres, Onest pour le texte, JetBrains Mono pour les mesures.
- Cartes arrondies (16 px) à ombre douce, boutons pilules, bandeau défilant des besoins.
- Thème sombre « lumières éteintes » : même studio, fond #0F1013, lime plus clair.

## Colors

**Strategy :** Restrained. Neutres chauds (blanc cassé, papier, ardoise) et un seul accent lime. Hugo a refusé les fonds sombres (24/09) : le clair est le seul thème par défaut, le sombre reste un choix de l'utilisateur.
**Light or dark :** clair par défaut (lecture de jour, au bureau) ; sombre au bouton de l'en-tête ou selon le système.

Le lime ne sert jamais de couleur de texte sur fond clair : il surligne (fond sous du texte noir, 15:1), remplit les boutons d'action et d'achat (texte noir dessus), marque les points chauds, les jauges de note et l'onglet « Notre choix ». Les liens sont noirs et prennent un surligneur lime au survol. En sombre, le lime #D7FF3B peut colorer un chiffre. Les images produit restent sur blanc dans les deux thèmes. Sémantique : #1C7C4A points forts, #9A5A00 ce qui peut gêner, #B3261E « épuisé ».

## Typography

- **Unbounded** (Google Fonts, variable 500–900) : la voix d'affiche, très large et très grasse, pour h1 (900), h2 (800), h3 (700) et les chiffres mis en avant. Son monde : les vidéos et miniatures « setup tour », les marques de périphériques.
- **Onest** (400–700) : texte courant, interface, boutons, navigation.
- **JetBrains Mono** (500, 700) : mesures, notes, dates, étiquettes de données, points chauds.
- Échelle : 0,78 / 0,85 / 0,95 / 1,0625 / 1,15 / 1,5 / 2,15 / 3,4 rem. Auto-hébergées (latin + latin-ext), swap, préchargement d'Unbounded et d'Onest.

## Layout

Grille de 12 colonnes, largeur maximale 1240 px, gouttière 24 px (16 px sous 640 px). Colonne de lecture 720 px ; rail de 280 px sur les articles au-delà de 1080 px. Accueil : photo de poste pleine largeur, texte sur 5 colonnes à gauche, points chauds sur la photo ; sous 900 px les points chauds passent en liste sous le texte. Sections séparées par l'espace (72 à 96 px), pas par des fonds alternés ; un bandeau défilant sous l'ouverture.

## Elevation & Depth

Ombres douces avec décalage (0 14px 32px -22px) sur les cartes, plus marquées au survol ; jamais de halo. Les panneaux flottants (menus) portent une ombre plus large. Les images produit restent sur une tuile blanche à filet fin.

## Shapes

Cartes 16 px, tuiles image 12 px, puces et boutons en pilules, points chauds ronds. Pas d'angle vif.

## Components

- **Point chaud** : pastille lime pulsante + étiquette mono sur papier translucide ; le mot-clé sur lime. Apparition décalée (0,5 / 1,1 / 1,7 s), 400 ms de surlignage quand une valeur change.
- **Carte produit** : tuile blanche, nom en Unbounded 700, ligne de mesures mono, jauge lime de la note (barre arrondie) avec note et nombre d'avis, bouton d'achat lime.
- **Onglet « Notre choix »** : pilule lime posée sur le bord haut de la fiche.
- **Boutons** : action lime pleine (texte noir), survol noir ; secondaire papier à filet, survol filet noir ; achat lime ; désactivé 40 %.
- **Champ** : pilule papier à filet, focus lime.
- **Tableau comparatif** : conteneur arrondi, en-tête sur papier-2, colonne du choix sur lime pâle.
- **Navigation** : liens noirs, page active soulignée lime ; menus en panneaux arrondis à ombre.
- **Bandeau défilant** : besoins en Unbounded 700 séparés d'étoiles lime.
- **États** : vide (message + lien vers les guides) ; épuisé (bascule recherche Amazon, libellé rouge) ; pas de squelette animé.

## Do's and Don'ts

- Do : montrer la mesure réelle quand elle existe (cm, kg, dB, h), en mono avec son unité.
- Do : réserver le lime aux actions, aux points chauds, aux jauges et au surligneur.
- Do : une vraie photo de poste par page d'ouverture, cadrée large.
- Do : garder les images produit sur blanc, cadrées sans rognage.
- Don't : de fond noir ou sombre en thème clair (choix d'Hugo), ni de grands aplats de couleur.
- Don't : du lime en texte sur fond clair, ni d'étoiles dorées, ni d'emoji.
- Don't : d'étiquette au-dessus d'un titre, ni de numéros de section décoratifs.
- Don't : de règles graduées, cartouches ou repères de coupe (langage de l'ancienne Épure).

## Motion

- **Approach :** intentional.
- **Easing :** entrée cubic-bezier(.2,.8,.2,1), sortie ease-in.
- **Duration :** micro 80 ms, court 180 ms, moyen 320 ms, long 600 ms.
- **The one authored moment :** la photo de l'accueil respire (18 s) pendant que les trois points chauds apparaissent l'un après l'autre ; quand on change sa taille, les valeurs des points chauds se recalculent et s'éclairent en lime. Réduction des animations : tout statique, points visibles.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-23 | Direction « Épure » (plan coté, jaune mètre ruban) | /design-consultation ; remplacée le 24/09 |
| 2026-09-24 | Direction « Studio » choisie sur maquettes, version claire A2 | Hugo trouvait Épure trop sage ; a retenu Studio mais refusé le fond sombre |
| 2026-09-24 | Lime #C6F135 comme seul accent | Distinct des 7 sites frères ; jamais en texte sur clair |
| 2026-09-24 | Thème sombre conservé en option | Le Studio sombre (maquette A) sert de thème nuit |
