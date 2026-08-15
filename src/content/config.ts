import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // sert de meta-description SEO
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    // mots-clés ciblés par l'article, utile pour ton suivi éditorial
    keywords: z.array(z.string()).default([]),
    // catégorie utilisée pour le classement par thème sur l'accueil
    category: z.enum(['mobilier', 'peripheriques', 'audio-visio']),
    // image de couverture optionnelle, chemin relatif dans /public
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    // Produits Amazon à recommander dans cet article
    products: z
      .array(
        z.object({
          asin: z.string(), // identifiant produit Amazon, visible dans l'URL du produit
          title: z.string(),
          image: z.string().optional(), // URL d'image produit (depuis Amazon ou hébergée par toi)
          blurb: z.string().optional(), // une phrase expliquant pourquoi tu le recommandes
        })
      )
      .default([]),
    // Questions fréquentes affichées en bas d'article (aussi utilisées pour le rich snippet FAQ)
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { articles };
