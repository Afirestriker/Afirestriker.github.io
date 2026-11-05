import { credentials, personalProjects } from "../content";
export function MoreAbout() {
  return (
    <>
      <section
        className="section container personal-section"
        aria-labelledby="personal-title"
      >
        <div className="section-intro">
          <div>
            <p className="eyebrow">05 / EARLIER EXPLORATIONS</p>
            <h2 id="personal-title">
              Ideas that became
              <br />
              <em>something tangible.</em>
            </h2>
          </div>
          <p>
            Supporting personal and academic projects — a foundation in
            interfaces, APIs and full-stack development.
          </p>
        </div>
        <div className="personal-grid">
          {personalProjects.map((project, index) => (
            <article key={project.name}>
              <img
                className="project-image"
                src={project.image}
                alt={`${project.name} interface`}
                width="1000"
                height="625"
                loading="lazy"
              />
              <span className="project-meta">
                0{index + 1} / {project.label}
              </span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <details className="project-details">
                <summary>
                  Features &amp; scope <span aria-hidden="true">＋</span>
                </summary>
                <div>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </details>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-resource-links">
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code <span aria-hidden="true">↗</span>
                </a>
                {project.live && (
                  <a
                    className="text-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <details className="archive-projects project-details">
          <summary>
            Other creative and research work <span aria-hidden="true">＋</span>
          </summary>
          <div>
            <h3>Browser-extension exploration</h3>
            <p>
              Built a Chrome extension while exploring manifest configuration,
              background service workers, content scripts, messaging,
              permissions and popup interfaces.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7307000684975910913/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the project update <span aria-hidden="true">↗</span>
            </a>
            <h3>Unilever marketing report</h3>
            <p>
              A collaborative academic report and presentation covering product
              divisions, the marketing mix, product life cycle and SWOT
              analysis. An opportunity to practice research, communication and
              presenting a shared body of work.
            </p>
            <h3>vShowsToEntertain</h3>
            <p>
              An earlier WordPress site exploring visual presentation, content
              organization and navigation. It complements the more recent
              application engineering work.
            </p>
          </div>
        </details>
      </section>
      <section
        className="container credentials-section"
        id="awards"
        aria-labelledby="credentials-title"
      >
        <div>
          <p className="eyebrow">CONTINUING TO LEARN</p>
          <h2 id="credentials-title">A broader perspective.</h2>
          <p>
            Design, APIs and cloud fundamentals complement my day-to-day
            engineering work.
          </p>
        </div>
        <div>
          {credentials.map((credential) => (
            <a
              className="credential-row"
              href={credential.url}
              key={credential.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <strong>{credential.name}</strong>
                <small>{credential.issuer}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <section
        className="container beyond-section"
        id="interests"
        aria-labelledby="beyond-title"
      >
        <span id="volunteer" className="anchor-alias" />
        <div>
          <p className="eyebrow">BEYOND THE WORK</p>
          <h2 id="beyond-title">Curiosity travels.</h2>
        </div>
        <p>
          I enjoy writing, exploring technology and learning through creative
          projects. My UI/UX volunteering with the Medito Foundation includes
          working with the product team on user needs and interface design, and
          collaborating with frontend developers.
        </p>
        <div className="beyond-links">
          <a
            className="text-link"
            href="https://medium.com/@agrawalashish"
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing on Medium <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="https://www.youtube.com/@SpecialDays"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative projects <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
