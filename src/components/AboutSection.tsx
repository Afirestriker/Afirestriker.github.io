export function AboutSection() {
  return (
    <section
      className="section container about-section"
      id="skills"
      aria-labelledby="capabilities-title"
    >
      <div className="about-copy">
        <p className="eyebrow">{"04 / THE WAY I BUILD"}</p>
        <h2 id="capabilities-title">
          {"Frontend craft."}
          <br />
          <em>{"End-to-end thinking."}</em>
        </h2>
        <p>
          {
            "I like turning complex requirements into tools people can use confidently. That means thinking beyond a screen: how it connects, how it behaves when something fails, and how the next engineer will maintain it."
          }
        </p>
        <a
          className="text-link"
          href="https://github.com/Afirestriker"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Find me on GitHub "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </div>
      <div className="capabilities">
        <div>
          <span>{"01"}</span>
          <div>
            <h3>{"Interfaces & reusable systems"}</h3>
            <p>{"React · TypeScript · JavaScript · Tailwind · shadcn/ui"}</p>
          </div>
        </div>
        <div>
          <span>{"02"}</span>
          <div>
            <h3>{"Architecture & integration"}</h3>
            <p>{"Vite · Next.js · Nx · Module Federation · REST APIs"}</p>
          </div>
        </div>
        <div>
          <span>{"03"}</span>
          <div>
            <h3>{"Across the stack"}</h3>
            <p>{"Node.js / NestJS · .NET contributions · Azure DevOps"}</p>
          </div>
        </div>
        <div id="education">
          <span>{"04"}</span>
          <div>
            <h3>{"A foundation in computing"}</h3>
            <p>
              {"MIT World Peace University · 2019–2022"}
              <br />
              {"Computer Applications · CGPA 9.94 / 10"}
              <br />
              {"Gold medal · First rank"}
              <br />
              {"Rank Holder Scholarships · 2020–21 & 2021–22"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
