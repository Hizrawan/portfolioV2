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
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Project Detail`,
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
        <Link href="/projects" className="content-back-link">
          ← Back to All Projects
        </Link>
        <div>
          <Link href="/" className="content-back-link">
            ← Back to Home
          </Link>
        </div>

        <p className="content-kicker">
          {project.year} · {project.role}
        </p>
        <h1 className="content-title">{project.title}</h1>
        <p className="content-subtitle">{project.summary}</p>

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
