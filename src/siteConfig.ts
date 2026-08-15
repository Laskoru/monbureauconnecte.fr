// ────────────────────────────────────────────────────────────
// Config centrale du site.
// C'est le SEUL fichier à modifier quand tu dupliques ce
// template pour lancer un nouveau site de niche.
// ────────────────────────────────────────────────────────────

export const siteConfig = {
  // Identité
  name: 'Mon Bureau Connecté',
  tagline: 'Des accessoires bureau, gaming et télétravail testés et comparés',
  description:
    "Mon Bureau Connecté aide à choisir le bon matériel pour son poste de travail : gaming, bureau ergonomique et télétravail, comparatifs et conseils d'achat.",
  lang: 'fr',
  locale: 'fr_FR',

  // Branding
  accentColor: '#4c8dff', // bleu lumineux, pensé pour le fond sombre premium

  // Publicité — AdSense désactivé pour le moment, on démarre en 100% affiliation Amazon
  adsense: {
    enabled: false, // passe à true le jour où tu ajoutes AdSense
    clientId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },

  // Programme Partenaires Amazon
  amazon: {
    enabled: true,
    tag: 'monbureauconnecte-21',
  },

  // Email de contact public (mentions légales, confidentialité, contact)
  contactEmail: 'contact@monbureauconnecte.fr',

  // Réseaux / contact (optionnel, laisse vide si non utilisé)
  social: {
    twitter: '',
    instagram: '',
  },

  // Auteur par défaut affiché sur les articles
  author: 'Rédaction',

  // Code de vérification Google Search Console (méthode "balise HTML").
  // C'est la valeur après "google-site-verification=". Laisse vide si inutile.
  googleSiteVerification: 'yQ6hJa0cIwZROqQE6jF7jHmPDUZgV0CrGCxpwutrV3I',
};

export type SiteConfig = typeof siteConfig;
