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
  accentColor: '#3454b4', // bleu tech, sobre et pro

  // Publicité — AdSense désactivé pour le moment, on démarre en 100% affiliation Amazon
  adsense: {
    enabled: false, // passe à true le jour où tu ajoutes AdSense
    clientId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },

  // Programme Partenaires Amazon
  amazon: {
    enabled: true,
    tag: 'tonid-21', // ton identifiant de suivi Amazon Associates, remplace-le
  },

  // Réseaux / contact (optionnel, laisse vide si non utilisé)
  social: {
    twitter: '',
    instagram: '',
  },

  // Auteur par défaut affiché sur les articles
  author: 'Rédaction',
};

export type SiteConfig = typeof siteConfig;
