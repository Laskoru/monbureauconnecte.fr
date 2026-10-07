---
title: "Écran PC qui devient noir par intermittence : le diagnostic"
seoTitle: "Écran PC noir par intermittence : le diagnostic"
description: "Écran PC noir par intermittence ? Câble, veille, pilote graphique ou fréquence d'affichage : la méthode pour trouver la cause exacte, étape par étape."
pubDate: 2026-09-29
updatedDate: 2026-10-07
author: "Hugo B."
pinHook: "Ton écran devient noir *sans prévenir* ?"
pinSub: "Le diagnostic étape par étape, du câble à la carte graphique."
keywords: ["écran pc noir par intermittence", "écran qui devient noir puis revient", "écran noir mise en veille", "pilote graphique écran noir"]
category: "peripheriques"
coverAlt: "Écran d'ordinateur allumé sur un paysage de montagne enneigée, clavier et souris lumineux, mur éclairé en violet"
draft: false
faq:
  - question: "Pourquoi mon écran devient-il noir puis revient tout seul ?"
    answer: "C'est le signe que le signal vidéo est coupé un court instant, sans que le PC redémarre : câble mal fixé, pilote graphique qui se réinitialise ou fréquence d'affichage instable. Pour confirmer que ça vient de Windows et non de l'écran, ouvre l'Observateur d'événements (tape « Observateur d'événements » dans le menu Démarrer) et regarde les événements du fournisseur « Display » ou « nvlddmkm » au moment précis de la coupure : leur présence pointe vers le pilote plutôt que vers le câble."
  - question: "Un écran PC noir par intermittence peut-il venir de la surchauffe ?"
    answer: "C'est possible : une carte graphique qui chauffe trop, surtout en jeu ou en montage vidéo, peut faire planter son pilote (écran noir puis retour) ou provoquer un arrêt complet du PC, en particulier si les ventilateurs sont encrassés. Un logiciel de surveillance des températures (souvent fourni avec le pilote de la carte) permet de vérifier en quelques minutes si les coupures coïncident avec des pics de chaleur plutôt qu'avec la mise en veille ou un changement de fenêtre."
  - question: "Faut-il changer l'écran ou la carte graphique en cas de coupures répétées ?"
    answer: "Pas avant d'avoir testé l'écran sur un autre ordinateur (ou un autre écran sur le même PC) : si les coupures suivent l'écran, il est en cause ; si elles suivent le PC, c'est le pilote, le câble ou la carte graphique. Remplacer une pièce sans ce test revient souvent à changer la mauvaise, alors qu'un changement de câble ou une mise à jour de pilote suffit souvent."
sources:
  - label: "Microsoft Support, « Résolution des problèmes liés aux écrans vides dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/display-graphics/troubleshooting-blank-screens-in-windows"
  - label: "Microsoft Support, « Résoudre les problèmes de scintillement d’écran dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/r%C3%A9soudre-les-probl%C3%A8mes-de-scintillement-de-l-%C3%A9cran-dans-windows-47d5b0a7-89ea-1321-ec47-dc262675fc7b"
  - label: "Microsoft Support, « Résoudre les problèmes de connexions de moniteurs externes sous Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/r%C3%A9soudre-les-probl%C3%A8mes-de-connexions-de-moniteurs-externes-sous-windows-5b46f4a4-9634-06bb-7622-f960facdfd49"
---

Un écran PC noir par intermittence, qui s'éteint puis revient, vient presque toujours de l'une de ces cinq causes : un câble ou un port vidéo mal fixé, un pilote graphique qui se réinitialise, un réglage de mise en veille trop agressif, une fréquence d'affichage mal réglée, ou plus rarement l'écran ou la carte graphique eux-mêmes. La méthode ci-dessous permet de les tester dans l'ordre, du plus simple au plus rare, pour isoler la cause sans changer de pièce au hasard.

## Écran PC noir par intermittence : les cinq causes à tester

Avant de remplacer quoi que ce soit, il vaut mieux savoir à quel moment le noir apparaît : pendant un jeu, juste après une veille, en changeant de fenêtre, ou sans logique apparente. Ce détail oriente directement vers l'une des causes suivantes, à tester dans cet ordre :

1. Le câble ou le port vidéo (HDMI, DisplayPort, USB-C)
2. Le pilote de la carte graphique
3. Les paramètres de mise en veille de Windows
4. La fréquence d'affichage (taux de rafraîchissement)
5. L'écran ou la carte graphique eux-mêmes, en dernier recours

## Le câble ou le port vidéo, à vérifier en premier

C'est la première vérification que recommande Microsoft, et la plus rapide. Un câble HDMI ou DisplayPort mal enfoncé, plié près du connecteur, ou simplement trop long pour la résolution utilisée, coupe le signal quelques secondes avant de le rétablir. Si l'écran est monté sur un [bras articulé](/articles/bras-support-ecran-articule/), vérifie aussi que le câble n'est pas tendu à l'extrémité de la course, un mouvement du bras suffisant parfois à débrancher légèrement le connecteur.

Deux tests suffisent : essaie un autre câble (même un câble emprunté quelques minutes), et branche l'écran sur un autre port vidéo de l'ordinateur si plusieurs sorties sont disponibles. Si les coupures disparaissent avec un autre câble ou un autre port, le diagnostic s'arrête là.

Un adaptateur entre deux normes différentes (USB-C vers HDMI, DisplayPort vers HDMI) mérite une attention particulière : les adaptateurs passifs, sans puce de conversion, ne fonctionnent pas de façon fiable au-delà d'une certaine résolution ou fréquence, et se manifestent justement par des coupures intermittentes plutôt que par une absence totale de signal. Un adaptateur actif, plus cher mais fiable, ou un câble natif dans la bonne norme, règlent généralement ce cas précis.

## Le pilote graphique, la cause la plus fréquente ensuite

Quand le câble est écarté, le pilote de la carte graphique est la suite logique : c'est lui qui gère le signal envoyé à l'écran, et un pilote instable ou mal installé peut le couper brièvement pour se réinitialiser. Le raccourci **touche Windows + Ctrl + Maj + B** force justement cette réinitialisation : Microsoft indique qu'un bip ou un bref scintillement confirme qu'elle a eu lieu. Si l'image revient ainsi pendant une coupure, le pilote devient le suspect numéro un.

Dans le Gestionnaire de périphériques (clic droit sur le menu Démarrer), ouvre la catégorie « Cartes graphiques », puis dans les propriétés de la carte, l'onglet Pilote propose deux options utiles : « Mettre à jour le pilote » si le problème est apparu progressivement, ou « Restaurer le pilote » s'il a commencé juste après une mise à jour, comme le conseille Microsoft. Cette seconde option règle une bonne partie des cas où les coupures ont débuté après une mise à jour Windows ou un pilote installé récemment.

Sur un ordinateur portable équipé de deux cartes graphiques (une puce intégrée au processeur et une carte dédiée), le noir intermittent apparaît parfois au moment précis où Windows bascule d'une carte à l'autre, par exemple en lançant un jeu ou un logiciel de montage. Dans le panneau de configuration du pilote (NVIDIA, AMD ou Intel), forcer temporairement l'application concernée à utiliser une seule des deux cartes graphiques permet de vérifier si la bascule est en cause avant d'aller plus loin dans le diagnostic.

## Écran noir juste après la mise en veille

Si le noir apparaît systématiquement quelques secondes après le réveil de l'ordinateur (sortie de veille, écran de verrouillage), la cause est souvent liée à la gestion d'alimentation plutôt qu'au matériel. Un [hub USB-C ou une station d'accueil](/articles/hub-usb-c-station-accueil/) peut couper le signal vers l'écran externe pendant la mise en veille et tarder à le rétablir au réveil, le temps que Windows redétecte l'affichage.

Deux réglages à vérifier dans les Paramètres d'alimentation de Windows : désactive la « Suspension sélective USB » (elle coupe l'alimentation de certains ports pour économiser l'énergie) et le démarrage rapide si l'ordinateur reste sur un écran noir plusieurs secondes avant d'afficher le bureau. Sur un ordinateur portable relié à un [support externe](/articles/support-ordinateur-portable-ergonomique/), débrancher puis rebrancher le câble vidéo après le réveil force souvent Windows à redétecter l'écran immédiatement.

## Une fréquence d'affichage mal réglée

Un écran réglé sur une fréquence de rafraîchissement supérieure à ce que le câble ou le port peut transmettre de façon stable (144 Hz ou plus sur un câble ancien, par exemple) provoque des coupures qui ressemblent à un écran noir intermittent plutôt qu'à un vrai scintillement. C'est fréquent après une mise à jour Windows qui réinitialise la fréquence par défaut, ou après avoir forcé manuellement une fréquence plus haute que celle recommandée par le fabricant de l'écran.

Dans les Paramètres d'affichage de Windows (Paramètres avancés d'affichage), reviens temporairement à la fréquence recommandée par défaut pour voir si les coupures disparaissent. Si c'est le cas, le câble ou le port vidéo limite la bande passante disponible pour la fréquence plus élevée : un câble récent et certifié pour la norme utilisée (DisplayPort certifié VESA, HDMI Premium High Speed ou Ultra High Speed) résout généralement le problème sans rien changer d'autre.

Le même mécanisme touche les résolutions personnalisées créées dans le panneau du pilote graphique : une résolution ou une fréquence ajoutée manuellement au-delà des valeurs listées par défaut par l'écran peut fonctionner un temps puis provoquer des coupures aléatoires, car elle pousse le câble et l'écran hors des valeurs qu'ils sont censés tenir. Supprimer cette résolution personnalisée et revenir aux valeurs proposées nativement par l'écran élimine cette variable avant de chercher plus loin.

## Comment savoir si le problème vient de l'écran ou de la carte graphique

Une fois le câble, le pilote, la veille et la fréquence écartés, il reste à distinguer l'écran de la carte graphique. Le test le plus fiable consiste à brancher un autre écran sur le même PC : si les coupures persistent, la carte graphique ou le PC sont en cause ; si elles disparaissent, l'écran est défaillant. À l'inverse, brancher l'écran suspect sur un autre ordinateur ou une console confirme rapidement s'il coupe de la même façon ailleurs.

Un indice supplémentaire : un écran noir accompagné de bruits inhabituels du ventilateur, d'artefacts colorés juste avant la coupure, ou de plantages complets du PC oriente plutôt vers la carte graphique ou l'alimentation. Un écran noir propre, sans aucun autre symptôme et qui revient instantanément, pointe plus souvent vers le câble, le port ou un réglage logiciel.

## Ce qu'il faut retenir

- **Teste dans l'ordre** : câble et port vidéo, pilote graphique, paramètres de veille, fréquence d'affichage, puis écran ou carte graphique en dernier.
- **Note le moment exact** où le noir apparaît (jeu, veille, changement de fenêtre) : ce détail oriente directement vers la bonne cause.
- **Le raccourci Windows + Ctrl + Maj + B** réinitialise le pilote graphique et confirme s'il est en cause.
- **Change une seule chose à la fois** (câble, port, réglage) avant de conclure, pour savoir précisément ce qui a réglé le problème.
