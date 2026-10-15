// Genera las imágenes Open Graph de los casos de estudio a partir del build: node scripts/og-images.mjs
// Captura cada plantilla dist/og/<locale>/<slug>/ a 1200 × 630 en modo oscuro, la guarda como
// dist/og/<locale>/<slug>.jpg y borra el HTML de la plantilla para que no se publique.
import { readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { DIST, serveDist } from './serve-dist.mjs';

const OG = new URL('og/', DIST);
const templates = [];
for (const locale of await readdir(OG)) {
  for (const entry of await readdir(new URL(`${locale}/`, OG), { withFileTypes: true })) {
    if (entry.isDirectory()) templates.push({ locale, slug: entry.name });
  }
}
if (templates.length === 0) throw new Error('No hay plantillas en dist/og/: ¿falta el build?');

const server = await serveDist();
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'dark' });

for (const { locale, slug } of templates) {
  const route = `/og/${locale}/${slug}/`;
  const response = await page.goto(`${server.origin}${route}`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error(`No se pudo cargar ${route} (${response?.status()})`);
  await page.evaluate(() => document.fonts.ready);
  const out = fileURLToPath(new URL(`${locale}/${slug}.jpg`, OG));
  await page.screenshot({ path: out, type: 'jpeg', quality: 85 });
  await rm(new URL(`${locale}/${slug}/`, OG), { recursive: true });
  console.log(`OG ${locale}/${slug}: ${out}`);
}

await browser.close();
server.close();
