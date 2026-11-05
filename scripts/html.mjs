export function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}
export function createHead(metadata, profile) {
  const url = profile.origin + metadata.path;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.origin,
    sameAs: [profile.github, profile.linkedin],
  };
  return `<title>${escapeHtml(metadata.title)}</title><meta name="description" content="${escapeHtml(metadata.description)}"/><link rel="canonical" href="${escapeHtml(url)}"/><meta property="og:type" content="website"/><meta property="og:title" content="${escapeHtml(metadata.title)}"/><meta property="og:description" content="${escapeHtml(metadata.description)}"/><meta property="og:url" content="${escapeHtml(url)}"/><meta property="og:image" content="${profile.origin}/assets/social-preview.png"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escapeHtml(metadata.title)}"/><meta name="twitter:description" content="${escapeHtml(metadata.description)}"/><meta name="twitter:image" content="${profile.origin}/assets/social-preview.png"/>${metadata.path === "/404.html" ? '<meta name="robots" content="noindex"/>' : ""}<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}
export function renderDocument(template, path, markup, metadata, profile) {
  return template
    .replace('data-route="/"', () => `data-route="${escapeHtml(path)}"`)
    .replace("<!--page-head-->", () => createHead(metadata, profile))
    .replace("<!--app-html-->", () => markup);
}
