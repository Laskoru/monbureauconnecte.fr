// Audit SEO des articles publiés : le mot-clé principal (keywords[0]) doit apparaître
//   a) dans la balise <title> (seoTitle ?? title, ≤ 60 caractères avec ou sans suffixe),
//   b) dans la meta description (120 à 155 caractères),
//   c) dans la première ou la deuxième phrase du corps,
//   d) dans au moins un intertitre ## ou ###.
// La correspondance tolère la « forme naturelle » du mot-clé : casse, accents, pluriels
// et accords (s, x, e, es), apostrophes et tirets, et jusqu'à deux petits mots de liaison
// entre deux mots (« coût d'un setup gaming » pour « cout setup gaming »).
//
// Usage : node scripts/audit-keywords.mjs          (tableau, sort en erreur s'il reste un manque)
//         node scripts/audit-keywords.mjs --json   (état brut, pour comparer avant/après)
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const DIR = path.join(process.cwd(), 'src/content/articles');
const STOP = ['pour', 'le', 'la', 'les', 'l', 'de', 'du', 'des', 'd', 'en', 'au', 'aux', 'a', 'sa', 'ta', 'son', 'ton', 'ses', 'tes', 'un', 'une', 'et', 'sur', 'avec'];

const norm = (s) => s
  .normalize('NFD').replace(/\p{M}/gu, '')
  .toLowerCase()
  .replace(/[’'`]/g, "' ")
  .replace(/[-‑_/]/g, ' ')
  .replace(/\s+/g, ' ');

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function keywordRe(kw) {
  const words = norm(kw).replace(/'/g, ' ').split(' ').filter(Boolean);
  const stem = (w) => {
    const base = w.replace(/(es|s|x|e)$/, '');
    return base.length >= 3 ? `${esc(base)}(?:es|s|x|e)?` : `${esc(w)}(?:s|x)?`;
  };
  const gap = `(?:[\\s']+(?:${STOP.join('|')})){0,2}[\\s']+`;
  return new RegExp(`(?<![\\p{L}\\p{N}])${words.map(stem).join(gap)}(?![\\p{L}\\p{N}])`, 'u');
}

function plain(md) {
  return md
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstSentences(body, n = 2) {
  const paras = body.split(/\r?\n\s*\r?\n/).map((p) => p.trim())
    .filter((p) => p && !/^(#|import |<|\||-{3}|!\[)/.test(p));
  const text = plain(paras.slice(0, 2).join(' '));
  const sentences = text.match(/[^.!?]+(?:[.!?]+|$)(?=\s+[A-ZÀ-Ý«"(]|\s*$)/gu) ?? [text];
  return sentences.slice(0, n).join(' ');
}

const BRAND = 'Mon Bureau Connecté';
const results = [];
for (const f of fs.readdirSync(DIR).filter((n) => n.endsWith('.md')).sort()) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
  if (data.draft === true) continue;
  const kw = (data.keywords ?? [])[0] ?? '';
  const re = keywordRe(kw);
  const test = (s) => re.test(norm(s));
  const tag = data.seoTitle ?? data.title;
  const fullTitle = tag.length + BRAND.length + 3 <= 60 ? `${tag} | ${BRAND}` : tag;
  const desc = String(data.description ?? '');
  const headings = content.split(/\r?\n/).filter((l) => /^#{2,3}\s/.test(l)).map((l) => l.replace(/^#+\s*/, ''));
  results.push({
    slug: f.replace(/\.md$/, ''),
    keyword: kw,
    title: fullTitle,
    titleLen: fullTitle.length,
    inTitle: test(tag),
    descLen: desc.length,
    inDesc: test(desc),
    descLenOk: desc.length >= 120 && desc.length <= 155,
    inIntro: test(firstSentences(content)),
    inHeading: headings.some(test),
  });
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(results, null, 2));
} else {
  const ok = (b) => (b ? 'ok ' : 'NON');
  let missing = 0;
  for (const r of results) {
    const flags = [r.inTitle && r.titleLen <= 60, r.inDesc && r.descLenOk, r.inIntro, r.inHeading];
    missing += flags.filter((b) => !b).length;
    console.log(`${r.slug.padEnd(46)} title:${ok(flags[0])} desc:${ok(flags[1])}(${String(r.descLen).padStart(3)}) intro:${ok(r.inIntro)} h2:${ok(r.inHeading)}  « ${r.keyword} »`);
  }
  console.log(`\n${results.length} articles publiés, ${missing} manque(s).`);
  if (missing) process.exitCode = 1;
}
