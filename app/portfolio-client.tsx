"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SiteHeader from "../components/site-header";
import { useLocalization } from "../components/localization-provider";
import { type Certificate, projects, stories } from "../lib/content";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Certificates", "#certificates"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Stories", "#writing"],
  ["Contact", "#contact"],
] as const;

const sectionOrder = ["hero", ...navItems.map(([, href]) => href.slice(1))] as const;

const experiences = [
  {
    date: "2024 - Present",
    title: "Backend Engineer",
    company: "Xinchuan Telecommunication Co. Ltd",
    summary:
      "Maintaining Laravel backend systems and developing scalable Go microservices in production.",
    detail: [
      "Maintain and enhance backend systems built with Laravel, including bug fixing, feature improvements, and performance optimization.",
      "Manage MySQL operations through schema updates, query tuning, and data integrity work.",
      "Design and develop Go microservices, RESTful APIs, internal services, logging, error handling, and monitoring for stable integrations.",
    ],
  },
  {
    date: "Mar 2024 - Oct 2024",
    title: "Fullstack Developer",
    company: "Xiangshun Information Co. Ltd",
    summary:
      "Built Taiwan government digital systems using .NET Core, SQL Server, and Blazor.",
    detail: [
      "Developed backend services and RESTful APIs with C# and .NET Core to support government workflows and data processing.",
      "Built database structures in Microsoft SQL Server, including authentication, RBAC, and validation flows.",
      "Implemented Blazor interfaces, dashboards, forms, administrative panels, and API integrations for real-time data operations.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Research Assistant",
    company: "National Chin-Yi University of Technology",
    summary:
      "Conducted computer science research on data hiding schemes and AMBTC-based image processing.",
    detail: [
      "Researched block feature enhanced AMBTC-based data hiding methods for academic publication.",
      "Designed experiments, analyzed image quality and hiding capacity, and documented research findings.",
      "Published research with DOI: https://doi.org/10.1145/3634814.3634830.",
    ],
  },
  {
    date: "Feb 2019 - Dec 2020",
    title: "Fullstack Developer",
    company: "Fujitsu Indonesia",
    summary:
      "Delivered healthcare system features across .NET Core APIs, PostgreSQL, and Kendo UI.",
    detail: [
      "Designed RESTful APIs and business logic for patient registration, appointment management, and medical record workflows.",
      "Designed and optimized PostgreSQL structures for healthcare system modules.",
      "Built Kendo UI dashboards, forms, validation flows, and high-volume data grids with virtualization, filtering, and pagination.",
    ],
  },
  {
    date: "2017",
    title: "Programmer Internship",
    company: "PT LAPI Divusi",
    summary:
      "Supported mobile application development through React Native UI work and REST API integration.",
    detail: [
      "Contributed to mobile UI screens, interaction flows, and integration with backend endpoints.",
      "Worked through iterative testing, bug fixes, and mentorship-based development practices.",
      "Built an early foundation in product collaboration, frontend implementation, and delivery quality.",
    ],
  },
];

const skills = {
  "Project Management": [
    "Integration Management",
    "Creating WBS",
    "Requirements Gathering",
    "Change Management",
    "Monitoring and Controlling",
    "Scope Management",
    "Time Management",
    "Cost Management",
    "Quality Management",
    "Human Resource Management",
    "Communication Management",
    "Risk Management",
    "Stakeholder Management",
    "Resource Management",
    "Procurement Management",
    "Scheduling",
    "Agile / Scrum",
    "Stakeholder Communication",
    "Kanban",
    "Business Analysis",
  ],
  Backend: ["Go", "C# .NET Core", "Laravel", "REST API", "Microservices", "System Architecture", "NSQ","Swift","Node.js","Express.js","php","Python"],
  Database: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "Query Optimization", "Data Modeling", "SQLite"],
  "Frontend & Mobile": ["React Native", "JavaScript","Next.js", "Tailwind CSS", "nuxt.js","Flutter","SwiftUI","Electron","Blazor WASM", "HTML / CSS", "KendoUI"],
  Tools: ["Git & GitHub","Github Actions","Microsoft Office 365", "Jira", "Redmine", "Notion", "Postman", "Docker", "Technical Documentation"],
  Languages: ["Indonesian - Native", "English - TOEFL iBT 96", "Mandarin - Basic", "German - Basic"],
};

const education = [
  {
    title: "National Chin-Yi University of Technology",
    meta: "Master of Science in Computer Science",
    year: "2021 - 2023",
    gpa: "3.92",
    text: "Thesis: A Novel Data Hiding Scheme based on Block Features Enhanced AMBTC.",
    href: "https://www.ncut.edu.tw/",
  },
  {
    title: "Bina Nusantara University",
    meta: "Bachelor of Science in Computer Science",
    year: "2018 - 2021",
    gpa: "3.27",
    text: "Thesis: Mobile application for clinical laboratory examination booking using React Native.",
    href: "https://binus.ac.id",
  },
  {
    title: "Politeknik Negeri Bandung",
    meta: "Associate's Degree in Computer Science",
    year: "2015 - 2018",
    gpa: "2.85",
    text: "Final project: Indonesian sign language to text translation using convolutional neural network.",
    href: "https://www.polban.ac.id/",
  },
];

function getStoryKind(type: string) {
  const lower = type.toLowerCase();
  if (lower.includes("cerpen")) return "Cerpen";
  if (lower.includes("novel")) return "Novel";
  if (lower.includes("buku") || lower.includes("book")) return "Buku";
  return "Blog";
}

function getStoryKindClass(type: string) {
  return getStoryKind(type) === "Blog" ? "story-kind-blog" : "story-kind-novel";
}

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

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function getSectionIdFromViewport(fallbackId: string) {
  if (typeof window === "undefined") return fallbackId;

  const focusY = Math.min(window.innerHeight * 0.42, 420);
  const sections = sectionOrder
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => Boolean(section));

  const currentSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= focusY && rect.bottom > focusY;
  });

  if (currentSection?.id) return currentSection.id;

  const nearestSection = sections
    .map((section) => ({
      id: section.id,
      distance: Math.abs(section.getBoundingClientRect().top - focusY),
    }))
    .sort((a, b) => a.distance - b.distance)[0];

  return nearestSection?.id ?? fallbackId;
}

function SectionNavControls({ currentId }: { currentId: string }) {
  const index = sectionOrder.indexOf(currentId as (typeof sectionOrder)[number]);
  const previousId = index > 0 ? sectionOrder[index - 1] : undefined;
  const nextId = index >= 0 && index < sectionOrder.length - 1 ? sectionOrder[index + 1] : undefined;
  const scrollWithinCurrentSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    direction: "up" | "down",
  ) => {
    event.preventDefault();

    const resolvedId = getSectionIdFromViewport(currentId);
    const resolvedIndex = sectionOrder.indexOf(resolvedId as (typeof sectionOrder)[number]);

    const targetId =
      direction === "down"
        ? sectionOrder[resolvedIndex + 1]
        : sectionOrder[resolvedIndex - 1];

    const target = targetId ? document.getElementById(targetId) : undefined;
    if (!target) return;

    const top = window.scrollY + target.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="section-nav-controls" aria-label="Section navigation">
      {previousId ? (
        <a
          href={`#${previousId}`}
          aria-label="Scroll up or go to previous section"
          onClick={(event) => scrollWithinCurrentSection(event, "up")}
        >
          ↑
        </a>
      ) : (
        <span aria-hidden="true">↑</span>
      )}
      {nextId ? (
        <a
          href={`#${nextId}`}
          aria-label="Scroll down or go to next section"
          onClick={(event) => scrollWithinCurrentSection(event, "down")}
        >
          ↓
        </a>
      ) : (
        <span aria-hidden="true">↓</span>
      )}
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-8 flex items-center gap-4 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.24em] text-[var(--accent)]">
      <span className="opacity-55">{index}</span>
      <span>{label}</span>
      <span className="h-px w-20 bg-[var(--accent)] opacity-40" />
    </p>
  );
}

function Section({
  id,
  children,
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`home-snap-section relative flex min-h-svh items-center overflow-hidden py-24 ${
        alt ? "bg-[var(--bg2)]" : "bg-[var(--bg)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,229,180,0.08),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(212,168,67,0.07),transparent_36%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

export default function PortfolioClient({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const { t } = useLocalization();
  const [activeSkill, setActiveSkill] = useState<keyof typeof skills>("Project Management");
  const [activeSection, setActiveSection] = useState("about");
  const [openExperienceKey, setOpenExperienceKey] = useState<string | null>(null);
  const [typedName, setTypedName] = useState("\u00a0");
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const downloadToastTimeoutRef = useRef<number | undefined>(undefined);
  const skillNames = useMemo(() => Object.keys(skills) as Array<keyof typeof skills>, []);
  const homeProjects = projects.filter((project) => project.featuredOnHome);
  const homeStories = stories.filter((story) => story.featuredOnHome);
  const homeCertificates = certificates.filter((certificate) => certificate.featuredOnHome);

  useEffect(() => {
    const syncActiveSectionFromHash = () => {
      const hashId = window.location.hash.slice(1);
      if (sectionOrder.includes(hashId as (typeof sectionOrder)[number])) {
        setActiveSection(hashId);
      }
    };

    syncActiveSectionFromHash();
    window.addEventListener("hashchange", syncActiveSectionFromHash);
    return () => window.removeEventListener("hashchange", syncActiveSectionFromHash);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const syncActiveSectionFromViewport = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setActiveSection((current) => getSectionIdFromViewport(current));
      });
    };

    syncActiveSectionFromViewport();
    window.addEventListener("scroll", syncActiveSectionFromViewport, { passive: true });
    window.addEventListener("resize", syncActiveSectionFromViewport);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", syncActiveSectionFromViewport);
      window.removeEventListener("resize", syncActiveSectionFromViewport);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.style.opacity = "1";
    cursor.style.left = `${window.innerWidth / 2}px`;
    cursor.style.top = `${window.innerHeight / 2}px`;
    document.body.classList.add("custom-cursor-ready");

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.opacity = "1";
    };
    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("custom-cursor-ready");
    };
  }, []);

  useEffect(() => {
    const fullName = "Hizrawan Dwi Oka.";
    let index = 0;
    let deleting = false;
    let cancelled = false;
    let timeoutId: number | undefined;

    const loop = () => {
      if (cancelled) return;
      index = deleting ? Math.max(index - 1, 0) : Math.min(index + 1, fullName.length);
      setTypedName(fullName.slice(0, index) || "\u00a0");

      if (index === fullName.length) {
        deleting = true;
        timeoutId = window.setTimeout(loop, 1800);
        return;
      }
      if (index === 0) {
        deleting = false;
        timeoutId = window.setTimeout(loop, 650);
        return;
      }
      timeoutId = window.setTimeout(loop, deleting ? 38 : 72);
    };

    timeoutId = window.setTimeout(loop, 300);
    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (downloadToastTimeoutRef.current) {
        window.clearTimeout(downloadToastTimeoutRef.current);
      }
    };
  }, []);

  const showCvDownloadToast = () => {
    setShowDownloadToast(true);
    if (downloadToastTimeoutRef.current) {
      window.clearTimeout(downloadToastTimeoutRef.current);
    }
    downloadToastTimeoutRef.current = window.setTimeout(() => {
      setShowDownloadToast(false);
    }, 2600);
  };

  return (
    <main className="home-shell min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <div ref={cursorRef} className="custom-crosshair" aria-hidden="true" />
      <SectionNavControls currentId={activeSection} />
      <SiteHeader activeSection={activeSection} />
      <div className={`download-toast ${showDownloadToast ? "show" : ""}`} role="status" aria-live="polite">
        CV download berhasil dimulai.
      </div>

      <div id="hero" className="relative flex min-h-svh items-center overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_16%_20%,rgba(0,229,180,0.24),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(212,168,67,0.18),transparent_38%),linear-gradient(135deg,transparent,rgba(255,255,255,0.035))]" />
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] opacity-40" />
        <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-32 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="hero-role-badge mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_78%,transparent)] px-4 py-2 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--accent)] shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
              Associate Project Manager | Software Engineer
            </div>
            <h1 className="typing-headline font-[var(--font-serif)] text-[clamp(3.4rem,9vw,8.6rem)] font-light leading-[0.92] tracking-[-0.055em]">
              <strong className="bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--accent)] bg-clip-text font-light text-transparent">
                {typedName}
              </strong>
              <span className="typing-caret ml-2 inline-block h-[0.82em] w-[2px] translate-y-[0.08em] bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-light leading-9 text-[var(--muted)] sm:text-xl">
              An <span className="rounded-lg border border-[rgba(0,229,180,0.25)] bg-[var(--accent-dim)] px-2 py-1 font-[var(--font-mono)] text-sm text-[var(--accent)]">Associate Project Manager</span> with 5+ years of experience as a
              <span className="rounded-lg border border-[rgba(212,168,67,0.25)] bg-[var(--accent2-dim)] px-2 py-1 font-[var(--font-mono)] text-sm text-[var(--accent2)]">Software Engineer</span>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/cv/20260223_CV_hizrawan_PM.pdf" download onClick={showCvDownloadToast} className="primary-action group rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--bg)] shadow-[0_18px_45px_rgba(0,229,180,0.20)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,229,180,0.30)]">
                {t("home.downloadCv")} <span className="inline-block transition group-hover:translate-y-0.5">↓</span>
              </a>
              <a href="#contact" className="secondary-action rounded-full border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_58%,transparent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {t("home.contactMe")}
              </a>
            </div>
          </div>
        </section>
      </div>

      <Section id="about" alt>
        <SectionLabel index="01" label={t("nav.about")} />
        <div className="about-layout grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="profile-card about-breathing relative mx-auto aspect-square w-full max-w-sm rounded-[2rem] border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg3)_78%,transparent)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[var(--accent-dim)] blur-xl" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[var(--accent2-dim)] blur-xl" />
            <div className="profile-image-frame relative h-full overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--accent-dim),transparent)] shadow-inner">
              <div className="absolute inset-6 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-dim)] blur-2xl" />
              <span className="absolute inset-0 grid place-items-center font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Profile Photo
              </span>
              <img
                src="/hizrawan-profile.jpg"
                alt="Hizrawan Dwi Oka portrait"
                className="profile-portrait relative z-10 h-full w-full rounded-[1.15rem] object-contain object-center"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
            </div>
          </div>
          <div>
            <h2 className="max-w-3xl font-[var(--font-serif)] text-[clamp(1.45rem,3vw,2rem)] font-light leading-[1.12] tracking-[-0.02em]">
              CAPM candidate transitioning from software engineering into IT project management.
            </h2>
            <p className="mt-6 leading-8 text-[var(--muted)]">
             As a programmer, I built backend systems. But over time, I found myself increasingly focused on planning, coordination, and turning technical work into reliable delivery outcomes. That evolution—from developer to project enabler—is exactly why I'm pursuing the Associate Project Manager role: to apply my technical foundation and new delivery skills in a dedicated project leadership capacity.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Project Management", "Software Engineering", "CAPM®"].map((item) => (
                <div key={item} className="home-card rounded-2xl border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] p-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)] shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience">
        <SectionLabel index="02" label={t("nav.experience")} />
        <div className="space-y-4">
          {experiences.map((item) => {
            const experienceKey = `${item.company}-${item.date}`;
            const isOpen = openExperienceKey === experienceKey;

            return (
            <details key={experienceKey} open={isOpen} className="home-card group rounded-3xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg2)_70%,transparent)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:border-[var(--accent)]">
              <summary
                className="grid cursor-pointer list-none gap-4 lg:grid-cols-[180px_1fr_auto] lg:items-center"
                onClick={(event) => {
                  event.preventDefault();
                  setOpenExperienceKey(isOpen ? null : experienceKey);
                }}
              >
                <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{item.date}</span>
                <span>
                  <span className="block font-[var(--font-serif)] text-3xl transition group-hover:text-[var(--accent)]">{item.title}</span>
                  <span className="mt-1 block text-[var(--accent)]">{item.company}</span>
                  <span className="mt-3 block text-[var(--muted)]">{item.summary}</span>
                </span>
                <span className="inline-flex w-fit rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] px-4 py-2 font-[var(--font-mono)] text-[0.65rem] uppercase tracking-[0.12em] text-[var(--accent)] shadow-[0_0_24px_rgba(0,229,180,0.18)] transition group-hover:shadow-[0_0_34px_rgba(0,229,180,0.34)] group-open:bg-[var(--accent)] group-open:text-[var(--bg)] group-open:shadow-[0_0_38px_rgba(0,229,180,0.34)]">
                  <span className="group-open:hidden">More +</span>
                  <span className="hidden group-open:inline">Close -</span>
                </span>
              </summary>
              <ul className="mt-5 grid max-w-3xl gap-3 pl-5 leading-8 text-[var(--muted)] lg:ml-[180px]">
                {item.detail.map((detail) => (
                  <li key={detail} className="list-disc">
                    {detail}
                  </li>
                ))}
              </ul>
            </details>
            );
          })}
        </div>
      </Section>

      <Section id="education" alt>
        <SectionLabel index="03" label={t("nav.education")} />
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="home-card about-breathing flex h-full flex-col rounded-3xl border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_82%,transparent)] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_28px_90px_rgba(0,229,180,0.12)]"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <p className="min-h-12 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">{item.meta}</p>
              <h3 className="mt-3 min-h-16 font-[var(--font-serif)] text-2xl">{item.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.1em]">
                <span className="rounded-full border border-[var(--border2)] px-3 py-1 text-[var(--text)]">{item.year}</span>
                <span className="rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] px-3 py-1 text-[var(--accent)]">GPA {item.gpa}</span>
              </div>
              <p className="mt-4 min-h-28 flex-1 text-[var(--muted)]">{item.text}</p>
              <p className="mt-auto pt-5 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-[var(--accent)]">
                Visit Website →
              </p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="certificates">
        <SectionLabel index="04" label={t("nav.certificates")} />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-[var(--font-serif)] text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none tracking-[-0.03em]">Certificates & Credentials</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
              Certifications and language credentials that support project coordination, international collaboration, and professional communication.
            </p>
          </div>
          <Link href="/certificates" className="primary-action inline-flex w-fit rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--bg)] shadow-[0_18px_45px_rgba(0,229,180,0.18)] transition hover:-translate-y-1">
            {t("home.showAllCertificates")}
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeCertificates.map((certificate) => (
            <Link key={certificate.slug} href={`/certificates/${certificate.slug}`} className="home-card home-certificate-card group flex h-full flex-col rounded-3xl border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_82%,transparent)] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_28px_90px_rgba(0,229,180,0.12)]">
              <div className="certificate-card-cover relative mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)]">
                <span className="font-[var(--font-serif)] text-4xl text-[var(--accent)]">{certificate.score ?? certificate.year}</span>
                <img
                  src={certificate.imageFile}
                  alt={`${certificate.title} certificate`}
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="home-certificate-issuer font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">{certificate.issuer}</p>
              <h3 className="home-certificate-title mt-3 font-[var(--font-serif)] text-2xl transition group-hover:text-[var(--accent)]">{certificate.title}</h3>
              <p className="home-certificate-summary mt-4 flex-1 text-[var(--muted)]">{certificate.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="skills" alt>
        <SectionLabel index="05" label={t("nav.skills")} />
        <h2 className="font-[var(--font-serif)] text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none tracking-[-0.03em]">Technical Expertise</h2>
        <div className="skills-panel mt-8 grid overflow-hidden rounded-[1.75rem] border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] shadow-[0_22px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl lg:grid-cols-[260px_1fr]">
          <div className="skill-tabs border-b border-[var(--border)] bg-[var(--bg2)]/60 p-3 lg:border-b-0 lg:border-r">
            {skillNames.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setActiveSkill(name)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-[var(--font-mono)] text-xs uppercase tracking-[0.12em] transition ${
                  activeSkill === name
                    ? "bg-[var(--accent)] text-[var(--bg)] shadow-[0_14px_34px_rgba(0,229,180,0.18)]"
                    : "text-[var(--muted)] hover:bg-[var(--accent-dim)] hover:text-[var(--text)]"
                }`}
              >
                {name}
                <span className="opacity-70">→</span>
              </button>
            ))}
          </div>
          <div className="skill-content min-h-[260px] p-6">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              {activeSkill}
            </p>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Focus area and tools currently used across engineering, delivery, and communication work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills[activeSkill].map((skill) => (
                <span key={skill} className="skill-pill rounded-full border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_76%,transparent)] px-4 py-2 text-sm text-[var(--text)] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects">
        <SectionLabel index="06" label={t("nav.projects")} />
        <h2 className="font-[var(--font-serif)] text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none tracking-[-0.03em]">Personal Projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {homeProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="home-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_82%,transparent)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_28px_90px_rgba(0,229,180,0.12)]">
              <span className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-[var(--accent-dim)] blur-2xl transition group-hover:scale-150" />
              <div className="project-card-cover relative mb-5 flex aspect-[16/10] items-end overflow-hidden rounded-2xl border border-[var(--border)] p-4">
                <span className="relative z-10 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                  Personal Project
                </span>
              </div>
              <div className="flex min-h-20 items-start justify-between gap-4 px-2">
                <h3 className="relative font-[var(--font-serif)] text-2xl transition group-hover:text-[var(--accent)]">{project.title}</h3>
                <span className="font-[var(--font-mono)] text-xs text-[var(--accent)]">{project.year}</span>
              </div>
              <p className="relative mt-4 min-h-24 flex-1 px-2 text-[var(--muted)]">{project.summary}</p>
              <div className="mt-auto flex min-h-16 flex-wrap content-start gap-2 px-2 pb-2 pt-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--accent-dim)] px-3 py-1 text-xs text-[var(--accent)]">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="primary-action inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--bg)] shadow-[0_18px_45px_rgba(0,229,180,0.18)] transition hover:-translate-y-1">
            {t("home.showAllProjects")}
          </Link>
        </div>
      </Section>

      <Section id="writing" alt>
        <SectionLabel index="07" label={t("nav.stories")} />
        <h2 className="font-[var(--font-serif)] text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none tracking-[-0.03em]">Stories & Thoughts</h2>
        <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
          In my spare time, I like to write. This section collects stories, blog notes, and personal writing pieces I have created outside of engineering work.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeStories.map((story) => (
            <Link key={story.slug} href={`/stories/${story.slug}`} className="home-card group flex h-full flex-col rounded-3xl border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]">
              <div className="story-card-cover story-portrait-cover mx-auto mb-5 flex w-full max-w-[19rem] items-center justify-center rounded-2xl border border-[var(--border)]">
                {story.imageFile ? (
                  <img
                    src={story.imageFile}
                    alt={`${story.title} cover`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                ) : null}
                <span className={`font-[var(--font-serif)] text-5xl ${getStoryKindClass(story.type)}`}>{getStoryKind(story.type)}</span>
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2">
              <p className={`min-h-6 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] ${getStoryKindClass(story.type)}`}>{story.type}</p>
              <h3 className="mt-3 min-h-16 font-[var(--font-serif)] text-2xl transition group-hover:text-[var(--accent)]">{story.title}</h3>
              <p className="mt-4 min-h-40 flex-1 text-[var(--muted)]">{story.excerpt}</p>
              <div className="mt-auto flex justify-between gap-4 pt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                <span>{story.status}</span>
                <span>{story.readTime}</span>
              </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/stories" className="primary-action inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--bg)] shadow-[0_18px_45px_rgba(0,229,180,0.18)] transition hover:-translate-y-1">
            {t("home.showAllStories")}
          </Link>
        </div>
      </Section>

      <Section id="contact">
        <SectionLabel index="08" label={t("nav.contact")} />
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-serif)] text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none tracking-[-0.03em]">Let&apos;s build the next thing.</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Reach out for backend engineering work, project collaboration, or writing conversations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:hizrawandwioka@gmail.com" className="primary-action rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--bg)] shadow-[0_18px_45px_rgba(0,229,180,0.18)] transition hover:-translate-y-1">Email Me</a>
            <a href="https://github.com/Hizrawan" target="_blank" rel="noreferrer" className="secondary-action rounded-full border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_70%,transparent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]">GitHub</a>
            <a href="https://www.linkedin.com/in/hizrawan/" target="_blank" rel="noreferrer" className="secondary-action rounded-full border border-[var(--border2)] bg-[color-mix(in_srgb,var(--bg2)_70%,transparent)] px-7 py-3 font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]">LinkedIn</a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-8 text-center font-[var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
        Built with Next.js + Tailwind CSS
      </footer>
    </main>
  );
}
