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

## RÈGLE CRITIQUE : les produits Amazon (ASIN)

**Objectif : chaque article doit contenir 2 produits avec de vrais ASIN.** C'est
important : une fois l'ASIN présent, l'humain n'a plus qu'à déposer l'image
`public/products/<ASIN>.jpg`. Ne te contente donc PAS de laisser `products: []` —
fais réellement la recherche. Un ASIN inventé reste toutefois interdit (lien
cassé = zéro commission) : la règle est « cherche vraiment, mais n'invente jamais ».

### Comment trouver un ASIN quand `amazon.fr` est bloqué (cas de la routine cloud)

L'environnement d'exécution bloque souvent l'accès direct à `amazon.fr`, mais
**WebSearch fait remonter des URLs Amazon dans ses résultats** — c'est là qu'on
récupère les ASIN. Procédure fiable :

1. `WebSearch` : `<type de produit> amazon.fr` (ex. `coussin coccyx ergonomique amazon.fr`).
2. Dans les résultats, repère les URLs de la forme `amazon.fr/.../dp/XXXXXXXXXX`
   ou `amazon.fr/dp/XXXXXXXXXX` — les 10 caractères après `/dp/` sont l'ASIN
   (il commence presque toujours par `B0`).
3. Fais une 2ᵉ recherche pour confirmer : `"<ASIN>" amazon` doit renvoyer une page
   produit correspondant bien au produit décrit (même type, même marque).
4. Choisis 2 produits pertinents et distincts (ex. un modèle standard + une
   variante ou un modèle d'un autre positionnement).

Essaie plusieurs formulations de recherche (marque + modèle, synonymes) avant
d'abandonner. Dans la grande majorité des cas, 2-3 recherches suffisent.

### Si vraiment aucun ASIN fiable n'est trouvé (rare)

Seulement en dernier recours, après plusieurs recherches infructueuses : laisse
`products: []` et ajoute au-dessus, dans le frontmatter, une ligne listant les
**noms de produits repérés** pour que l'humain finisse vite :
`# TODO-HUMAIN: ASIN à vérifier sur amazon.fr — <marque modèle 1>, <marque modèle 2>`

### Format et rappels

- 2 produits par article ; le premier est mis en avant comme « Notre choix ».
- **Ne remplis pas le champ `image:` des produits.** Les photos sont gérées
  séparément : l'humain dépose `public/products/<ASIN>.jpg` et l'image apparaît
  automatiquement (voir `public/products/README.md`). Laisse `image` absent.

## Tableau comparatif (optionnel mais recommandé)

Quand l'article compare des produits sur des critères mesurables, ajoute un
bloc `comparison` au frontmatter — il s'affiche en tableau après le corps :

```yaml
comparison:
  columns: ["Critère", "Modèle A", "Modèle B"]
  rows:
    - ["Charge max", "150 kg", "120 kg"]
    - ["Poids", "9 kg", "7 kg"]
```

Chaque ligne doit avoir autant de cellules que `columns`. N'invente pas de
chiffres : mets seulement des specs vérifiables, sinon laisse le bloc de côté.

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
