# Ashish Agrawal Portfolio Solution and Design

Prepared 5 November 2026. Status: proposed direction for review. Scope: discovery, content strategy, design and implementation planning. Production implementation and publication have not started.

Implementation update: the prototype direction was approved and the React implementation is now built locally. The owner confirmed the employer wording “Simplify Healthcare / Simplify Group” and inclusion of the supplied resume. The approved positioning and introduction are retained; LinkedIn is used only for projects, volunteering, credentials and awards. See `implementation-verification.md` for the delivered scope and checks. The original proposal below records the design rationale.

## Recommendation

Rebuild the portfolio around software engineering work with depth in frontend systems and demonstrated contributions across platform services, delivery and support. Lead with reusable platform capabilities and difficult interaction problems. Support that story with case studies that explain the problem, personal contribution, engineering decisions and result.

Use a light editorial presentation with a clear portrait, spacious typography, restrained green accents and technical diagrams. Recommend React, TypeScript and Vite with Tailwind and selected shadcn/ui components, delivered as static pages on the existing GitHub Pages repository. Generate readable HTML for the main content and case studies rather than making essential career information depend entirely on client JavaScript.

A small local prototype is worthwhile before the full migration. It should test whether this more detailed career story remains easy to scan on mobile and desktop. The next phase requires agreement on the direction, as requested in the brief.

## 1. Research scope and confidence

Reviewed the repository's authored HTML, styling and interaction code, asset inventory, README, license, CNAME and Git remote. The working tree was clean at the start. No AGENTS.md was found in the repository or its drive root. Vendored library files were inventoried rather than audited internally.

Reviewed all 11 files in the supplied career folder:

| Material | Extent | Main use |
| --- | --- | --- |
| Updated resume | 1 PDF page | Employment dates, role titles, skills, education and earlier work |
| Current-organization experience document | 1 DOCX | Earlier platform context, integrations and technical contribution |
| 2025 self-assessment | 10 PDF pages | Configuration and UI work, ETL delivery, debugging and release support |
| 2025 colleague feedback | 3 PDFs, 5 pages total | Independent observations on quality, ETL improvements and collaboration |
| 2026 supporting self-appraisal | 22 PDF pages | Detailed ownership, technical decisions, migration, forms, workflows and delivery |
| 2026 feedback collection | 10 PDF pages | Embedded feedback screenshots inspected visually |
| 2026 assessment portal export | 11 PDF pages | Current designation and organization wording; employee-entered achievements |
| Profile photograph and banner | 2 JPEGs | Visual suitability and responsive treatment |

Text was extracted from every document. The screenshot-based 2026 feedback needed image inspection: its extracted text alone contained mostly headings. Repeated screenshots across that file were treated as repeated evidence, not additional endorsements. Some pages are section separators, and one heading retains template instructions.

The evidence supports specific work descriptions but does not independently establish every metric or all underlying implementation details. Referenced internal pull requests, source repositories and task histories were not accessed. The 2026 assessment is a self-review prepared before the December cycle end; it is not a final manager rating or evidence of a promotion.

Raw extracts, screenshots, the source manifest and the claim register are stored outside this public repository in the local research workspace. This document contains the proposed public framing, not private feedback transcripts.

## 2. Current website assessment

### Content

- The introduction says Ashish currently works at Tata Motors. The updated resume instead records Simplify Healthcare from October 2024 onward, following Tata Motors from June 2022 to October 2024.
- The current employer and the substantial 2025–2026 platform work are missing.
- The opening headline emphasizes certificates and badges before explaining engineering value.
- Long lists of generic duties and early projects obscure the strongest evidence of ownership.
- Personal projects, interests and content creation receive more space than their relevance to the current engineering narrative warrants.
- Several old percentages are phrased as targets, while newer resume percentages appear as achieved results without measurement context. These cannot be combined as equivalent evidence.
- Older material includes inconsistent scholarship years, changing award names and a questionable YouTube watch-hours claim. Do not carry these forward unchecked.

### Design and usability

The site uses the Start Bootstrap Resume template with a fixed desktop sidebar, condensed display headings, rust accents and large resume sections. It functions as a long CV rather than a curated portfolio. The redesign should introduce a faster overview, a smaller navigation menu, stronger reading hierarchy and dedicated case-study depth.

The source includes invalid nested paragraphs and lists, duplicate link attributes and inconsistent social-link spacing. These are straightforward to eliminate in the rebuild. The existing profile image is lazy-loaded even though it is prominent on desktop.

### Technical state

The checkout is buildless HTML/CSS/JavaScript with Bootstrap, jQuery, an easing plugin, Font Awesome and Iconify. There is no package manifest, test setup or checked-in deployment workflow. That does not prove there is no GitHub-side Pages configuration; repository settings have not been inspected.

The experience counter mixes zero-based month handling with a year-and-month string such as `4.5`, which could be mistaken for decimal years. Replace it with stable career dates or explicit years and months. Do not count overlapping transition months twice.

The description is only “Portfolio Site”; no canonical URL, social preview metadata or sitemap was found in the authored HTML. The tracked CNAME contains the GitHub-provided hostname itself. Confirm Pages settings before deciding whether to remove that file; the checkout does not establish a separate custom domain.

## 3. Audience and professional positioning

### Positioning

Recommended display title: **Software Engineer**.

Recommended specialization: **Frontend systems, workflow platforms and full-stack delivery**.

The documents describe substantial frontend ownership and concrete backend contributions. They support targeting frontend, product engineering and selected full-stack opportunities. Senior-level opportunities can be discussed through evidence of scope; do not present a prospective promotion as a title already held.

### Visitor journeys

| Visitor | Immediate question | Suggested journey |
| --- | --- | --- |
| Recruiter | What does Ashish do, and does the experience fit? | Hero → selected outcomes → experience → resume/contact |
| Engineering manager | What has Ashish personally owned? | Featured work → contribution boundaries → decisions and outcomes |
| Technical interviewer | Can Ashish explain difficult engineering tradeoffs? | Forms or workflow case study → architecture diagram → approach and constraints |
| Potential collaborator | How does Ashish work with others? | Experience → release/support examples → working approach → contact |

Within the first screen, communicate name, role, core strengths, location and a route to work or contact. Within one minute, visitors should find the current role, two strong contributions and career progression.

### Narrative priorities

1. Reusable platform engineering: configuration-driven forms and developer tooling.
2. Complex frontend interactions: nested workflow scopes, ETL configuration and reliable saving.
3. Architecture adaptation: migration work, shared dependencies and federated modules.
4. Work across boundaries: query tooling and execution analytics with backend and QA colleagues.
5. Delivery after the pull request: releases, tenant onboarding, support and documentation.
6. Effective AI-assisted engineering: Claude Code with maintained project context, skills, hooks, permission controls and human validation. Tie the practice to delivery across repositories and technologies.

Describe sustainable ownership through outcomes and follow-through. Overtime details in assessment material are not useful headline portfolio achievements.

## 4. Information architecture

### Homepage

| Order | Section | Content and behavior |
| --- | --- | --- |
| 1 | Header | Name mark; Work, Experience, About and Contact; resume link only when a reviewed public file exists |
| 2 | Introduction | Role, concise value statement, portrait, View selected work and Get in touch |
| 3 | Selected contributions | Three short, specific outcomes: reusable forms, visual workflow tools, cross-stack delivery |
| 4 | Selected work | Three substantial editorial project previews, with descriptive links to case studies |
| 5 | Experience | Two employer entries; expand current role detail; include dates and scope |
| 6 | Engineering capabilities | Skills grouped by demonstrated use, linked to work rather than proficiency bars |
| 7 | Engineering with AI and working approach | Claude Code workflow, skills, hooks, safeguards, validation and collaboration |
| 8 | Education and selected credentials | Degree and CGPA; selected relevant credentials; award only when wording is confirmed |
| 9 | Contact and footer | Email, LinkedIn, GitHub, explicit resume download where available; content-reviewed date |

The homepage should be a complete professional overview even if a visitor never opens a case study. Avoid making all experience or important outcomes accordion-only.

### Case studies

Proposed routes:

- `/work/configuration-driven-forms/`
- `/work/workflow-and-data-tools/`
- `/work/platform-migration/`

Each page has an opening summary, role and collaboration boundaries, problem, approach, key decisions, outcome, technologies and related work. Use a concise desktop contents rail only on longer pages, becoming an ordinary contents list on mobile. Public diagrams use synthetic examples and generic module labels.

Query tooling and execution analytics can initially be a substantial subsection of the workflow/data case study. Release coordination and AI Hub proof-of-concept support belong in the experience narrative. Add separate pages later only if they contribute distinct depth.

Add a dedicated homepage section, **Engineering with AI**, at `#ai-engineering`, linked from capabilities and relevant case studies. Keep the primary navigation compact. Expand it into a fourth case study when sanitized examples of skills or hooks can substantiate the implementation details.

### Existing URLs

Retain `#about`, `#experience`, `#projects`, `#skills`, `#interests`, `#volunteer`, `#education`, `#awards` and `#page-top` as meaningful destinations or aliases. Map projects to selected work; interests and volunteer links to the relevant About subsections. Preserve real outbound project links only after checking them. Use real static case-study directories so direct requests and refreshes work without server rewrite rules.

## 5. Content direction

### Opening draft

**Ashish Agrawal**

**Software engineer building usable tools for complex systems.**

I build frontend systems for workflow automation, data integration and developer tools. My work spans reusable form platforms, visual workflow builders and delivery across UI and backend services.

Based in Pune, India. Primary actions: **View selected work** and **Get in touch**.

### Professional summary

Software engineer with experience since 2022, focused on React and TypeScript applications and the platform capabilities behind them. At my current organization, I have designed reusable form tooling, built workflow and data interfaces, contributed to a micro frontend migration, and worked with backend and QA colleagues to carry features through release. Earlier work at Tata Motors covered data analysis and real-time monitoring interfaces.

This copy uses the employment timeline without an error-prone live experience counter. Detailed draft sections and case-study outlines are in `portfolio-content-draft.md`.

### Editorial rules

- Use exact contribution boundaries: “designed and built” for independently owned form tooling; “contributed to” for the shared migration; “coordinated with the deployment team” for releases.
- Prefer a concrete behavior change to an unsupported percentage.
- Distinguish production features, proofs of concept and personal projects.
- Explain internal acronyms or replace them with plain terms.
- Avoid ratings, employee identifiers, private messages and internal task numbers in public copy.
- Keep personal projects and interests concise, retaining them when they add a useful human dimension or accessible code evidence.

## 6. Visual design direction

### Engineering with AI content and presentation

Treat effective use of Claude Code as a distinct professional capability. Explain a repeatable process: requirements and design intent, maintained project context, relevant skills, implementation within permissions, validation, review and human release decisions. Connect this practice to the form platform, migration and cross-stack work.

The assessments support daily Claude use for coding, reviews, tests, documentation and checks; maintaining `CLAUDE.md`; use of skills, hooks and permission rules; protecting environment files, credentials and keys; and personally handling commits and pushes. The user's follow-up explicitly identifies Claude Code. Skills are listed in the assessment, but their names, authorship and detailed behavior are not supplied. Do not invent a custom skill library, enterprise rollout or AI productivity percentage.

| Practice | Website emphasis | Evidence boundary |
| --- | --- | --- |
| Context and planning | Architecture and conventions in `CLAUDE.md`; design documents before larger changes | Documented maintenance and planning practice |
| Skills | Reusable task guidance within the Claude Code workflow | Use supported; custom authorship and adoption need examples |
| Hooks and permissions | Checks and access controls intended to reduce exposure of sensitive files | Reported safeguards; configuration and effectiveness not audited |
| Validation | Build/lint checks, self-review, PR test plans, peer review and fixes or reverts | Documented process examples |
| Accountability and impact | Broader cross-stack contributions while owning merged changes and retaining human commit/push control | Qualitative scope supported; no measured speed multiplier |

Describe the security and safety protocol through concrete practices. Distinguish written instructions from enforced restrictions, and describe controls as risk reduction. Avoid claiming that a skill, hook or instruction file guarantees confidentiality. Public illustrations must use synthetic paths and data; private configuration and code stay private.

Before a detailed security example, inspect sanitized configuration and a demonstration of allowed and denied behavior. Sandboxing, network restrictions, secret scanning and formal policy enforcement can be proposed later, but must not appear as past achievements without evidence.

Show an accessible process sequence: **Scope → Context and skills → Implementation within controls → Validation and review → Human release decision**. Include this section in the local prototype, with one example connected to a case study.

Current references checked on 5 November 2026: [Claude Code skills](https://code.claude.com/docs/en/skills), [hooks reference](https://code.claude.com/docs/en/hooks) and [security guidance](https://code.claude.com/docs/en/security). These describe product mechanisms; they do not verify the candidate's configuration or constitute a security assessment.

### Concept

A calm engineering publication: clear typography, generous margins, subtle rules and diagrams that explain the work. Give the website personality through composition and a real portrait rather than decorative terminal windows or a wall of technology badges.

### Palette and typography

| Token | Proposed value | Use |
| --- | --- | --- |
| Canvas | `#F7F8F4` | Warm, pale page background |
| Surface | `#FFFFFF` | Expanded content and selected panels |
| Text | `#17231F` | Primary copy and headings |
| Secondary text | `#52615A` | Supporting descriptions and metadata |
| Accent | `#1C5C44` | Primary actions, links and selected states |
| Decorative line | `#D9E0D8` | Quiet section separators; not control boundaries |
| Control boundary | `#748078` | Inputs or controls requiring a visible boundary |

Use a system sans-serif body stack initially, a system serif stack for selected large editorial headings, and monospace only for small technical labels or code examples. If a custom typeface materially improves the prototype, choose one licensed, self-hosted family after evaluating its cost. Avoid external font requests by default.

Suggested scale: body 17–18 px with approximately 1.65 line height; secondary copy no smaller than 14 px; hero heading fluid from approximately 38 to 72 px; major headings 30–44 px. Text columns should generally stay near 65–75 characters. Validate actual contrast and font behavior during implementation.

### Layout

Maximum container around 1180 px. Desktop hero uses an approximately 7:5 text/portrait split; the reading column remains narrower. Project previews alternate a wide narrative row and explanatory diagram, rather than repeating equal-size cards for every section. Use 80–112 px desktop section spacing and 48–64 px on small screens. Avoid viewport-height sections that leave content stranded in whitespace.

Mobile stacks introduction, actions and portrait in a deliberate reading order. Use a compact header and accessible menu with a visible close action. Main actions must fit without horizontal scrolling at 320 px width. Maintain scroll offsets for the sticky header.

### Photograph

Use the new photograph. It shows Ashish at a developer event and gives the site a more current human presence. The file stores a landscape pixel array with orientation metadata; displayed upright, it is a tall portrait. Normalize orientation before generating responsive assets, then use a chest-up 4:5 or 3:4 crop with sufficient room above the head. Confirm crop quality in the prototype. Use alt text “Ashish Agrawal” and explicit image dimensions. Keep the hero image eager-loaded; lazy-load lower images. Preserve the original source outside the deployed asset set.

### Banner

The 1400×350 banner is a quiet desk scene with plants and substantial negative space. It can support a shallow contact-section strip, with text placed outside the busy image area and a decorative empty alt attribute. It contributes atmosphere rather than evidence of expertise. Do not enlarge it into a full-screen hero; omit it if it makes the page feel generic. Test reuse in the prototype before committing.

### Interaction and themes

Use ordinary navigation and descriptive links. Details disclosures should have clear labels and retain deep-linkable information. Optional motion is limited to short opacity/translation transitions around 150–220 ms; respect reduced-motion preferences. No scroll hijacking, typing introductions or hover-only information.

Start with a complete light theme. A system-aware dark theme is a useful later enhancement only if every text, diagram, image treatment and focus state is verified in both. Theme switching should not delay the core portfolio.

## 7. Technical solution

### Stack choice and tradeoffs

| Approach | Strength | Cost | Decision |
| --- | --- | --- | --- |
| Retain buildless HTML | Minimal tooling and naturally readable HTML | Content repetition and complex component maintenance | Viable fallback, but less suitable for the planned content model |
| React + TypeScript + Vite with static HTML generation | Fits documented skills; reusable components and typed content | Adds package management and build-time rendering work | Recommended |
| Server-oriented application | Could support a live backend | Adds hosting and operational needs without a visitor requirement | Unnecessary for this scope |

Tailwind offers shared styling tokens and responsive composition. Add selected shadcn/ui components for interactions such as the mobile menu or disclosures, then adapt their appearance to this design. Component choice does not replace accessibility verification. Do not add TanStack Query, authentication, a database or a runtime backend without an actual requirement.

At implementation time, choose stable compatible versions, inspect engine requirements and commit one package-manager lockfile. Do not assume versions from the historical career stack are appropriate for the new site.

Current official references checked on 5 November 2026: [Vite static deployment](https://vite.dev/guide/static-deploy.html), [Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite), [shadcn/ui with Vite](https://ui.shadcn.com/docs/installation/vite). These establish supported integration paths, not a fixed version selection.

### Proposed source organization

```text
src/
  components/       # Header, Portrait, ExperienceEntry, ProjectPreview, Contact
  components/ui/    # Only the UI primitives actually used
  content/          # Public, typed career and case-study records
  pages/            # Homepage and case-study templates
  styles/           # Tokens, base typography, print and reduced-motion styles
scripts/            # Build-time page generation and focused validation
public/             # Optimized public assets, resume, robots.txt
docs/               # Public-safe planning and maintenance guidance
dist/               # Generated deployment artifact, ignored in source control
```

Generate the homepage and each case-study path as real HTML at build time, using the same React components and public content records. Add client JavaScript only where interactions require it. Validate a small static-rendering proof early; if a substantial rendering framework becomes necessary, re-evaluate the stack before scaling the implementation.

### GitHub Pages

GitHub Pages hosts static HTML, CSS and JavaScript; it is compatible with a generated build artifact. The user-site repository maps to the root hostname, so Vite's base should be `/`, not a repository-name subpath. See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [Vite deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages).

Before deployment, inspect existing Pages settings and permissions. Use a GitHub Actions build that installs from the lockfile, builds, uploads only `dist`, and deploys using the Pages environment with the required scoped permissions. Keep the existing hosting service and address. Do not create a separate Sites-hosted project.

Provide `404.html`, a sitemap and robots file; ensure case-study URLs resolve directly. Confirm the canonical origin against the actual Pages configuration. Document the CNAME decision and keep the prior deployed commit available for rollback. No push or deployment is part of this planning phase.

### Search, sharing and maintenance

Give every page an appropriate title, description, canonical URL and social preview. Generate metadata and sitemap entries from the same public route list. Use factual Person structured data only for confirmed profile fields. Put dates in machine-readable markup and avoid claims such as “available for work” until confirmed.

Provide responsive WebP or AVIF images with a suitable fallback, explicit sizes and predictable layout. Strip unnecessary photo metadata from generated public assets. Keep the resume file out of navigation until a public-ready download is reviewed. A print stylesheet can make career content readable without becoming a substitute for the later resume project.

## 8. Reusable career content model

Maintain two distinct stores: public career records in the repository, and private evidence records outside it. Public pages consume only the public store. Ignoring a private file is not sufficient if its text or metadata is imported into a production bundle.

| Record | Suggested fields |
| --- | --- |
| Profile | Name, title, specialization, location, summary, reviewed date, contact links |
| Role | Stable ID, employer display name, title, start/end month, scope, achievement IDs |
| Achievement | Stable ID, public statement, action, outcome, skill IDs, related case study |
| Case study | Slug, summary, problem, personal contribution, collaborators by function, decisions, outcome, diagrams |
| Skill | Name, category, evidence-linked achievement IDs; no arbitrary percent proficiency |
| Credential | Exact name, issuer, dates where known, verification URL and status |
| Private evidence | Claim ID, source path, page/section, source type, support strength, conflicts, measurement notes, publication status |

Stable achievement IDs connect the stores, allowing future resume selections without re-researching every claim. Do not embed private source paths, colleague contact details or internal URLs in public records. Capture a metric only when its definition, baseline, period and attribution are known. A future resume can select short statements from this model while the website retains fuller context.

## 9. Implementation phases and acceptance

| Phase | Deliverable | Exit criteria |
| --- | --- | --- |
| 0 — Discovery | This document, draft content, private claim register | Sources inventoried; conflicts and evidence limits recorded |
| 1 — Local prototype | Responsive homepage slice and one case-study view | Hero, portrait crop, experience, forms case study and banner option are reviewable on desktop/mobile |
| 2 — Content and architecture | Typed public content, routing/static-rendering proof | All core claims have source links privately; no private material enters public output; static direct paths work |
| 3 — Full implementation | Complete pages, assets, navigation and metadata | Approved structure complete; preserved anchors work; no placeholders or inactive primary controls |
| 4 — Verification | Build and focused browser QA report | Checks below pass or material limits are documented |
| 5 — Release | Reviewed deployment workflow and production artifact | Pages configuration verified; public content and result reviewed before publication |

### Prototype recommendation

Build a local prototype after agreement on this direction. Use real copy from the draft, a portrait crop and synthetic diagrams. Include a header, hero, selected contribution summary, current experience, the configuration-driven forms case study and contact section. Show the banner as an optional treatment. Test around 390 px and 1440 px wide, with an additional 320 px overflow check.

The prototype should answer: Is the professional positioning clear? Can the long-form content be scanned? Does the portrait crop work? Is the visual style personal and credible? Does mobile navigation remain simple? The prototype does not need a full migration, deployment workflow or finalized resume download.

### Verification requirements

- Run type checking, public-content validation and the production build.
- Use targeted tests for static route generation and any nontrivial state or date logic. Avoid tests that simply repeat static copy.
- Verify all primary links and downloads, preserved anchors, refreshes and unknown routes.
- Inspect mobile and desktop layouts, keyboard-only navigation, menu focus handling, visible focus, reduced motion, 200% zoom and text reflow.
- Check actual text/control contrast and screen-reader names. Diagrams need textual explanations.
- Inspect built HTML with JavaScript disabled: identity, summary, experience and case-study content must remain readable.
- Inspect final artifacts for internal paths, private correspondence, assessment scores, source documents and accidental source-map disclosure.
- Use Lighthouse as diagnostic evidence, targeting at least 90 in performance, accessibility, best practices and SEO under recorded conditions. Pair automated checks with manual inspection rather than treating a score as proof.

### Risks and mitigations

| Risk | Response |
| --- | --- |
| Inflated or ambiguous achievement claims | Use supported qualitative outcomes; retain disputed metrics privately |
| Long homepage becomes another CV wall | Short overview plus dedicated case studies and clear hierarchy |
| Proprietary work is difficult to illustrate | Use independently drawn conceptual diagrams and synthetic data |
| React migration harms readability or SEO | Build static HTML early and test without JavaScript |
| Deployment changes break existing Pages behavior | Inspect actual settings, preserve anchors, verify artifact and keep rollback path |
| Old resume undermines the refreshed story | Review the download before linking it; resume rewrite remains a separate phase |

## 10. Decisions and factual questions for review

Recommended next step: approve or adjust this direction, then build the local prototype.

Before final public copy, confirm:

1. Which employer name should appear publicly: Simplify Healthcare, Simplify Group, or a qualified combination? The resume and newer assessment use different organizational labels.
2. May the site name the internal products and use generalized descriptions of this work? Until confirmed, the draft uses descriptive case-study titles without internal repository or customer names.
3. Which opportunities should the site prioritize: frontend, product engineering, full-stack or a particular senior role? Current recommendation is frontend-led software engineering with demonstrated cross-stack delivery.
4. Should the existing resume be downloadable during the transition? Its metrics and several project statements need factual review before becoming a prominent download.
5. Can the highlighted percentages, historical award names, degree wording and scholarship dates be substantiated? These details can remain omitted while the rest of the site progresses.

No decision on dark mode, animation libraries or custom fonts is needed to begin the prototype.
