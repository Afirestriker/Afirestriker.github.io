# Ashish Agrawal Portfolio Content Draft

Prepared 5 November 2026. This is draft website copy for review, not a claim that every statement has been independently audited. The private research register maps achievement IDs to source documents. Internal product names, correspondence, assessment ratings and unverified percentages are excluded.

## Introduction

Ashish Agrawal

Software Engineer · Pune, India

### Building usable tools for complex systems

I build frontend systems for workflow automation, data integration and developer tools. My work spans reusable form platforms, visual workflow builders and delivery across UI and backend services.

Actions: View selected work · Get in touch

## Selected contributions

### Forms defined by configuration

Designed a reusable form builder that turns JSON configuration into validated interfaces, with a live-preview tool to help engineers author and maintain schemas. Used across connector, workflow, scheduler and tenant-related screens. [A01, A02]

### Visual tools for workflows and data

Built nested workflow interactions and ETL screens that let users configure transformations, inspect data and follow execution from the interface. [A03, A04]

### Delivery across the platform

Contributed to a micro frontend migration and delivered work across UI, backend and execution services, collaborating with QA and deployment teams through release. [A05, A06, A07]

### AI-assisted engineering with clear controls

Use Claude Code for planning, implementation, reviews and documentation, with maintained project context, skills, hooks and permission rules. Validate changes through engineering checks and peer review, and retain responsibility for the result. [A14]

## Experience

### Software Engineer — Simplify Healthcare / Simplify Group

October 2024–Present · Pune, India

Employer display wording was confirmed by the owner during implementation. Keep the documented Software Engineer title; a senior title is not established by the supplied material.

I work on application and integration platform capabilities, with a focus on React and TypeScript interfaces and the services behind them. My responsibilities have grown from configuration and UI delivery to reusable tooling, platform migration, backend contributions and release support.

- Designed and built a configuration-driven form engine with conditional fields, validation, dynamic options and cascading selects. Maintained its schema documentation and backward-compatible extensions. [A01]
- Built a form-schema visualizer with live preview and in-app guidance so engineers can author and inspect forms. [A02]
- Implemented workflow scope interactions, including drag-in and drag-out behavior for condition, loop and switch nodes, alongside connection validation and compatibility fixes. [A03]
- Built ETL interfaces for selecting schemas and tables, previewing input data, configuring transformations and monitoring execution. [A04]
- Contributed to the team's move from Next.js to Vite and React, then implemented modules and host integrations on a shared micro frontend foundation using Nx and Module Federation. [A05]
- Built query authoring and registry interfaces and contributed backend changes for execution analytics, working with backend developers and QA through completion. [A06]
- Coordinated release and deployment requests during rotation duties, maintained a shared release record and followed issues through validation. [A07]
- Supported tenant onboarding and platform troubleshooting, documented reusable steps and helped colleagues with UI setup, reviews and technical questions. [A08]
- Delivered integration and scraping configuration for an AI proof of concept and supported subsequent client demonstrations. [A09]
- Used Claude Code across frontend and backend work, maintained architectural guidance in `CLAUDE.md`, and used skills, hooks and permission rules alongside build checks, self-review and peer review. [A14]

Prioritize four or five bullets on the homepage. The remaining details can appear in the expanded role view and case studies.

### Software Engineer — Tata Motors

June 2022–October 2024 · Pune, India

Worked on web-based data analysis and real-time monitoring interfaces, using JavaScript and React with API integration.

- Contributed to a data analysis and visualization system using React, Next.js and Node.js. [A10]
- Developed interface capabilities for a real-time monitoring system, integrating data through REST APIs. [A10]
- Improved multi-tab interface behavior through lazy loading, memoization and debugging of table and chart data presentation. [A10]
- Collaborated on UI architecture, library selection and integration with other system layers. [A10]

Editorial note: the old site splits this tenure into Junior Software Developer and Front-End Developer. The latest resume summarizes it as Software Engineer. Confirm official titles and progression before publishing a more detailed title timeline. Do not carry forward the old “Present” date.

## Case study one

### From handwritten forms to a reusable form platform

**Summary:** A configuration-driven form engine and authoring tool for interfaces used across an application platform.

**My contribution:** Schema and engine design, proofs of concept, implementation, documentation, visualizer and subsequent extensions. Adoption and platform integration involved the wider UI team.

**Problem:** Connector and workflow screens needed different forms with strict validation. Handwritten field definitions repeated work and made every new form a UI development task.

**Approach:** I developed two proofs of concept and used team feedback to address validation, rendering, loading behavior and component remounting. The resulting engine renders forms from backend JSON configuration, with support for conditional fields, runtime options and dependent dropdowns.

I maintained a versioned schema specification and extended field capabilities without breaking existing configurations. To help engineers author the JSON, I built a visualizer with live preview, validation and documentation alongside the editor.

**Decisions to explain in the full case study:**

- How a schema describes field types, visibility and validation.
- When a specialized UI override is preferable to another generic schema feature.
- How dependent options load and cache without mixing unrelated field state.
- How schema evolution preserves existing forms.
- How prototypes addressed remounting and loading concerns before rollout.

**Outcome:** Connectors and several platform screens use the same form capability. New forms can be introduced through configuration rather than separate screen implementations. No numeric time-saving claim is proposed without measurement. [A01, A02]

**Illustration:** A new, synthetic diagram showing form configuration → renderer → validated interface, with a small authoring/preview example. This is an explanatory illustration, not a screenshot of the employer's product.

## Case study two

### Making workflow and data configuration easier to reason about

**Summary:** Visual workflow scopes, ETL configuration and query tooling for complex integration tasks.

**My contribution:** Workflow scope behavior and ETL UI ownership; query registry UI and specific execution-service changes. Backend, QA and UI colleagues owned complementary parts of the system.

**Problem:** Users needed to build nested flows, configure transformations and inspect execution while keeping connections, saved state and node configuration consistent.

**Approach:** I implemented scope behavior for condition, loop and switch nodes, including drag-to-reparent, containment feedback and validation. I addressed position and resize issues while preserving existing workflow data.

On the ETL side, I built schema and table selection, input previews and transformation configuration. Node forms were moved toward schema-driven configuration with per-node-type caching. I also contributed to save behavior, unsaved-change handling and canvas synchronization.

For query work, I built authoring and registry interfaces and contributed changes for execution analytics across the UI and backend services. I worked with backend developers and QA until the feature was completed.

**Decisions to explain in the full case study:**

- Scope membership, connection rules and feedback during drag operations.
- Compatibility when changing behavior for previously saved workflows.
- State ownership during inline edits, saves and navigation.
- Configuration caching by node type.
- How query execution information becomes useful user feedback.

**Outcome:** Users can configure nested workflows and ETL pipelines visually, preview data and inspect execution. Query tooling brings authoring, testing and registry management into a connected workflow. [A03, A04, A06]

**Illustration:** Synthetic source → transform → condition → output workflow, with a plain-language explanation. No employer UI reconstruction or confidential data.

## Case study three

### Evolving a frontend while continuing to deliver

**Summary:** Feature delivery through a move from a single application to shared hosts and federated modules.

**My contribution:** Shared design discussions, module migration, host integrations and dependency fixes. Colleagues established the initial shell, shared libraries and first remote.

**Problem:** The platform's frontend architecture changed while product features and demonstration commitments still needed to ship.

**Approach:** I contributed to the team's Next.js-to-Vite/React move, including UI and application-structure work. During the later micro frontend migration, I migrated query tooling, implemented federated interfaces and worked through build and shared-package compatibility issues.

I participated in decisions about shared resources and file organization, and fixed dependency settings so hosts and remotes agreed on shared versions. For cross-team delivery, I worked with another UI engineer to align theme and layout across the integrated experience.

**Decisions to explain in the full case study:**

- Which resources should be shared and which belong to a module.
- How to keep host and remote dependencies compatible.
- How theme and layout remain consistent across boundaries.
- How to migrate a module in manageable steps while retaining behavior.

**Outcome:** The migrated modules ran within the shared platform and supported the planned event delivery. The work demonstrates adaptation and contribution within a team architecture effort, not sole ownership of the entire migration. [A05]

**Illustration:** A conceptual host-and-remotes diagram with generic module names.

## Engineering capabilities

| Capability | Technologies or practices | Demonstrated through |
| --- | --- | --- |
| Frontend engineering | React, TypeScript, JavaScript, HTML, CSS | Forms, workflows, query interfaces |
| UI systems | Tailwind, shadcn/ui, reusable components, schema-driven UI | Shared form tooling and platform screens |
| Frontend architecture | Vite, Next.js, Nx, Module Federation | Migration and federated module delivery |
| Data and integration interfaces | REST APIs, data transformation, ETL workflows | Pipeline and integration configuration |
| Cross-stack contributions | Node.js/NestJS and .NET service changes | Execution analytics, executor and scraping-related work |
| Delivery and collaboration | Git, Azure DevOps, reviews, documentation, release coordination | Feature follow-through, onboarding and support |
| AI-assisted engineering | Claude Code, `CLAUDE.md`, skills, hooks, permission rules, output validation | Planning and delivery across UI and backend repositories with human accountability |

Database names and additional tools from the resume may be added when connected to a concrete contribution. Do not equate working alongside a platform technology with having designed or operated that entire layer.

## Engineering with AI

### A repeatable workflow with human accountability

I use Claude Code as part of my daily engineering workflow, from requirements and design through implementation, review, tests and documentation. It has helped me contribute across frontend and backend repositories while keeping the resulting changes within the team's engineering process. [A14]

**Start with intent and context.** For larger changes, I prepare requirements, a design guide or a specification before implementation. I maintain `CLAUDE.md` with the current architecture and project conventions so AI-assisted work can reuse existing patterns.

**Use reusable guidance and controls.** My workflow includes Claude Code skills, hooks and permission rules. I use access controls intended to keep environment files, credentials and keys outside the agent's permitted scope.

**Validate before accepting.** I check changes through builds, linting and self-review, document test plans in pull requests and use the normal peer-review process. When a change fails, I investigate and correct or revert it.

**Retain responsibility.** I own the changes I merge and keep commits and pushes under my control in this workflow. AI assistance supports my engineering judgment throughout delivery. [A14]

Suggested visual: Scope → Context and skills → Implementation within controls → Validation and review → Human release decision.

Editorial note: the source material reports the safeguards, but their configuration has not been inspected. Describe their intended scope without promising complete protection. Custom skill authorship, individual hook behavior and any additional AI tools need specific examples before detailed claims. Keep proposed practices separate from historical experience. The outcome is broader cross-stack contribution; no numerical productivity gain is claimed.

## About and working approach

I like turning complex requirements into tools people can use confidently. My work often starts with a prototype or design note, continues through implementation and review, and stays with the feature through release and support.

I contribute through code, documentation and practical support for colleagues. Outside project work, my existing portfolio includes writing and creative interests. Keep a short personal section after confirming which activities are still current.

## Education and credentials

**MIT World Peace University, Pune**

Bachelor in Computer Application · August 2019–May 2022 · CGPA 9.94/10. [A11]

Editorial note: the existing site uses a different degree description and mentions a gold medal. Confirm the official degree and award wording before finalizing.

Selected credentials to verify and display:

- Google UX Design Professional Certificate.
- Postman API/student expert credential, using the exact issued title.

Avoid making short courses and participation certificates compete with recent engineering experience. Retain a fuller list only if it remains useful and accurately labeled. [A12]

## Personal project selection

Keep Next-Stream as an optional code-linked project after checking the repository and actual behavior. The resume describes some server and database features as “potential,” which is insufficient evidence to state that they were implemented. Review KHub and Intern-HireUp only if they add a distinct skill or useful code example. Do not list every early exercise on the main page. [A13]

## Contact

Interested in the work? Let's talk.

- Email: agrawalashish.in@gmail.com
- LinkedIn: https://www.linkedin.com/in/iashish-agrawal/
- GitHub: https://github.com/Afirestriker

Use labeled links. The owner confirmed including the supplied resume as a download during implementation. The original PDF is included unchanged; there is no rewritten resume artifact in this phase.
