"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "../../components/site-header";
import { useLocalization } from "../../components/localization-provider";
import { stories } from "../../lib/content";

const storyFilters = ["All", "Novel", "Buku", "Blog"] as const;
type StoryFilter = (typeof storyFilters)[number];

function getStoryKind(type: string) {
  const lower = type.toLowerCase();
  if (lower.includes("cerpen")) return "Cerpen";
  if (lower.includes("novel")) return "Novel";
  if (lower.includes("buku") || lower.includes("book")) return "Buku";
  return "Blog";
}

export default function StoriesPage() {
  const { t } = useLocalization();
  const [activeFilter, setActiveFilter] = useState<StoryFilter>("All");
  const filteredStories = useMemo(
    () =>
      activeFilter === "All"
        ? stories
        : stories.filter((story) => getStoryKind(story.type) === activeFilter),
    [activeFilter],
  );

  return (
    <main className="content-page">
      <SiteHeader linkMode="home" />

      <section className="content-wrapper">
        <div className="content-page-hero">
          <div>
            <p className="content-kicker">{t("stories.kicker")}</p>
            <h1 className="content-title">{t("stories.title")}</h1>
            <p className="content-subtitle">
              {t("stories.subtitle")}
            </p>
          </div>
          <div className="content-back-actions">
            <Link href="/" className="content-back-link">
              ← {t("pages.backHome")}
            </Link>
          </div>
        </div>

        <div className="story-filter-bar" aria-label="Filter stories by type">
          {storyFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="content-grid">
          {filteredStories.map((story) => (
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
                  {t("pages.viewDetail")}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredStories.length === 0 ? (
          <p className="story-filter-empty">Belum ada tulisan untuk kategori ini.</p>
        ) : null}
      </section>
    </main>
  );
}
