// Contrôle des liens internes du site construit (dossier dist/).
// Pour chaque href/src interne commençant par « / » dans les pages HTML, vérifie que
// le fichier existe (ou son index.html). Ignore le contenu des <script>, les ancres
// (#…) et les chaînes de requête (?…). Sort en erreur s'il reste des liens cassés.
//
// Usage : npm run build && npm run check-links   (ou node scripts/check-links.mjs [dossier])
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv[2] ?? 'dist');
if (!fs.existsSync(DIST)) {
  console.error(`Dossier introuvable : ${DIST} (lance d'abord npm run build).`);
  process.exit(1);
}

function htmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function exists(urlPath) {
  let clean;
  try { clean = decodeURIComponent(urlPath); } catch { clean = urlPath; }
  const target = path.join(DIST, clean);
  if (!target.startsWith(DIST)) return false;
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  return fs.existsSync(path.join(target, 'index.html'));
}

const ATTR_RE = /\s(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
const SRCSET_RE = /\ssrcset\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
const broken = new Map(); // url -> Set(pages)
let checked = 0;

for (const file of htmlFiles(DIST)) {
  const page = '/' + path.relative(DIST, file).split(path.sep).join('/');
  // Le contenu des <script> (JSON-LD, code) ne contient pas de liens de page.
  const html = fs.readFileSync(file, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const urls = [];
  for (const m of html.matchAll(ATTR_RE)) urls.push(m[1] ?? m[2]);
  for (const m of html.matchAll(SRCSET_RE)) {
    for (const part of (m[1] ?? m[2]).split(',')) urls.push(part.trim().split(/\s+/)[0]);
  }
  for (const raw of urls) {
    if (!raw || !raw.startsWith('/') || raw.startsWith('//')) continue;
    const urlPath = raw.replace(/&amp;/g, '&').split('#')[0].split('?')[0];
    if (!urlPath) continue;
    checked++;
    if (!exists(urlPath)) {
      if (!broken.has(urlPath)) broken.set(urlPath, new Set());
      broken.get(urlPath).add(page);
    }
  }
}

if (broken.size > 0) {
  console.error(`${broken.size} lien(s) interne(s) cassé(s) :`);
  for (const [url, pages] of [...broken].sort()) {
    const list = [...pages].sort();
    console.error(`  ${url}\n    dans ${list.slice(0, 5).join(', ')}${list.length > 5 ? ` (+${list.length - 5})` : ''}`);
  }
  process.exit(1);
}
console.log(`Liens internes OK : ${checked} liens vérifiés dans ${htmlFiles(DIST).length} pages.`);
