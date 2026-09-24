export const categories = [
  {
    slug: 'mobilier',
    icon: '🪑',
    label: 'Mobilier & Confort',
    description: 'Chaises, bureaux réglables et supports pour tenir la journée sans douleurs.',
    intro: `<p>Chaise, bureau, support d’écran : c’est le mobilier qui fixe ta posture pour toute la journée. Avant d’acheter quoi que ce soit, commence par les <a href="/articles/bien-regler-chaise-ecran-ergonomie-gratuite/">réglages gratuits de la chaise et de l’écran</a> : ils corrigent déjà une bonne part des douleurs. Si ta chaise ne se règle pas assez, notre <a href="/articles/meilleures-chaises-gaming/">comparatif des chaises gaming</a> détaille les réglages qui comptent vraiment, à commencer par le soutien lombaire.</p>
<p>Pour casser l’immobilité, un <a href="/articles/bureau-assis-debout-electrique/">bureau assis-debout électrique</a> rend l’alternance facile, et un <a href="/articles/bras-support-ecran-articule/">bras d’écran articulé</a> remonte l’écran au niveau des yeux tout en libérant le plateau. Le reste se joue sur les appuis, selon ce qui te gêne : un <a href="/articles/coussin-lombaire-chaise-bureau/">coussin lombaire</a> pour le bas du dos, un <a href="/articles/repose-pieds-ergonomique-bureau/">repose-pieds</a> si tes pieds ne touchent plus le sol à plat.</p>`,
  },
  {
    slug: 'peripheriques',
    icon: '⌨️',
    label: 'Périphériques',
    description: 'Claviers, souris : le matériel que tu as sous les mains toute la journée.',
    intro: `<p>Clavier et souris restent sous tes mains toute la journée : ce sont eux qui déclenchent le plus souvent les douleurs au poignet. Pour garder la main dans une position plus naturelle, compare la <a href="/articles/souris-ergonomique-verticale/">souris verticale</a>, le <a href="/articles/trackball-vs-souris-classique-poignet/">trackball</a> et le <a href="/articles/clavier-ergonomique-separe/">clavier ergonomique séparé</a>. Chacun demande un temps d’adaptation : nos comparatifs te disent à qui il convient et quelles sont ses limites.</p>
<p>En open space ou en visio, pense aussi au bruit : un <a href="/articles/claviers-mecaniques-silencieux/">clavier mécanique silencieux</a> évite de déranger tes voisins comme tes interlocuteurs. Sur un portable, un <a href="/articles/support-ordinateur-portable-ergonomique/">support</a> associé à un clavier et une souris externes remonte l’écran au niveau des yeux, et une <a href="/articles/hub-usb-c-station-accueil/">station d’accueil USB-C</a> branche écran, réseau et charge sur un seul câble.</p>`,
  },
  {
    slug: 'audio-visio',
    icon: '🎧',
    label: 'Audio & Visio',
    description: 'Casques et webcams pour des visios nettes et un environnement calme.',
    intro: `<p>En visio, ce que les autres perçoivent de toi, c’est d’abord ta voix et ton image. Côté son, un <a href="/articles/micro-usb-visioconference-podcast/">micro USB</a> bien placé isole ta voix, là où le micro intégré capte aussi le clavier et la pièce. Pour travailler au calme, un <a href="/articles/casque-reduction-bruit-teletravail/">casque à réduction de bruit</a> efface surtout les bruits continus ; en open space, des <a href="/articles/ecouteurs-reduction-bruit-open-space/">écouteurs à réduction de bruit</a> se font plus discrets.</p>
<p>Côté image, la résolution compte moins qu’on ne le croit : pour la visio du quotidien, une <a href="/articles/webcams-1080p-vs-4k/">webcam 1080p</a> suffit, et ce qui fait la différence, c’est surtout la gestion de la lumière, l’autofocus et le champ de vision. Un <a href="/articles/ring-light-eclairage-visio/">ring light</a> placé derrière la webcam rattrape une pièce mal éclairée. Et un <a href="/articles/webcam-cache-confidentialite/">cache de webcam</a> reste la seule protection qui ne dépend d’aucun logiciel.</p>`,
  },
  {
    slug: 'pc-gaming',
    icon: '🖥️',
    label: 'PC & Config gaming',
    description: 'Bien choisir sa configuration PC gaming : composants, budget et vrai coût.',
    intro: `<p>Un PC gaming se choisit d’abord selon la définition à laquelle tu joues et le budget que tu te fixes. Notre guide <a href="/articles/quelle-config-pc-gaming-choisir/">quelle config PC gaming choisir</a> t’aide à prioriser les composants, à commencer par la carte graphique, et à trancher entre monter ton PC ou l’acheter tout monté. Pour le détail, le <a href="/guide-pc-gaming/">guide PC gaming pièce par pièce</a> propose des configurations complètes selon le budget.</p>
<p>Le PC n’est pourtant qu’une partie de la facture : écran, périphériques, siège et bureau s’y ajoutent. Notre article sur le <a href="/articles/cout-reel-setup-gaming-complet/">coût réel d’un setup gaming complet</a> montre où économiser et où ne pas lésiner. Et pour les longues sessions, ne néglige pas l’assise : notre <a href="/articles/meilleures-chaises-gaming/">comparatif des chaises gaming</a> détaille les réglages à exiger.</p>`,
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
