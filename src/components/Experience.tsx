import { achievements, roles } from "../content";
const overview: Record<string, string> = {
  A01: "Designed a reusable form engine and a live-preview schema authoring tool.",
  A03: "Built workflow interactions, ETL screens and query interfaces.",
  A14: "Used Claude Code with maintained project context, skills, hooks, permissions and engineering validation.",
};
export function Experience({ full = false }: { full?: boolean }) {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container section">
        <div className="section-intro">
          <div>
            <p className="eyebrow">02 / EXPERIENCE</p>
            <h2 id="experience-title">
              Growing through
              <br />
              <em>the work.</em>
            </h2>
          </div>
          <p>
            From data and monitoring interfaces to reusable platform tools, with
            a growing view of the systems behind the UI.
          </p>
        </div>
        {roles.map((role, index) => (
          <article className="experience-entry" key={role.id}>
            <div className="experience-date">
              <span>
                <time dateTime={role.start}>{role.label.split(" — ")[0]}</time>{" "}
                —{" "}
                {role.end ? (
                  <time dateTime={role.end}>{role.label.split(" — ")[1]}</time>
                ) : (
                  "PRESENT"
                )}
              </span>
              {!role.end && <span className="current-label">CURRENT ROLE</span>}
            </div>
            <div className="experience-content">
              <h3>{role.title}</h3>
              <p className="employer">
                {role.employer} <span>· Pune, India</span>
              </p>
              <p>{role.description}</p>
              <ul className="experience-highlights">
                {role.highlights.map((id) => (
                  <li key={id}>
                    {full
                      ? achievements.find((a) => a.id === id)?.description
                      : overview[id] ||
                        achievements.find((a) => a.id === id)?.description}
                  </li>
                ))}
              </ul>
              {full ? (
                <div className="achievement-list">
                  {role.further.map((id) => {
                    const item = achievements.find((a) => a.id === id)!;
                    return (
                      <section key={id}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="tags">
                          {item.skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : (
                role.further.length > 0 && (
                  <details className="experience-details">
                    <summary>
                      More about my scope <span aria-hidden="true">＋</span>
                    </summary>
                    <div>
                      <p>
                        Alongside feature work, I contributed execution-service
                        changes, partnered with QA, coordinated releases and
                        supported tenant onboarding and cross-team
                        troubleshooting.
                      </p>
                      <p>
                        Claude Code is part of this workflow, with maintained
                        context, skills, access controls and engineering
                        validation.
                      </p>
                      <a className="text-link" href="/experience/">
                        Read the full experience{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </details>
                )
              )}
            </div>
            <span className="experience-index" aria-hidden="true">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
