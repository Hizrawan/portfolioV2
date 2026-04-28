import Link from "next/link";
import ContentNav from "../../components/content-nav";
import { stories } from "../../lib/content";

export const metadata = {
  title: "Hizrawan's Portfolio",
  description: "List of all stories and writings.",
};

function getStoryKind(type: string) {
  const lower = type.toLowerCase();
  if (lower.includes("cerpen")) return "Cerpen";
  if (lower.includes("novel")) return "Novel";
  if (lower.includes("buku") || lower.includes("book")) return "Buku";
  return "Blog";
}

export default function StoriesPage() {
  return (
    <main className="content-page">
      <ContentNav />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">Writing</p>
            <h1 className="content-title">All Stories</h1>
            <p className="content-subtitle">
              This page contains all writings and story works, with a detail page for each title.
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="content-grid">
          {stories.map((story) => (
            <article key={story.slug} className="content-card">
              <div className="story-card-cover content-card-cover">
                <span>{getStoryKind(story.type)}</span>
              </div>

              <div className="content-card-meta">
                <span>{story.type}</span>
                <span>{story.readTime}</span>
              </div>
              <h2>{story.title}</h2>
              <p>{story.excerpt}</p>
              <p className="content-status">{story.status}</p>

              <div className="content-link-row">
                <Link href={`/stories/${story.slug}`} className="content-link">
                  View Detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
