---
title: "Écran PC ne s'allume pas au démarrage : le diagnostic"
description: "Écran PC qui ne s'allume pas au démarrage alors que la tour tourne ? Câble, entrée, carte graphique, logo du BIOS, mémoire : le diagnostic dans l'ordre."
pubDate: 2026-10-15
updatedDate: 2026-10-15
author: "Hugo B."
pinHook: "Écran noir *dès l'allumage* du PC ?"
pinSub: "Câble, carte graphique, BIOS, mémoire : le bon ordre."
keywords: ["ecran pc ne s allume pas au demarrage", "écran pc ne s'allume pas", "pourquoi mon ecran pc ne s allume pas", "ecran noir pc quand je l allume"]
category: "peripheriques"
coverAlt: "Tour d'ordinateur noire en cours de montage posée sur une table blanche"
draft: false
faq:
  - question: "Que signifie un curseur qui clignote sur un écran noir au démarrage ?"
    answer: "Microsoft l'explique par un UEFI ou un BIOS qui ne trouve aucun périphérique de démarrage. L'écran fonctionne donc, c'est le disque qui n'est pas vu : vérifie qu'aucune clé USB ne reste branchée et que le disque système apparaît bien dans le BIOS."
  - question: "Mon PC émet des bips ou fait clignoter un voyant : que faire ?"
    answer: "Ce sont des codes de diagnostic propres à chaque fabricant. Dell renvoie au manuel de l'ordinateur pour lire la signification des bips et des clignotements, qui pointent souvent vers la mémoire, la carte graphique ou l'alimentation. Note le rythme exact avant d'appeler le support."
  - question: "Faut-il forcer l'arrêt du PC quand l'écran reste noir ?"
    answer: "Si rien ne répond, oui : Microsoft conseille de maintenir le bouton d'alimentation enfoncé pendant 20 secondes pour forcer le redémarrage. Ne le fais pas en boucle pendant une mise à jour qui s'installe : laisse d'abord quelques minutes au PC si le disque ou les voyants montrent une activité."
sources:
  - label: "Microsoft Support, « Résolution des problèmes liés aux écrans vides dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/display-graphics/troubleshooting-blank-screens-in-windows"
  - label: "Dell, « Résolution des problèmes vidéo liés à une carte graphique installée dans un ordinateur de bureau Dell »"
    url: "https://www.dell.com/support/kbdoc/fr-fr/000175323"
  - label: "Dell, « Comment diagnostiquer et résoudre les problèmes de mémoire courants sur un ordinateur de bureau »"
    url: "https://www.dell.com/support/kbdoc/fr-fr/000126068"
---

Quand l'écran PC ne s'allume pas au démarrage alors que la tour ronronne, la cause se trouve dans un ordre assez prévisible : l'écran lui-même (alimentation, entrée, câble), puis la sortie vidéo utilisée, puis la carte graphique et enfin la mémoire. Un seul détail fait gagner beaucoup de temps : savoir si le logo du fabricant ou du BIOS s'affiche quelques secondes avant le noir.

## Écran PC ne s'allume pas au démarrage : le logo apparaît-il ?

Allume le PC et regarde l'écran pendant les dix premières secondes.

| Ce que tu vois | Ce que ça indique | Où chercher |
|---|---|---|
| Rien du tout, voyant de l'écran éteint | L'écran n'est pas alimenté | Prise, bouton, câble secteur |
| « Aucun signal », écran allumé | L'écran ne reçoit pas d'image | Entrée, câble, sortie vidéo |
| Logo puis noir | Le matériel démarre, Windows coince | Pilote graphique, mode sans échec |
| Curseur qui clignote sur fond noir | Aucun disque de démarrage trouvé | BIOS, disque, clé USB oubliée |
| Bips ou voyants qui clignotent | Code d'erreur matériel | Manuel du PC, mémoire |

Ce tableau évite l'erreur classique : changer d'écran alors que le PC ne démarre pas, ou démonter la tour alors que l'écran est réglé sur la mauvaise entrée.

## Pourquoi mon écran PC ne s'allume pas : l'écran et le câble

Commence par le plus bête. Microsoft cite en premier le branchement et la mise sous tension du moniteur. Vérifie que le voyant de l'écran s'allume, que le câble secteur est bien enfoncé des deux côtés, puis que l'écran est sur la bonne entrée (HDMI 1, HDMI 2, DisplayPort) dans son menu.

Ensuite, essaie un autre câble vidéo, et si possible un autre écran, ou ta télé. Si l'image revient, tu tiens le coupable sans avoir ouvert la tour. Si tu utilises deux écrans et qu'un seul reste noir, le guide sur le [deuxième écran non détecté en HDMI](/articles/deuxieme-ecran-non-detecte-hdmi/) couvre ce cas précis.

## Carte graphique ou carte mère : la bonne prise

Sur une tour avec carte graphique dédiée, l'écran doit être branché sur **les prises de la carte graphique**, pas sur celles de la carte mère. Dell explique que le BIOS désactive automatiquement la vidéo intégrée dès qu'une carte graphique est installée : brancher l'écran sur la carte mère donne alors un écran noir, alors que tout fonctionne.

C'est une erreur fréquente après un ménage, un déménagement ou l'installation d'une nouvelle carte. Déplace le câble, redémarre.

## Écran noir PC quand je l'allume : la carte graphique

Si la prise est la bonne, Dell liste plusieurs vérifications côté carte :

- **Les câbles de la carte** : celui de son ventilateur doit être branché, comme ses éventuels connecteurs d'alimentation.
- **Le bloc d'alimentation** doit pouvoir fournir l'énergie demandée par la carte, sans être surchargé.
- **La carte doit être bien enfoncée.** Si le problème disparaît après l'avoir retirée et remise, elle était mal insérée. Un autre emplacement PCIe peut aussi servir de test.
- **Le test de la carte mère** : retire la carte et branche l'écran sur la sortie vidéo intégrée. Si l'image revient, la carte graphique ou son emplacement est en cause.

Ces manipulations se font PC éteint et débranché. Si tu montes ta propre machine, le guide pour [choisir sa configuration PC gaming](/articles/quelle-config-pc-gaming-choisir/) rappelle l'importance d'une alimentation dimensionnée pour la carte.

## Le logo s'affiche, puis plus rien

Là, le matériel fonctionne et Windows bloque. Microsoft propose plusieurs raccourcis à tester à l'aveugle :

1. **Windows + Ctrl + Maj + B** réinitialise le pilote graphique.
2. **Windows + P**, puis **P** et **Entrée**, fait tourner les modes d'affichage, utile si Windows envoie l'image vers un écran absent.
3. Si rien ne répond, maintiens le bouton d'alimentation **20 secondes** pour forcer le redémarrage.

Ensuite, démarre en **mode sans échec avec mise en réseau** : interromps le démarrage plusieurs fois de suite pour arriver au mode de récupération, puis choisis l'option avec la touche **F5**. Si l'image s'affiche dans ce mode, le pilote graphique est en cause : restaure-le ou mets-le à jour dans le Gestionnaire de périphériques, ou reviens à un point de restauration antérieur.

Un écran qui s'allume normalement puis devient noir de temps en temps relève d'un autre diagnostic : celui de l'[écran PC noir par intermittence](/articles/ecran-pc-noir-par-intermittence/).

## La mémoire vive, quand rien ne démarre

Pas de logo, des bips ou un voyant qui clignote selon un motif : le PC n'arrive pas au bout de son autotest de démarrage (POST). Dell cite les erreurs de mémoire parmi les causes et propose une méthode simple :

1. Retire les barrettes de mémoire pour voir si le comportement change.
2. Teste ensuite **une seule barrette à la fois**, dans chaque emplacement, en notant le résultat.
3. Si la panne suit une barrette ou un emplacement précis, tu l'as trouvée, et le PC peut tourner avec moins de mémoire en attendant le remplacement.

Si la panne reste identique quelle que soit la barrette, la mémoire n'est sans doute pas en cause. À ce stade, le manuel du fabricant (pour décoder les bips) ou le service après-vente prend le relais. Avant de l'appeler, l'outil [Suis-je encore couvert ?](https://www.quellegarantie.fr/suis-je-encore-couvert/) te dit en quelques questions si ton PC ou ton écran est encore sous garantie.
