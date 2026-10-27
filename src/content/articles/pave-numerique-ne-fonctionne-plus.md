---
title: "Pavé numérique ne fonctionne plus : les solutions"
description: "Pavé numérique ne fonctionne plus : Verr Num, touches souris activées par erreur, touche Fn sur portable et pilote à vérifier avant de changer de clavier."
pubDate: 2026-10-27
updatedDate: 2026-10-27
author: "Hugo B."
pinHook: "Ton *pavé numérique* ne répond plus ?"
pinSub: "Verr Num, touches souris, touche Fn : la bonne piste avant de paniquer."
keywords: ["pavé numérique ne fonctionne plus", "touche numérique clavier ne fonctionne pas", "verr num ne fonctionne pas", "pavé numérique touches souris"]
category: "peripheriques"
coverAlt: "Clavier d'ordinateur noir vu de près, touches alignées sous un éclairage doux de bureau"
draft: false
faq:
  - question: "Le voyant Verr Num est allumé mais le pavé numérique ne répond pas : que faire ?"
    answer: "Maintiens la touche Verr Num enfoncée environ cinq secondes : Logitech indique qu'une simple pression ne suffit pas toujours à réactiver le pavé, même quand le voyant reste allumé. Si rien ne change, teste le clavier sur un autre ordinateur pour savoir s'il est en cause."
  - question: "Un pavé numérique externe fonctionne-t-il sur un PC portable sans pavé intégré ?"
    answer: "Oui : branché en USB ou en sans-fil, il est reconnu comme un clavier classique et tape directement des chiffres, sans dépendre du raccourci Fn du portable. C'est la solution la plus simple quand le pavé intégré pose problème en permanence."
  - question: "Pourquoi le pavé numérique de mon PC portable ne marche qu'en maintenant Fn ?"
    answer: "Sur un portable, les touches du pavé sont superposées à une partie du clavier normal (lettres ou flèches). Selon la marque, Verr Num seul suffit à les activer, ou il faut combiner Fn avec Verr Num : le comportement exact dépend du modèle, pas d'un standard commun à tous les fabricants."
sources:
  - label: "Microsoft Support, « Use Mouse keys to move the mouse pointer »"
    url: "https://support.microsoft.com/windows/9e0c72c8-b882-7918-8e7b-391fd62adf33"
  - label: "Logitech Support, « Why is the NumPad KeyPad not working on the Logi K868 keyboard »"
    url: "https://support.logi.com/hc/fr/articles/35025209246359-Why-is-the-NumPad-KeyPad-not-working-on-the-Logi-K868-keyboard"
  - label: "Asus, « [Notebook] Comment résoudre les problèmes anormaux du pavé tactile - Dépannage »"
    url: "https://www.asus.com/fr/support/faq/1042539/"
---

Quand ton pavé numérique ne fonctionne plus, le réflexe à avoir avant tout le reste, c'est de regarder la touche Verr Num : c'est elle qui est en cause le plus souvent, pas le clavier lui-même. Viennent ensuite deux pièges fréquents : les « touches souris » de Windows activées par erreur, et, sur un portable, la gestion propre à chaque fabricant de la touche Fn.

## Pavé numérique ne fonctionne plus : commence par Verr Num

Regarde d'abord le voyant lumineux, quand ton clavier en a un. S'il est éteint, une pression sur Verr Num suffit normalement à activer le pavé. S'il est allumé mais que les touches tapent quand même des flèches ou rien du tout, Logitech recommande une astuce simple : maintenir la touche enfoncée pendant environ cinq secondes plutôt que de faire une pression brève. Beaucoup de claviers ont besoin de cette pression longue pour réinitialiser l'état du verrouillage numérique.

Vérifie aussi, dans les paramètres clavier de Windows, que la disposition sélectionnée correspond bien à ton clavier physique. Une disposition incorrecte peut faire taper des caractères inattendus sur certaines touches, y compris sur le pavé.

## Le vrai coupable est souvent les « touches souris » de Windows

Un pavé numérique qui déplace le curseur à l'écran au lieu d'écrire des chiffres n'est presque jamais en panne : il contrôle la souris. C'est une fonction d'accessibilité de Windows, les « touches souris » (Mouse keys), qui utilise justement le pavé numérique pour piloter le pointeur, avec les clics gérés par les touches /, *, - et 5.

Pour vérifier, maintiens une touche comme 2, 4, 6 ou 8 : si le curseur bouge, la fonction est active. Pour la désactiver sous Windows 11, ouvre Paramètres, puis Accessibilité, et descends jusqu'à Souris dans la section Interaction pour couper le bouton correspondant. Sous Windows 10, le même réglage se trouve dans Facilité d'accès, puis Souris. Un pointeur qui part dans tous les sens pendant que tu tapes donne d'ailleurs la même impression qu'une [souris qui bouge toute seule](/articles/souris-qui-bouge-toute-seule/), alors que la cause est ici entièrement logicielle.

## Sur un PC portable : la touche Fn et le pavé intégré

Sur un clavier de portable, les chiffres du pavé numérique sont le plus souvent superposés à une rangée de lettres, repérables par de petits chiffres imprimés dans un coin des touches. Le comportement varie d'un constructeur à l'autre : certains activent le pavé avec Verr Num seul, d'autres exigent de maintenir Fn en plus, et quelques modèles inversent carrément les deux logiques. Il n'existe pas de règle universelle, il faut tester les deux combinaisons sur ton clavier.

Sur certains portables, un second pavé numérique est intégré au pavé tactile lui-même, activé par une icône discrète dans un coin. Chez Asus, ce réglage porte le nom de NumberPad Lock dans l'application MyASUS : s'il bloque le pavé tactile numérique, il suffit de le passer sur « Déverrouiller ». Ce réglage ne concerne que le pavé numérique du touchpad, pas celui du clavier, et il n'existe pas sur les portables de jeu de la marque.

Si c'est tout le clavier qui ne répond plus, et pas seulement le pavé, le problème vient d'ailleurs : consulte plutôt notre guide sur le [clavier qui ne fonctionne plus sur un PC portable](/articles/clavier-pc-portable-ne-fonctionne-plus/).

## D'autres pistes avant de changer de clavier

Quand Verr Num et les touches souris sont écartés, Logitech conseille une série de vérifications simples, dans cet ordre :

- désactiver puis réactiver les autres touches de verrouillage (Verr Maj, Arrêt défil, Inser), qui interfèrent parfois entre elles ;
- couper les Touches rémanentes, les Touches bascule et les Touches filtrées dans le Centre Ergonomie de Windows ;
- mettre à jour le pilote du clavier depuis le Gestionnaire de périphériques ;
- tester le clavier sur un autre profil utilisateur Windows, pour écarter un réglage propre à ton compte ;
- brancher le clavier ou son récepteur directement sur l'ordinateur, sans hub, rallonge ni commutateur KVM, qui peuvent couper certaines touches ;
- tester enfin le clavier sur un autre ordinateur, pour savoir s'il est réellement en cause.

Si le pavé fonctionne sur un autre PC et pas sur le tien, le problème est logiciel, pas matériel.

## Touche numérique clavier qui ne fonctionne pas : la checklist à suivre

Dans l'ordre, du plus probable au plus rare : Verr Num maintenu cinq secondes, touches souris désactivées dans Accessibilité, touche Fn testée sur un portable, pilote mis à jour, clavier branché sans hub, puis test sur un autre ordinateur. Le BIOS n'intervient qu'en tout dernier recours, sur certains modèles qui proposent un réglage de l'état de Verr Num au démarrage : son nom et son emplacement changent selon la marque, et tous les BIOS ne l'ont pas.

Si le pavé intégré de ton clavier reste capricieux malgré tout, un [pavé numérique externe sans fil](/articles/pave-numerique-externe-sans-fil/) réglera le problème en quelques secondes, sans pilote ni réglage à chercher. À l'inverse, si tu ne t'en sers presque jamais, un [clavier compact TKL](/articles/clavier-compact-tkl-sans-pave-numerique/) libère de la place sur le bureau plutôt que de garder un pavé qui ne sert à rien.
