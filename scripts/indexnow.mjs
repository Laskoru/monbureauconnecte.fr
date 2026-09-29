// IndexNow : signale à Bing, Yandex, Seznam, Naver… (via api.indexnow.org) les pages
// nouvelles ou modifiées, pour qu'elles soient recrawlées sans attendre. Node pur, sans
// dépendance.
//
// Usage :
//   node scripts/indexnow.mjs https://www.monbureauconnecte.fr/articles/x/ [autres URLs…]
//   node scripts/indexnow.mjs            → articles modifiés dans le dernier push + accueil
//   node scripts/indexnow.mjs --list     → affiche seulement les URLs (une par ligne)
//   node scripts/indexnow.mjs --dry-run  → affiche la requête sans l'envoyer
//
// Sans URL en argument, le script compare `INDEXNOW_BEFORE` (le `github.event.before` du
// push) à HEAD sur src/content/articles/*.md ; à défaut (lancement manuel, premier push
// d'une branche), il compare HEAD~1 à HEAD. Les brouillons (draft: true) sont ignorés.
// La clé est le fichier public/<32 caractères hexadécimaux>.txt dont le contenu est la clé.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SITE = 'https://www.monbureauconnecte.fr';
const HOST = new URL(SITE).host;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const ROOT = process.cwd();

const args = process.argv.slice(2);
const listOnly = args.includes('--list');
const dryRun = args.includes('--dry-run');
const urlArgs = args.filter((a) => !a.startsWith('--'));

function findKey() {
  const dir = path.join(ROOT, 'public');
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(/^([0-9a-f]{32})\.txt$/);
    if (m && fs.readFileSync(path.join(dir, f), 'utf8').trim() === m[1]) return m[1];
  }
  return null;
}

function git(...a) {
  return execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

function changedArticleUrls() {
  const before = process.env.INDEXNOW_BEFORE ?? '';
  let base = /^[0-9a-f]{7,40}$/.test(before) && !/^0+$/.test(before) ? before : 'HEAD~1';
  try { git('cat-file', '-e', `${base}^{commit}`); } catch {
    console.log(`Commit de départ ${base} introuvable (historique trop court ?) : seul l'accueil est envoyé.`);
    return [];
  }
  const files = git('diff', '--name-only', '--diff-filter=AMR', base, 'HEAD', '--', 'src/content/articles/')
    .split('\n').filter((f) => /^src\/content\/articles\/[^/]+\.md$/.test(f));
  return files.filter((f) => {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const fm = (src.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
    return !/^draft:\s*true\b/m.test(fm);
  }).map((f) => `${SITE}/articles/${path.basename(f, '.md')}/`);
}

let urlList = urlArgs.length ? urlArgs : [...changedArticleUrls(), `${SITE}/`];
urlList = [...new Set(urlList)].filter((u) => {
  try { return new URL(u).host === HOST; } catch { return false; }
});

if (listOnly) {
  console.log(urlList.join('\n'));
  process.exit(0);
}
if (!urlList.length) {
  console.log('Aucune URL à envoyer.');
  process.exit(0);
}

const key = findKey();
if (!key) {
  console.error('Clé IndexNow introuvable : il faut un fichier public/<clé>.txt contenant la clé.');
  process.exit(1);
}

const body = { host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList };
console.log(`IndexNow : ${urlList.length} URL(s)\n${urlList.map((u) => '  ' + u).join('\n')}`);
if (dryRun) {
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}

try {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(30_000),
  });
  const text = (await res.text()).slice(0, 300);
  // 200 : reçu ; 202 : reçu, clé en cours de vérification. 4xx : clé ou URLs refusées.
  console.log(`Réponse ${res.status} ${res.statusText}${text ? ` : ${text}` : ''}`);
  if (!res.ok) process.exitCode = 1;
} catch (err) {
  console.error(`Envoi impossible : ${err.message}`);
  process.exitCode = 1;
}
