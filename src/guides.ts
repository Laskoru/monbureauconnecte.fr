// Pages "guides / hubs" : des pages thématiques qui regroupent plusieurs
// articles autour d'un besoin large (ex. « s'équiper pour le télétravail »).
// Elles ciblent des requêtes générales et renforcent le maillage interne.
//
// Pour ajouter un guide : ajoute une entrée ici avec ses paragraphes d'intro
// et la liste des slugs d'articles à mettre en avant. La page se génère seule.

export interface Guide {
  slug: string;
  icon: string;
  title: string;
  description: string; // méta-description SEO
  intro: string[]; // paragraphes affichés en haut du guide
  articles: string[]; // slugs d'articles à regrouper (dans l'ordre souhaité)
}

export const guides: Guide[] = [
  {
    slug: 'teletravail',
    icon: '🏠',
    title: 'Bien s’équiper pour le télétravail',
    description:
      'Le guide complet pour équiper un poste de télétravail confortable et efficace : bureau, image et son en visio, connectique et éclairage.',
    intro: [
      "Travailler depuis chez soi demande un peu plus qu'un ordinateur portable posé sur la table de la cuisine. Un poste de télétravail bien pensé, c'est moins de fatigue en fin de journée, des visioconférences où l'on vous voit et vous entend clairement, et un espace qui se range en quelques secondes quand la journée est finie.",
      "Ce guide rassemble nos comparatifs les plus utiles pour bâtir un poste complet, étape par étape : de quoi alterner assis et debout, une image et un son nets pour les réunions, la bonne connectique pour tout brancher d'un seul câble, et un éclairage qui ménage les yeux. Pas besoin de tout acheter d'un coup : commence par ce qui te gêne le plus au quotidien.",
    ],
    articles: [
      'bureau-assis-debout-electrique',
      'support-ordinateur-portable-ergonomique',
      'webcams-1080p-vs-4k',
      'casque-reduction-bruit-teletravail',
      'micro-usb-visioconference-podcast',
      'ring-light-eclairage-visio',
      'hub-usb-c-station-accueil',
      'lampe-bureau-led-anti-fatigue',
    ],
  },
  {
    slug: 'setup-gaming',
    icon: '🎮',
    title: 'Composer un setup gaming confortable',
    description:
      'Chaise, périphériques, écrans et rangement : le guide pour monter un setup gaming agréable sur les longues sessions, sans se ruiner.',
    intro: [
      "Un bon setup gaming, ce n'est pas qu'une question de puissance : c'est surtout du confort sur la durée. Les longues sessions révèlent vite les mauvais choix — une chaise qui fait mal au dos, des câbles qui s'emmêlent, un écran mal placé qui force la nuque.",
      "On a réuni ici les comparatifs qui comptent pour un poste où l'on passe des heures : de quoi bien s'asseoir, taper et viser, positionner ses écrans, et garder un bureau net. L'objectif : un espace où l'on se sent bien manette ou souris en main, pas seulement une vitrine.",
    ],
    articles: [
      'meilleures-chaises-gaming',
      'claviers-mecaniques-silencieux',
      'souris-ergonomique-verticale',
      'bras-support-ecran-articule',
      'rangement-cables-bureau',
      'tapis-sol-chaise-bureau',
    ],
  },
  {
    slug: 'ergonomie-bureau',
    icon: '💪',
    title: 'Éviter les douleurs au bureau : le guide ergonomie',
    description:
      'Poignets, dos, nuque, yeux : le guide des accessoires ergonomiques pour travailler sans douleurs, avec nos critères de choix et nos sélections.',
    intro: [
      "Passer plusieurs heures par jour au même poste finit par se sentir : tensions dans le bas du dos, poignets endoloris, nuque raide, yeux fatigués en fin d'après-midi. La bonne nouvelle, c'est que la plupart de ces gênes se préviennent avec quelques accessoires bien choisis, sans changer tout son matériel.",
      "Ce guide regroupe nos comparatifs orientés confort et santé au travail. On y aborde la posture (assise, hauteur de bureau, position de l'écran), les points d'appui (poignets, pieds) et la fatigue visuelle. Chaque article part d'un problème concret et propose des solutions à différents budgets.",
    ],
    articles: [
      'meilleures-chaises-gaming',
      'bureau-assis-debout-electrique',
      'souris-ergonomique-verticale',
      'clavier-ergonomique-separe',
      'repose-pieds-ergonomique-bureau',
      'bras-support-ecran-articule',
      'support-ordinateur-portable-ergonomique',
    ],
  },
];
