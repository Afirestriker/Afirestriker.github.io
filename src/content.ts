export const profile = {
  name: "Ashish Agrawal",
  title: "Software Engineer",
  location: "Pune, India",
  employer: "Simplify Healthcare / Simplify Group",
  email: "agrawalashish.in@gmail.com",
  github: "https://github.com/Afirestriker",
  linkedin: "https://www.linkedin.com/in/iashish-agrawal/",
  resume: "/downloads/Ashish-Agrawal-Resume.pdf",
  origin: "https://afirestriker.github.io",
  reviewed: "2026-11-05",
};

export interface Achievement {
  id: string;
  title: string;
  description: string;
  skills: string[];
}
export const achievements: Achievement[] = [
  {
    id: "A01",
    title: "Configuration-driven form engine",
    description:
      "Designed and built a reusable engine that renders validated forms from JSON configuration, including conditional visibility, dynamic options and cascading selects. Maintained the schema specification and backward-compatible extensions.",
    skills: ["React", "TypeScript", "Schema design", "Validation"],
  },
  {
    id: "A02",
    title: "Developer tooling for form authoring",
    description:
      "Built a form-schema visualizer with live preview, validation and in-app documentation, helping engineers inspect the interfaces they define in configuration.",
    skills: ["Developer experience", "Prototyping", "Documentation"],
  },
  {
    id: "A03",
    title: "Nested visual workflow interactions",
    description:
      "Implemented drag-in and drag-out behavior for condition, loop and switch scopes, connection validation and containment feedback. Addressed positioning and resizing issues while preserving earlier workflow data.",
    skills: ["React", "State management", "Interaction design"],
  },
  {
    id: "A04",
    title: "ETL configuration and execution interfaces",
    description:
      "Built screens for selecting schemas and tables, previewing input, configuring transformations and following execution. Collaborated on schema-driven node forms, configuration caching and dependable canvas saving.",
    skills: ["ETL", "API integration", "Data interfaces"],
  },
  {
    id: "A05",
    title: "Frontend evolution and federated modules",
    description:
      "Contributed to the team’s Next.js-to-Vite/React move, then migrated query tooling and implemented hosts and modules on an Nx and Module Federation foundation established by colleagues. Resolved shared-dependency and build compatibility issues.",
    skills: ["Vite", "Nx", "Module Federation", "Next.js"],
  },
  {
    id: "A06",
    title: "Query tooling and execution analytics",
    description:
      "Built query authoring and registry interfaces and contributed changes in backend and execution services for analytics. Worked with backend developers and QA through testing and completion.",
    skills: [
      "React",
      "TypeScript",
      ".NET contributions",
      "Cross-stack delivery",
    ],
  },
  {
    id: "A07",
    title: "Release coordination and shared visibility",
    description:
      "Coordinated deployments during rotation duties, maintained a shared release record and followed requests through the deployment team and QA. Made release status and dependencies visible to collaborators.",
    skills: ["Azure DevOps", "Release coordination", "Documentation"],
  },
  {
    id: "A08",
    title: "Onboarding, reviews and platform support",
    description:
      "Supported tenant onboarding and cross-team troubleshooting, documented reusable onboarding steps and helped colleagues with UI project setup, reviews and technical questions.",
    skills: ["Mentoring", "Support", "Technical communication"],
  },
  {
    id: "A09",
    title: "Integration proof of concept and demos",
    description:
      "Configured integration, scheduling and scraping workflows for an AI proof of concept, then supported client demonstrations and technical walkthroughs with the wider team.",
    skills: ["REST APIs", "Workflow configuration", "Prototyping"],
  },
  {
    id: "A10",
    title: "Data analysis and real-time monitoring",
    description:
      "At Tata Motors, worked on web-based data analysis and monitoring interfaces, API integration, multi-tab behavior and accurate presentation of chart and table data.",
    skills: ["JavaScript", "React", "Data visualization"],
  },
  {
    id: "A14",
    title: "AI-assisted engineering with human accountability",
    description:
      "Used Claude Code for planning, coding, reviews, tests and documentation. Maintained project architecture in CLAUDE.md and used skills, hooks and permission rules alongside engineering checks, peer review and personal responsibility for merged changes.",
    skills: [
      "Claude Code",
      "Skills",
      "Hooks",
      "Permission rules",
      "Validation",
    ],
  },
  {
    id: "A15",
    title: "AI-enabled product experiences",
    description:
      "Developed AI-assisted code-editing capabilities using Monaco Editor and Azure OpenAI, and contributed to multilingual document workflows using NLLB. These product integrations complement the use of AI throughout the engineering workflow.",
    skills: ["Monaco Editor", "Azure OpenAI", "NLLB", "AI integration"],
  },
];

export const roles = [
  {
    id: "simplify",
    start: "2024-10",
    end: null,
    label: "OCT 2024 — PRESENT",
    title: "Software Engineer",
    employer: profile.employer,
    description:
      "Building application and integration platform capabilities, with frontend ownership, AI-enabled tooling and contributions across backend services, releases and support.",
    highlights: ["A01", "A03", "A14"],
    further: ["A02", "A04", "A05", "A06", "A15", "A07", "A08", "A09"],
  },
  {
    id: "tata",
    start: "2022-06",
    end: "2024-10",
    label: "JUN 2022 — OCT 2024",
    title: "Software Engineer",
    employer: "Tata Motors",
    description:
      "Worked on web-based data analysis and real-time monitoring interfaces, integrating APIs and improving multi-tab layouts, chart presentation and interface performance.",
    highlights: ["A10"],
    further: [],
  },
];

export interface StudySection {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  points?: string[];
}
export interface Study {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  collaboration: string;
  technologies: string[];
  evidence: string[];
  sections: StudySection[];
  outcome: string;
  illustration: "form" | "workflow" | "migration" | "ai";
}
export const studies: Study[] = [
  {
    slug: "configuration-driven-forms",
    category: "PLATFORM CAPABILITY",
    title: "One form engine.",
    subtitle: "Many possibilities.",
    summary:
      "Replacing repeated form implementations with a configuration-driven engine — and giving engineers a better way to author the schemas behind it.",
    role: "Schema and engine design, prototypes, implementation, documentation and visualizer",
    collaboration:
      "Developed with feedback from the UI team and integrated across platform screens",
    technologies: [
      "React",
      "TypeScript",
      "JSON configuration",
      "Runtime validation",
    ],
    evidence: ["A01", "A02"],
    illustration: "form",
    sections: [
      {
        id: "problem",
        label: "THE PROBLEM",
        title: "A new connector shouldn’t mean another bespoke form.",
        paragraphs: [
          "Each connector, workflow node and tenant screen needed its own fields and validation. Handwritten forms repeated implementation work and made new configurations another frontend development task.",
          "The UI team explored existing approaches and agreed to build a form capability suited to the platform. I took on the design and implementation, then developed it through prototypes and team feedback.",
        ],
      },
      {
        id: "approach",
        label: "THE APPROACH",
        title: "Configuration first. Usability throughout.",
        paragraphs: [
          "I built two proofs of concept. Team feedback surfaced questions about validation, rendering performance, loading states and component remounting. I used the second prototype to address those concerns and walk through the intended implementation.",
          "The engine renders forms from backend JSON configuration. Its capabilities grew to include conditional visibility, runtime option loading, cascading selects and specialized field types. I maintained the schema specification and added capabilities with backward compatibility in mind.",
        ],
      },
      {
        id: "authoring",
        label: "DEVELOPER EXPERIENCE",
        title: "Build the authoring experience, too.",
        paragraphs: [
          "Once the renderer was in use, writing form configuration became an important part of the work. I built a schema visualizer with live preview, validation and in-app documentation so engineers could inspect what they were building while authoring it.",
          "The engine and visualizer solve different parts of the same problem: rendering a form consistently, and making its configuration understandable and maintainable.",
        ],
      },
      {
        id: "decisions",
        label: "ENGINEERING DECISIONS",
        title: "Reuse the common path. Keep room for exceptions.",
        paragraphs: [
          "The schema describes the recurring field and validation behavior. Specialized cases can use UI overrides rather than forcing every requirement into a more complicated generic schema.",
        ],
        points: [
          "Conditional fields and dependent options belong in the configuration model.",
          "Loading, caching and remounting behavior need testing before broad adoption.",
          "Schema extensions need documentation and compatibility with existing configurations.",
          "Node-specific forms must be fetched and cached under the correct node type.",
        ],
      },
    ],
    outcome:
      "The builder is used across connector, workflow, scheduler, tenant and other platform screens. New forms can be introduced through configuration rather than a separate form implementation. My ownership covered the engine, schema, documentation, visualizer and extensions; the wider UI team contributed feedback and platform integration.",
  },
  {
    slug: "workflow-and-data-tools",
    category: "WORKFLOW & DATA TOOLS",
    title: "Making complex flows",
    subtitle: "feel manageable.",
    summary:
      "Visual workflow scopes, ETL configuration and query tooling that help people connect systems, understand data and follow execution.",
    role: "Workflow scope interactions and ETL UI; query interfaces and selected execution-service changes",
    collaboration:
      "UI, backend and QA colleagues across workflow, data and query features",
    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "ETL",
      ".NET contributions",
    ],
    evidence: ["A03", "A04", "A06"],
    illustration: "workflow",
    sections: [
      {
        id: "problem",
        label: "THE PROBLEM",
        title: "A visual canvas still needs precise behavior.",
        paragraphs: [
          "Workflow authors needed to configure nested flows, transformations and execution while keeping connections, saved state and node configuration consistent. A canvas that looks simple can hide difficult interaction and persistence problems.",
          "The ETL work also needed clear source selection and data previews. Query users needed a connected place to author, test and manage named queries.",
        ],
      },
      {
        id: "scopes",
        label: "WORKFLOW INTERACTIONS",
        title: "Move a node. Preserve its meaning.",
        paragraphs: [
          "I built scope behavior for condition, loop and switch nodes: drag-to-reparent, containment feedback, connection validation and completion constraints. Nodes can move into and out of a scope while preserving the workflow’s structure.",
          "I addressed positioning and resizing issues and kept existing saved workflows compatible as the behavior changed. Nested nodes and loop iterations also needed useful representation in execution logs.",
        ],
        points: [
          "Make scope membership and valid connections understandable.",
          "Handle resizing and unexpected drag sequences.",
          "Preserve existing workflow data while evolving the interaction model.",
        ],
      },
      {
        id: "etl",
        label: "DATA CONFIGURATION",
        title: "Preview before execution.",
        paragraphs: [
          "I built ETL screens for source schema and table selection, input previews and transformation configuration, including joins and aggregations. The UI also supports running and watching a pipeline.",
          "With UI colleagues, I helped restructure node configuration around the Dynamic Form Builder. Per-node-type fetching and caching keep each properties panel connected to the right schema.",
        ],
      },
      {
        id: "saving",
        label: "STATE AND RELIABILITY",
        title: "Carry user work safely through the interface.",
        paragraphs: [
          "I contributed save and autosave controls, unsaved-change prompts and canvas synchronization. The work addressed permanent edge identifiers, inline node saves and navigation during editing.",
          "These behaviors required coordinated API and client-state handling, plus fixes as other teams used the builder.",
        ],
      },
      {
        id: "queries",
        label: "CROSS-STACK DELIVERY",
        title: "From query authoring to execution feedback.",
        paragraphs: [
          "I built query authoring and registry interfaces, including editor, mock-data and output views, and contributed backend and execution-service changes for analytics.",
          "Backend developers owned complementary parts of the feature. I worked with them and QA until the analytics work was tested and completed.",
        ],
      },
    ],
    outcome:
      "Workflow authors can configure nested flows, preview ETL data and follow execution from the UI. Query tooling connects authoring, testing and registry management with execution feedback. The result reflects UI ownership and specific backend contributions within a collaborative delivery effort.",
  },
  {
    slug: "platform-migration",
    category: "FRONTEND ARCHITECTURE",
    title: "Evolving the platform.",
    subtitle: "Keeping delivery moving.",
    summary:
      "Feature delivery through a transition from a single application to shared hosts and federated modules.",
    role: "Shared design discussions, module migration, host integrations and dependency fixes",
    collaboration:
      "Built on the shell, shared libraries and initial remote established by UI colleagues",
    technologies: ["Vite", "React", "Next.js", "Nx", "Module Federation"],
    evidence: ["A05", "A07"],
    illustration: "migration",
    sections: [
      {
        id: "problem",
        label: "THE PROBLEM",
        title: "The architecture changes. The product keeps moving.",
        paragraphs: [
          "The frontend changed twice while features and demonstration commitments still needed to ship: first from Next.js to Vite and React, then from a single UI repository to a micro frontend.",
          "The team needed to maintain behavior and consistency while learning new build and module boundaries.",
        ],
      },
      {
        id: "first-move",
        label: "THE FIRST TRANSITION",
        title: "Rework the UI as a team.",
        paragraphs: [
          "I contributed to the Vite and React move with two UI colleagues. We discussed the structure, redesigned screens and implemented changes together.",
          "I brought working prototypes to discussions when requirements were incomplete, using them to clarify decisions before scaling the implementation.",
        ],
      },
      {
        id: "federation",
        label: "MODULE MIGRATION",
        title: "Build on a shared foundation.",
        paragraphs: [
          "Colleagues established the shell, shared libraries and first remote. I then migrated query tooling, implemented federated interfaces and built host navigation and integrations on top of that foundation.",
          "The work included differences between Vite and the webpack-based federation build, package compatibility, shared resource placement and preserving the behavior of migrated modules.",
        ],
      },
      {
        id: "dependencies",
        label: "ENGINEERING DECISIONS",
        title: "Make boundaries explicit.",
        paragraphs: [
          "I participated in shared-library and component-organization discussions and fixed shared dependency settings so hosts and remotes agreed on versions.",
          "For cross-team delivery, I worked with another UI engineer to align theme and layout, helping an integrated service feel consistent with the host application.",
        ],
        points: [
          "Share packages intentionally rather than assuming every dependency can be independent.",
          "Migrate modules in manageable steps and verify existing behavior.",
          "Treat theme, navigation and layout as part of the integration contract.",
        ],
      },
      {
        id: "release",
        label: "DELIVERY",
        title: "Follow the work through release.",
        paragraphs: [
          "The migration ran alongside event delivery. I coordinated with UI and backend colleagues, product stakeholders, QA and the deployment team to carry the relevant modules into the planned demonstration environment.",
          "My broader release responsibilities included a rotation-based shared tracker, visible deployment status and follow-through with QA.",
        ],
      },
    ],
    outcome:
      "The migrated modules ran within the shared platform and supported the planned event delivery. This work demonstrates adaptation, compatibility troubleshooting and delivery within a team architecture effort.",
  },
  {
    slug: "ai-assisted-engineering",
    category: "ENGINEERING PRACTICE",
    title: "AI in the workflow.",
    subtitle: "Ownership at every step.",
    summary:
      "Using Claude Code with project context, skills, hooks, permissions and human validation to contribute across frontend and backend work.",
    role: "Daily AI-assisted engineering, maintained project guidance and responsibility for accepted changes",
    collaboration:
      "Normal team review, backend pairing, QA and deployment processes remain part of delivery",
    technologies: [
      "Claude Code",
      "CLAUDE.md",
      "Skills",
      "Hooks",
      "Permission rules",
    ],
    evidence: ["A14"],
    illustration: "ai",
    sections: [
      {
        id: "intent",
        label: "START WITH INTENT",
        title: "Give the work a clear shape.",
        paragraphs: [
          "I use Claude Code for planning, implementation, reviews, tests and documentation. For larger changes, I prepare requirements, a design guide or a specification so the work has an explicit scope.",
          "Examples in my platform work include form-schema specifications, node-property guidance and a connector-registry requirements document. These give both AI assistance and human reviewers a shared understanding of the intended change.",
        ],
      },
      {
        id: "context",
        label: "CONTEXT AND SKILLS",
        title: "Make project knowledge reusable.",
        paragraphs: [
          "I maintain CLAUDE.md with current architecture and conventions, helping AI-assisted work reuse established code and follow the project’s standards.",
          "My workflow also includes Claude Code skills as reusable task guidance. Keeping useful procedures and project context available makes the interaction more consistent than repeatedly reconstructing the same background.",
          "Rapid AI-assisted prototyping — often called vibe coding — is useful for exploring options. I carry those explorations into a documented engineering process with design decisions, validation and review.",
        ],
      },
      {
        id: "controls",
        label: "SECURITY AND SAFETY",
        title: "Define the permitted scope.",
        paragraphs: [
          "I use permission rules and hooks intended to restrict access to environment files, credentials and keys. These controls sit alongside project guidance and engineering review.",
          "Instructions explain how work should be done; access restrictions help define what the agent is allowed to touch. I treat these as risk-reduction measures and keep confidential configuration out of public examples.",
        ],
        points: [
          "Keep secrets and sensitive files outside the permitted working scope.",
          "Use hooks and permissions as part of the control process.",
          "Keep commits and pushes under human control in this workflow.",
          "Validate outputs and retain responsibility for accepted changes.",
        ],
      },
      {
        id: "validation",
        label: "VALIDATION AND REVIEW",
        title: "Useful output still needs checking.",
        paragraphs: [
          "I check changes through builds, lint and self-review, write test plans in pull requests and use the team’s normal peer-review process.",
          "When a change does not hold up, I investigate and correct or revert it. This includes owning regressions and explaining the cause and verification in the review trail.",
        ],
      },
      {
        id: "impact",
        label: "PRACTICAL IMPACT",
        title: "A broader contribution, with judgment.",
        paragraphs: [
          "AI assistance has helped me contribute across UI, backend and execution repositories while continuing to work with the engineers and QA colleagues responsible for those systems.",
          "The useful outcome is broader delivery with documented intent and review. I describe that scope through specific work examples rather than an unmeasured productivity multiplier.",
        ],
      },
    ],
    outcome:
      "A repeatable workflow that combines clear requirements, maintained context, reusable guidance, intended access boundaries and engineering validation. The tools support my work; I retain responsibility for what I merge and release.",
  },
];

export const personalProjects = [
  {
    name: "Next-Promptopia",
    label: "PROMPT SHARING · LEARNING PROJECT",
    description:
      "An open-source prompt discovery and sharing application with profiles, tagging and Google sign-in. A learning project connecting a responsive interface with authenticated, database-backed workflows.",
    stack: ["Next.js", "React", "Tailwind", "MongoDB", "NextAuth"],
    url: "https://github.com/Afirestriker/next-promptopia",
    live: "https://next-promptopia-pi.vercel.app/",
    image: "/assets/promptopia.webp",
    features: [
      "Create, edit and delete prompts; browse creator profiles.",
      "Search by tags and copy prompts for reuse.",
      "Google authentication with NextAuth and MongoDB/Mongoose persistence.",
    ],
  },
  {
    name: "Next-Stream",
    label: "MEDIA DISCOVERY · PERSONAL PROJECT",
    description:
      "A Next.js and React interface for discovering movies and shows, with an API-backed catalogue and detail views. Focused on browsing, navigation and a cohesive frontend experience.",
    stack: ["Next.js", "React", "API integration"],
    url: "https://github.com/Afirestriker/next-stream",
    live: "https://next-stream-website.vercel.app/",
    image: "/assets/next-stream.webp",
    features: [
      "Movie and show discovery with catalogue and detail routes.",
      "API-driven content with reusable navigation and layout.",
      "Deployed on Vercel.",
    ],
  },
  {
    name: "KHub",
    label: "JOB PORTAL · COLLABORATIVE ACADEMIC PROJECT",
    description:
      "A Java/JSP job portal built with a project partner. It connects student profiles, job opportunities and interview preparation with database-backed administration and reporting.",
    stack: ["Java / JSP", "JavaScript", "MySQL"],
    url: "https://github.com/Afirestriker/KHub-Java-Project",
    live: "",
    image: "/assets/khub.webp",
    features: [
      "Resume generation with three templates and profile-dependent content.",
      "Opportunity application states and student/admin workflows.",
      "Practice quizzes, interview FAQs and company information.",
    ],
  },
  {
    name: "Intern & HireUp",
    label: "STUDENT RECORDS · COLLABORATIVE ACADEMIC PROJECT",
    description:
      "A web application built with a project partner for maintaining student, academic and skills records, with generated resume views and administrator tools.",
    stack: ["JSP", "HTML / CSS", "MySQL"],
    url: "https://github.com/Afirestriker/Intern-HireUp",
    live: "",
    image: "/assets/hireup.webp",
    features: [
      "Student profile, academic and skills management.",
      "Administrator record search, resume views and printable reports.",
      "Documented system design, data models and lessons from implementation.",
    ],
  },
];

export const credentials = [
  {
    name: "Namaste React",
    issuer: "NamasteDev.com · April 2025",
    url: "https://namastedev.com/agrawalashish.in/certificates/namaste-react",
  },
  {
    name: "Google UX Design",
    issuer: "Professional certification · Google / Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/QEDD4V5DUEUF",
  },
  {
    name: "Postman Student Expert",
    issuer: "API credential · Postman",
    url: "https://badgr.com/public/assertions/9yWH06MVTkqu6AtITDiXEQ",
  },
  {
    name: "Google Cloud Fundamentals",
    issuer: "Core Infrastructure · Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/TS8LLPF7D6LN",
  },
];

export const routeMetadata = [
  {
    path: "/work/",
    title: "Selected work — Ashish Agrawal",
    description: "Explore engineering case studies in reusable form platforms, visual workflow tools, frontend migration and responsible AI-assisted engineering.",
  },
  {
    path: "/",
    title: "Ashish Agrawal — Software Engineer",
    description:
      "Software engineer building frontend systems, workflow platforms and developer tools. Explore experience, selected work and responsible AI-assisted engineering.",
  },
  {
    path: "/experience/",
    title: "Experience — Ashish Agrawal",
    description:
      "Software engineering experience at Simplify Healthcare / Simplify Group and Tata Motors: reusable UI platforms, workflows, data interfaces and cross-stack delivery.",
  },
  ...studies.map((study) => ({
    path: `/work/${study.slug}/`,
    title: `${study.title} ${study.subtitle} — Ashish Agrawal`,
    description: study.summary,
  })),
];
