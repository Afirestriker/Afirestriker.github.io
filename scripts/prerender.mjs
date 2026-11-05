import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import {
  render,
  routeMetadata,
  profile,
} from "../.build/server/entry-server.js";
import { renderDocument } from "./html.mjs";
const template = await readFile("dist/index.html", "utf8");
for (const metadata of [
  ...routeMetadata,
  {
    path: "/404.html",
    title: "Page not found — Ashish Agrawal",
    description:
      "Return to Ashish Agrawal’s portfolio, experience and selected engineering work.",
  },
]) {
  const target =
    metadata.path === "/404.html"
      ? "dist/404.html"
      : path.join("dist", metadata.path, "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    renderDocument(
      template,
      metadata.path,
      render(metadata.path),
      metadata,
      profile,
    ),
  );
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routeMetadata.map((meta) => `<url><loc>${profile.origin}${meta.path}</loc><lastmod>${profile.reviewed}</lastmod></url>`).join("")}</urlset>`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${profile.origin}/sitemap.xml\n`,
);
console.log(`Generated ${routeMetadata.length} public pages and 404.html.`);
