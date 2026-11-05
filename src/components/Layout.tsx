import { useEffect, useRef } from "react";
import { profile } from "../content";

function NavLinks({ path }: { path: string }) {
  return (
    <>
      <a href="/work/" aria-current={path === "/work/" ? "page" : undefined}>
        Selected work
      </a>
      <a href="/experience/" aria-current={path === "/experience/" ? "page" : undefined}>
        Experience
      </a>
      <a href="/work/ai-assisted-engineering/" aria-current={path === "/work/ai-assisted-engineering/" ? "page" : undefined}>
        Engineering with AI
      </a>
      <a className="nav-contact" href="/#contact">
        Let's talk <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}

export function Header({ path }: { path: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    const outside = (event: MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node))
        menu.current.open = false;
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", outside);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="/" aria-label="Ashish Agrawal, home">
            <span className="monogram" aria-hidden="true">
              a.
            </span>
            <span>
              Ashish Agrawal
              <span className="wordmark-role">Software Engineer</span>
            </span>
          </a>
          <nav className="main-nav desktop-nav" aria-label="Main navigation">
            <NavLinks path={path} />
          </nav>
          <details className="mobile-menu" ref={menu}>
            <summary>
              Menu <span aria-hidden="true">＋</span>
            </summary>
            <nav
              className="mobile-links"
              aria-label="Mobile navigation"
              onClick={(event) => {
                if ((event.target as Element).closest("a") && menu.current)
                  menu.current.open = false;
              }}
            >
              <NavLinks path={path} />
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer container">
      <span>© 2026 {profile.name}</span>
      <span>Built with care · Updated November 2026</span>
      <a href="#page-top">Back to top ↑</a>
    </footer>
  );
}
export function ResumeLink({
  className = "text-link",
}: {
  className?: string;
}) {
  return (
    <a className={className} href={profile.resume} download>
      Download resume <span aria-hidden="true">↓</span>
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
