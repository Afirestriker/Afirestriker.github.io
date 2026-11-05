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

export function SelectedWork() {
  return (
    <section
      className="section container"
      id="projects"
      aria-labelledby="work-title"
    >
      <div className="section-intro">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Built to solve.
            <br />
            <em>Designed to be used.</em>
          </h2>
        </div>
        <p>
          Selected problems I’ve worked on, the decisions behind them, and what
          changed for the people using the tools.
        </p>
      </div>
      {studies.slice(0, 3).map((study, i) => (
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
          {i % 2 === 1 && <WorkflowArt />}
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
