// Génère une épingle Pinterest (image verticale 1000×1500 attractive + entrée CSV)
// par article publié. Rendu via Chrome headless. Variante SOMBRE (identité tech).
// Usage : node scripts/generate-pins.mjs
// Accroche : frontmatter `pinHook` (avec *mot* en italique accent) sinon titre avant « : ». Sous-titre : `pinSub`.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';

// ── Réglages par site ──
const SITE_URL = 'https://www.monbureauconnecte.fr';
const SITE_NAME = 'Mon Bureau Connecté';
const ACCENT = '#4c8dff';
const ACCENT_LIGHT = '#82b0ff';
const CATEGORY_LABEL = { mobilier: 'Mobilier', peripheriques: 'Périphériques', 'audio-visio': 'Audio & visio' };
const BOARD_BY_CATEGORY = {
  mobilier: 'Bureau & mobilier ergonomique',
  peripheriques: 'Accessoires & périphériques bureau',
  'audio-visio': 'Audio & visio télétravail',
};
const EMBLEM = '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>';
// ────────────────────────

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, 'src/content/articles');
const COVERS_DIR = path.join(ROOT, 'public/covers');
const OUT_IMG_DIR = path.join(ROOT, 'public/pins');
const OUT_CSV_DIR = path.join(ROOT, 'pinterest-export');
const IMG_W = 1000, IMG_H = 1500;

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.LOCALAPPDATA ? `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe` : null,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean).find((p) => fs.existsSync(p));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const hookHtml = (t) => esc(t).replace(/\*([^*]+)\*/g, '<em>$1</em>');
function coverPath(slug) {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'avif']) {
    const p = path.join(COVERS_DIR, `${slug}.${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function buildHtml({ coverAbs, category, hook, sub }) {
  const label = (CATEGORY_LABEL[category] ?? 'Bureau').toUpperCase();
  const subHtml = sub ? `<div class="sub">${esc(sub)}</div>` : '';
  const fileUrl = 'file:///' + coverAbs.replace(/\\/g, '/');
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,600&family=Nunito+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<style>
 *{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact;}
 body{width:${IMG_W}px;height:${IMG_H}px;position:relative;background:#12161d;font-family:"Nunito Sans",sans-serif;overflow:hidden;}
 .photo{position:absolute;top:0;left:0;width:${IMG_W}px;height:1000px;object-fit:cover;}
 .topscrim{position:absolute;top:0;left:0;width:${IMG_W}px;height:200px;background:linear-gradient(180deg,rgba(0,0,0,.6),transparent);}
 .brand{position:absolute;top:34px;left:44px;display:flex;align-items:center;gap:12px;color:#fff;}
 .brand svg{width:30px;height:30px;filter:drop-shadow(0 1px 3px rgba(0,0,0,.5));}
 .brand .t{font-family:"Fraunces",serif;font-weight:600;font-size:30px;text-shadow:0 1px 6px rgba(0,0,0,.55);}
 .card{position:absolute;left:0;bottom:0;width:${IMG_W}px;height:760px;background:#151a23;border-radius:56px 56px 0 0;box-shadow:0 -18px 60px rgba(0,0,0,.5);padding:64px 66px 60px;border-top:1px solid #232b38;}
 .pill{display:inline-flex;align-items:center;gap:10px;background:${ACCENT};color:#fff;font-weight:800;font-size:23px;letter-spacing:2px;padding:12px 26px;border-radius:40px;}
 .hook{font-family:"Fraunces",serif;font-weight:600;font-size:82px;line-height:1.06;color:#f2f5fa;margin-top:34px;letter-spacing:-.5px;}
 .hook em{font-style:italic;color:${ACCENT_LIGHT};}
 .sub{font-size:30px;color:#9aa6b6;font-weight:600;margin-top:26px;line-height:1.35;}
 .cta{position:absolute;left:66px;bottom:60px;display:flex;align-items:center;gap:16px;}
 .cta .txt{font-family:"Fraunces",serif;font-weight:600;font-size:31px;color:#f2f5fa;}
 .arrow{width:64px;height:64px;border-radius:50%;background:${ACCENT};display:flex;align-items:center;justify-content:center;}
 .arrow svg{width:30px;height:30px;stroke:#fff;}
 .site{position:absolute;right:66px;bottom:66px;font-weight:800;font-size:26px;color:${ACCENT_LIGHT};}
</style></head><body>
 <img class="photo" src="${fileUrl}">
 <div class="topscrim"></div>
 <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${EMBLEM}</svg><span class="t">${esc(SITE_NAME)}</span></div>
 <div class="card">
  <span class="pill">✦ ${label}</span>
  <div class="hook">${hook}</div>
  ${subHtml}
  <div class="cta"><span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span><span class="txt">à découvrir</span></div>
  <span class="site">${esc(SITE_URL.replace(/^https?:\/\/(www\.)?/, ''))}</span>
 </div>
</body></html>`;
}

function renderPin(html, outJpg) {
  const tmp = path.join(os.tmpdir(), `pin-${Date.now()}-${Math.random().toString(36).slice(2)}.html`);
  fs.writeFileSync(tmp, html, 'utf8');
  try {
    execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=5000', `--window-size=${IMG_W},${IMG_H}`, `--screenshot=${outJpg}`, 'file:///' + tmp.replace(/\\/g, '/')], { stdio: 'ignore' });
  } finally { fs.rmSync(tmp, { force: true }); }
}

function main() {
  if (!CHROME) { console.error('❌ Chrome/Edge introuvable.'); process.exit(1); }
  fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
  fs.mkdirSync(OUT_CSV_DIR, { recursive: true });
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  const rows = [['Title', 'Media URL', 'Pinterest board', 'Description', 'Link', 'Publish date', 'Keywords']];
  let done = 0, skipped = 0;
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const { data } = matter(fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8'));
    if (data.draft) continue;
    const cover = coverPath(slug);
    if (!cover) { console.warn(`⚠ pas de couverture pour ${slug}`); skipped++; continue; }
    const hook = hookHtml(data.pinHook || String(data.title).split(':')[0].trim());
    const sub = data.pinSub || '';
    try {
      renderPin(buildHtml({ coverAbs: cover, category: data.category, hook, sub }), path.join(OUT_IMG_DIR, `${slug}.jpg`));
      const board = BOARD_BY_CATEGORY[data.category] ?? 'Bureau & télétravail';
      const keywords = (data.keywords ?? []).slice(0, 5).join(', ');
      const description = `${data.description} 👉 Le guide complet sur ${SITE_NAME}.`.slice(0, 480);
      rows.push([data.title, `${SITE_URL}/pins/${slug}.jpg`, board, description, `${SITE_URL}/articles/${slug}/`, '', keywords]);
      done++; process.stdout.write('.');
    } catch (err) { console.warn(`\n⚠ échec ${slug} : ${err.message}`); skipped++; }
  }
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  fs.writeFileSync(path.join(OUT_CSV_DIR, 'pins.csv'), csv, 'utf8');
  console.log(`\n✅ ${done} épingles générées`); if (skipped) console.log(`⚠ ${skipped} ignoré(s)`);
  console.log(`📄 CSV : pinterest-export/pins.csv`);
}
main();
