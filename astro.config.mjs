import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Remplace par le domaine final du site avant le déploiement
const SITE_URL = 'https://monbureauconnecte.fr';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
