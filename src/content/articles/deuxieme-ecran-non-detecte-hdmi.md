---
title: "Écran PC ne détecte pas le HDMI : que faire ?"
description: "Ton écran PC ne détecte pas le HDMI ou ton double écran reste noir ? Entrée, câble, Windows + P, bouton Détecter, pilote : les vérifications dans l'ordre."
pubDate: 2026-10-15
updatedDate: 2026-10-15
author: "Hugo B."
pinHook: "Deuxième écran *non détecté* en HDMI ?"
pinSub: "Les vérifications dans l'ordre, du câble au pilote."
keywords: ["écran pc ne détecte pas le hdmi", "double écran ne se détecte pas", "pourquoi mon double écran ne fonctionne pas", "deuxième écran non détecté"]
category: "peripheriques"
coverImage: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE3MjIwfDB8MXxzZWFyY2h8NXx8ZHVhbCUyMG1vbml0b3IlMjBkZXNrJTIwc2V0dXB8ZW58MHwwfHx8MTc5MjA4MDc1N3wy&ixlib=rb-4.1.0&q=80&w=1080"
coverAlt: "Poste de travail avec deux écrans allumés et un ordinateur portable ouvert, dans un bureau sombre"
draft: false
faq:
  - question: "Pourquoi mon deuxième écran affiche-t-il la même chose que le premier ?"
    answer: "Windows est en mode Dupliquer. Appuie sur Windows + P et choisis Étendre : le bureau s'étale alors sur les deux écrans et tu peux déplacer une fenêtre de l'un à l'autre. Si tu passes par un répartiteur HDMI, aucun réglage n'y changera rien, car ce boîtier copie le même signal sur ses sorties."
  - question: "Comment éteindre l'écran du PC quand je branche la télé en HDMI ?"
    answer: "Une fois la télé branchée, appuie sur Windows + P et choisis Deuxième moniteur uniquement. L'écran du PC portable ou le moniteur principal s'éteint et tout s'affiche sur la télé. Pour revenir en arrière, refais Windows + P et choisis Écran du PC uniquement ou Étendre."
  - question: "Combien d'écrans mon PC peut-il gérer ?"
    answer: "Tout dépend de la carte graphique, pas du nombre de prises à l'arrière. Microsoft conseille de vérifier ce chiffre auprès du fabricant de la carte : le Gestionnaire de périphériques, rubrique Cartes graphiques, te donne son nom exact pour faire la recherche."
sources:
  - label: "Microsoft Support, « Résoudre les problèmes de connexions de moniteurs externes sous Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/display-graphics/troubleshoot-external-monitor-connections-in-windows"
  - label: "Microsoft Support, « Utiliser plusieurs moniteurs dans Windows »"
    url: "https://support.microsoft.com/fr-fr/windows/hardware/display-graphics/how-to-use-multiple-monitors-in-windows"
  - label: "Dell, « Résolution des problèmes vidéo liés à une carte graphique installée dans un ordinateur de bureau Dell »"
    url: "https://www.dell.com/support/kbdoc/fr-fr/000175323"
---

Quand l'écran PC ne détecte pas le HDMI, la cause est presque toujours simple : mauvaise entrée sélectionnée sur l'écran, câble mal enfoncé, mode d'affichage réglé sur un seul écran, ou pilote graphique qui a décroché. Avant d'accuser l'écran, tu peux tout vérifier en dix minutes, dans l'ordre qui suit.

## Écran PC ne détecte pas le HDMI : commence par l'écran lui-même

Un moniteur qui affiche « Aucun signal » ou « No signal » est allumé et attend une image. Le premier réflexe se fait sur ses boutons : la plupart des écrans ont plusieurs entrées (HDMI 1, HDMI 2, DisplayPort) et ne basculent pas toujours seuls sur celle qui reçoit le signal. Ouvre le menu de l'écran, rubrique source ou entrée, et choisis celle où le câble est branché.

Vérifie ensuite le câble aux deux bouts. Microsoft conseille de s'assurer qu'il est bien enfoncé, puis d'en essayer un autre : si le nouveau fonctionne, l'ancien était défectueux. Un câble HDMI qui a été plié serré derrière un bureau ou tiré par un [bras d'écran articulé](/articles/bras-support-ecran-articule/) peut lâcher sans aucun signe visible.

Dernier test matériel, et le plus parlant : branche l'écran sur un autre ordinateur. S'il reste noir ailleurs, le problème vient de lui. S'il fonctionne, cherche du côté du PC.

## Pourquoi mon double écran ne fonctionne pas alors qu'il est branché ?

Le câble peut être parfait et l'image absente, simplement parce que Windows envoie tout sur un seul écran. Appuie sur **Windows + P** : quatre modes s'affichent.

| Mode | Ce qu'il fait |
|---|---|
| Écran du PC uniquement | Tout reste sur l'écran principal, le second ne reçoit rien |
| Dupliquer | Les deux écrans montrent la même image |
| Étendre | Le bureau s'étale sur les deux écrans |
| Deuxième moniteur uniquement | Seul l'écran externe affiche, l'écran du PC s'éteint |

Pour travailler avec deux écrans, c'est **Étendre** qu'il te faut. Si ton PC était resté sur le premier mode, ton deuxième écran n'était pas en panne : il n'était pas utilisé.

## Double écran qui ne se détecte pas : le bouton Détecter

Quand l'écran n'apparaît même pas dans la liste, force Windows à le chercher. Sous Windows 11, ouvre **Paramètres > Système > Affichage**, déplie **Plusieurs écrans** et clique sur **Détecter**. Sous Windows 10, le chemin est le même, avec une section nommée Plusieurs moniteurs.

Si rien ne bouge, Microsoft recommande de débrancher tout ce qui n'est pas indispensable entre le PC et l'écran : station d'accueil, dongle, adaptateur. Branche l'écran en direct, avec un seul câble. Si tu passes d'habitude par un [hub USB-C ou une station d'accueil](/articles/hub-usb-c-station-accueil/), ce test dit tout de suite si l'intermédiaire est en cause.

Essaie aussi un autre port vidéo du PC (autre HDMI, DisplayPort, DVI) quand il y en a plusieurs.

## PC fixe : carte graphique ou carte mère ?

Sur une tour équipée d'une carte graphique dédiée, il y a souvent deux séries de prises vidéo : celles de la carte mère, en haut du panneau arrière, et celles de la carte graphique, plus bas. Dell explique que le câble doit aller sur la carte dédiée, car le BIOS désactive automatiquement la vidéo intégrée quand une carte graphique est installée. Un écran branché sur la carte mère reste alors noir, même si la prise semble identique.

C'est l'erreur la plus fréquente après un déménagement de bureau ou un rebranchement à la va-vite. Déplace le câble sur la carte graphique et relance la détection.

## Le pilote graphique en dernier recours

Si l'écran fonctionnait hier et plus aujourd'hui, le pilote est le suspect suivant. Le raccourci **Windows + Ctrl + Maj + B** le réinitialise sans redémarrer. Ensuite, redémarre vraiment le PC (Démarrer, Alimentation, Redémarrer), et si cela ne suffit pas, éteins-le complètement puis rallume-le.

Le problème est apparu après une mise à jour ? Ouvre le **Gestionnaire de périphériques**, déplie **Cartes graphiques**, fais un clic droit sur ta carte, puis **Propriétés > Pilote > Restaurer le pilote**. Si l'option est grisée, désinstalle le périphérique en cochant « Tenter de supprimer le pilote de ce périphérique », redémarre, puis lance **Mettre à jour le pilote** et la recherche automatique.

Si ton écran marche mais se coupe de temps en temps, c'est un autre diagnostic, détaillé dans le guide sur l'[écran PC qui devient noir par intermittence](/articles/ecran-pc-noir-par-intermittence/).

## Un répartiteur HDMI n'étend pas l'affichage

Dernier piège, fréquent sur les PC qui n'ont qu'une sortie vidéo : le répartiteur HDMI (splitter). Microsoft rappelle qu'il duplique le signal au lieu de l'étendre. Tu verras la même image sur les deux écrans, sans jamais pouvoir glisser une fenêtre de l'un à l'autre. Pour un vrai double affichage avec un seul port vidéo, il faut une station d'accueil ou un adaptateur USB, à condition que ton PC ait un port USB-C qui transporte la vidéo.

Et si tu ajoutes un troisième écran, vérifie d'abord que chaque écran fonctionne seul, puis que ta carte graphique en gère bien trois : la limite vient d'elle, pas du nombre de prises.
