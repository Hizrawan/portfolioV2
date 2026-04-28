import Link from "next/link";
import { notFound } from "next/navigation";
import ContentNav from "../../../components/content-nav";
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

  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper content-detail">
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
      </section>
    </main>
  );
}
