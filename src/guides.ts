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
      'Ce guide couvre les périphériques autour du PC. Pour la tour elle-même — processeur, carte graphique, RAM et le reste — direction notre <a href="/guide-pc-gaming/">guide PC gaming pièce par pièce</a>, avec des configurations complètes selon le budget.',
    ],
    articles: [
      'quelle-config-pc-gaming-choisir',
      'cout-reel-setup-gaming-complet',
      'meilleures-chaises-gaming',
      'souris-gaming-pour-le-travail',
      'claviers-mecaniques-silencieux',
      'bras-support-ecran-articule',
      'rangement-cables-bureau',
      'tapis-souris-xxl-bureau',
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
  {
    slug: 'mal-de-dos',
    icon: '🦴',
    title: 'Mal de dos au bureau : soulager et prévenir',
    description:
      "Bas du dos douloureux en fin de journée ? Le guide des accessoires qui soulagent vraiment : soutien lombaire, assise, bureau assis-debout et bons réglages.",
    intro: [
      "Le mal de dos est la gêne numéro un des postes assis. Après quelques heures, le bas du dos tire, on s'avachit, et la douleur s'installe jour après jour. La cause est presque toujours la même : une assise qui ne soutient pas la courbe naturelle du dos et une position figée trop longtemps.",
      "Bonne nouvelle : on n'a pas besoin de tout changer. Un bon soutien lombaire, une assise qui répartit la pression, la possibilité d'alterner assis et debout, et surtout de bons réglages de départ suffisent à faire une vraie différence. Ce guide réunit nos comparatifs classés du geste gratuit à l'équipement, à piocher selon ce qui te fait le plus mal.",
    ],
    articles: [
      'bien-regler-chaise-ecran-ergonomie-gratuite',
      'coussin-lombaire-chaise-bureau',
      'coussin-assise-ergonomique-coccyx',
      'bureau-assis-debout-electrique',
      'tabouret-assis-debout-siege-selle-bureau',
      'repose-pieds-ergonomique-bureau',
      'meilleures-chaises-gaming',
    ],
  },
  {
    slug: 'douleurs-poignet',
    icon: '🖐️',
    title: 'Douleurs au poignet et à la main : quoi changer',
    description:
      "Poignet qui chauffe, engourdissements, tendinite naissante : le guide des souris, claviers et repose-poignets qui soulagent les mains à l'ordinateur.",
    intro: [
      "Souris et clavier sont sous nos mains toute la journée, et ce sont eux qui déclenchent le plus de troubles musculo-squelettiques : poignet qui chauffe, picotements dans les doigts, avant-bras tendu. Le coupable habituel, c'est une main pliée ou tordue des heures durant dans une position que le corps n'aime pas.",
      "La solution passe rarement par un seul produit miracle, mais par un geste plus naturel : un poignet droit, une main moins crispée, moins de trajets inutiles. Ce guide compare les formats qui y aident vraiment — souris verticale, trackball, clavier séparé, repose-poignet — avec, pour chacun, à qui il s'adresse et ses limites.",
    ],
    articles: [
      'souris-ergonomique-verticale',
      'trackball-vs-souris-classique-poignet',
      'repose-poignet-clavier-souris',
      'clavier-ergonomique-separe',
      'clavier-compact-tkl-sans-pave-numerique',
    ],
  },
  {
    slug: 'petit-bureau-rangement',
    icon: '📦',
    title: 'Petit bureau : gagner de la place et ranger',
    description:
      "Bureau étroit et encombré ? Le guide pour libérer le plateau et travailler au calme sur un petit espace : format compact, rangement et gestion des câbles.",
    intro: [
      "Sur un petit bureau, chaque centimètre compte. Un plateau encombré, des câbles qui pendent et un clavier trop large finissent par gêner la souris, la concentration et l'envie de s'y installer. Le problème n'est pas la taille du bureau, mais la façon dont l'espace est occupé.",
      "L'idée : choisir du matériel qui prend moins de place, sortir le superflu du plateau et discipliner les câbles une bonne fois. Ce guide réunit nos comparatifs orientés gain de place — format compact, rangement sous le bureau, connectique tout-en-un — pour transformer un coin étroit en poste net et agréable.",
    ],
    articles: [
      'chaise-bureau-sans-accoudoirs-petit-espace',
      'clavier-compact-tkl-sans-pave-numerique',
      'caisson-rangement-sous-bureau',
      'rangement-cables-bureau',
      'hub-usb-c-station-accueil',
      'support-ordinateur-portable-ergonomique',
      'tapis-souris-xxl-bureau',
    ],
  },
];
