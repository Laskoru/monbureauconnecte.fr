---
title: "Port USB-C ne fonctionne plus : que vérifier ?"
description: "Port USB-C qui ne fonctionne plus, ne charge plus ou n'affiche rien : câble, chargeur, port de charge, mode vidéo, poussière. Les vérifications utiles."
pubDate: 2026-10-15
updatedDate: 2026-10-15
author: "Hugo B."
pinHook: "Ton port USB-C *ne répond plus* ?"
pinSub: "Câble, chargeur, poussière, mode vidéo : les vrais coupables."
keywords: ["port usb c ne fonctionne plus", "comment nettoyer port usb c", "port usb c trop lache", "usb c ne charge plus"]
category: "peripheriques"
coverImage: "https://images.unsplash.com/photo-1672239069006-068c2ffcec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE3MjIwfDB8MXxzZWFyY2h8Mnx8dXNiLWMlMjBwb3J0JTIwbGFwdG9wfGVufDB8fHx8MTc5MjA4MTQxMXwy&ixlib=rb-4.1.0&q=80&w=1080"
coverAlt: "Gros plan sur une fiche USB-C branchée sur le côté d'un ordinateur portable fin posé sur une table"
draft: false
faq:
  - question: "Pourquoi mon PC affiche « Chargeur lent » avec un chargeur USB-C ?"
    answer: "Le chargeur, le câble ou les deux ne fournissent pas la puissance demandée par le PC. Microsoft donne un exemple : si le PC a besoin de 12 V et 3 A pour charger vite, un chargeur de 5 V et 3 A n'y arrivera pas. Le passage par un hub ou une station d'accueil peut aussi limiter la charge."
  - question: "Un adaptateur USB-C vers jack fonctionne-t-il sur tous les PC ?"
    answer: "Non. Microsoft distingue les adaptateurs audio USB-C analogiques et numériques : la plupart des PC n'acceptent que les modèles numériques, qui convertissent eux-mêmes le son en signal analogique. Ils sont souvent plus chers, mais un modèle analogique risque de ne rien produire."
  - question: "Comment savoir quel port USB-C de mon PC charge ou affiche la vidéo ?"
    answer: "Regarde les pictogrammes gravés à côté des ports (éclair, logo DisplayPort ou Thunderbolt) et la fiche technique de ton modèle. Microsoft rappelle qu'un écran ou un appareil Thunderbolt doit être branché sur le port USB-C qui prend en charge le mode correspondant, et un chargeur sur le port de charge."
sources:
  - label: "Microsoft Support, « Résoudre les problèmes liés à l'USB-C dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/fix-usb-c-problems-in-windows"
  - label: "Microsoft Support, « Résolution des problèmes liés à l'USB-C sur Surface »"
    url: "https://support.microsoft.com/fr-fr/surface/surface-dock/troubleshoot-problems-with-usb-c-on-surface"
---

Un port USB-C qui ne fonctionne plus n'est pas forcément cassé. Dans la plupart des cas, le câble ne gère pas la fonction demandée, le chargeur manque de puissance, l'appareil est branché sur un port qui ne fait pas tout, ou de la poussière empêche la fiche de bien s'enfoncer. Avant de penser réparation, isole chaque élément.

## Port USB-C ne fonctionne plus : un port, plusieurs métiers

Sur un même ordinateur, deux ports USB-C identiques à l'œil ne font pas forcément la même chose. Microsoft le rappelle : un port peut charger le PC, transférer des données, sortir une image vers un écran ou accepter un appareil Thunderbolt, mais tous ne savent pas tout faire. Le port de charge n'est pas toujours celui qui gère l'écran, et inversement.

Le câble ajoute une couche de confusion. Microsoft précise que certains câbles compatibles USB-C ne prennent pas en charge toutes les fonctionnalités : un câble livré avec un téléphone peut charger sans jamais transporter d'image. Résultat : un écran qui reste noir avec un câble et s'allume avec un autre, sans qu'aucun port soit en panne.

## Le redémarrage complet, d'abord

Microsoft conseille pour les Surface une manipulation qui vaut pour beaucoup de portables : débranche l'appareil USB-C, éteins le PC, attends **10 secondes**, puis maintiens le bouton d'alimentation environ **20 secondes**, jusqu'à ce que le logo apparaisse, disparaisse et réapparaisse. Rebranche ensuite l'appareil.

Installe ensuite les mises à jour en attente : Microsoft conseille de vérifier l'état des pilotes et du micrologiciel, puis de passer par Windows Update. Sur un PC d'une autre marque, l'utilitaire du fabricant joue le même rôle.

## Ton PC ne charge plus en USB-C

Les causes listées par Microsoft tiennent en quelques lignes :

- **Le chargeur n'est pas assez puissant** pour le PC, ou il n'est pas compatible.
- **Le câble ne suit pas** la puissance du chargeur ou du PC.
- **Le chargeur est branché sur un port qui ne charge pas.** Seul le port de charge accepte l'alimentation.
- **Tu passes par un hub ou une station d'accueil** au lieu d'un branchement direct.
- **De la poussière** dans le port empêche la fiche de s'insérer correctement.

Le test le plus rapide : le chargeur et le câble d'origine, en direct, sur le port de charge. Pour une Surface, Microsoft demande un chargeur USB-C qui fournit au moins la puissance du bloc d'origine. La même logique vaut pour tous les portables.

## Comment nettoyer un port USB-C

Microsoft cite la poussière comme cause possible d'une charge lente ou absente, et propose l'**air comprimé** pour nettoyer le port. C'est la méthode la plus sûre : quelques pressions brèves, PC éteint, bombe tenue droite pour ne pas projeter de liquide.

Évite tout objet métallique (trombone, aiguille) : la languette centrale du port porte les contacts, et la rayer ou la tordre crée la panne que tu voulais éviter. Un cure-dent en bois, utilisé délicatement, peut déloger une peluche tassée au fond si l'air ne suffit pas.

## Port USB-C trop lâche

Une fiche qui tient mal, qui se coupe au moindre mouvement du câble, alors que le port est propre : c'est de l'usure mécanique. Le nettoyage ne la répare pas. Teste avec un autre câble, car une fiche abîmée donne exactement la même sensation qu'un port fatigué. Si plusieurs câbles flottent dans le même port, le remplacement passe par un réparateur ou le service après-vente du fabricant.

En attendant, limite les contraintes : un câble qui pend sur le côté du bureau tire en permanence sur le connecteur. Le guide pour [ranger les câbles de son bureau](/articles/rangement-cables-bureau/) aide à les fixer sans tension.

## Écran ou appareil non reconnu en USB-C

Quand Windows affiche « Les fonctionnalités de l'appareil USB peuvent être limitées » ou « La connexion d'affichage peut être limitée », Microsoft liste toujours les mêmes pistes :

1. Vérifier que le PC, l'écran et le câble prennent en charge le **mode alternatif** voulu (DisplayPort, Thunderbolt, HDMI).
2. Brancher l'appareil **directement** sur le PC, sans hub.
3. Utiliser le port USB-C qui gère ce mode.
4. Débrancher les autres appareils, car trop d'appareils en mode alternatif peuvent saturer le PC.

Ces modes ne se règlent pas : Microsoft précise que l'appareil bascule tout seul dans le bon mode s'il est pris en charge. Si ton écran passe par un [hub USB-C ou une station d'accueil](/articles/hub-usb-c-station-accueil/), teste-le d'abord en direct. Et s'il reste noir, le guide sur le [deuxième écran non détecté](/articles/deuxieme-ecran-non-detecte-hdmi/) prend le relais.

## Périphérique USB non reconnu : le code d'erreur

Si Windows signale un « Périphérique USB non reconnu », ouvre le **Gestionnaire de périphériques**, cherche l'appareil marqué d'un point d'exclamation jaune, puis **Propriétés > État du périphérique**. Le code d'erreur affiché oriente vers la solution. Microsoft signale aussi le cas d'un appareil qui demande plus d'énergie que le port ne peut fournir : branche le PC sur secteur plutôt que sur batterie, débranche les appareils USB inutilisés, ou alimente l'appareil séparément s'il a son propre bloc.

Un vieil appareil en USB-A qui ne trouve plus sa place sur un portable récent relève d'un autre problème, réglé par un simple [hub USB-A multiport](/articles/hub-usb-a-multiport-vieux-peripheriques/).
