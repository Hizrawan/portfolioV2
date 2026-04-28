import Link from "next/link";
import ContentNav from "../../components/content-nav";
import { projects } from "../../lib/content";

export const metadata = {
  title: "Hizrawan's Portfolio",
  description: "List of all project case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">Portfolio</p>
            <h1 className="content-title">All Projects</h1>
            <p className="content-subtitle">
              A collection of projects that have been worked on, complete with a summary and a detailed page for each project.
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="content-grid">
          {projects.map((project) => (
            <article key={project.slug} className="content-card">
              <div className="project-card-cover content-card-cover">
                <span>Personal Project</span>
              </div>

              <div className="content-card-meta">
                <span>{project.year}</span>
                <span>{project.role}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>

              <div className="content-tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="content-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="content-link-row">
                <Link href={`/projects/${project.slug}`} className="content-link">
                  View Detail
                </Link>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    className="content-link secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    External
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
