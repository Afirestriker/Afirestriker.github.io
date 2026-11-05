import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    return response.end('Method not allowed');
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400); return response.end('Bad request'); }
  const resolved = path.resolve(root, '.' + pathname);
  const relative = path.relative(root, resolved);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some((segment) => segment.startsWith('.'))) {
    response.writeHead(403); return response.end('Forbidden');
  }
  let file = resolved;
  try {
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) { response.writeHead(302, { Location: pathname + '/' }); return response.end(); }
      file = path.join(file, 'index.html');
    }
    const extension = path.extname(file);
    if (!mime[extension]) { response.writeHead(404); return response.end('Not found'); }
    const data = await readFile(file);
    response.writeHead(200, {
      'Content-Type': mime[extension],
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; connect-src 'none'; form-action 'none'; frame-ancestors 'none'; base-uri 'self'",
    });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch { response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Page not found. Return to http://127.0.0.1:' + port + '/'); }
});
server.listen(port, '127.0.0.1', () => process.stdout.write(`Local prototype: http://127.0.0.1:${port}/\n`));
server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
