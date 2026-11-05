# Ashish Agrawal Portfolio

Personal portfolio for [Afirestriker.github.io](https://afirestriker.github.io), rebuilt around the approved editorial design and current engineering experience.

## Develop and preview

Requires Node.js 24 or newer. Versions are pinned in package.json and package-lock.json.

```powershell
npm ci
npm run dev
```

The development server runs at http://127.0.0.1:5173/ and renders each page using the same React components as the static build.

```powershell
npm test
npm run build
npm run preview
```

The production preview runs at http://127.0.0.1:4174/. It serves the actual generated pages, including a real HTTP 404 for missing paths. Stop a server with Ctrl+C.

## Structure

- `src/content.ts`: public profile, roles, achievements, four professional case studies, supporting projects and selected credentials. This is the starting point for future content and resume updates.
- `src/components/`: reusable React sections and the shadcn/ui-style Button component, adapted with Radix Slot and class-variance-authority to the approved design.
- `src/styles.css`: approved layout, responsive rules, visual tokens, print styling and Tailwind integration.
- `public/assets/`: optimized portrait/banner, project interface images, favicon and social preview.
- `public/downloads/`: the supplied resume, included at the owner's request. The website expands on its content; no resume rewrite is included in this change.
- `scripts/`: local servers, HTML metadata generation, static rendering and build validation.
- `prototype/`: the original approved, buildless design reference. It remains independently previewable on port 4173.
- `docs/`: solution/design document, content draft and implementation notes.

Vite builds client assets and a temporary server renderer. The renderer creates real HTML at `/`, `/experience/`, and four `/work/.../` directories. GitHub Pages does not need a running Node server. Main content is included in HTML before hydration; navigation and reading do not depend on JavaScript. The form demonstration is local, uses synthetic configuration and never submits or persists input.

The static build also generates titles, descriptions, canonical URLs, social metadata, Person structured data, sitemap.xml, robots.txt, and 404.html. Source maps are disabled. Only `dist/` is deployed: source documents, research extracts, prototype files, old vendor libraries and internal correspondence are excluded.

## Content changes

Keep facts in `src/content.ts` and presentation in components. Current employer wording is **Simplify Healthcare / Simplify Group**, as confirmed by the owner. Maintain achievement IDs when editing so they can be traced to the private evidence register stored outside this repository.

The website retains the approved prototype's professional positioning and wording. LinkedIn is used for project, volunteer, credential and award details. Public academic project descriptions acknowledge collaboration. Quantitative achievement claims without measurement support remain omitted. Promptopia is labeled as a learning project; its repository acknowledges JavaScript Mastery.

To replace the resume, put the reviewed PDF at `public/downloads/Ashish-Agrawal-Resume.pdf`. To update the canonical domain, change `profile.origin` and regenerate the build. If changing routes, update incoming links and preserved anchors, then run the build validator.

## GitHub Pages release

The repository's default branch is `main`. `.github/workflows/pages.yml` installs from the lockfile, runs tests and the production build, and uploads only `dist/`. Pull requests build without deploying. Pushes to main and manual runs can deploy through the `github-pages` environment.

Before the first release, confirm **Settings → Pages → Source: GitHub Actions** and any environment approval requirements. The intended address is the root user-site URL, so Vite base is `/`. The legacy root CNAME names the GitHub-provided hostname; it is not copied into the deployment artifact, and this change does not introduce a custom domain.

No remote settings, commits or deployment were changed during local implementation. Review the production preview before the first push. The old source remains recoverable through Git history. After deployment, check the homepage, direct case-study URLs and resume link. Roll back by deploying the previous known-good revision.

## Verification

`npm run build` includes TypeScript checking and validates generated pages for local links/assets, anchors, heading IDs, metadata, resume presence and accidental private research references. `npm test` checks metadata escaping and HTML insertion. Browser verification and remaining limits are recorded in `docs/implementation-verification.md`.
