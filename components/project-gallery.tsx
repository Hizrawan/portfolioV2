"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project } from "../lib/content";

type ProjectGalleryItem = NonNullable<Project["gallery"]>[number];

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
  projectTitle: string;
};

const visibleThumbnailCount = 3;

export default function ProjectGallery({ items, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeItem = items[activeIndex];
  const hasOverflow = items.length > visibleThumbnailCount;
  const maxThumbnailStart = Math.max(items.length - visibleThumbnailCount, 0);
  const visibleThumbnails = useMemo(
    () => items.slice(thumbnailStart, thumbnailStart + visibleThumbnailCount),
    [items, thumbnailStart],
  );

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (!activeItem) return null;

  const selectImage = (index: number) => {
    setActiveIndex(index);
    if (index < thumbnailStart) setThumbnailStart(index);
    if (index >= thumbnailStart + visibleThumbnailCount) {
      setThumbnailStart(Math.min(index - visibleThumbnailCount + 1, maxThumbnailStart));
    }
  };

  const moveThumbnails = (direction: "previous" | "next") => {
    setThumbnailStart((current) => {
      const nextStart = direction === "previous" ? current - 1 : current + 1;
      return Math.min(Math.max(nextStart, 0), maxThumbnailStart);
    });
  };

  return (
    <section className="project-media-section" aria-label={`${projectTitle} gallery`}>
      <button
        type="button"
        className="project-main-image"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Open ${activeItem.title} preview`}
      >
        {activeItem.imageFile ? (
          <img src={activeItem.imageFile} alt={activeItem.title} />
        ) : (
          <div className="project-main-image-fallback" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>
        )}
        <span className="project-main-image-hint">Click to preview</span>
        <span className="project-main-image-caption">
          <span>{activeItem.title}</span>
          <p>{activeItem.description}</p>
        </span>
      </button>

      <div className="project-thumbnail-shell">
        {hasOverflow ? (
          <button
            type="button"
            className="project-thumbnail-control"
            onClick={() => moveThumbnails("previous")}
            disabled={thumbnailStart === 0}
            aria-label="Show previous images"
          >
            ←
          </button>
        ) : null}

        <div className="project-thumbnail-row" aria-label="Available project images">
          {visibleThumbnails.map((item, visibleIndex) => {
            const itemIndex = thumbnailStart + visibleIndex;
            const isActive = itemIndex === activeIndex;

            return (
              <button
                key={`${item.title}-${itemIndex}`}
                type="button"
                className={`project-thumbnail ${isActive ? "active" : ""}`}
                onClick={() => selectImage(itemIndex)}
                aria-pressed={isActive}
              >
                {item.imageFile ? (
                  <img src={item.imageFile} alt={item.title} />
                ) : (
                  <div className="project-thumbnail-fallback" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </div>
                )}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {hasOverflow ? (
          <button
            type="button"
            className="project-thumbnail-control"
            onClick={() => moveThumbnails("next")}
            disabled={thumbnailStart === maxThumbnailStart}
            aria-label="Show next images"
          >
            →
          </button>
        ) : null}
      </div>

      {isModalOpen ? (
        <div
          className="project-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} image preview`}
          onClick={() => setIsModalOpen(false)}
        >
          <div className="project-image-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-image-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image preview"
            >
              Close
            </button>
            {activeItem.imageFile ? (
              <img src={activeItem.imageFile} alt={activeItem.title} />
            ) : (
              <div className="project-image-modal-fallback" aria-hidden="true">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
            )}
            <div className="project-image-modal-caption">
              <span>{activeItem.title}</span>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
