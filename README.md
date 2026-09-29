# Template de site de contenu (Astro)

Template prêt à l'emploi pour lancer un site de contenu monétisé par la publicité.
Articles en Markdown, SEO intégré, bandeau cookies RGPD, emplacements AdSense.

## 1. Installation locale

Prérequis : Node.js 22 (22.12 ou plus) installé sur ta machine. Le site tourne sur
Astro 7 ; `package.json` déclare `"engines": { "node": "22.x" }`, ce qui fait aussi
choisir Node 22 à Vercel.

```bash
npm install
npm run dev
```

Le site tourne alors sur `http://localhost:4321`.

## 2. Personnaliser ce site

Un seul fichier à éditer pour l'identité du site : `src/siteConfig.ts`
(nom, description, couleur d'accent, identifiant AdSense).

Complète aussi les placeholders `[À compléter]` dans :
- `src/pages/mentions-legales.astro`
- `src/pages/politique-de-confidentialite.astro`

Et le domaine final dans `astro.config.mjs` (`SITE_URL`).

## 3. Ajouter un article

Crée un fichier `.md` dans `src/content/articles/`, avec ce frontmatter :

```md
---
title: "Titre de l'article"
description: "Résumé pour le SEO (150-160 caractères)"
pubDate: 2026-08-15
keywords: ["mot-clé"]
draft: false
---

Contenu en Markdown ici.
```

La page est générée automatiquement à l'URL `/articles/nom-du-fichier`.
Aucune autre action nécessaire. Le schéma du frontmatter est défini dans
`src/content.config.ts` (Content Layer d'Astro, loader `glob()`).

## 4. Mettre en ligne (GitHub + Vercel)

```bash
git init
git add .
git commit -m "Premier commit"
```

Puis sur GitHub : crée un nouveau repo vide, et pousse :

```bash
git remote add origin https://github.com/TON-COMPTE/NOM-DU-REPO.git
git branch -M main
git push -u origin main
```

Sur [vercel.com](https://vercel.com) : "Add New Project" → importe ce repo GitHub.
Vercel détecte Astro automatiquement, aucune config nécessaire. Clique Deploy.

Chaque nouveau `git push` sur `main` redéploie automatiquement le site.

## 5. Domaine personnalisé

Dans le dashboard Vercel du projet : Settings → Domains → ajoute ton nom de
domaine, puis pointe les DNS chez ton registrar selon les instructions
affichées par Vercel.

## 6. Activer la publicité

1. Inscris le site sur [Google AdSense](https://adsense.google.com) une fois
   qu'il a suffisamment de contenu (une dizaine d'articles minimum conseillée).
2. Une fois validé, récupère ton `client-id` AdSense et les `slot` de chaque
   emplacement.
3. Dans `src/siteConfig.ts` : passe `adsense.enabled` à `true` et renseigne
   `clientId`.
4. Dans `src/layouts/ArticleLayout.astro` : remplace les valeurs `slot="..."`
   des deux `<AdSlot />` par tes vrais identifiants de bloc.

Les pubs ne s'affichent qu'après acceptation du bandeau cookies par le
visiteur — c'est fait pour être conforme RGPD par défaut.

## 7. Dupliquer pour un nouveau site

1. Copie tout le dossier du template dans un nouveau dossier.
2. `rm -rf node_modules .astro dist` puis `git init` à nouveau (nouvel
   historique, nouveau repo).
3. Modifie uniquement `src/siteConfig.ts` et `astro.config.mjs`.
4. Remplace le contenu d'exemple dans `src/content/articles/` par les
   vrais articles du nouveau site.
5. Crée un nouveau repo GitHub + un nouveau projet Vercel, comme à l'étape 4.

## 8. Vérifications automatiques et données produit

### Build et liens internes (`.github/workflows/ci.yml`)

À chaque push (toutes branches) et pull request, le workflow « Build » installe
les dépendances (Node 22), lance `npm run build` puis `npm run check-links`.

`npm run check-links` (`scripts/check-links.mjs`, sans dépendance) parcourt les
pages HTML de `dist/` et vérifie que chaque lien interne (`href`, `src`, `srcset`
commençant par `/`, hors `<script>`, ancres et paramètres) pointe vers un fichier
existant. Il liste les liens cassés et sort en erreur. À lancer après un build :

```bash
npm run build && npm run check-links
```

### Disponibilité des produits (`.github/workflows/availability.yml`)

Le workflow « Disponibilité produits » tourne chaque lundi (et à la demande depuis
l'onglet Actions). Il lance `bash scripts/check-availability.sh . 40`, qui met à
jour `src/data/availability.json`, puis commit et pousse sur `main` seulement si le
fichier a changé. Si Amazon bloque (captcha, page illisible), les relevés
précédents sont conservés.

Au build, un produit relevé indisponible bascule vers une recherche Amazon et ne
porte jamais « Notre choix ». Un relevé de plus de 30 jours est ignoré (le produit
est traité comme jamais relevé : lien vers sa fiche).

### Notes Amazon : `amazon.showRatings`

Dans `src/siteConfig.ts`, `amazon.showRatings` est à `false` : aucune note ni aucun
nombre d'avis Amazon n'est affiché. Le contrat Partenaires n'autorise l'affichage
des notes que s'il vient de l'API officielle (Product Advertising API / Creators
API), pas d'un relevé des pages produit. `scripts/fetch-ratings.sh` s'arrête donc
avec un message tant que le flag est à `false` (on peut forcer avec
`FORCE_RATINGS=1`). `src/data/amazon-ratings.json` est conservé ; ne repasse le flag
à `true` que lorsque ce fichier est alimenté par l'API officielle.
