// Génère le cadeau de la newsletter : la « Checklist ergonomie du poste de travail »
// en PDF A4 imprimable, plus une vignette PNG, dans public/ressources/.
//
// Mêmes points que la page /checklist-bureau-ergonomique/ : ils sont lus dans
// src/data/checklist-ergonomie.json, la source commune de la page et du PDF.
// À relancer après toute modification de ce fichier.
//
// Playwright n'est pas une dépendance du site (Vercel n'en a pas besoin) :
//   npm i --no-save playwright
//   npm run lead-magnet
// Chromium : celui de Playwright, ou un binaire indiqué par CHROMIUM_PATH.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'public', 'ressources');
const PDF = 'checklist-ergonomie-poste-de-travail.pdf';
const PNG = 'checklist-ergonomie-poste-de-travail.png';
const SITE = 'www.monbureauconnecte.fr';
const PAGE_URL = `https://${SITE}/checklist-bureau-ergonomique/`;

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright est introuvable. Installe-le sans toucher au package.json : npm i --no-save playwright');
  process.exit(1);
}

const sections = JSON.parse(fs.readFileSync(path.join(root, 'src/data/checklist-ergonomie.json'), 'utf8'));
// Polices embarquées en data: (une page chargée par setContent ne lit pas les fichiers locaux).
const font = (f) => `data:font/woff2;base64,${fs.readFileSync(path.join(root, 'public/fonts', f)).toString('base64')}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const total = sections.reduce((n, s) => n + s.items.length, 0);

// Couleurs et polices de DESIGN.md (Studio clair) ; le lime ne sert jamais de couleur de texte.
const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>Checklist ergonomie du poste de travail</title>
<style>
  @font-face { font-family: 'Unbounded'; font-weight: 500 900; src: url('${font('unbounded-normal-500-900-latin.woff2')}') format('woff2'); }
  @font-face { font-family: 'Unbounded'; font-weight: 500 900; src: url('${font('unbounded-normal-500-900-latin-ext.woff2')}') format('woff2'); unicode-range: U+0100-02BA, U+1E00-1E9F; }
  @font-face { font-family: 'Onest'; font-weight: 400 700; src: url('${font('onest-normal-400-700-latin.woff2')}') format('woff2'); }
  @font-face { font-family: 'Onest'; font-weight: 400 700; src: url('${font('onest-normal-400-700-latin-ext.woff2')}') format('woff2'); unicode-range: U+0100-02BA, U+1E00-1E9F; }
  @font-face { font-family: 'JetBrains Mono'; font-weight: 500; src: url('${font('jetbrains-mono-normal-500-latin.woff2')}') format('woff2'); }
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; }
  body { width: 210mm; height: 297mm; padding: 12mm 14mm 10mm; overflow: hidden; background: #F6F5F0; color: #14161A; font-family: 'Onest', Arial, sans-serif; font-size: 9.8pt; line-height: 1.4; display: flex; flex-direction: column; }
  .brand { display: flex; align-items: center; gap: 8px; font-family: 'Unbounded', sans-serif; font-weight: 800; font-size: 10pt; letter-spacing: -0.02em; }
  .brand i { width: 14px; height: 14px; border-radius: 50%; border: 3.5px solid #14161A; background: #C6F135; }
  h1 { margin: 6mm 0 2.5mm; font-family: 'Unbounded', sans-serif; font-weight: 900; font-size: 23pt; line-height: 1.04; letter-spacing: -0.03em; }
  h1 mark { background: #C6F135; color: #14161A; padding: 0 0.12em; border-radius: 4px; }
  .lede { margin: 0 0 5mm; max-width: 150mm; color: #5E6168; font-size: 10.6pt; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
  .card { background: #FFFFFF; border: 1px solid #E2E1DB; border-radius: 16px; padding: 4mm 4.5mm 3mm; break-inside: avoid; }
  .card h2 { margin: 0 0 2mm; font-family: 'Unbounded', sans-serif; font-weight: 700; font-size: 11.5pt; letter-spacing: -0.02em; display: flex; align-items: center; gap: 7px; }
  .card h2::before { content: ''; width: 9px; height: 9px; border-radius: 50%; background: #C6F135; box-shadow: 0 0 0 1px #14161A; }
  ul { list-style: none; margin: 0; padding: 0; }
  li { position: relative; padding: 1.5mm 0 1.5mm 7.5mm; }
  li + li { border-top: 1px solid #E2E1DB; }
  li::before { content: ''; position: absolute; left: 0; top: 1.8mm; width: 4.4mm; height: 4.4mm; border: 1.5px solid #14161A; border-radius: 6px; background: #FFFFFF; }
  .more { margin: 1.5mm 0 0; font-size: 8.6pt; color: #5E6168; }
  .more b { color: #14161A; font-weight: 600; }
  .note { display: flex; flex-direction: column; justify-content: center; gap: 2mm; background: #EEF9C8; border-radius: 16px; padding: 4mm 5mm; font-size: 9.6pt; }
  .note b { font-family: 'Unbounded', sans-serif; font-weight: 800; font-size: 16pt; letter-spacing: -0.03em; white-space: nowrap; }
  footer { margin-top: auto; padding-top: 4mm; border-top: 1px solid #B9B8B0; display: flex; justify-content: space-between; gap: 6mm; font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #5E6168; }
  footer strong { color: #14161A; font-weight: 500; }
</style></head>
<body>
  <div class="brand"><i></i> Mon Bureau Connecté</div>
  <h1>Checklist <mark>ergonomie</mark><br>du poste de travail</h1>
  <p class="lede">Passe ton poste en revue et coche chaque point vérifié. Ce qui reste décoché, c'est ce qui mérite un réglage : écran, chaise, clavier et souris, lumière, pauses.</p>
  <div class="grid">
    ${sections.map((s) => `<section class="card"><h2>${esc(s.title)}</h2><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><p class="more">Pour aller plus loin : <b>${esc(s.link.label)}</b></p></section>`).join('\n    ')}
    <div class="note"><b>${total} points</b><span>Version en ligne, cochable et mémorisée sur ton appareil : ${PAGE_URL.replace('https://', '')}. Ces repères sont un point de départ : en cas de douleur persistante, un professionnel de santé reste le bon interlocuteur.</span></div>
  </div>
  <footer><span><strong>${SITE}</strong></span><span>Checklist ergonomie du poste de travail</span></footer>
</body></html>`;

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: path.join(outDir, PDF), format: 'A4', printBackground: true, preferCSSPageSize: true });

// Vignette : la page entière réduite à 600 px de large (sharp est déjà dans les devDependencies).
const shot = await page.screenshot({ fullPage: false });
await browser.close();
const { default: sharp } = await import('sharp');
await sharp(shot).resize({ width: 600 }).png({ compressionLevel: 9, palette: true }).toFile(path.join(outDir, PNG));

const kb = (f) => Math.round(fs.statSync(path.join(outDir, f)).size / 1024);
console.log(`public/ressources/${PDF} (${kb(PDF)} Ko) et ${PNG} (${kb(PNG)} Ko) générés : ${total} points.`);
