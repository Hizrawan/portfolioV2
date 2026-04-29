import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/site-header";
import { stories, storyBySlug } from "../../../lib/content";

type StoryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function renderBlogBlock(block: string, index: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={`${index}-${block}`} className="blog-section-heading">
        {block.replace("## ", "")}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 key={`${index}-${block}`} className="blog-subheading">
        {block.replace("### ", "")}
      </h3>
    );
  }

  if (block.startsWith("Step ")) {
    const [label = "Step", rest = block] = block.split(": ");
    const [title = rest, body = ""] = rest.split(" - ");

    return (
      <section key={`${index}-${block}`} className="blog-step-card">
        <span>{label}</span>
        <h3>{title}</h3>
        {body ? <p>{body}</p> : null}
      </section>
    );
  }

  if (block.startsWith("Security note:")) {
    return (
      <aside key={`${index}-${block}`} className="blog-callout">
        <strong>Security note</strong>
        <p>{block.replace("Security note: ", "")}</p>
      </aside>
    );
  }

  if (block.startsWith("Command:")) {
    return (
      <pre key={`${index}-${block}`} className="blog-code-block">
        <code>{block.replace("Command:\n", "").replace("Command: ", "")}</code>
      </pre>
    );
  }

  if (block.startsWith("Config:")) {
    return (
      <pre key={`${index}-${block}`} className="blog-code-block">
        <code>{block.replace("Config:\n", "").replace("Config: ", "")}</code>
      </pre>
    );
  }

  return <p key={`${index}-${block}`}>{block}</p>;
}

export async function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = storyBySlug.get(slug);

  if (!story) {
    return {
      title: "Hizrawan's Portfolio",
    };
  }

  return {
    title: "Hizrawan's Portfolio",
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = storyBySlug.get(slug);

  if (!story) {
    notFound();
  }

  const pdfPath = story.pdfFile
    ? path.join(process.cwd(), "public", story.pdfFile.replace(/^\//, ""))
    : "";
  const hasPdf = Boolean(story.pdfFile && fs.existsSync(pdfPath));
  const isBlog = story.detailType === "blog";

  return (
    <main className="content-page">
      <SiteHeader linkMode="home" />

      <section className={`content-wrapper ${isBlog ? "article-wrapper" : "story-reader-wrapper"}`}>
        <div className="content-page-hero detail-hero">
          <div>
            <p className="content-kicker">{story.type}</p>
            <h1 className="content-title">{story.title}</h1>
            <p className="content-subtitle">{story.excerpt}</p>
          </div>
          <div className="content-back-actions">
            <Link href="/stories" className="content-back-link">
              ← All Stories
            </Link>
            <Link href="/" className="content-back-link secondary-back">
              Home
            </Link>
          </div>
        </div>

        {isBlog ? (
          <article className="blog-article" aria-label={`${story.title} article`}>
            <header className="blog-article-header">
              <div className="blog-author-chip">
                <span>H</span>
                <div>
                  <strong>Hizrawan Dwi Oka</strong>
                  <p>
                    {story.status} · {story.readTime}
                  </p>
                </div>
              </div>
              <div className="blog-article-actions">
                <span>{story.type}</span>
                <span>Portfolio Journal</span>
              </div>
            </header>

            <div className="blog-article-cover">
              <span>{story.type}</span>
              <strong>{story.title}</strong>
            </div>

            <div className="blog-article-body">
              <p className="blog-article-lead">{story.excerpt}</p>
              {story.details.map(renderBlogBlock)}
            </div>
          </article>
        ) : (
          <article className="story-reader" aria-label={`${story.title} reader`}>
            <header className="story-reader-topbar">
              <div>
                <span className="story-reader-label">Novel PDF Reader</span>
                <p>
                  {story.type} · {story.readTime}
                </p>
              </div>
            </header>

            <div className="story-book">
              <div className="story-pdf-page">
                <div className="story-page-meta">
                  <span>{story.status}</span>
                  <span>{hasPdf ? "PDF Ready" : "PDF Missing"}</span>
                </div>

                {hasPdf && story.pdfFile ? (
                  <div className="pdf-viewer-shell">
                    <iframe
                      className="story-pdf-frame"
                      src={`${story.pdfFile}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                      title={`${story.title} PDF reader`}
                    />
                    <span className="pdf-toolbar-mask" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="story-pdf-placeholder">
                    <p>PDF untuk novel ini belum tersedia.</p>
                    <p>
                      Simpan file PDF di <code>public{story.pdfFile ?? "/stories/nama-file.pdf"}</code>,
                      lalu halaman ini otomatis menjadi reader untuk file tersebut.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
