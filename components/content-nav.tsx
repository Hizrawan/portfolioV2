import Link from "next/link";

export default function ContentNav() {
  return (
    <header className="content-nav">
      <div className="content-nav-left">
        <Link href="/" className="content-brand">
          Hizrawan Dwi Oka
        </Link>
        <nav className="content-nav-links" aria-label="Content navigation">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#certificates">Certificates</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>

      <div className="content-nav-right">
        <div className="content-nav-social">
          <a href="https://github.com/Hizrawan" target="_blank" rel="noreferrer" title="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/hizrawan"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <div className="content-nav-divider" />
        <button className="theme-btn content-theme-btn" id="themeToggle" title="Toggle theme" type="button">
          <svg viewBox="0 0 24 24" id="themeIcon" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <span className="sr-only">Toggle theme</span>
        </button>
        <details className="content-mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile content navigation">
            <Link href="/#about">About</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#education">Education</Link>
            <Link href="/#certificates">Certificates</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
