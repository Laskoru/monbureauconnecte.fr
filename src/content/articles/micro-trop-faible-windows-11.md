---
title: "Micro trop faible Windows 11 : monter le volume sans saturer"
description: "Micro trop faible sous Windows 11 ? Volume d'entrée, amplification, bon périphérique, réglages Teams : les étapes pour être bien entendu sans saturer."
pubDate: 2026-10-15
updatedDate: 2026-10-15
author: "Hugo B."
pinHook: "On ne t'entend pas *en visio* ?"
pinSub: "Volume d'entrée, amplification, Teams : les bons réglages."
keywords: ["micro trop faible windows 11", "micro casque trop sensible", "micro casque qui grésille", "augmenter volume micro windows 11"]
category: "audio-visio"
coverImage: "https://images.unsplash.com/photo-1673669231301-09baa4d7761b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE3MjIwfDB8MXxzZWFyY2h8M3x8aGVhZHNldCUyMG1pY3JvcGhvbmV8ZW58MHwwfHx8MTc5MjA4MTQyMHwy&ixlib=rb-4.1.0&q=80&w=1080"
coverAlt: "Gros plan sur un casque gaming noir équipé d'un micro sur perche, posé sur un fond noir"
draft: false
faq:
  - question: "Pourquoi mon micro marche dans Windows mais pas dans une application ?"
    answer: "L'application n'a sans doute pas le droit d'utiliser le micro, ou elle utilise un autre périphérique. Dans Paramètres > Confidentialité et sécurité > Microphone, vérifie que l'accès est activé, y compris pour les applications de bureau, puis choisis le bon micro dans les réglages audio de l'application elle-même."
  - question: "L'amplification du micro dégrade-t-elle le son ?"
    answer: "Elle augmente le niveau, mais aussi le souffle et les bruits de fond. Monte d'abord le volume d'entrée et rapproche le micro de ta bouche, puis ajoute de l'amplification par petits paliers en écoutant un enregistrement de test à chaque fois."
  - question: "Faut-il laisser Teams régler la sensibilité du micro tout seul ?"
    answer: "Dans la plupart des cas, oui : l'option Régler automatiquement la sensibilité du micro sert justement à ce que tout le monde t'entende à un niveau constant. Si ta voix monte et descend pendant les réunions, désactive-la pour tester, et règle alors le niveau à la main dans Windows."
sources:
  - label: "Microsoft Support, « Résoudre les problèmes de microphone »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/drivers/fix-microphone-problems"
  - label: "Microsoft Support, « Gérer les paramètres audio dans les réunions Microsoft Teams »"
    url: "https://support.microsoft.com/fr-fr/teams/meetings/manage-audio-settings-in-microsoft-teams-meetings"
  - label: "Microsoft Support, « Corrigez l'audio déformé ou crépitant dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/audio/fix-distorted-or-crackling-audio-in-windows"
---

Un micro trop faible sous Windows 11 se règle en général dans **Paramètres > Système > Son**, section **Entrée** : choisis ton micro, puis monte le **volume d'entrée** en t'enregistrant avec le test intégré. Si ce n'est pas suffisant, vérifie que Windows utilise le bon micro, que ce micro est bien placé, et que ton logiciel de visio ne baisse pas le niveau de son côté.

## Micro trop faible Windows 11 : le volume d'entrée

Ouvre **Démarrer > Paramètres > Système > Son**. Dans la section **Entrée**, clique sur ton micro pour afficher ses propriétés. Sous **Paramètres d'entrée**, lance **Démarrer le test**, parle normalement, arrête le test et écoute l'échantillon avec **Lire**. Ajuste ensuite le curseur de **volume d'entrée** et recommence jusqu'à obtenir une voix nette.

Cet aller-retour vaut mieux que de pousser le curseur à fond d'un coup. Un niveau trop haut fait saturer la voix sur les syllabes fortes et ramasse tous les bruits de la pièce.

## Le bon micro, au bon endroit

Beaucoup de « micros trop faibles » sont en fait le mauvais micro. Un portable avec un casque branché peut continuer à écouter son micro intégré, loin de ta bouche. Dans la même page **Son**, à la ligne **Choisir un appareil pour parler ou enregistrer**, sélectionne le micro de ton casque ou ton micro USB.

Microsoft cite aussi deux vérifications évidentes et souvent oubliées :

- le micro est-il **bien connecté**, et pour un casque Bluetooth, couplé et connecté ?
- le micro est-il **correctement positionné** ? Une perche de casque relevée vers le front capte mal.

Si ton casque a un bouton de sourdine sur le câble ou sur l'oreillette, vérifie qu'il n'est pas enclenché. Et si le micro n'apparaît pas du tout, ouvre **Paramètres > Confidentialité et sécurité > Microphone** : l'accès au micro doit être activé, y compris pour les applications de bureau.

## L'amplification du micro : le niveau au-dessus

Le curseur de volume a ses limites. L'ancienne fenêtre **Propriétés du microphone** offre un second réglage : dans l'onglet **Niveaux**, Microsoft décrit deux curseurs, **Microphone** et **Amplification du microphone**. L'amplification ajoute un gain supplémentaire, utile pour un micro intégré ou un micro-cravate faible.

Utilise-la avec parcimonie. Elle remonte la voix, mais aussi le souffle de l'ordinateur et le bruit de fond. Rapprocher le micro de quelques centimètres donne souvent plus qu'un palier d'amplification, sans le souffle.

## Les réglages de Teams et des autres logiciels

Ta voix est bonne dans le test Windows mais faible en réunion ? Le logiciel de visio applique ses propres réglages. Dans Teams, ouvre **Paramètres et plus > Paramètres > Appareils** :

1. Choisis le bon micro dans le menu **Microphone**.
2. Active **Régler automatiquement la sensibilité du micro** : Microsoft le présente comme le moyen pour que tout le monde t'entende à un niveau sonore constant pendant une réunion.
3. Dans **Suppression du bruit**, l'option **Bruit de fond uniquement** retire les bruits autour de toi, et **Isolation de la voix** supprime les autres voix captées par ton micro.
4. Lance **Passer un appel de test** pour vérifier le résultat.

Discord, Zoom ou Google Meet ont des menus équivalents, avec leur propre choix de périphérique d'entrée et leur propre volume. Vérifie-les une fois, sinon le logiciel peut annuler ce que tu as réglé dans Windows.

## Micro de casque trop sensible

Le problème inverse existe aussi : un micro qui capte le clavier, la ventilation et la voix du collègue d'à côté. Baisse le volume d'entrée, coupe l'amplification si tu l'as activée, et rapproche plutôt le micro de ta bouche. Dans Teams, la suppression du bruit fait le reste.

En open space, un micro de casque bien placé reste la meilleure défense : le comparatif des [casques à réduction de bruit pour le télétravail](/articles/casque-reduction-bruit-teletravail/) détaille ce qui compte.

## Micro de casque qui grésille

Un micro qui crépite n'est pas forcément trop faible ni trop fort : c'est souvent un réglage ou un pilote. Pour le son en sortie, Microsoft liste quatre solutions qui valent aussi d'être tentées côté micro :

- **désactiver les améliorations audio**, qui provoquent distorsions et grésillements sur certains appareils ;
- **changer le format audio par défaut** dans les paramètres avancés du périphérique ;
- **mettre à jour ou réinstaller le pilote** depuis le Gestionnaire de périphériques, section Contrôleurs audio, vidéo et jeu ;
- **redémarrer les services audio** : dans services.msc, redémarre Audio Windows et Windows Audio Endpoint Builder.

Sur un casque filaire, teste aussi un autre port USB, ou la prise jack de l'autre côté du PC : un connecteur usé grésille au moindre mouvement du câble.

## Quand le réglage ne suffit plus

Si ton micro intégré reste trop faible malgré tout, ce n'est plus un réglage mais une limite matérielle. Un [micro USB pour la visioconférence](/articles/micro-usb-visioconference-podcast/) posé devant toi change radicalement la prise de son. Et si tu hésites entre filaire et Bluetooth, sache qu'un casque sans fil dégrade souvent le son quand son micro s'active : le guide [casque filaire ou sans fil pour le télétravail](/articles/casque-filaire-vs-sans-fil-teletravail/) explique pourquoi.
