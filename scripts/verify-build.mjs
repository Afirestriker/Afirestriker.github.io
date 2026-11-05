import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("dist");
async function files(directory) {
  const items = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      items.map((item) =>
        item.isDirectory()
          ? files(path.join(directory, item.name))
          : path.join(directory, item.name),
      ),
    )
  ).flat();
}
const all = await files(root),
  html = new Map();
for (const file of all.filter((f) => f.endsWith(".html"))) {
  const text = await readFile(file, "utf8");
  const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate IDs in ${file}`);
  assert.equal(
    (text.match(/<h1\b/g) || []).length,
    1,
    `One h1 required in ${file}`,
  );
  assert(!text.includes("<!--app-html-->"));
  assert(text.includes('<link rel="canonical"'));
  html.set(file, { text, ids });
}
for (const [file, { text }] of html) {
  for (const match of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(
      match[1],
      "https://local.test" +
        ("/" + path.relative(root, file).replaceAll("\\", "/")),
    );
    if (url.origin !== "https://local.test") continue;
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (!path.extname(target)) target = path.join(target, "index.html");
    await stat(target).catch(() => {
      throw new Error(`Missing ${match[1]} in ${file}`);
    });
    if (url.hash && html.has(target))
      assert(
        html.get(target).ids.includes(decodeURIComponent(url.hash.slice(1))),
        `Missing anchor ${match[1]} in ${file}`,
      );
  }
}
for (const file of all) {
  assert(!file.endsWith(".map"), "No public source maps");
  if (/\.(html|js|css|json)$/.test(file)) {
    const text = await readFile(file, "utf8");
    for (const token of [
      "2024298",
      "perform.simplifygroup.com/review/",
      "F:\\Job Search Portfolio",
      "portfolio-research",
      "Global_Annual_Performance_Evaluation",
    ])
      assert(!text.includes(token), `Private research token in ${file}`);
  }
}
assert(
  (await stat(path.join(root, "downloads/Ashish-Agrawal-Resume.pdf"))).size > 0,
);
assert(
  (await readFile(path.join(root, "index.html"), "utf8")).includes(
    "Simplify Healthcare / Simplify Group",
  ),
);
console.log(
  `Verified ${html.size} rendered pages: links, anchors, headings, metadata, download and public output.`,
);
