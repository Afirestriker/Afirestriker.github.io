import { useEffect, useState } from "react";
import { Button } from "./ui/button";
type Example = "contact" | "deployment";
const examples = {
  contact: {
    title: "Contact details",
    fields: [
      { name: "name", type: "text", required: true },
      { name: "email", type: "email", required: true },
    ],
  },
  deployment: {
    title: "Deployment request",
    fields: [
      {
        name: "environment",
        type: "select",
        options: ["Staging", "Production"],
      },
      {
        name: "reason",
        type: "text",
        required: true,
        visibleWhen: { environment: "Production" },
      },
    ],
  },
};
export function FormDemo() {
  const [interactive, setInteractive] = useState(false);
  useEffect(() => setInteractive(true), []);
  const [active, setActive] = useState<Example>("contact");
  const [environment, setEnvironment] = useState("Staging");
  const [result, setResult] = useState("");
  function choose(example: Example) {
    setActive(example);
    setEnvironment("Staging");
    setResult("");
  }
  return (
    <section id="try-it">
      <p className="eyebrow">INTERACTIVE EXAMPLE</p>
      <h2>
        Change the schema.
        <br />
        <em>Change the interface.</em>
      </h2>
      <p>
        Switch the configuration to change the form. In the deployment example,
        choose Production to reveal a required approval reason.
      </p>
      <noscript>
        <p>
          Enable JavaScript to try the example. The case study remains fully
          readable.
        </p>
      </noscript>
      <div className="demo">
        <div className="demo-note">
          INDEPENDENT EXAMPLE · SYNTHETIC DATA · NO NETWORK SUBMISSION
        </div>
        <div
          className="demo-tabs"
          role="group"
          aria-label="Example form configuration"
        >
          <Button
            disabled={!interactive}
            variant="outline"
            type="button"
            aria-pressed={active === "contact"}
            onClick={() => choose("contact")}
          >
            Contact details
          </Button>
          <Button
            disabled={!interactive}
            variant="outline"
            type="button"
            aria-pressed={active === "deployment"}
            onClick={() => choose("deployment")}
          >
            Deployment request
          </Button>
        </div>
        <div className="demo-grid">
          <pre
            className="demo-code"
            aria-label="Current example schema"
            tabIndex={0}
          >
            {JSON.stringify(examples[active], null, 2)}
          </pre>
          <form
            key={active}
            className="demo-form"
            onInput={() => setResult("")}
            onSubmit={(event) => {
              event.preventDefault();
              setResult("Validation passed. Nothing was sent or saved.");
            }}
          >
            <fieldset className="demo-fieldset" disabled={!interactive}>
              <h3>{examples[active].title}</h3>
              {active === "contact" ? (
                <>
                  <label>
                    Name *
                    <input
                      name="name"
                      required
                      maxLength={200}
                      autoComplete="off"
                    />
                  </label>
                  <label>
                    Work email *
                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      autoComplete="off"
                    />
                  </label>
                </>
              ) : (
                <>
                  <label>
                    Environment *
                    <select
                      name="environment"
                      required
                      value={environment}
                      onChange={(event) => {
                        setEnvironment(event.target.value);
                        setResult("");
                      }}
                    >
                      <option>Staging</option>
                      <option>Production</option>
                    </select>
                  </label>
                  {environment === "Production" && (
                    <label>
                      Approval reason *
                      <input
                        name="reason"
                        required
                        maxLength={200}
                        autoComplete="off"
                      />
                    </label>
                  )}
                </>
              )}
              <Button type="submit">
                Validate example <span aria-hidden="true">↗</span>
              </Button>
            </fieldset>
            <p className="demo-result" role="status" aria-live="polite">
              {result}
            </p>
          </form>
        </div>
      </div>
      <p className="example-disclaimer">
        An independently built explanation using synthetic configuration, not
        employer source code. Input stays in the page and is not submitted or
        stored.
      </p>
    </section>
  );
}
