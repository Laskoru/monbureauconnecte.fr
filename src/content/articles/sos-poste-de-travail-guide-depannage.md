---
title: "SOS poste de travail : le guide de dépannage par panne"
description: "Souris, clavier, écran, USB, webcam, imprimante : le guide SOS poste de travail pour trouver vite le bon réflexe et la bonne fiche de dépannage."
pubDate: 2026-11-03
updatedDate: 2026-11-03
author: "Hugo B."
pinHook: "Un truc *qui ne marche plus* sur ton bureau ?"
pinSub: "Souris, écran, USB, webcam : le bon réflexe, classé par panne."
keywords: ["sos poste de travail", "panne poste de travail", "ordinateur de bureau qui ne fonctionne plus", "dépannage matériel bureau"]
category: "peripheriques"
coverImage: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE3MjIwfDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwZGVzayUyMGtleWJvYXJkJTIwbW91c2UlMjBtb25pdG9yJTIwc2V0dXB8ZW58MHwwfHx8MTc5MzY4MzE3Nnwy&ixlib=rb-4.1.0&q=80&w=1080"
coverAlt: "Écran d'ordinateur, clavier et manettes de jeu posés sur un bureau blanc, dans un espace de travail épuré"
draft: false
faq:
  - question: "Pourquoi Windows ne propose pas automatiquement le bon pilote ?"
    answer: "Microsoft réserve une partie des pilotes à une installation manuelle : ils n'apparaissent pas tout seuls, il faut aller les chercher dans Paramètres > Windows Update > Options avancées > Mises à jour facultatives. Si rien n'apparaît là, le site du fabricant reste la source la plus fiable."
  - question: "La mise en veille suffit-elle à relancer un périphérique bloqué ?"
    answer: "Non. Un redémarrage complet coupe réellement l'alimentation des ports et relance les pilotes, ce que la mise en veille ne fait pas : elle laisse le système dans le même état, avec le même blocage."
  - question: "Faut-il désinstaller son antivirus pour régler une panne de webcam ou de port USB ?"
    answer: "Non, il suffit de le désactiver quelques minutes pour voir si le blocage disparaît. Si c'est le cas, mieux vaut chercher le réglage précis à autoriser dans le logiciel de sécurité plutôt que de le désinstaller, et contacter l'éditeur si l'option n'existe pas."
sources:
  - label: "Microsoft Support, « Obtenir automatiquement les pilotes matériels recommandés et mis à jour »"
    url: "https://support.microsoft.com/fr-fr/windows/obtenir-automatiquement-les-pilotes-mat%C3%A9riels-recommand%C3%A9s-et-mis-%C3%A0-jour-0549a8d9-4842-8acb-75fa-a6faadb62507"
  - label: "Microsoft Support, « L'appareil photo ne fonctionne pas dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/camera/camera-doesn-t-work-in-windows"
  - label: "Microsoft Support, « Use Mouse keys to move the mouse pointer »"
    url: "https://support.microsoft.com/windows/9e0c72c8-b882-7918-8e7b-391fd62adf33"
  - label: "Microsoft Support, « Résoudre les problèmes liés à l'USB-C dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/fix-usb-c-problems-in-windows"
---

SOS poste de travail : quand un périphérique, un écran ou une imprimante arrête de répondre, le bon réflexe dépend du symptôme exact. Ce guide classe les pannes les plus fréquentes du bureau par appareil, avec le premier geste à tenter avant de penser au remplacement, et la fiche détaillée pour aller plus loin.

Changer un périphérique avant d'avoir identifié la vraie cause coûte souvent plus cher que nécessaire : une souris ou un clavier remplacé pour rien, un câble jeté alors que c'était le port qui posait problème. Le classement ci-dessous part du symptôme, pas de l'appareil, pour aller directement au bon réflexe.

## Souris et clavier qui ne répondent plus

Ta souris saute, bouge seule, ou ton clavier tape les mauvais caractères ? Trois vérifications évitent souvent un achat inutile.

- **La souris bouge toute seule ou le curseur saute** : regarde d'abord le capteur, la surface et les piles si le modèle est sans fil, et vérifie que le pavé tactile du portable n'est pas resté actif en parallèle. Détail des réglages dans [souris qui bouge toute seule](/articles/souris-qui-bouge-toute-seule/).
- **Le pavé numérique ne répond plus, ou déplace le curseur au lieu d'écrire** : commence par la touche Verr Num, puis regarde si la fonction d'accessibilité « Mouse keys » de Windows a été activée par erreur. Elle détourne le pavé pour piloter la souris (4, 6, 8 et 2 pour les directions, 5 pour cliquer) et se désactive dans Paramètres > Accessibilité > Souris. La marche à suivre complète est dans [pavé numérique ne fonctionne plus](/articles/pave-numerique-ne-fonctionne-plus/).
- **Le clavier d'un PC portable efface au lieu d'écrire, ou passe en QWERTY** : avant de soupçonner une panne matérielle, vérifie les combinaisons Inser et Alt + Maj, souvent déclenchées par erreur. Le détail par symptôme est dans [clavier qui ne fonctionne plus sur PC portable](/articles/clavier-pc-portable-ne-fonctionne-plus/).

## Écran qui reste noir ou qui clignote

Un écran qui ne s'allume pas n'est pas forcément mort : câble, entrée vidéo et carte graphique sont à vérifier avant de penser à une panne définitive.

- **Le deuxième écran n'est pas détecté en HDMI** : essaie d'abord le raccourci Windows + P, puis le bouton Détecter du moniteur, avant de remettre en cause le câble ou le pilote. Étapes dans [écran PC ne détecte pas le HDMI](/articles/deuxieme-ecran-non-detecte-hdmi/).
- **L'écran ne s'allume pas du tout au démarrage alors que la tour tourne** : regarde si le logo du BIOS apparaît. Sa présence ou son absence oriente directement vers le câble, l'entrée vidéo ou la carte graphique plutôt que vers la mémoire. Diagnostic complet dans [écran PC ne s'allume pas au démarrage](/articles/ecran-pc-ne-s-allume-pas-demarrage/).
- **L'écran devient noir puis revient, par intermittence** : teste dans l'ordre le câble et le port vidéo, le pilote de la carte graphique, les paramètres de mise en veille, puis la fréquence d'affichage choisie. Le moment précis où le noir apparaît (en jeu, après une veille, en changeant de fenêtre) oriente vers la bonne case avant même de tester quoi que ce soit. Méthode pas à pas dans [écran PC noir par intermittence](/articles/ecran-pc-noir-par-intermittence/).

## USB-C, hub et connectique qui lâchent

- **Un port USB-C ne charge plus ou ne reconnaît plus l'écran branché dessus** : Microsoft rappelle que tous les ports USB-C d'un même PC ne font pas forcément la même chose, l'un gère la charge, l'autre l'affichage. Débranche tout hub intermédiaire pour brancher l'appareil directement sur le PC, essaie un autre port, et nettoie le port à l'air comprimé avant de soupçonner une panne. Liste des vérifications dans [port USB-C ne fonctionne plus](/articles/port-usb-c-ne-fonctionne-plus/).
- **Le hub USB-C ou la station d'accueil ne suit plus (écran qui clignote, charge absente)** : vérifie la puissance et la norme du hub face au nombre d'écrans branchés, souvent la vraie cause derrière ces coupures. Comparatif des deux solutions dans [hub USB-C et station d'accueil](/articles/hub-usb-c-station-accueil/).

## Webcam et micro muets en visio

- **La webcam reste noire sous Windows 11** : regarde d'abord le réglage de confidentialité qui bloque les applications de bureau, avant même de penser au pilote. C'est la cause la plus fréquente derrière un écran noir qui fonctionne pourtant dans l'application Caméra. Méthode complète dans [comment activer ma webcam sur Windows 11](/articles/webcam-ne-fonctionne-pas-windows-11/).
- **Le micro est trop faible en réunion malgré un volume au maximum** : le niveau d'entrée Windows et l'amplification logicielle font souvent plus de différence que le micro lui-même, avant de penser à en changer. Vérifie aussi que c'est bien le bon périphérique qui est sélectionné par défaut : un micro d'écran ou de webcam resté actif en parallèle du casque donne exactement ce symptôme. Réglages détaillés dans [micro trop faible Windows 11](/articles/micro-trop-faible-windows-11/).

## Imprimante qui ne répond pas

Les pannes d'imprimante se règlent rarement en changeant de matériel : la fiche technique du modèle précis répond presque toujours à la question, bien avant un remplacement.

- **L'imprimante doit fonctionner sans ordinateur allumé à côté** : la plupart des modèles récents permettent d'imprimer directement depuis un téléphone ou une clé USB, mais la méthode exacte (et les formats de fichiers acceptés depuis une clé) dépend de la marque et du modèle. Le détail selon les fabricants est dans [une imprimante peut-elle fonctionner sans ordinateur](/articles/imprimante-sans-ordinateur/).
- **Une seule cartouche est vide et l'impression est bloquée** : certains fabricants prévoient un mode d'impression en noir temporaire quand une cartouche couleur est vide, d'autres bloquent toute impression jusqu'au remplacement. Les règles par marque sont listées dans [une imprimante peut-elle fonctionner avec une seule cartouche](/articles/imprimer-avec-une-seule-cartouche/).

## SOS poste de travail : l'ordre des vérifications quand rien ne marche

Avant de changer un périphérique, un ordre précis évite le plus d'allers-retours inutiles. Commence par le branchement physique (câble, port, pile), puis un redémarrage complet : la mise en veille ne réinitialise pas les ports USB ni les pilotes, contrairement à un arrêt suivi d'un vrai redémarrage.

Passe ensuite par le Gestionnaire de périphériques : un point d'exclamation jaune sur une ligne signale un conflit, et ses propriétés affichent un code d'erreur précis dans l'onglet État du périphérique, bien plus utile qu'un simple « ça ne marche pas » pour chercher une solution. Lance de là une recherche de modifications matérielles, puis regarde les pilotes facultatifs de Windows Update, que Microsoft ne propose jamais automatiquement : il faut aller les chercher dans Paramètres > Windows Update > Options avancées > Mises à jour facultatives.

Ce réflexe, dans cet ordre, résout une large part des pannes listées ci-dessus sans démonter ni remplacer quoi que ce soit. Et quand un doute reste entre deux causes, brancher le périphérique suspect sur un autre appareil, ou tester un autre périphérique sur le même port, tranche presque toujours plus vite qu'une recherche en ligne.
