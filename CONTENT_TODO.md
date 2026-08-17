# Tâches ponctuelles en attente

Ce fichier liste des corrections précises à faire dès qu'Amazon est accessible.
La routine locale quotidienne le lit et traite ce qu'elle peut. **Coche ou
supprime une entrée une fois traitée.**

---

## [ ] Ajouter un second clavier à `claviers-mecaniques-silencieux.md`

**Contexte.** L'article n'a plus qu'un seul produit : le Logitech MX Mechanical
(`B07W5JK8DT`, ~143 €, disponible et vérifié). Son second produit d'origine
(Keychron K8) est devenu indisponible et a été retiré.

**Ce qu'il faut faire.** Vérifier les candidats ci-dessous dans l'ordre, prendre
**le premier qui a un bouton `add-to-cart`**, puis l'ajouter au frontmatter avec
son image (`public/products/<ASIN>.jpg`) et sa note.

| Priorité | ASIN | Produit | Pourquoi |
|---|---|---|---|
| 1 | `B0CLV3QB6Q` | Cherry KC 200 MX, AZERTY, switches MX2A **Silent Red** | Le meilleur complément : filaire, plaque métal, switches conçus pour le silence. Ne double pas le Logitech (sans fil, plat). |
| 2 | `B07D4RDG3Q` | Corsair K70 RGB MK.2, AZERTY, Cherry MX **Silent** | Version explicitement silencieuse du K70, orientation gaming. |
| 3 | `B07VTRZLWJ` | Logitech G915 LIGHTSPEED, AZERTY, GL Tactile | Solide, mais moins « silencieux » que les deux premiers. |

**Contraintes à respecter.**

- Tranche de prix : rester entre ~95 € et ~215 € (le produit conservé est à 143 €,
  l'écart doit rester sous les 50 %).
- L'angle de comparaison doit être l'**usage**, pas le budget : sans fil premium
  (Logitech) contre filaire silencieux en métal (Cherry).
- Rédiger un `blurb` d'une phrase dans le ton du site (tutoiement, concret).

**Pourquoi ce n'est pas déjà fait.** Amazon a renvoyé un captcha pendant plus de
deux heures le 16/08/2026, après l'audit complet des 62 produits des deux sites.
Aucun produit ne doit être ajouté sans vérification du bouton d'achat.
