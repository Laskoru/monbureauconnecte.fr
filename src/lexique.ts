// Lexique / FAQ transversale : définitions courtes des termes qu'on croise en
// équipant un bureau. Chaque entrée cible une requête longue traîne du type
// « VESA c'est quoi », « switch linéaire ou tactile », « nits écran ».
//
// Pour ajouter un terme : une entrée ici suffit, la page /lexique se génère
// seule et alimente le rich snippet FAQ (JSON-LD).

export interface LexiqueEntry {
  term: string; // le terme, tel qu'affiché
  question: string; // la question réelle tapée dans Google (sert au JSON-LD FAQ)
  answer: string; // réponse courte, honnête, 2-4 phrases
  group: string; // regroupement thématique
  related?: string[]; // slugs d'articles à lier
}

export const lexiqueGroups = [
  'Ergonomie & posture',
  'Écrans & image',
  'Claviers & souris',
  'Son & visio',
  'Connectique',
] as const;

export const lexique: LexiqueEntry[] = [
  // ---- Ergonomie & posture ----
  {
    term: 'Support lombaire',
    question: "Qu'est-ce qu'un support lombaire sur une chaise de bureau ?",
    answer:
      "C'est la partie du dossier qui vient épouser le creux du bas du dos pour en maintenir la courbure naturelle. Sans lui, le dos a tendance à s'arrondir au fil des heures, ce qui concentre la pression sur les vertèbres lombaires. Un bon support est réglable en hauteur et en profondeur, pour s'adapter à la morphologie plutôt que l'inverse.",
    group: 'Ergonomie & posture',
    related: ['coussin-lombaire-chaise-bureau', 'meilleures-chaises-gaming'],
  },
  {
    term: 'Assise dynamique',
    question: "Que veut dire « assise dynamique » ?",
    answer:
      "C'est le fait de changer régulièrement de position plutôt que de rester figé. Concrètement : un dossier qui suit les mouvements du dos, une inclinaison libre, ou l'alternance assis/debout dans la journée. L'idée de fond est simple — la meilleure posture est toujours la suivante, aucune position n'est bonne pendant huit heures d'affilée.",
    group: 'Ergonomie & posture',
    related: ['bureau-assis-debout-electrique'],
  },
  {
    term: 'Hauteur de bureau idéale',
    question: 'À quelle hauteur régler son bureau ?',
    answer:
      "Assis, les avant-bras doivent être à peu près horizontaux, coudes à 90°, épaules relâchées : cela correspond souvent à 70-75 cm pour une personne de taille moyenne. Debout, la hauteur monte généralement entre 100 et 120 cm selon la taille. Le repère fiable reste le corps, pas le chiffre : si les épaules montent ou que les poignets cassent vers le haut, le plateau est trop haut.",
    group: 'Ergonomie & posture',
    related: ['bureau-assis-debout-electrique', 'repose-pieds-ergonomique-bureau'],
  },
  {
    term: 'Syndrome du canal carpien',
    question: "Le matériel de bureau peut-il causer un syndrome du canal carpien ?",
    answer:
      "Une souris ou un clavier mal adaptés n'en sont pas la cause unique, mais une position du poignet cassée et répétée toute la journée est un facteur aggravant reconnu. Garder le poignet dans l'axe de l'avant-bras — ce que favorisent une souris verticale ou un clavier séparé — réduit cette contrainte. En cas de fourmillements ou d'engourdissements persistants, il faut consulter, pas empiler les accessoires.",
    group: 'Ergonomie & posture',
    related: ['souris-ergonomique-verticale', 'clavier-ergonomique-separe'],
  },

  // ---- Écrans & image ----
  {
    term: 'VESA',
    question: 'Que signifie la norme VESA pour un écran ?',
    answer:
      "VESA désigne l'écartement standardisé des trous de fixation à l'arrière d'un écran, exprimé en millimètres : 75 × 75 ou 100 × 100 pour la majorité des moniteurs de bureau, davantage pour les grandes diagonales. C'est ce qui permet de monter l'écran sur un bras articulé ou un support mural. Avant d'acheter un bras, il faut vérifier deux choses : la norme VESA de l'écran et la charge maximale supportée par le bras.",
    group: 'Écrans & image',
    related: ['bras-support-ecran-articule'],
  },
  {
    term: 'Nits (luminosité)',
    question: 'Combien de nits faut-il pour un écran de bureau ?',
    answer:
      "Le nit mesure la luminosité d'un écran. Pour un bureau dans une pièce normalement éclairée, 250 à 300 nits suffisent largement. Au-delà de 400 nits, l'intérêt concerne surtout les pièces très lumineuses ou le contenu HDR. Un écran trop lumineux dans une pièce sombre fatigue davantage les yeux qu'il n'aide.",
    group: 'Écrans & image',
  },
  {
    term: 'Taux de rafraîchissement (Hz)',
    question: "Qu'est-ce que le taux de rafraîchissement d'un écran ?",
    answer:
      "Exprimé en hertz, il indique combien de fois par seconde l'image est redessinée. 60 Hz est la norme bureautique et convient parfaitement au travail ; 120 Hz ou plus apporte une fluidité nettement perceptible en jeu, et un défilement plus doux au quotidien. Pour de la bureautique pure, mieux vaut investir dans la définition et le confort visuel que dans les hertz.",
    group: 'Écrans & image',
  },
  {
    term: 'Lumière bleue',
    question: 'Faut-il se protéger de la lumière bleue des écrans ?',
    answer:
      "Les preuves d'une lésion oculaire directe due aux écrans sont faibles ; en revanche, l'exposition lumineuse le soir perturbe bien l'endormissement. Les modes « lumière chaude » intégrés aux systèmes et une bonne lampe de bureau font l'essentiel du travail. La fatigue visuelle vient plus souvent d'un éclairage mal réglé, d'un manque de pauses et d'un écran mal positionné que de la lumière bleue elle-même.",
    group: 'Écrans & image',
    related: ['lampe-bureau-led-anti-fatigue'],
  },

  // ---- Claviers & souris ----
  {
    term: 'Switch (linéaire, tactile, clicky)',
    question: 'Quelle différence entre switch linéaire, tactile et clicky ?',
    answer:
      "Le switch est le mécanisme sous chaque touche d'un clavier mécanique. Un switch linéaire descend de façon régulière et silencieuse, apprécié en jeu ; un tactile marque une petite bosse au point d'activation, agréable pour taper longtemps ; un clicky ajoute à cela un clic sonore franc, satisfaisant mais bruyant en open space ou en visio.",
    group: 'Claviers & souris',
    related: ['claviers-mecaniques-silencieux'],
  },
  {
    term: 'DPI',
    question: 'Que signifie le DPI d\'une souris ?',
    answer:
      "Le DPI (points par pouce) exprime la sensibilité du capteur : plus il est élevé, plus le curseur parcourt de distance à l'écran pour un même mouvement de la main. Les chiffres marketing très élevés (16 000, 26 000 DPI) n'ont guère d'intérêt pratique — la plupart des gens travaillent confortablement entre 800 et 1 600 DPI. La régularité du capteur compte bien plus que sa valeur maximale.",
    group: 'Claviers & souris',
    related: ['souris-ergonomique-verticale'],
  },
  {
    term: 'Format TKL / 60 %',
    question: "Qu'est-ce qu'un clavier TKL ou 60 % ?",
    answer:
      "Ces formats décrivent ce qu'on retire d'un clavier complet. Le TKL (tenkeyless) supprime le pavé numérique, ce qui rapproche la souris du corps et soulage l'épaule — un vrai gain ergonomique pour qui n'utilise pas le pavé. Le 60 % va plus loin en retirant aussi les touches de fonction et les flèches, accessibles via une touche de fonction : très compact, mais avec un temps d'adaptation.",
    group: 'Claviers & souris',
    related: ['claviers-mecaniques-silencieux', 'clavier-ergonomique-separe'],
  },

  // ---- Son & visio ----
  {
    term: 'ANC (réduction de bruit active)',
    question: 'Comment fonctionne la réduction de bruit active ?',
    answer:
      "Des micros captent le bruit ambiant et le casque émet une onde inverse qui l'annule en grande partie. C'est très efficace sur les bruits graves et continus — ventilation, moteur, brouhaha lointain — beaucoup moins sur les voix proches et les sons brefs. Pour isoler d'un collègue qui parle à côté, l'isolation passive et le confort des coussinets comptent autant que l'ANC.",
    group: 'Son & visio',
    related: ['casque-reduction-bruit-teletravail'],
  },
  {
    term: 'Micro cardioïde',
    question: "Qu'est-ce qu'un micro cardioïde ?",
    answer:
      "C'est une directivité : le micro capte surtout ce qui vient de l'avant et atténue les côtés et l'arrière. C'est le réglage à privilégier en visio et en podcast, car il capte la voix sans ramener tout le bruit de la pièce. Les micros USB proposant plusieurs directivités permettent de basculer en omnidirectionnel pour enregistrer plusieurs personnes autour d'une table.",
    group: 'Son & visio',
    related: ['micro-usb-visioconference-podcast'],
  },
  {
    term: 'Température de couleur (K)',
    question: 'Quelle température de couleur choisir pour la visio ?',
    answer:
      "Mesurée en kelvins, elle décrit la teinte de la lumière : environ 2 700 K pour une lumière chaude et orangée, 6 500 K pour une lumière froide proche du jour. Pour la visio, l'important est surtout de ne pas mélanger deux températures très différentes dans le champ de la caméra, ce qui donne un teint verdâtre ou orangé. Un éclairage réglable autour de 4 000-5 000 K reste la valeur sûre.",
    group: 'Son & visio',
    related: ['ring-light-eclairage-visio', 'lampe-bureau-led-anti-fatigue'],
  },

  // ---- Connectique ----
  {
    term: 'USB-C / Thunderbolt',
    question: 'Quelle différence entre USB-C et Thunderbolt ?',
    answer:
      "USB-C désigne la forme du connecteur, pas ce qu'il sait faire : deux ports identiques peuvent avoir des capacités très différentes. Thunderbolt est un protocole qui emprunte ce connecteur et garantit des débits élevés, plusieurs écrans et une charge puissante. D'où les mauvaises surprises : un port USB-C peut très bien ne pas gérer la vidéo si le fabricant ne l'a pas prévu.",
    group: 'Connectique',
    related: ['hub-usb-c-station-accueil'],
  },
  {
    term: 'Power Delivery (PD)',
    question: "Qu'est-ce que le Power Delivery sur un hub USB-C ?",
    answer:
      "Le Power Delivery permet de faire passer la charge de l'ordinateur par le même câble que les données. Sur un hub, il faut regarder la puissance réellement restituée à la machine : une partie est consommée par le hub lui-même, donc un hub annoncé à 100 W en délivre souvent 85 à 90. Pour un portable exigeant, viser au-dessus de ses besoins évite qu'il se décharge en pleine journée de travail.",
    group: 'Connectique',
    related: ['hub-usb-c-station-accueil'],
  },
  {
    term: 'Station d\'accueil vs hub',
    question: 'Faut-il un hub USB-C ou une station d\'accueil ?',
    answer:
      "Un hub est compact, alimenté par l'ordinateur, et suffit pour ajouter quelques ports et un écran. Une station d'accueil dispose de sa propre alimentation, gère plusieurs écrans et davantage de périphériques de façon plus stable. La règle simple : un seul écran et quelques accessoires nomades → hub ; poste fixe avec deux écrans, Ethernet et beaucoup de périphériques → station d'accueil.",
    group: 'Connectique',
    related: ['hub-usb-c-station-accueil'],
  },
];
