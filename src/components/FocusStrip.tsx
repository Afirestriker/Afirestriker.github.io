export function FocusStrip() {
  return (
    <section className="focus-strip container" aria-label="Areas of focus">
      <p>
        {"Frontend depth."}
        <br />
        <strong>{"Platform perspective."}</strong>
      </p>
      <div>
        <span className="focus-number">{"01"}</span>
        <span>
          {"Reusable UI"}
          <br />
          {"systems"}
        </span>
      </div>
      <div>
        <span className="focus-number">{"02"}</span>
        <span>
          {"Workflow &"}
          <br />
          {"data tools"}
        </span>
      </div>
      <div>
        <span className="focus-number">{"03"}</span>
        <span>
          {"AI-assisted"}
          <br />
          {"engineering"}
        </span>
      </div>
    </section>
  );
}
