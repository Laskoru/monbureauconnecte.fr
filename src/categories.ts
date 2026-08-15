export const categories = [
  {
    slug: 'mobilier',
    icon: '🪑',
    label: 'Mobilier & Confort',
    description: 'Chaises, bureaux réglables et supports pour tenir la journée sans douleurs.',
  },
  {
    slug: 'peripheriques',
    icon: '⌨️',
    label: 'Périphériques',
    description: 'Claviers, souris : le matériel que tu as sous les mains toute la journée.',
  },
  {
    slug: 'audio-visio',
    icon: '🎧',
    label: 'Audio & Visio',
    description: 'Casques et webcams pour des visios nettes et un environnement calme.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
