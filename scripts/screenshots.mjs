// Capturas de revisión visual: node scripts/screenshots.mjs [url-base] [carpeta-salida] [rutas...]
// Genera una captura por ruta, ancho (móvil, tablet, escritorio) y tema (claro, oscuro).
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const [base = 'http://localhost:4321', out = 'screenshots', ...paths] = process.argv.slice(2);
const routes = paths.length > 0 ? paths : ['/'];
const widths = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 900 },
];
const themes = /** @type {const} */ (['light', 'dark']);
const fullPage = process.env.FULL !== '0';

await mkdir(out, { recursive: true });
const browser = await chromium.launch();

for (const theme of themes) {
  for (const vp of widths) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      colorScheme: theme,
    });
    for (const route of routes) {
      await page.goto(new URL(route, base).href, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      // Recorre la página para que carguen las imágenes diferidas antes de la captura completa.
      if (fullPage) {
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 60));
          }
          window.scrollTo(0, 0);
        });
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(800);
      }
      const slug = route.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home';
      const file = join(out, `${slug}-${vp.name}-${theme}.png`);
      await page.screenshot({ path: file, fullPage });
      console.log(file);
    }
    await page.close();
  }
}

await browser.close();
