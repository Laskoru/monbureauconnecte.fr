// Pages "par budget" : une porte d'entrée qui regroupe les comparatifs selon
// l'enveloppe qu'on veut y mettre. Purement additif (comme guides.ts) : on ne
// touche pas aux catégories des articles, on liste juste des slugs par palier.
//
// Pour ajuster : modifie les listes `articles` (ordre = ordre d'affichage).

export interface Budget {
  slug: string;
  icon: string;
  label: string;
  tagline: string; // phrase courte affichée sous le titre sur l'accueil
  range: string; // repère de prix indicatif
  description: string; // méta-description SEO
  intro: string[]; // paragraphes en haut de la page
  articles: string[]; // slugs d'articles à regrouper
}

export const budgets: Budget[] = [
  {
    slug: 'petit-budget',
    icon: '🪙',
    label: 'Petit budget',
    tagline: "S'équiper malin sans se ruiner",
    range: 'souvent moins de 40 €',
    description:
      "Améliorer son poste de travail sans se ruiner : notre sélection d'accessoires malins à petit prix (et même gratuits) qui changent le confort au quotidien.",
    intro: [
      "On peut transformer son confort au bureau pour très peu — parfois même sans rien dépenser. Avant d'investir dans du gros matériel, ce sont souvent les petits accessoires bien choisis, et surtout les bons réglages, qui font la plus grande différence.",
      "Cette sélection regroupe nos comparatifs les plus abordables, du geste gratuit à l'accessoire à quelques dizaines d'euros. De quoi corriger l'essentiel — dos, poignets, désordre, éclairage — avec le meilleur rapport entre le coût et le bénéfice ressenti.",
    ],
    articles: [
      'bien-regler-chaise-ecran-ergonomie-gratuite',
      'coussin-lombaire-chaise-bureau',
      'repose-poignet-clavier-souris',
      'repose-pieds-ergonomique-bureau',
      'rangement-cables-bureau',
      'lampe-bureau-led-anti-fatigue',
      'tapis-souris-xxl-bureau',
      'souris-sans-fil-silencieuse',
      'plante-bureau-depolluante',
    ],
  },
  {
    slug: 'equilibre',
    icon: '⚖️',
    label: 'Équilibré',
    tagline: 'Le meilleur rapport qualité-prix',
    range: 'environ 50 à 150 €',
    description:
      "Le bon rapport qualité-prix pour équiper un poste de télétravail confortable : nos comparatifs d'accessoires ni premiers prix ni haut de gamme, ceux qui durent.",
    intro: [
      "C'est la zone la plus intéressante : ni le premier prix qui déçoit vite, ni le haut de gamme qu'on ne rentabilise pas. Des accessoires bien conçus, fiables dans le temps, au tarif qui reste raisonnable.",
      "On y trouve de quoi soulager le poignet, mieux taper, être net en visio ou remonter son écran à la bonne hauteur — l'équipement du quotidien, choisi pour tenir plusieurs années sans se ruiner.",
    ],
    articles: [
      'souris-ergonomique-verticale',
      'clavier-ergonomique-separe',
      'casque-reduction-bruit-teletravail',
      'support-ordinateur-portable-ergonomique',
      'bras-support-ecran-articule',
      'chaise-bureau-sans-accoudoirs-petit-espace',
      'webcams-1080p-vs-4k',
      'trackball-vs-souris-classique-poignet',
      'caisson-rangement-sous-bureau',
      'coussin-assise-ergonomique-coccyx',
      'ring-light-eclairage-visio',
      'claviers-mecaniques-silencieux',
      'micro-usb-visioconference-podcast',
      'pave-numerique-externe-sans-fil',
      'tapis-sol-chaise-bureau',
    ],
  },
  {
    slug: 'setup-complet',
    icon: '🚀',
    label: 'Setup complet',
    tagline: "L'investissement qui dure",
    range: 'les pièces maîtresses',
    description:
      "Les pièces maîtresses d'un poste de travail haut de gamme : bureau assis-debout, siège, station d'accueil… nos comparatifs pour investir dans du matériel qui dure.",
    intro: [
      "Quand on passe ses journées au bureau, certaines pièces méritent un vrai investissement : ce sont elles qu'on garde des années et qui structurent tout le poste. Mieux vaut y mettre le prix une fois que de racheter deux fois.",
      "Cette sélection réunit les comparatifs des équipements « colonne vertébrale » du poste — de quoi bâtir un setup complet, cohérent et durable, du bureau au siège en passant par la connectique.",
    ],
    articles: [
      'bureau-assis-debout-electrique',
      'meilleures-chaises-gaming',
      'clavier-compact-tkl-sans-pave-numerique',
      'souris-gaming-pour-le-travail',
      'hub-usb-c-station-accueil',
      'bras-support-ecran-articule',
      'tabouret-assis-debout-siege-selle-bureau',
    ],
  },
];

export type BudgetSlug = (typeof budgets)[number]['slug'];
