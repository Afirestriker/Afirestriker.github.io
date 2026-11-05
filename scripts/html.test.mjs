import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, renderDocument } from "./html.mjs";
test("metadata and route attributes cannot break out of HTML", () => {
  const profile = {
    name: "A < B",
    title: "Engineer",
    origin: "https://example.com",
    github: "https://github.com/example",
    linkedin: "https://example.com/profile",
  };
  const result = renderDocument(
    '<head><!--page-head--></head><div data-route="/"><!--app-html--></div>',
    "/work/a/",
    "<h1>Readable $& content</h1>",
    { path: "/work/a/", title: 'A "quote" <script>', description: "A & B" },
    profile,
  );
  assert(result.includes("A &quot;quote&quot; &lt;script&gt;"));
  assert(result.includes('data-route="/work/a/"'));
  assert(result.includes("<h1>Readable $& content</h1>"));
  assert(!result.includes('"name":"A < B"'));
  assert(result.includes("\\u003c"));
  assert.equal(escapeHtml("'&"), "&#39;&amp;");
});
