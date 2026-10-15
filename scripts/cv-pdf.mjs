// Genera los PDF del CV (ES y EN) a partir del build estático: node scripts/cv-pdf.mjs
// Sirve dist/ con un servidor mínimo y usa Chromium (Playwright) para imprimir /cv/ y /en/cv/.
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { DIST, serveDist } from './serve-dist.mjs';

const server = await serveDist();
const browser = await chromium.launch();
const page = await browser.newPage({ colorScheme: 'light' });
await mkdir(new URL('cv/', DIST), { recursive: true });

for (const [locale, route] of [
  ['es', '/cv/'],
  ['en', '/en/cv/'],
]) {
  const response = await page.goto(`${server.origin}${route}`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error(`No se pudo cargar ${route} (${response?.status()})`);
  await page.evaluate(() => document.fonts.ready);
  const out = fileURLToPath(new URL(`cv/pedro-luis-soto-santos-cv-${locale}.pdf`, DIST));
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true });
  console.log(`CV ${locale}: ${out}`);
}

await browser.close();
server.close();
