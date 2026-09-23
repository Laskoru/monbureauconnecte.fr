// Cotes d'un produit : jusqu'à 3 mesures RÉELLES relevées dans son titre, ses
// points forts puis son résumé (dimensions, plage, charge, bruit, puissance…).
// On n'invente rien : sans mesure écrite, la fiche n'affiche pas de cote.
interface ProduitMesurable { title: string; pros?: string[]; blurb?: string }

const MOTIFS: RegExp[] = [
  // Dimensions : 120x60 cm, 120 × 60 × 3 cm
  /\b\d{2,3}(?:[.,]\d)?\s?[x×]\s?\d{2,3}(?:[.,]\d)?(?:\s?[x×]\s?\d{1,3}(?:[.,]\d)?)?\s?cm\b/g,
  // Plages : 62-127 cm, 13 à 32 pouces, 20-20 000 Hz
  /\b\d{1,4}(?:[.,]\d)?\s?(?:-|–|à)\s?\d{1,4}(?:[.,]\d)?\s?(?:cm|mm|pouces|kg|W|h|dB|Hz)(?![a-zA-Zà-ÿ\d])/g,
  // Définitions vidéo : 1080p, 1440p, 4K
  /\b(?:720p|1080p|1440p|2160p|2K|4K)\b/g,
  // Valeurs simples avec unité : 100 kg, 35 dB, 65 W, 30 h, 16 000 DPI
  /(?<![\d.,])\d{1,3}(?:[\u00a0\u202f ]\d{3})*(?:[.,]\d+)?\s?(?:cm|mm|kg|dB|Wh|W|mAh|kHz|Hz|h|ms|DPI|dpi|Go|To|ports|pouces|lux)(?![a-zA-Zà-ÿ\d])/g,
];

function normalise(v: string): string {
  let s = v.replace(/\s+/g, ' ').replace(/(\d)\s?[x×]\s?(\d)/g, '$1 × $2').replace(/\s?(?:-|à)\s?(?=\d)/g, '–').trim();
  if (!/^(?:\d{3,4}p|\dK)$/.test(s)) s = s.replace(/(\d)([a-zA-Z])/g, '$1 $2');
  return s;
}

function extraire(texte: string): string[] {
  const out: string[] = [];
  for (const m of MOTIFS) for (const r of texte.matchAll(m)) out.push(normalise(r[0]));
  return out;
}

export function mesuresProduit(p: ProduitMesurable, max = 3): string[] {
  const res: string[] = [];
  const compact = (v: string) => v.replace(/\s/g, '').toLowerCase();
  for (const source of [p.title, ...(p.pros ?? []), p.blurb ?? '']) {
    for (const v of extraire(source)) {
      // une plage « 65–125 cm » ou « 120 × 60 cm » englobe déjà « 125 cm » ou « 60 cm »
      if (res.some((r) => compact(r).includes(compact(v)))) continue;
      res.push(v);
      if (res.length >= max) return res;
    }
  }
  return res;
}
