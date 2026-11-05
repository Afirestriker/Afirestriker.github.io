import http from "node:http";
import { readFile } from "node:fs/promises";
import { createServer } from "vite";
import { renderDocument } from "./html.mjs";
const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const server = http.createServer((request, response) =>
  vite.middlewares(request, response, async () => {
    try {
      const pathname = new URL(request.url, "http://localhost").pathname;
      const { render, routeMetadata, profile } = await vite.ssrLoadModule(
        "/src/entry-server.tsx",
      );
      const metadata = routeMetadata.find((meta) => meta.path === pathname) || {
        path: "/404.html",
        title: "Page not found — Ashish Agrawal",
        description: "Return to the portfolio.",
      };
      const template = await vite.transformIndexHtml(
        pathname,
        await readFile("index.html", "utf8"),
      );
      response.writeHead(metadata.path === "/404.html" ? 404 : 200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      response.end(
        renderDocument(
          template,
          metadata.path,
          render(metadata.path),
          metadata,
          profile,
        ),
      );
    } catch (error) {
      vite.ssrFixStacktrace(error);
      console.error(error);
      response.writeHead(500);
      response.end("Development rendering error. See terminal.");
    }
  }),
);
server.listen(5173, "127.0.0.1", () =>
  console.log("Development: http://127.0.0.1:5173/"),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () =>
    server.close(async () => {
      await vite.close();
      process.exit(0);
    }),
  );
