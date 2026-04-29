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

function getStoryKindClass(type: string) {
  return getStoryKind(type) === "Blog" ? "story-kind-blog" : "story-kind-novel";
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

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredStories.map((story) => (
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
                <h2 className="mt-3 min-h-16 font-[var(--font-serif)] text-2xl transition group-hover:text-[var(--accent)]">{story.title}</h2>
                <p className="mt-4 min-h-40 flex-1 text-[var(--muted)]">{story.excerpt}</p>
                <div className="mt-auto flex justify-between gap-4 pt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                  <span>{story.status}</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStories.length === 0 ? (
          <p className="story-filter-empty">Belum ada tulisan untuk kategori ini.</p>
        ) : null}
      </section>
    </main>
  );
}
