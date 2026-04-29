"use client";

import Link from "next/link";
import { getLocaleLabel, locales, useLocalization } from "./localization-provider";

const navItems = [
  ["nav.about", "about"],
  ["nav.experience", "experience"],
  ["nav.education", "education"],
  ["nav.certificates", "certificates"],
  ["nav.skills", "skills"],
  ["nav.projects", "projects"],
  ["nav.stories", "writing"],
  ["nav.contact", "contact"],
] as const;

type SiteHeaderProps = {
  activeSection?: string;
  linkMode?: "hash" | "home";
};

function ThemeIcon() {
  return (
    <svg id="themeIcon" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
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
  );
}

function LanguageSelector() {
  const { locale, setLocale, t } = useLocalization();

  return (
    <details className="language-selector group relative">
      <summary
        className="grid h-10 cursor-pointer list-none place-items-center rounded-full border border-[var(--border2)] px-3 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] [&::-webkit-details-marker]:hidden"
        title={t("nav.language")}
      >
        {locale}
      </summary>
      <div className="language-menu">
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            className={item === locale ? "active" : ""}
            onClick={() => setLocale(item)}
          >
            <span>{item}</span>
            {getLocaleLabel(item)}
          </button>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader({ activeSection, linkMode = "hash" }: SiteHeaderProps) {
  const { t } = useLocalization();
  const hrefFor = (id: string) => (linkMode === "home" ? `/#${id}` : `#${id}`);

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[min(1180px,calc(100%-1.5rem))] -translate-x-1/2 items-center justify-between rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_74%,transparent)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6">
      <div className="flex min-w-0 items-center gap-5 lg:gap-10">
        <Link
          href={linkMode === "home" ? "/" : "#hero"}
          className="shrink-0 rounded-full border border-[var(--border2)] bg-[var(--accent-dim)] px-3 py-2 font-[var(--font-mono)] text-xs tracking-[0.12em] text-[var(--text)]"
        >
          Hizrawan Dwi Oka
        </Link>
        <nav className="hidden gap-4 overflow-x-auto font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.1em] text-[var(--muted)] lg:flex lg:gap-7">
          {navItems.map(([labelKey, id]) => (
            <Link
              key={id}
              href={hrefFor(id)}
              className={`rounded-full px-2 py-1 transition hover:text-[var(--accent)] ${
                activeSection === id
                  ? "bg-[var(--accent-dim)] text-[var(--accent)] shadow-[0_0_24px_rgba(0,229,180,0.28)]"
                  : ""
              }`}
            >
              {t(labelKey)}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <button
          id="themeToggle"
          type="button"
          title={t("nav.toggleTheme")}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border2)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-2"
        >
          <ThemeIcon />
        </button>
        <details className="group relative lg:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-[var(--border2)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] [&::-webkit-details-marker]:hidden">
            <span className="relative h-3.5 w-5">
              <span className="absolute left-0 top-0 h-px w-full bg-current transition group-open:top-1.5 group-open:rotate-45" />
              <span className="absolute left-0 top-1.5 h-px w-full bg-current transition group-open:opacity-0" />
              <span className="absolute left-0 top-3 h-px w-full bg-current transition group-open:top-1.5 group-open:-rotate-45" />
            </span>
            <span className="sr-only">Open navigation</span>
          </summary>
          <nav className="absolute right-0 top-12 grid min-w-52 gap-1 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] p-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)] shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
            {navItems.map(([labelKey, id]) => (
              <Link
                key={id}
                href={hrefFor(id)}
                className={`rounded-xl px-3 py-2 transition hover:bg-[var(--accent-dim)] hover:text-[var(--accent)] ${
                  activeSection === id
                    ? "bg-[var(--accent-dim)] text-[var(--accent)] shadow-[0_0_24px_rgba(0,229,180,0.22)]"
                    : ""
                }`}
              >
                {t(labelKey)}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
