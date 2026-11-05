import http from "node:http";
import path from "node:path";
import { readFile, stat } from "node:fs/promises";
const root = path.resolve("dist");
const port = Number(process.env.PORT || 4174);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};
const server = http.createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" });
    return response.end();
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400);
    return response.end();
  }
  let file = path.resolve(root, "." + pathname);
  const relative = path.relative(root, file);
  if (
    relative.startsWith("..") ||
    path.isAbsolute(relative) ||
    relative.split(path.sep).some((part) => part.startsWith("."))
  ) {
    response.writeHead(403);
    return response.end();
  }
  let status = 200;
  try {
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(302, { Location: pathname + "/" });
        return response.end();
      }
      file = path.join(file, "index.html");
    }
    await stat(file);
  } catch {
    file = path.join(root, "404.html");
    status = 404;
  }
  try {
    const data = await readFile(file);
    response.writeHead(status, {
      "Content-Type": mime[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(500);
    response.end("Run npm run build before previewing.");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}/`),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => server.close(() => process.exit(0)));
