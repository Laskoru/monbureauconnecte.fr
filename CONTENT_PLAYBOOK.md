# Playbook de création d'article — Mon Bureau Connecté

Ce document décrit comment rédiger un nouvel article pour ce site. Il est suivi
par la routine automatique quotidienne **et** peut être utilisé à la main.

## Objectif d'une exécution

Créer **UN seul** nouvel article, en **brouillon** (`draft: true`), le commiter
et le pousser sur `main`. Un humain le relit ensuite, complète ce qui manque,
puis passe `draft: false` pour le publier. Les brouillons ne sont PAS visibles
sur le site tant que `draft: true`.

## Étapes

1. **Choisir le sujet.** Ouvre `CONTENT_IDEAS.md`. Prends la première idée non
   cochée (`- [ ]`). Vérifie qu'aucun fichier de `src/content/articles/` ne
   traite déjà le sujet. Coche l'idée (`- [x]`) dans le même commit.
2. **Rédiger** l'article dans `src/content/articles/<slug>.md` en suivant le
   format ci-dessous. Le slug est en kebab-case, sans accents, descriptif
   (ex. `tapis-souris-xxl-bureau.md`).
3. **Vérifier les produits Amazon** (voir la règle critique plus bas).
4. **Choisir une image** de couverture (voir règle images).
5. **Commiter et pousser** sur `main`.

## Format exact du frontmatter

```md
---
title: "Titre accrocheur avec le mot-clé principal (55-65 caractères idéalement)"
description: "Méta-description SEO, 110-130 caractères, avec le mot-clé principal."
pubDate: AAAA-MM-JJ   # la date du jour de génération
author: "Rédaction"
keywords: ["mot-clé principal", "variante 1", "variante 2"]
category: "mobilier"   # UNIQUEMENT: mobilier | peripheriques | audio-visio
coverImage: "https://images.unsplash.com/photo-XXXX?q=80&w=1600&auto=format&fit=crop"
coverAlt: "Description factuelle de l'image pour l'accessibilité"
draft: true            # TOUJOURS true en génération auto
products:
  - asin: "B0XXXXXXXX"
    title: "Marque Modèle — 2-3 caractéristiques clés"
    blurb: "Une phrase expliquant pour qui / pourquoi ce produit."
faq:
  - question: "Question fréquente réelle sur le sujet ?"
    answer: "Réponse honnête et concrète, 2-3 phrases."
---
```

## Structure du corps (Markdown)

- Vise **800 mots minimum** de contenu utile (exigence SEO).
- 4 à 6 titres `##` (h2), formulés naturellement, incluant le vocabulaire du
  titre. Structure type qui fonctionne bien :
  - `## Pourquoi [le sujet] compte / change quelque chose`
  - `## Les critères qui font vraiment la différence` (avec une liste à puces)
  - `## Comment choisir selon ton usage` (par budget / par profil)
  - `## Conclusion`
- Ton : tutoiement, direct, honnête, sans jargon marketing. On assume les
  compromis, on ne survend pas.
- **Ne jamais inventer** de chiffres précis (prix exacts, scores, %) qu'on ne
  peut pas vérifier. Rester sur des ordres de grandeur ("environ 140-150 €",
  "plusieurs semaines d'autonomie").

## RÈGLE CRITIQUE : les ASIN Amazon

Un ASIN inventé = un lien affilié cassé = zéro commission + mauvaise expérience.

- **Vérifie chaque ASIN** avant de l'utiliser : cherche le produit réel
  (WebSearch/WebFetch sur `amazon.fr`, ou le navigateur si disponible) et
  confirme que l'ASIN existe et correspond bien au produit décrit.
- Un ASIN Amazon fait 10 caractères, commence généralement par `B0`.
- **Si tu ne peux PAS vérifier un produit** : ne l'invente pas. Laisse le bloc
  `products:` vide et ajoute cette ligne juste au-dessus dans le frontmatter :
  `# TODO-HUMAIN: ajouter 2 produits Amazon vérifiés (ASIN réels) avant publication`
  L'humain les ajoutera pendant la relecture. C'est un brouillon, c'est normal.
- 2 produits par article : le premier est mis en avant comme "Notre choix".
- **Ne remplis pas le champ `image:` des produits.** Les photos sont gérées
  séparément : l'humain dépose le fichier dans `public/products/<ASIN>.jpg` et
  l'image apparaît automatiquement (voir `public/products/README.md`). Laisse
  donc `image` absent — pas de `# TODO-HUMAIN` nécessaire pour ça.

## Règle images

- Utilise une vraie photo Unsplash (licence libre) : format d'URL
  `https://images.unsplash.com/photo-XXXX?q=80&w=1600&auto=format&fit=crop`.
- L'URL doit être réelle et correspondre au sujet. Si tu ne peux pas en trouver
  une fiable, omets `coverImage`/`coverAlt` et ajoute :
  `# TODO-HUMAIN: ajouter une image de couverture`

## Commit

- Message : `Nouvel article (brouillon) : <titre court>` puis une ligne
  résumant ce qui reste à faire côté humain (produits/image à vérifier).
- Pousser sur `main`. Vercel redéploie tout seul, mais comme `draft: true`,
  l'article n'apparaît pas encore en ligne.

## Rappel de la promesse éditoriale

Ce site vit de l'affiliation Amazon et de la confiance de ses lecteurs. Un
article médiocre ou un lien cassé coûte plus cher qu'un jour sans publication.
En cas de doute sur la qualité ou sur un produit : préférer un brouillon
incomplet clairement balisé `TODO-HUMAIN` plutôt qu'un contenu inventé.
