export function AISection() {
  return (
    <section
      className="section container ai-section"
      id="ai-engineering"
      aria-labelledby="ai-title"
    >
      <div className="section-intro">
        <div>
          <p className="eyebrow">{"03 / ENGINEERING WITH AI"}</p>
          <h2 id="ai-title">
            {"More capability."}
            <br />
            <em>{"The same accountability."}</em>
          </h2>
        </div>
        <p>
          {
            "I use Claude Code across planning, coding, reviews and documentation. The value comes from clear context, useful controls and checking the work."
          }
        </p>
      </div>
      <div
        className="ai-workflow"
        aria-label="AI-assisted engineering workflow"
      >
        <div>
          <span className="step-number">
            {"01 "}
            <span aria-hidden="true">{"→"}</span>
          </span>
          <h3>{"Define the work"}</h3>
          <p>
            {
              "Requirements and design notes establish scope before larger changes."
            }
          </p>
        </div>
        <div>
          <span className="step-number">
            {"02 "}
            <span aria-hidden="true">{"→"}</span>
          </span>
          <h3>{"Give it context"}</h3>
          <p>
            {"Maintained "}
            <code>{"CLAUDE.md"}</code>
            {" guidance and skills support consistent, reusable work."}
          </p>
        </div>
        <div>
          <span className="step-number">
            {"03 "}
            <span aria-hidden="true">{"→"}</span>
          </span>
          <h3>{"Set boundaries"}</h3>
          <p>
            {
              "Permission rules and hooks help restrict access to sensitive files."
            }
          </p>
        </div>
        <div>
          <span className="step-number">
            {"04 "}
            <span aria-hidden="true">{"→"}</span>
          </span>
          <h3>{"Check the result"}</h3>
          <p>
            {"Builds, lint, test plans, self-review and normal peer review."}
          </p>
        </div>
        <div>
          <span className="step-number">
            {"05 "}
            <span aria-hidden="true">{"↗"}</span>
          </span>
          <h3>{"Own the change"}</h3>
          <p>
            {
              "I retain control of commits and pushes, and responsibility for what I merge."
            }
          </p>
        </div>
      </div>
      <div className="ai-principles">
        <div>
          <p className="eyebrow">{"INTENTIONAL USE. PRACTICAL SAFEGUARDS."}</p>
          <h3>
            {"Good context helps."}
            <br />
            <em>{"Good judgment matters."}</em>
          </h3>
          <p>
            {
              "AI assistance helps me work across frontend and backend repositories. I keep architecture and conventions explicit, validate changes, and investigate or revert when something does not hold up."
            }
          </p>
        </div>
        <div className="principle-list">
          <div>
            <span aria-hidden="true">{"↗"}</span>
            <p>
              <strong>{"Skills & shared context"}</strong>
              {
                "Reusable guidance and current project architecture keep the work grounded."
              }
            </p>
          </div>
          <div>
            <span aria-hidden="true">{"◇"}</span>
            <p>
              <strong>{"Hooks & permission rules"}</strong>
              {
                "Controls intended to limit access to environment files, credentials and keys."
              }
            </p>
          </div>
          <div>
            <span aria-hidden="true">{"✓"}</span>
            <p>
              <strong>{"Human review & release"}</strong>
              {
                "Reviewed changes, documented checks and clear ownership of the result."
              }
            </p>
          </div>
        </div>
      </div>
      <a
        className="text-link ai-detail-link"
        href="/work/ai-assisted-engineering/"
      >
        Explore my AI engineering workflow <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
