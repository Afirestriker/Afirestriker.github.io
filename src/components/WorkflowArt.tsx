export function WorkflowArt() {
  return (
    <div className="project-art workflow-art">
      <div className="art-topbar">
        <span>
          <i className="tiny-dot" aria-hidden="true"></i>
          {" A FLOW YOU CAN FOLLOW"}
        </span>
        <span>{"02"}</span>
      </div>
      <div
        className="workflow-scene"
        role="img"
        aria-label="Illustrative workflow: API source passes data into a condition scope, then transforms it and produces output."
      >
        <div className="flow-node">
          <span className="node-symbol">{"↗"}</span>
          <div>
            <small>{"SOURCE"}</small>
            <strong>{"Receive data"}</strong>
          </div>
          <span className="node-state"></span>
        </div>
        <div className="flow-connector"></div>
        <div className="flow-scope">
          <span className="scope-label">{"◇ CONDITION SCOPE"}</span>
          <div className="flow-node">
            <span className="node-symbol">{"{ }"}</span>
            <div>
              <small>{"TRANSFORM"}</small>
              <strong>{"Shape the response"}</strong>
            </div>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-node">
            <span className="node-symbol">{"✓"}</span>
            <div>
              <small>{"OUTPUT"}</small>
              <strong>{"Ready for the next step"}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="art-caption">
        <span>{"VISUAL LOGIC. CLEAR FEEDBACK."}</span>
        <span>{"Conceptual illustration"}</span>
      </div>
    </div>
  );
}
