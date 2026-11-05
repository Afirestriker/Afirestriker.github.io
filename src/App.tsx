import { profile, studies, routeMetadata } from "./content";
import { Header, Footer, ResumeLink } from "./components/Layout";
import { Hero } from "./components/Hero";
import { FocusStrip } from "./components/FocusStrip";
import { AISection } from "./components/AISection";
import { AboutSection } from "./components/AboutSection";
import { Contact } from "./components/Contact";
import { SelectedWork, MigrationArt } from "./components/SelectedWork";
import { Experience } from "./components/Experience";
import { MoreAbout } from "./components/MoreAbout";
import { FormDemo } from "./components/FormDemo";
import { WorkflowArt } from "./components/WorkflowArt";
import { FormArt } from "./components/FormArt";

export function App({ path }: { path: string }) {
  const study = studies.find((s) => path === `/work/${s.slug}/`);
  return (
    <>
      <Header path={path} />
      {path === "/" ? (
        <main id="main">
          <Hero />
          <div className="container resume-intro">
            <ResumeLink />
          </div>
          <FocusStrip />
          <SelectedWork />
          <Experience />
          <AISection />
          <AboutSection />
          <MoreAbout />
          <Contact />
        </main>
      ) : path === "/work/" ? (
        <main id="main">
          <SelectedWork overview />
          <Contact />
        </main>
      ) : path === "/experience/" ? (
        <main id="main">
          <div className="container experience-page-heading">
            <a className="back-link" href="/">
              ← Back to portfolio
            </a>
            <p className="eyebrow">EXPERIENCE / THE FULLER PICTURE</p>
            <h1>
              Building capability.
              <br />
              <em>Owning the outcome.</em>
            </h1>
            <p className="case-lede">
              My work across frontend systems, platform services and the
              collaboration that carries a feature into use.
            </p>
            <ResumeLink />
          </div>
          <Experience full />
          <MoreAbout />
          <Contact />
        </main>
      ) : study ? (
        <main id="main">
          <div className="container case-header">
            <a className="back-link" href="/work/">
              ← Back to selected work
            </a>
            <p className="eyebrow">CASE STUDY / {study.category}</p>
            <h1>
              {study.title}
              <br />
              <em>{study.subtitle}</em>
            </h1>
            <p className="case-lede">{study.summary}</p>
            <dl className="case-facts">
              <div>
                <dt>MY ROLE</dt>
                <dd>{study.role}</dd>
              </div>
              <div>
                <dt>COLLABORATION</dt>
                <dd>{study.collaboration}</dd>
              </div>
              <div>
                <dt>CORE TECHNOLOGIES</dt>
                <dd>{study.technologies.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div className="container case-layout">
            <aside className="case-toc" aria-label="On this page">
              <p>IN THIS CASE STUDY</p>
              {study.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.label.toLowerCase()}
                </a>
              ))}
              {study.illustration === "form" && (
                <a href="#try-it">Try the idea</a>
              )}
              <a href="#outcome">The outcome</a>
            </aside>
            <div className="case-prose">
              {study.illustration === "form" ? (
                <FormArt />
              ) : study.illustration === "workflow" ? (
                <WorkflowArt />
              ) : study.illustration === "migration" ? (
                <MigrationArt />
              ) : (
                <div className="ai-study-intro">
                  <p className="eyebrow">
                    SCOPE → CONTEXT → CONTROLS → VALIDATION → RELEASE
                  </p>
                  <p>Human accountability connects every step.</p>
                </div>
              )}
              {study.sections.map((section, i) => (
                <section id={section.id} key={section.id}>
                  <p className="eyebrow">
                    0{i + 1} / {section.label}
                  </p>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.points && (
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              {study.illustration === "form" && <FormDemo />}
              <section id="outcome">
                <p className="eyebrow">THE OUTCOME</p>
                <h2>What the work made possible.</h2>
                <p>{study.outcome}</p>
              </section>
              <div className="case-next">
                <p className="eyebrow">KEEP EXPLORING</p>
                {studies
                  .filter((s) => s.slug !== study.slug)
                  .slice(0, 2)
                  .map((s) => (
                    <a
                      className="related-study"
                      href={`/work/${s.slug}/`}
                      key={s.slug}
                    >
                      <span>
                        {s.title} <em>{s.subtitle}</em>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                <a className="text-link" href="/experience/">
                  Explore the full experience <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <Contact />
        </main>
      ) : (
        <main id="main" className="container not-found">
          <p className="eyebrow">404 / PAGE NOT FOUND</p>
          <h1>
            Let’s find
            <br />
            <em>a better direction.</em>
          </h1>
          <p>
            This page may have moved. Explore the selected work or return to the
            portfolio.
          </p>
          <a className="button button-primary" href="/">
            Back to portfolio <span aria-hidden="true">↗</span>
          </a>
        </main>
      )}
      <Footer />
    </>
  );
}
export { profile, routeMetadata };
