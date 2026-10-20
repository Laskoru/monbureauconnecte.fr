---
title: "Clavier ne fonctionne plus sur PC portable : les solutions"
description: "Clavier qui ne fonctionne plus sur PC portable, qui efface ou passe en QWERTY : pilote, touches filtres, Alt + Maj et touche Inser, les remèdes."
pubDate: 2026-10-15
updatedDate: 2026-10-15
author: "Hugo B."
pinHook: "Le clavier de ton portable *ne répond plus* ?"
pinSub: "Pilote, QWERTY, touche Inser : les causes et les remèdes."
keywords: ["clavier ne fonctionne plus sur pc portable", "clavier ne fonctionne plus windows 11", "clavier efface quand j écris", "clavier qui passe en qwerty tout seul"]
category: "peripheriques"
coverAlt: "Mains qui tapent sur le clavier d'un ordinateur portable gris ouvert, en gros plan dans une pièce sombre"
draft: false
faq:
  - question: "Comment écrire en attendant que le clavier remarche ?"
    answer: "Windows intègre un clavier à l'écran (le programme osk) qui se pilote entièrement à la souris : tu cliques sur les touches pour saisir ton texte. Un clavier USB ou sans fil branché sur le portable fait aussi l'affaire, et il te dit au passage si le problème vient du clavier intégré ou de Windows."
  - question: "Pourquoi une touche tape deux lettres d'un coup ?"
    answer: "Le délai de répétition est peut-être trop court : Windows prend un appui un peu long pour plusieurs frappes. Asus conseille de l'allonger dans le Panneau de configuration, rubrique Clavier. Si une seule touche le fait et toujours la même, l'usure ou une saleté sous la touche est plus probable."
  - question: "Faut-il réinitialiser Windows quand le clavier ne marche plus ?"
    answer: "Seulement en tout dernier recours, après avoir réinstallé le pilote, lancé l'utilitaire de dépannage et tenté un point de restauration si le problème est récent. Sauvegarde d'abord tes fichiers personnels. Si le clavier ne répond pas non plus avant le démarrage de Windows, une réinitialisation ne changera rien : la panne est matérielle."
sources:
  - label: "Asus, « [NoteBook] Dépannage - Comment résoudre les problèmes de clavier ? »"
    url: "https://www.asus.com/fr/support/FAQ/1015071/"
  - label: "Microsoft Support, « Basculer entre langues à l'aide de la barre de langue »"
    url: "https://support.microsoft.com/fr-fr/office/languages/switch-between-languages-using-the-language-bar"
  - label: "Microsoft Support, « Tapez sur du texte dans Word pour Windows »"
    url: "https://support.microsoft.com/fr-fr/word/type-over-text-in-word-for-windows"
---

Quand le clavier ne fonctionne plus sur un PC portable, commence par réinstaller son pilote depuis le Gestionnaire de périphériques et lance l'utilitaire de dépannage Clavier de Windows : c'est ce que recommande Asus en premier, et cela règle les pannes logicielles. Les symptômes plus étranges (lettres qui s'effacent, clavier passé en QWERTY) viennent presque toujours d'un raccourci pressé par erreur.

## Clavier ne fonctionne plus sur PC portable : le test qui oriente tout

Branche un clavier USB, même un vieux modèle de bureau. S'il fonctionne, Windows reconnaît bien la saisie et le souci se limite au clavier intégré (pilote, nappe, choc, liquide). Si aucun clavier ne répond, le blocage est logiciel ou global.

Autre indice : est-ce que le clavier répond avant Windows, par exemple pour entrer dans le BIOS au démarrage ? Si oui, le matériel fonctionne et c'est Windows qui coince.

## Clavier ne fonctionne plus sous Windows 11 : pilote et dépanneur

Ouvre le **Gestionnaire de périphériques** (clic droit sur Démarrer), déplie **Claviers**, puis fais un clic droit sur chaque appareil de la liste et choisis **Désinstaller l'appareil**. Asus conseille de supprimer tous les périphériques de cette catégorie puis de redémarrer : Windows réinstalle le pilote tout seul au démarrage.

Si cela ne suffit pas :

1. Lance l'utilitaire de dépannage **Clavier** : sous Windows 11, il se trouve dans les paramètres de dépannage, rubrique **Autres utilitaires de résolution des problèmes**.
2. Fais les mises à jour de Windows, du BIOS et des pilotes du fabricant (MyASUS chez Asus, l'équivalent chez les autres marques).
3. Si le problème date de quelques jours, reviens à un **point de restauration** antérieur.

## Les touches qui répondent mal ou en retard

Un clavier qui semble ignorer certaines frappes n'est pas forcément cassé. La fonction **Touches filtres**, dans les paramètres d'accessibilité du clavier, ignore les appuis brefs ou répétés : activée par erreur, elle donne l'impression d'un clavier paresseux. Asus conseille de la désactiver.

À l'inverse, si une frappe produit deux caractères, allonge le **délai de répétition** dans le Panneau de configuration, rubrique Clavier.

## Clavier qui passe en QWERTY tout seul

Tu tapes « a » et un « q » s'affiche ? Ton clavier est passé dans une autre disposition. Microsoft documente le raccourci en cause : **Alt + Maj** bascule entre les dispositions de clavier installées. On le presse sans le vouloir en tapant vite une majuscule.

La solution immédiate : refais **Alt + Maj**, ou clique sur l'indicateur de langue dans la barre des tâches (FRA, ENG) et choisis le français. Pour ne plus jamais y être confronté, ouvre les paramètres de langue de Windows et supprime la disposition anglaise si tu ne t'en sers pas. Avec une seule disposition active, le raccourci n'a plus rien à basculer.

## Clavier qui efface quand j'écris

Le texte à droite du curseur disparaît à mesure que tu tapes ? Ce n'est pas une panne mais le **mode Refrappe** : Microsoft explique que la touche **Inser** permet, dans Word, de remplacer le texte existant au lieu de l'insérer. Un appui involontaire sur Inser suffit à l'activer.

Appuie une fois sur **Inser** pour revenir à la normale. Dans Word, tu peux couper ce comportement pour de bon : **Fichier > Options > Options avancées**, puis décoche « Utiliser la touche Inser pour contrôler le mode Refrappe ».

## Pavé numérique et touches de fonction

Les chiffres ne sortent pas du pavé numérique ? Vérifie le **Verr Num** : Asus le cite parmi les causes de caractères incorrects. Sur un portable sans voyant, le clavier à l'écran (commande osk) montre si la touche est active. Et si tu tapes beaucoup de chiffres sur un portable qui n'a pas de pavé, un [pavé numérique externe sans fil](/articles/pave-numerique-externe-sans-fil/) évite ces acrobaties.

Pour les touches F1 à F12 qui font autre chose que prévu (volume, luminosité), la touche **Fn** est en cause. Chez Asus, **Fn + Échap** active ou désactive le verrouillage des touches de fonction, et chaque raccourci dépend d'un utilitaire du fabricant (ASUS System Control Interface, ATKACPI selon les générations). Si ces raccourcis ne répondent plus après une mise à jour, réinstalle ces utilitaires depuis le site de la marque.

## Quand c'est le clavier lui-même

Si un clavier externe fonctionne et que le clavier intégré reste muet malgré un pilote neuf, la panne est matérielle : nappe débranchée après un choc, liquide renversé, touches usées. Après un liquide, éteins le PC sans attendre et ne le rallume pas avant une vérification. Pour un portable encore couvert, passe par le service après-vente du fabricant plutôt que de l'ouvrir toi-même.

En attendant, un clavier externe posé devant le portable rend service, surtout si tu le places sur un [support d'ordinateur portable](/articles/support-ordinateur-portable-ergonomique/) pour remonter l'écran. Un [clavier compact TKL](/articles/clavier-compact-tkl-sans-pave-numerique/) prend peu de place et laisse de l'espace pour la souris.
