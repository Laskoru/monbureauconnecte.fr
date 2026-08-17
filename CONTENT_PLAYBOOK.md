# Playbook de création d'article — Mon Bureau Connecté

Ce document décrit comment rédiger un nouvel article pour ce site. Il est suivi
par la routine automatique quotidienne **et** peut être utilisé à la main.

## Objectif d'une exécution

Créer **1 seul nouvel article**, **en brouillon** (`draft: true`), puis commiter
et pousser sur `main`. Les brouillons ne sont PAS visibles en ligne : un process
local ajoute les images (couverture + produit) et publie ensuite. Laisse
toujours 1 produit à ASIN réel pour qu'il puisse finir le travail.

### Format éditorial : guide → recherche → un seul choix

Chaque article est un **vrai guide d'achat**, pas un duel entre deux fiches
produit. Il se termine par UN SEUL produit recommandé, pas deux. La page se lit
dans cet ordre (la recherche et le produit sont ajoutés automatiquement par le
site, tu n'as rien à écrire pour eux) :

1. Le corps de l'article : ce qui compte, les critères à vérifier avant
   d'acheter, comment choisir selon son usage. C'est la partie que tu écris.
2. Un lien « Voir « *mot-clé* » sur Amazon » généré automatiquement à partir de
   `keywords[0]` — un lien de recherche, jamais mort, pour qui veut comparer
   lui-même les modèles du moment.
3. Le bloc « Notre choix » : le produit unique du frontmatter, avec son image,
   sa note réelle et son prix.

Pourquoi un seul produit et pas deux : un ASIN unique divise par deux le risque
de rupture de stock, élimine le problème d'écart de prix entre deux produits,
et le lien de recherche du point 2 fait déjà le travail de comparaison — sans
jamais devenir obsolète, contrairement à une fiche produit précise.

### Pourquoi un seul article (et pas plus)

Le site publie **délibérément peu : 3 articles par semaine maximum**. La
fréquence de publication n'est pas un critère de classement Google, et un
volume élevé sur un domaine récent relève au contraire du « scaled content
abuse » que Google sanctionne depuis 2024.

La consigne est donc claire : **prends tout le temps nécessaire pour un seul
article vraiment bon** — recherche produit sérieuse, angle utile, conseils
concrets — plutôt que d'en produire plusieurs corrects. Un article de plus ne
fera jamais gagner de positions ; un article médiocre peut en faire perdre.

## Étapes

1. **Choisir le sujet.** Ouvre `CONTENT_IDEAS.md`. Prends la première idée non
   cochée (`- [ ]`). Vérifie qu'aucun fichier de `src/content/articles/` ne
   traite déjà le sujet. Coche l'idée (`- [x]`).
2. **Rédiger** l'article dans `src/content/articles/<slug>.md` en suivant le
   format ci-dessous. Le slug est en kebab-case, sans accents, descriptif
   (ex. `tapis-souris-xxl-bureau.md`).
3. **Vérifier les produits Amazon** (voir la règle critique plus bas).
4. **Mailler en interne** : lier 2 à 3 articles existants (voir plus bas).
5. **Renseigner l'indication de couverture** (voir règle images).
6. **Commiter et pousser** sur `main`.

## Maillage interne (à ne pas négliger)

Chaque nouvel article doit citer et lier **2 à 3 articles existants** du site,
avec un lien markdown vers `/articles/<slug>` et une ancre naturelle intégrée
à une phrase (pas de « cliquez ici »). Exemple :

```md
Si le problème vient surtout de l'assise, notre comparatif des
[chaises gaming](/articles/meilleures-chaises-gaming) traite la question plus en détail.
```

C'est l'un des rares leviers SEO entièrement sous notre contrôle : il fait
circuler l'autorité entre les pages et aide Google à comprendre la structure
thématique du site.

## Titre : inclure l'année quand c'est un format « meilleur/lequel choisir »

Si le titre prend la forme d'un classement ou d'une aide au choix (« Meilleur X »,
« X : lequel choisir ? », « X vs Y : lequel choisir ? »), ajoute l'année en
cours dans le titre (« Meilleur X en 2026 », « X en 2026 : lequel choisir ? »).
Beaucoup de monde tape l'année dans sa recherche pour un guide d'achat, et ça
signale la fraîcheur du contenu à Google. Ajoute aussi une variante datée dans
`keywords` (ex. `"meilleur X 2026"`) en plus des mots-clés existants — ne
remplace pas les mots-clés déjà présents, ajoute-la en plus.
Ne force pas l'année sur un titre qui n'est pas un format classement/choix
(ex. « Pourquoi [le sujet] change ton quotidien » n'en a pas besoin).

## Format exact du frontmatter

```md
---
title: "Titre accrocheur avec le mot-clé principal (55-65 caractères idéalement)"
description: "Méta-description SEO, 110-130 caractères, avec le mot-clé principal."
pubDate: AAAA-MM-JJ   # la date du jour de génération
author: "Rédaction"
keywords: ["mot-clé principal", "variante 1", "variante 2"]
category: "mobilier"   # UNIQUEMENT: mobilier | peripheriques | audio-visio
# coverImage : NE PAS mettre d'URL. La couverture est téléchargée localement
# (public/covers/<slug>.jpg) exactement comme les images produits.
coverAlt: "Description factuelle de l'image pour l'accessibilité"
draft: true            # le process local passe à false après avoir ajouté les images
products:
  - asin: "B0XXXXXXXX"        # UN SEUL produit — voir « RÈGLE CRITIQUE » plus bas
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

## RÈGLE CRITIQUE : le produit Amazon (ASIN)

**Objectif : chaque article doit contenir UN SEUL produit avec un vrai ASIN.**
C'est important : une fois l'ASIN présent, l'humain n'a plus qu'à déposer
l'image `public/products/<ASIN>.jpg`. Ne te contente donc PAS de laisser
`products: []` — fais réellement la recherche. Un ASIN inventé reste toutefois
interdit (lien cassé = zéro commission) : la règle est « cherche vraiment, mais
n'invente jamais ». N'ajoute JAMAIS un deuxième produit — le format n'en veut
qu'un (voir la section format éditorial plus haut).

### Comment trouver un ASIN quand `amazon.fr` est bloqué (cas de la routine cloud)

L'environnement d'exécution bloque souvent l'accès direct à `amazon.fr`, mais
**WebSearch fait remonter des URLs Amazon dans ses résultats** — c'est là qu'on
récupère les ASIN. Procédure fiable :

1. `WebSearch` : `<type de produit> amazon.fr` (ex. `coussin coccyx ergonomique amazon.fr`).
2. Dans les résultats, repère les URLs de la forme `amazon.fr/.../dp/XXXXXXXXXX`
   ou `amazon.fr/dp/XXXXXXXXXX` — les 10 caractères après `/dp/` sont l'ASIN
   (il commence presque toujours par `B0`).
3. Fais une 2ᵉ recherche pour confirmer : `"<ASIN>" amazon` doit renvoyer une page
   produit correspondant bien au produit décrit (même type, même marque), sur
   le marché **français** (amazon.fr, pas .it/.com/.de — un même produit a un
   ASIN différent selon le pays).
4. Choisis le produit le plus représentatif du sujet — celui que tu
   recommanderais spontanément si on te posait la question, pas forcément le
   moins cher ni le plus cher.

Essaie plusieurs formulations de recherche (marque + modèle, synonymes) avant
d'abandonner. Dans la grande majorité des cas, 2-3 recherches suffisent.

### Si vraiment aucun ASIN fiable n'est trouvé (rare)

Seulement en dernier recours, après plusieurs recherches infructueuses : laisse
`products: []` et ajoute au-dessus, dans le frontmatter, une ligne listant les
**noms de produits repérés** pour que l'humain finisse vite :
`# TODO-HUMAIN: ASIN à vérifier sur amazon.fr — <marque modèle 1>, <marque modèle 2>`

### Format et rappels

- **Un seul produit par article** — le bloc « Notre choix » en fin de page.
  N'ajoute jamais de deuxième entrée dans `products:`.
- **Ne remplis pas le champ `image:` du produit.** La photo est gérée
  séparément : l'humain dépose `public/products/<ASIN>.jpg` et l'image apparaît
  automatiquement (voir `public/products/README.md`). Laisse `image` absent.
- **N'ajoute pas de bloc `comparison`.** Ce format a été abandonné (il
  comparait deux SKU précis, ce qui devenait faux dès que l'un des deux
  changeait de prix ou de stock). Si tu veux comparer des approches, fais-le en
  prose dans une section `## Comment choisir selon ton usage` — les
  caractéristiques générales restent vraies même quand un produit précis ne
  l'est plus.

## Règle images (couverture + produits : tout est géré en local)

Ne cherche PAS d'URL d'image. Les photos sont téléchargées par le process local,
comme les images produits :

- **Couverture** : n'ajoute pas de `coverImage`. Renseigne seulement `coverAlt`
  (description factuelle) et ajoute dans le corps du frontmatter une indication
  pour le process local :
  `# COVER: <mots-clés en anglais pour trouver la photo>` (ex. `# COVER: under desk storage drawer cabinet`).
  Le process local téléchargera la photo dans `public/covers/<slug>.jpg` et elle
  sera détectée automatiquement au build.
- **Produits** : ne remplis pas `image:`. Le process local dépose
  `public/products/<ASIN>.jpg` (voir règle ASIN plus haut).

## Commit

- Message : `Nouveaux brouillons : <titres>`.
- Pousser sur `main`. Les articles restent `draft: true` (invisibles en ligne)
  jusqu'à ce que le process local ajoute les images et passe `draft: false`.

## Rappel de la promesse éditoriale

Ce site vit de l'affiliation Amazon et de la confiance de ses lecteurs. Un
article médiocre ou un lien cassé coûte plus cher qu'un jour sans publication.
En cas de doute sur la qualité ou sur un produit : préférer un brouillon
incomplet clairement balisé `TODO-HUMAIN` plutôt qu'un contenu inventé.
