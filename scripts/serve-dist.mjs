// Servidor HTTP mínimo sobre dist/ para los scripts que capturan el build con Playwright.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { posix } from 'node:path';

export const DIST = new URL('../dist/', import.meta.url);

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

/**
 * Sirve dist/ en un puerto libre.
 * @returns {Promise<{ origin: string, close: () => void }>}
 */
export async function serveDist() {
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
  return { origin: `http://localhost:${port}`, close: () => server.close() };
}
