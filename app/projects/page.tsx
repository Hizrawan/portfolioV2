"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import { useLocalization } from "../../components/localization-provider";
import { projects } from "../../lib/content";

export default function ProjectsPage() {
  const { t } = useLocalization();

  return (
    <main className="content-page">
      <SiteHeader linkMode="home" />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">{t("projects.kicker")}</p>
            <h1 className="content-title">{t("projects.title")}</h1>
            <p className="content-subtitle">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← {t("pages.backHome")}
            </Link>
          </div>
        </div>

        <div className="content-grid">
          {projects.map((project) => (
            <article key={project.slug} className="content-card project-list-card">
              <div className="project-card-cover content-card-cover">
                <span>{t("projects.cardLabel")}</span>
              </div>

              <div className="content-card-meta">
                <span>{project.year}</span>
                <span>{project.role}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>

              <div className="content-tag-row project-tech-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="content-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="content-link-row">
                <Link href={`/projects/${project.slug}`} className="content-link">
                  {t("pages.viewDetail")}
                </Link>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    className="content-link secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("pages.external")}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
