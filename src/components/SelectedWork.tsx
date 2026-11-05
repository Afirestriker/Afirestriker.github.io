import { studies } from "../content";
import { FormArt } from "./FormArt";
import { WorkflowArt } from "./WorkflowArt";

export function MigrationArt() {
  return (
    <div className="project-art migration-art">
      <div className="art-topbar">
        <span>SHARED FOUNDATION. FOCUSED MODULES.</span>
        <span>03</span>
      </div>
      <div
        className="federation-scene"
        role="img"
        aria-label="Conceptual host application connected to workflow, query and platform modules, with shared UI libraries."
      >
        <div className="host-node">
          <span className="eyebrow">HOST APPLICATION</span>
          <strong>A consistent experience</strong>
        </div>
        <div className="module-branches">
          <span>Workflows</span>
          <span>Queries</span>
          <span>Platform</span>
        </div>
        <div className="shared-layer">
          Shared UI · Dependencies · Conventions
        </div>
      </div>
      <div className="art-caption">
        <span>BUILDING ACROSS BOUNDARIES</span>
        <span>Conceptual illustration</span>
      </div>
    </div>
  );
}

function AIArt() {
  return (
    <div className="project-art ai-art">
      <div className="art-topbar"><span>AI-ASSISTED ENGINEERING</span><span>04</span></div>
      <div className="ai-art-steps" role="img" aria-label="Engineering workflow: scope, context and skills, permission controls, validation, and human release decisions.">
        <span>01 / Scope the work</span>
        <span>02 / Context &amp; skills</span>
        <span>03 / Permissions &amp; hooks</span>
        <span>04 / Validate &amp; review</span>
        <span>05 / Own the release</span>
      </div>
      <div className="art-caption"><span>HUMAN ACCOUNTABILITY THROUGHOUT</span><span>Workflow overview</span></div>
    </div>
  );
}

export function SelectedWork({ overview = false }: { overview?: boolean }) {
  const Heading = overview ? "h1" : "h2";
  return (
    <section
      className={`section container${overview ? " work-overview" : ""}`}
      id="projects"
      aria-labelledby="work-title"
    >
      {overview && <a className="back-link" href="/">← Back to portfolio</a>}
      <div className="section-intro">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <Heading id="work-title">
            Built to solve.
            <br />
            <em>Designed to be used.</em>
          </Heading>
        </div>
        <p>
          Selected problems I’ve worked on, the decisions behind them, and what
          changed for the people using the tools.
        </p>
      </div>
      {studies.slice(0, overview ? studies.length : 3).map((study, i) => (
        <article
          className={`project ${i % 2 ? "project-secondary" : "project-featured"}`}
          key={study.slug}
        >
          {i % 2 === 0 && (i === 0 ? <FormArt /> : <MigrationArt />)}
          <div className="project-body">
            <div className="project-meta">
              <span>{study.category}</span>
              <span>2025–2026</span>
            </div>
            <h3>
              {study.title}
              <br />
              {study.subtitle}
            </h3>
            <p>{study.summary}</p>
            <div className="tags">
              {study.technologies.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="text-link" href={`/work/${study.slug}/`}>
              Read the case study <span aria-hidden="true">↗</span>
            </a>
          </div>
          {i % 2 === 1 && (study.illustration === "ai" ? <AIArt /> : <WorkflowArt />)}
        </article>
      ))}
      <div className="work-note">
        <span aria-hidden="true">↳</span>
        <p>
          Good engineering also happens between the screens.
          <br />
          <a href="/experience/">
            Explore release, support and cross-team work{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
