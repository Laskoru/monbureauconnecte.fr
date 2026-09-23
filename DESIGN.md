---
# gstack: design-md-format=spec
name: Mon Bureau Connecté — Épure
description: Le site comme une épure de dessin technique, filets fins, cotes fléchées et chiffres monumentaux, avec un seul jaune de mètre ruban pour marquer ce qui est mesuré.
colors:
  primary: "#15171A"
  on-primary: "#FFFFFF"
  background: "#EDEEEA"
  surface: "#FFFFFF"
  surface-alt: "#F6F6F3"
  text: "#15171A"
  text-muted: "#5A5F66"
  border: "#CFD2D4"
  border-strong: "#7D838A"
  accent: "#FFD60A"
  on-accent: "#15171A"
  accent-tint: "#FFF1A8"
  success: "#1C7C4A"
  warning: "#9A5A00"
  error: "#B3261E"
  dark-background: "#111214"
  dark-surface: "#1A1C1F"
  dark-surface-alt: "#212428"
  dark-text: "#ECEDE8"
  dark-text-muted: "#A2A6A8"
  dark-border: "#2E3136"
  dark-border-strong: "#5C6168"
typography:
  display:
    fontFamily: Archivo
    fontWeight: 300
    fontSize: clamp(2.4rem, 1.2rem + 3.8vw, 4.6rem)
    lineHeight: 1.02
    letterSpacing: -0.02em
  headline:
    fontFamily: Archivo
    fontWeight: 400
    fontSize: clamp(1.6rem, 1.1rem + 1.6vw, 2.4rem)
    lineHeight: 1.08
    letterSpacing: -0.015em
  title:
    fontFamily: Instrument Sans
    fontWeight: 600
    fontSize: 1.15rem
    lineHeight: 1.3
  body:
    fontFamily: Instrument Sans
    fontSize: 1.0625rem
    lineHeight: 1.6
  label:
    fontFamily: B612 Mono
    fontSize: 0.75rem
    letterSpacing: 0.04em
  mono:
    fontFamily: B612 Mono
    fontFeature: tnum
rounded:
  none: 0px
  sm: 2px
  md: 3px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 72px
  4xl: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-buy:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
  input:
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.none}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.text}"
---

# Mon Bureau Connecté — Épure

## Overview

**Creative North Star :** « un poste réglé au millimètre ». Le site se lit comme une épure de dessin technique où chaque mesure est tracée, cotée et mise en valeur, parce que les lecteurs règlent un problème de corps (dos, poignets, bruit) avec des chiffres.
**Product context :** comparateur indépendant français « problème → solution » pour télétravailleurs, joueurs et étudiants : 38 comparatifs, 5 outils de réglage, affiliation Amazon avec les vraies notes, jamais retouchées. Concurrents directs : bureau-ajustable.fr, Home Office Lab, chaises-ergonomiques.fr.
**Mode per surface :** accueil = Persuade (le calculateur convainc) ; comparatifs, guides et pages légales = Read ; outils = Operate.
**Reference sites :** makerstations.io, bestdesksetups.com, bureau-ajustable.fr, rtings.com (grovemade.com a bloqué le robot).
**Key characteristics :**
- Des chiffres monumentaux en Archivo large et fin, avec leurs lignes de cote.
- Un seul jaune, celui du mètre ruban, qui marque ce qui est mesuré ou choisi.
- Des filets fins et des angles vifs : ni ombres ni cartes arrondies.
- B612 Mono, la police des écrans de cockpit Airbus, pour toutes les valeurs et étiquettes.
- Le calculateur de hauteur de bureau en ouverture, dessin au trait à l'appui.

## Colors

**Strategy :** Restrained. Neutres gris calque et mine, un accent jaune mètre ruban #FFD60A, plus citron que l'ambre de Poule Position (#E8A317) pour que les sites frères ne se confondent pas.
**Light or dark :** thème clair par défaut (lecture de jour, au bureau, souvent près d'une fenêtre) ; thème sombre « mine de plomb » proposé par le bouton de l'en-tête et suivi de la préférence système, pour les joueurs et la lecture du soir.

Le jaune ne sert jamais de couleur de texte sur fond clair : il surligne (fond sous du texte mine, 12,8:1), trace les cotes actives, marque « Notre choix » d'un filet de 4 px, remplit la règle de lecture et le bouton d'achat. En sombre il peut colorer des chiffres (13:1 sur #111214). Les liens restent en mine et prennent un soulignement jaune épais au survol. Les neutres sont des gris à peine chauds, pas des crèmes. En sombre, la hiérarchie passe par trois niveaux de surface (#111214, #1A1C1F, #212428) et des filets #2E3136, jamais par une simple inversion. Les images produit restent sur fond blanc dans les deux thèmes (visuels Amazon). Sémantique : #1C7C4A pour les points forts, #9A5A00 pour ce qui peut gêner, #B3261E pour « épuisé ».

## Typography

- **Archivo** (Omnibus-Type, variable en largeur 62–125 et en graisse) : la voix d'affiche. Largeur 125 %, graisse 300 pour le h1 et les chiffres monumentaux, 400 pour le h2. Jamais sous 1,4 rem en largeur 125, pour rester lisible. Son monde : les grotesques larges des plans et de la signalétique technique.
- **Instrument Sans** : texte courant, intertitres h3 et h4, boutons, navigation. Elle figure parmi les faces trop vues en titre ; elle ne sert ici qu'en lecture et en interface (surfaces Read et Operate), ce que la règle autorise.
- **B612 Mono** : police commandée par Airbus pour les écrans de cockpit (Intactile DESIGN et ENAC), dessinée pour lire des chiffres sans erreur. Valeurs, unités, cotes, prix, étiquettes, cartouche, fil d'Ariane.
- Échelle : 0,75 / 0,875 / 1 / 1,0625 / 1,25 / 1,6 / 2,4 / 3,2 / 4,6 rem. Les niveaux diffèrent par la taille ET par la famille (Archivo large pour h1 et h2, Instrument Sans pour h3).
- Chargement : auto-hébergé (latin et latin-ext), font-display swap, préchargement d'Archivo et d'Instrument Sans (latin).

## Layout

Grille de 12 colonnes, largeur maximale 1240 px, gouttière de 24 px (16 px sous 640 px). Colonne de lecture de 700 px ; rail de 280 px sur les articles au-delà de 1080 px. Ouverture de l'accueil asymétrique : texte sur 5 colonnes, épure sur 7. Les sections sont séparées par une règle graduée (graduation tous les 8 px, repère long tous les 40 px) plutôt que par des fonds alternés. Densité moyenne : 72 à 112 px entre sections, 24 à 32 px entre blocs. Sous 900 px : une colonne, l'épure passe sous le champ de saisie.

## Elevation & Depth

Aucune ombre portée. La profondeur vient des filets (1 px #CFD2D4, 1,5 px mine pour ce qui est actif), des niveaux de surface (papier blanc posé sur le calque) et du jaune pour ce qui est sélectionné. Ni halo, ni verre dépoli.

## Shapes

Angles vifs : 0 px pour les fiches et les tableaux, 2 px pour les boutons et les champs, 3 px au maximum. Seuls le curseur de la réglette et les points des cotes sont ronds. Aucun arrondi imbriqué.

## Components

- **Cote** : ligne de 1 px avec flèches pleines aux deux bouts et traits d'attache, valeur en B612 Mono centrée dans une coupure de la ligne. Variantes horizontale et verticale. Une valeur recalculée se surligne en jaune pendant 400 ms.
- **Règle graduée** : bande de 12 px à graduations. Elle sépare les sections et, fixée en haut des articles, montre la progression de lecture en se remplissant de jaune.
- **Cartouche** : le bloc titre d'un plan, en cases à filets : Planche nn/38, Rubrique, Mis à jour, Mesures. Étiquettes en B612 Mono 0,75 rem.
- **Fiche cotée (produit)** : image sur blanc, nom, jusqu'à 3 mesures tirées du produit (cm, kg, dB, W…) en B612 Mono, puis la note Amazon sur une réglette de 0 à 5 (graduation par 0,5, curseur au dixième) avec la note chiffrée et le nombre d'avis, les points forts et ce qui peut gêner, et le bouton d'achat jaune. « Notre choix » : filet jaune de 4 px en tête de fiche et libellé mono, pas de badge flottant.
- **Boutons** : primaire mine plein, texte blanc, survol jaune et texte mine. Achat : jaune plein, texte mine, survol mine et texte jaune. Secondaire : filet mine de 1,5 px. Focus visible : contour mine de 2 px et halo jaune de 4 px décalé. Désactivé : 40 % d'opacité.
- **Champ** : ligne de base mine de 1,5 px avec graduations, valeur en B612 Mono ; au focus, ligne jaune de 3 px.
- **Tableau comparatif** : en-tête en B612 Mono sur filet mine, lignes à filets, première colonne en Instrument Sans 600, colonne « Notre choix » sur fond jaune pâle.
- **Navigation** : liens mine, page active soulignée de jaune (3 px) ; menus déroulants en panneau blanc à filet, angles vifs.
- **États** : vide (message et lien vers les guides) ; produit épuisé (bascule vers une recherche Amazon, libellé « épuisé » en mono) ; pas de squelette animé, le site est statique.

## Do's and Don'ts

- Do : afficher une mesure réelle chaque fois qu'elle existe (cm, kg, dB, W, Hz, h), en B612 Mono avec son unité.
- Do : réserver le jaune aux mesures, au choix recommandé, au bouton d'achat et à la progression de lecture.
- Do : garder les images produit sur fond blanc, cadrées sans rognage.
- Do : aligner à gauche ; seuls les chiffres monumentaux peuvent déborder de la grille.
- Don't : des cartes arrondies avec ombre, des étoiles dorées, des médailles ou des emoji.
- Don't : du jaune en texte sur fond clair, ou des aplats jaunes sans mesure derrière.
- Don't : un fond quadrillé ou une grille millimétrée en papier peint, les cotes suffisent.
- Don't : une étiquette au-dessus de chaque titre ou des numéros de section décoratifs.
- Don't : inventer une mesure ; si le produit n'en donne pas, la fiche montre ses points forts.

## Motion

- **Approach :** intentional.
- **Easing :** entrée ease-out (cubic-bezier(.2,.7,.2,1)), sortie ease-in, déplacement ease-in-out.
- **Duration :** micro 80 ms, court 180 ms, moyen 320 ms, long 600 ms.
- **The one authored moment :** l'épure de l'accueil. À chaque changement de taille, les cotes se redessinent et chaque valeur recalculée s'éclaire en jaune pendant 400 ms ; au premier affichage, les lignes de cote se tracent (600 ms). Avec la réduction des animations, tout est statique et rien ne disparaît.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-23 | Direction « Épure » adoptée | /design-consultation : la mesure est l'ADN du site (choix d'Hugo : « la précision ») ; rendu entièrement neuf par rapport à la « fiche technique » du 22/09 au matin et au « comparateur » du 22/09 après-midi |
| 2026-09-23 | Jaune #FFD60A plutôt que #FFC21A | Éviter la confusion avec l'ambre de Poule Position (#E8A317) |
| 2026-09-23 | Couvertures d'articles conservées et cadrées | Utiles pour Google Images et Pinterest ; le sous-agent proposait de les retirer |
| 2026-09-23 | Pas de démo avant l'intégration | Choix d'Hugo : DESIGN.md puis intégration directe |
