export function FormArt() {
  return (
    <div
      className="project-art form-art"
      aria-label="Conceptual illustration of schema-driven forms"
    >
      <div className="art-topbar">
        <span>
          <i className="tiny-dot" aria-hidden="true"></i>
          {" CONFIGURATION → INTERFACE"}
        </span>
        <span>{"01"}</span>
      </div>
      <div className="schema-scene">
        <div className="code-window">
          <div className="window-label">
            <span aria-hidden="true">{"{ }"}</span>
            {" form.schema"}
          </div>
          <pre aria-label="Illustrative form configuration">
            <code>
              <span className="code-muted">{"{"}</span>
              <span className="code-key">{'"name"'}</span>
              {": "}
              <span className="code-value">{'"connection"'}</span>
              {",\n  "}
              <span className="code-key">{'"fields"'}</span>
              {": [\n    "}
              <span className="code-muted">{"{"}</span>
              <span className="code-key">{'"type"'}</span>
              {": "}
              <span className="code-value">{'"text"'}</span>
              <span className="code-muted">{"}"}</span>
              {",\n    "}
              <span className="code-muted">{"{"}</span>
              <span className="code-key">{'"type"'}</span>
              {": "}
              <span className="code-value">{'"select"'}</span>
              <span className="code-muted">{"}"}</span>
              {"\n  ]\n"}
              <span className="code-muted">{"}"}</span>
            </code>
          </pre>
          <div className="code-bottom">
            {"ONE SCHEMA. REUSABLE POSSIBILITIES."}
          </div>
        </div>
        <span className="scene-arrow" aria-hidden="true">
          {"→"}
        </span>
        <div className="rendered-form" aria-hidden="true">
          <span className="mini-icon">{"▦"}</span>
          <strong>{"New connection"}</strong>
          <span className="mock-label">{"Connection name"}</span>
          <div className="mock-input">{"Analytics workspace"}</div>
          <span className="mock-label">{"Source type"}</span>
          <div className="mock-input">
            {"PostgreSQL "}
            <span>{"⌄"}</span>
          </div>
          <div className="mock-submit">
            {"Create connection "}
            <span>{"↗"}</span>
          </div>
        </div>
      </div>
      <div className="art-caption">
        <span>{"SCHEMA-DRIVEN UI"}</span>
        <span>{"Conceptual illustration"}</span>
      </div>
    </div>
  );
}
