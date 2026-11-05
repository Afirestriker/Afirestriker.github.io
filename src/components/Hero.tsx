export function Hero() {
  return (
    <section className="hero container" id="about" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="small-line" aria-hidden="true"></span>
          {" SOFTWARE ENGINEER · PUNE, INDIA"}
        </div>
        <h1 id="hero-title">
          {"Complex systems."}
          <br />
          <em>{"Clear experiences."}</em>
        </h1>
        <p className="hero-description">
          {
            "I’m Ashish. I build frontend systems for workflow automation, data integration and developer tools — and help carry them from the first design decision to release."
          }
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {"Explore my work "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a className="text-link" href="#contact">
            {"Get in touch "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span className="status-dot" aria-hidden="true"></span>
          {" Currently building application & integration platforms"}
        </div>
      </div>
      <figure className="portrait-block">
        <div className="portrait-topline">
          <span>{"THE PERSON BEHIND THE WORK"}</span>
          <span aria-hidden="true">{"↙"}</span>
        </div>
        <div className="portrait-frame">
          <img
            src="/assets/ashish.webp"
            width="688"
            height="1488"
            alt="Ashish Agrawal at a developer event"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <span>{"A little curiosity. A lot of building."}</span>
          <span className="portrait-signature" aria-hidden="true">
            {"Ashish."}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
