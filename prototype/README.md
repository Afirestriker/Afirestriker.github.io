# Local portfolio prototype

Run from the repository root with Node.js:

```powershell
node prototype/server.mjs
```

Open http://127.0.0.1:4173/ in a browser. To use another port in PowerShell, set `$env:PORT = '4174'` before starting the server. Stop with Ctrl+C.

This buildless prototype validates the content, visual direction and responsive interactions before a production migration. It does not modify the original homepage. It includes a homepage, a form-engine case study, mobile navigation, experience disclosures and an independent schema-driven form demonstration. No installation is needed.

Career copy follows the evidence reviewed in `../docs/`. Employer display wording remains provisional, numerical impact claims are omitted, and internal screenshots, assessment documents and source configurations are not included. The prototype uses descriptive project names and synthetic examples. A resume download is intentionally deferred until the public file is reviewed.

The demo generates form fields from two local example schemas, validates input in the browser and conditionally reveals the approval field for Production. Input is neither submitted nor persisted. The preview server serves only this folder, binds to loopback and disables outbound connections through its content security policy. There is no production deployment configuration in this prototype.

The photograph and optional contact banner are derived from the user-provided images, optimized locally as WebP with unnecessary metadata removed. The responsive portrait crop is controlled by CSS. All fonts are system fonts; there are no external runtime dependencies or analytics.

Potential production work: typed shared content, React/TypeScript components, build-time HTML generation, final public content review, metadata/social images, verified credential links, optimized responsive image variants and GitHub Pages CI. This prototype remains a separate design-review artifact.
