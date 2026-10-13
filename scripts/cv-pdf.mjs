// Genera los PDF del CV (ES y EN) a partir del build estático: node scripts/cv-pdf.mjs
// Sirve dist/ con un servidor mínimo y usa Chromium (Playwright) para imprimir /cv/ y /en/cv/.
import { createServer } from 'node:http';
import { readFile, mkdir, stat } from 'node:fs/promises';
import { posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const DIST = new URL('../dist/', import.meta.url);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
};

const server = createServer(async (req, res) => {
  try {
    const path = posix.normalize(decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname)).replace(/^[\/]+/, '');
    let file = new URL(path, DIST);
    if ((await stat(file).catch(() => null))?.isDirectory()) file = new URL(posix.join(path, 'index.html'), DIST);
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[posix.extname(file.pathname)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, resolve));
const { port } = /** @type {import('node:net').AddressInfo} */ (server.address());

const browser = await chromium.launch();
const page = await browser.newPage({ colorScheme: 'light' });
await mkdir(new URL('cv/', DIST), { recursive: true });

for (const [locale, route] of [
  ['es', '/cv/'],
  ['en', '/en/cv/'],
]) {
  const response = await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error(`No se pudo cargar ${route} (${response?.status()})`);
  await page.evaluate(() => document.fonts.ready);
  const out = fileURLToPath(new URL(`cv/pedro-luis-soto-santos-cv-${locale}.pdf`, DIST));
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true });
  console.log(`CV ${locale}: ${out}`);
}

await browser.close();
server.close();
