import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "../../../components/project-gallery";
import SiteHeader from "../../../components/site-header";
import { projectBySlug, projects } from "../../../lib/content";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectBySlug.get(slug);

  if (!project) {
    return {
      title: "Hizrawan's Portfolio",
    };
  }

  return {
    title: "Hizrawan's Portfolio",
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectBySlug.get(slug);

  if (!project) {
    notFound();
  }

  const isPdfProject = project.detailType === "pdf";
  const pdfPath = project.pdfFile
    ? path.join(process.cwd(), "public", project.pdfFile.replace(/^\//, ""))
    : "";
  const hasPdf = Boolean(project.pdfFile && fs.existsSync(pdfPath));
  const gallery = project.gallery ?? [];

  return (
    <main className="content-page">
      <SiteHeader linkMode="home" />

      <section className={`content-wrapper ${isPdfProject ? "story-reader-wrapper" : "project-detail-wrapper"}`}>
        <div className="content-page-hero detail-hero">
          <div>
            <p className="content-kicker">
              {project.year} · {project.role}
            </p>
            <h1 className="content-title">{project.title}</h1>
            <p className="content-subtitle">{project.summary}</p>
          </div>
          <div className="content-back-actions">
            <Link href="/projects" className="content-back-link">
              ← All Projects
            </Link>
            <Link href="/" className="content-back-link secondary-back">
              Home
            </Link>
          </div>
        </div>

        {isPdfProject ? (
          <article className="story-reader" aria-label={`${project.title} PDF viewer`}>
            <header className="story-reader-topbar">
              <div>
                <span className="story-reader-label">Project PDF Viewer</span>
                <p>
                  {project.year} · {project.role}
                </p>
              </div>
              {project.externalUrl ? (
                <div className="story-reader-tools" aria-label="Project PDF controls">
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    External
                  </a>
                </div>
              ) : null}
            </header>

            <div className="story-book">
              <div className="story-pdf-page">
                <div className="story-page-meta">
                  <span>{project.role}</span>
                  <span>{hasPdf ? "PDF Ready" : "PDF Missing"}</span>
                </div>

                <div className="content-tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="content-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="content-prose">
                  {project.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {hasPdf && project.pdfFile ? (
                  <div className="pdf-viewer-shell">
                    <iframe
                      className="story-pdf-frame"
                      src={`${project.pdfFile}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                      title={`${project.title} PDF viewer`}
                    />
                    <span className="pdf-toolbar-mask" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="story-pdf-placeholder">
                    <p>PDF untuk project ini belum tersedia.</p>
                    <p>
                      Simpan file PDF di <code>public{project.pdfFile ?? "/projects/nama-file.pdf"}</code>,
                      lalu halaman ini otomatis menjadi viewer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ) : (
          <article className="project-article" aria-label={`${project.title} case study`}>
            <div className="project-article-layout">
              <aside className="project-article-sidebar">
                <span>Case Study</span>
                <strong>{project.year}</strong>
                <p>{project.role}</p>
              </aside>

              <div className="project-article-main">
                <div className="content-tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="content-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {gallery.length ? <ProjectGallery items={gallery} projectTitle={project.title} /> : null}

                <section className="project-info-section">
                  <p className="project-section-kicker">Description</p>
                  <div className="content-prose project-prose">
                    {project.details.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section className="project-info-section">
                  <p className="project-section-kicker">Technology Used</p>
                  <div className="project-tech-grid">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </section>

                {project.externalUrl ? (
                  <div className="content-link-row">
                    <a
                      href={project.externalUrl}
                      className="content-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open External Link
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
