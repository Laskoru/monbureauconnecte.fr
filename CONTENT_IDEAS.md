<!--
Ordre revu le 2026-09-29 pour la fin d'année. La routine prend la première ligne « - [ ] » :
1. saison d'octobre à décembre (froid, jours courts, cadeaux ; le Black Friday est déjà publié) ;
2. pc-gaming, la catégorie la plus maigre (2 articles publiés) ;
3. dépannage (questions « ça ne marche pas » très cherchées) ;
4. le reste, dans l'ordre d'origine.
Les idées cochées sont archivées dans CONTENT_IDEAS-fait.md.
Rappel (voir CONTENT_PLAYBOOK.md, « Liens entrants ») : chaque nouvel article reçoit un lien
depuis au moins 2 articles existants pertinents (phrase naturelle) ; vérifier avant de committer
qu'il n'est pas orphelin.
-->
# Backlog de sujets d'articles

La routine quotidienne prend la première idée non cochée, écrit l'article en
brouillon, puis coche l'idée. Ajoute librement de nouvelles idées en bas.
Format : `- [ ] Sujet : angle ; catégorie : <catégorie>`.

> **Consignes techniques pour la routine (22/10/2026, économie de tokens)**
> - Unsplash : appelle search_photos avec `per_page: 4` (les réponses à 8 photos sont très longues). Une seconde recherche seulement si aucune des 4 ne montre le sujet.
> - Légifrance, economie.gouv.fr (DGCCRF), EUR-Lex, dyson.fr, miele.fr et certains sites de fabricants renvoient 403 ou une page vide à WebFetch : un seul essai par URL, puis `curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/141.0" <url>` ; si ça échoue encore, prends une autre source (service-public.gouv.fr, notice PDF du fabricant) au lieu de réessayer.
> - Ne relis pas un fichier déjà lu et ne relance pas une recherche déjà faite.

## Requêtes Google peu couvertes (21/10)


## Requêtes Google peu couvertes (15/10)

Requêtes tirées des suggestions Google du 15/10/2026, absentes des articles publiés et du backlog, avec une page 1 Google faible ou moyenne (forums, pages étrangères ou génériques). Garde la requête principale dans le titre, la description et un titre ##.


## Priorité SEO (Search Console du 14/10/2026)

- [ ] Casque Bluetooth : son dégradé en visio, la solution : profil HFP contre A2DP, pourquoi le son baisse quand le micro s'active, dongle ou micro séparé ; requête « casque bluetooth son mauvais teams » ; liens vers casque filaire vs sans fil et micro USB ; catégorie : audio-visio (conseil)
- [ ] Station d'accueil qui ne détecte pas l'écran : que faire : câble et port (DP Alt Mode, Thunderbolt), pilotes, limite d'écrans des Mac M1 et M2 ; requête « station d'accueil ne détecte pas l'écran » ; lien vers hub USB-C ou station d'accueil ; catégorie : peripheriques (conseil, sans produit)
- [ ] Souris qui double-clique toute seule : causes et solutions : usure du micro-switch, réglages Windows, piles, garantie ; requête « souris qui double-clique toute seule » ; liens vers souris silencieuse et souris ergonomique ; catégorie : peripheriques (conseil)
- [ ] Speakerphone USB en télétravail : utile ou gadget ? : réunions à plusieurs, Jabra Speak2, Poly Sync, Anker PowerConf ; requêtes « speakerphone usb », « micro usb visioconférence » ; lien depuis le micro USB ; catégorie : audio-visio

## Saison hiver et fêtes : à publier d'octobre à décembre

- [ ] Lampe à pince pour bureau : gagner de la place ; catégorie : mobilier
- [ ] Filtre anti-lumière bleue pour écran : réduire la fatigue visuelle en soirée ; catégorie : audio-visio
- [ ] Comment réduire les reflets sur son écran : dalle mate, éclairage, orientation ; catégorie : audio-visio

## PC gaming : renforcer la catégorie la plus maigre

- [ ] PC gaming à 800 € : quelle configuration : composants, priorités et limites à ce budget ; catégorie : pc-gaming
- [ ] Écran 144 Hz ou 240 Hz : ce qui change vraiment : fluidité perçue, carte graphique nécessaire, jeux concernés ; catégorie : pc-gaming
- [ ] Onduleur pour PC gaming ou télétravail : utile ou pas : protéger son matériel et son travail ; catégorie : pc-gaming
- [ ] Combien de temps garder son PC gaming avant de le renouveler : durée de vie, upgrades, signes d'usure ; catégorie : pc-gaming

## Dépannage : questions « ça ne marche pas »

- [ ] Chaise de bureau qui descend toute seule ou ne remonte plus : vérin, levier, que faire et comment changer le vérin : requêtes « chaise de bureau qui descend toute seule », « chaise de bureau ne remonte plus » ; catégorie : mobilier (conseil, lien de recherche vérin)
- [ ] Casque micro qui ne fonctionne pas sur PC : les réglages à vérifier (prise jack combinée, confidentialité Windows, périphérique par défaut, USB ou Bluetooth) : requête « casque micro ne fonctionne pas sur pc » ; catégorie : audio-visio (conseil, lien Amazon léger)
- [ ] Webcam qui s'allume toute seule : trouver l'application en cause et écarter un piratage (Windows, Mac) : requête « pourquoi ma webcam s'allume toute seule » ; catégorie : audio-visio (conseil, sans produit)
- [ ] Souris sans fil : faut-il l'éteindre ? Veille automatique, autonomie réelle, piles ou batterie : requête « souris sans fil faut il l'éteindre » ; catégorie : peripheriques (conseil, sans produit)

## 🎁 Saison, priorité : à publier avant mi-octobre (indexés pour Noël / Black Friday)

## 🎯 Priorité : questions souvent cherchées et peu couvertes (recherche de mots-clés du 26/09/2026)

Requêtes réelles tirées des suggestions Google, avec peu de pages qui y répondent vraiment. Vérifié le 26/09/2026 : aucun article publié ne les traite déjà. Garde la requête principale dans le titre, la description et un titre ##.

- [ ] Fauteuil de bureau ergonomique sans roulettes : les assises fixes qui soulagent le dos : requête « fauteuil de bureau ergonomique mal de dos sans roulettes » ; catégorie : mobilier (comparatif)
- [ ] Double écran avec un ordinateur portable : écran portable USB-C, extension clipsable ou moniteur, et comment passer d'un écran à l'autre : requêtes « double écran pour ordinateur portable », « double écran faire passer de l'un à l'autre » ; catégorie : peripheriques (guide et comparatif)
- [ ] Bureau pour ordinateur et imprimante : les modèles avec tablette et rangement : requête « bureau pour ordinateur et imprimante » ; catégorie : mobilier (comparatif)

## Mobilier & Confort


## Périphériques


## Audio & Visio

- [ ] Bras articulé pour microphone : libérer le bureau et bien placer le micro ; catégorie : audio-visio
- [ ] Support / trépied pour webcam externe : cadrer correctement en visio ; catégorie : audio-visio
- [ ] Casque à conduction osseuse pour le bureau : garder une oreille sur son environnement ; catégorie : audio-visio
- [ ] Webcam 2K : le bon compromis entre 1080p et 4K ; catégorie : audio-visio

## Divers / transversal

- [ ] Multiprise parasurtenseur pour setup : protéger écran et ordinateur ; catégorie : mobilier
- [ ] Chargeur USB-C multiport de bureau : recharger tous ses appareils d'un coup ; catégorie : peripheriques
- [ ] Onduleur (UPS) pour le télétravail : ne rien perdre en cas de coupure ; catégorie : peripheriques
- [ ] Kit de nettoyage écran et clavier : entretenir son matériel sans l'abîmer ; catégorie : mobilier

## Conseils (sans produit, secours si captcha Amazon bloque l'article du jour)

Utilisée quand `check-product.sh` renvoie `CAPTCHA=1` avant qu'un produit soit
validé : au lieu d'abandonner la rédaction du jour, on publie un article de
conseil sans bloc `products:`, insensible au captcha. Format identique, sans
tag catégorie imposé (choisir mobilier/peripheriques/audio-visio selon le sujet).

- [ ] Pourquoi tu as mal aux cervicales en télétravail (et comment corriger sans acheter) ; catégorie : mobilier (sans produit)
- [ ] Organiser son bureau pour réduire la fatigue visuelle ; catégorie : peripheriques (sans produit)
- [ ] Le syndrome du canal carpien au bureau : signes et prévention ; catégorie : peripheriques (sans produit)
- [ ] Bien préparer sa visio (son, lumière, cadrage) sans acheter de matériel ; catégorie : audio-visio (sans produit)

## Ajouts (réserve)

- [ ] Panneau acoustique de bureau : réduire l'écho en visio ; catégorie : mobilier
- [ ] Rehausseur d'écran avec rangement ; catégorie : mobilier
- [ ] Chargeur à induction de bureau ; catégorie : peripheriques
- [ ] Clavier sans fil compact pour voyage ; catégorie : peripheriques
- [ ] Souris de voyage fine et silencieuse ; catégorie : peripheriques
- [ ] Enceinte PC compacte pour le télétravail ; catégorie : audio-visio
- [ ] Support / stand pour casque audio ; catégorie : audio-visio
- [ ] Webcam 4K avec cadrage automatique ; catégorie : audio-visio
- [ ] Casque sans fil longue autonomie pour le bureau ; catégorie : audio-visio

## 🔎 Longue traîne (audit SEO du 22/09/2026)

- [ ] Quel bureau pour un petit studio ou une chambre d'étudiant : compact, pliant, escamotable : les bons formats ; catégorie : mobilier
- [ ] Quelle chaise de bureau pour un grand gabarit ou une forte charge : charge admise, largeur d'assise, réglages ; catégorie : mobilier
