# Images de couverture des articles

Même principe que `public/products/` : dépose ici la photo de couverture d'un
article sous le nom **`<slug>.jpg`** (le slug = le nom du fichier `.md` de
l'article, sans l'extension).

Exemple : pour `src/content/articles/coussin-lombaire-chaise-bureau.md`, dépose
`public/covers/coussin-lombaire-chaise-bureau.jpg`.

Elle est détectée automatiquement au build (`src/lib/covers.ts`) et remplace
toute URL `coverImage` du frontmatter. Formats acceptés : jpg, jpeg, png, webp, avif.

Ce dossier est rempli par le process local (téléchargement des photos Unsplash),
la routine cloud n'y touche pas.
