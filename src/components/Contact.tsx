export function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-image" aria-hidden="true"></div>
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">{"LET’S CONNECT"}</p>
          <h2 id="contact-title">
            {"Have something"}
            <br />
            <em>{"worth building?"}</em>
          </h2>
          <a className="contact-email" href="mailto:agrawalashish.in@gmail.com">
            {"agrawalashish.in@gmail.com "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/iashish-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"LinkedIn "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a
            href="https://github.com/Afirestriker"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"GitHub "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <span>{"Pune, India · Open to a conversation"}</span>
        </div>
      </div>
    </section>
  );
}
