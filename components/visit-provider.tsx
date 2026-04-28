"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const REVEAL_SELECTORS =
  ".reveal, .exp-item, .skill-group, .edu-card, .proj-card, .writing-card";

const moonPath =
  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
const sunPaths =
  '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
const THEME_STORAGE_KEY = "newporto-theme";

function syncThemeIcon() {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  themeIcon.innerHTML = document.body.classList.contains("light")
    ? moonPath
    : sunPaths;
}

function applyStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      document.body.classList.toggle("light", storedTheme === "light");
    }
  } catch {
    // Ignore storage failures in private browsing or restricted contexts.
  }

  syncThemeIcon();
}

function persistCurrentTheme() {
  try {
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      document.body.classList.contains("light") ? "light" : "dark",
    );
  } catch {
    // Ignore storage failures in private browsing or restricted contexts.
  }
}

export default function VisitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const prevPathRef = useRef<string | undefined>(undefined);
  const revealObserverRef = useRef<IntersectionObserver | null>(null);
  const revealRafRef = useRef<number | undefined>(undefined);
  const revealTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    applyStoredTheme();

    const prev = prevPathRef.current;
    prevPathRef.current = path;

    if (path !== "/") return;
    if (prev === undefined || prev === "/") return;

    const scheduleRevealInit = () => {
      if (window.location.pathname !== "/") return;

      if (revealRafRef.current !== undefined) {
        window.cancelAnimationFrame(revealRafRef.current);
      }
      if (revealTimerRef.current !== undefined) {
        window.clearTimeout(revealTimerRef.current);
      }

      const initReveal = () => {
        if (window.location.pathname !== "/") return;

        if (!revealObserverRef.current) {
          revealObserverRef.current = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target as HTMLElement;
                const delay = Number(el.dataset.delay ?? 0);
                window.setTimeout(() => {
                  el.classList.add("visible");
                }, delay);
                revealObserverRef.current?.unobserve(el);
              });
            },
            { threshold: 0, rootMargin: "48px 0px" },
          );
        }

        document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS).forEach((el, index) => {
          if (!el.dataset.delay) {
            el.dataset.delay = String((index % 4) * 80);
          }
          revealObserverRef.current?.observe(el);
        });
      };

      revealRafRef.current = window.requestAnimationFrame(() => {
        initReveal();
        window.requestAnimationFrame(initReveal);
      });
      revealTimerRef.current = window.setTimeout(initReveal, 180);
    };

    scheduleRevealInit();
  }, [path]);

  useEffect(() => {
    const scheduleRevealInit = () => {
      if (window.location.pathname !== "/") return;

      const initReveal = () => {
        if (window.location.pathname !== "/") return;

        if (!revealObserverRef.current) {
          revealObserverRef.current = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target as HTMLElement;
                const delay = Number(el.dataset.delay ?? 0);
                window.setTimeout(() => {
                  el.classList.add("visible");
                }, delay);
                revealObserverRef.current?.unobserve(el);
              });
            },
            { threshold: 0, rootMargin: "48px 0px" },
          );
        }

        document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS).forEach((el, index) => {
          if (!el.dataset.delay) {
            el.dataset.delay = String((index % 4) * 80);
          }
          revealObserverRef.current?.observe(el);
        });
      };

      if (revealRafRef.current !== undefined) {
        window.cancelAnimationFrame(revealRafRef.current);
      }
      if (revealTimerRef.current !== undefined) {
        window.clearTimeout(revealTimerRef.current);
      }
      revealRafRef.current = window.requestAnimationFrame(() => {
        initReveal();
        window.requestAnimationFrame(initReveal);
      });
      revealTimerRef.current = window.setTimeout(initReveal, 180);
    };

    const onPopState = () => {
      queueMicrotask(scheduleRevealInit);
    };

    const onPageShow = () => {
      applyStoredTheme();
      scheduleRevealInit();
    };
    const mutationObserver = new MutationObserver(scheduleRevealInit);

    window.addEventListener("popstate", onPopState);
    window.addEventListener("pageshow", onPageShow);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
    scheduleRevealInit();

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("pageshow", onPageShow);
      mutationObserver.disconnect();
      revealObserverRef.current?.disconnect();
      if (revealRafRef.current !== undefined) {
        window.cancelAnimationFrame(revealRafRef.current);
      }
      if (revealTimerRef.current !== undefined) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (anchor?.hash && window.location.pathname === "/") {
        const url = new URL(anchor.href);
        if (url.pathname === window.location.pathname) {
          const section = document.querySelector<HTMLElement>(url.hash);
          if (section) {
            event.preventDefault();
            window.history.pushState(null, "", url.hash);
            window.scrollTo({
              top: section.offsetTop,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            });
            return;
          }
        }
      }

      if (target.closest("#themeToggle")) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.toggle("light");
        persistCurrentTheme();
        syncThemeIcon();
        return;
      }

      const skillButton = target.closest<HTMLButtonElement>(".skill-tab-btn");
      if (skillButton) {
        event.preventDefault();
        event.stopPropagation();
        const tabName = skillButton.dataset.tab;
        if (!tabName) return;

        document
          .querySelectorAll<HTMLButtonElement>(".skill-tab-btn")
          .forEach((button) => {
            button.classList.toggle("active", button.dataset.tab === tabName);
          });
        document
          .querySelectorAll<HTMLElement>(".skill-tab-panel")
          .forEach((panel) => {
            panel.classList.toggle("active", panel.id === `tab-${tabName}`);
          });
        return;
      }

      const expButton = target.closest<HTMLElement>(".exp-toggle");
      if (expButton) {
        event.preventDefault();
        event.stopPropagation();
        const detail =
          expButton.parentElement?.querySelector<HTMLElement>(".exp-detail");
        if (!detail) return;

        const isOpen = detail.classList.toggle("open");
        expButton.classList.toggle("open", isOpen);
        expButton.innerHTML = isOpen
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 15 12 9 18 15"/></svg>Hide Detail'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>Show Detail';
      }
    };

    applyStoredTheme();
    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, []);

  return children;
}
