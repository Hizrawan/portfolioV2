"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const locales = ["en", "id", "zh-TW", "de"] as const;
export type Locale = (typeof locales)[number];

type TranslationKey =
  | "nav.about"
  | "nav.experience"
  | "nav.education"
  | "nav.certificates"
  | "nav.skills"
  | "nav.projects"
  | "nav.stories"
  | "nav.contact"
  | "nav.language"
  | "nav.toggleTheme"
  | "home.downloadCv"
  | "home.contactMe"
  | "home.showAllCertificates"
  | "home.showAllProjects"
  | "home.showAllStories"
  | "pages.backHome"
  | "pages.viewDetail"
  | "pages.viewCertificate"
  | "pages.issuer"
  | "pages.external"
  | "certificates.kicker"
  | "certificates.title"
  | "certificates.subtitle"
  | "projects.kicker"
  | "projects.title"
  | "projects.subtitle"
  | "projects.cardLabel"
  | "stories.kicker"
  | "stories.title"
  | "stories.subtitle";

type LocalizationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
  "zh-TW": "繁體中文",
  de: "Deutsch",
};

const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certificates": "Certificates",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.stories": "Stories",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.toggleTheme": "Toggle theme",
    "home.downloadCv": "Download CV",
    "home.contactMe": "Contact Me",
    "home.showAllCertificates": "Show All Certificates",
    "home.showAllProjects": "Show All Projects",
    "home.showAllStories": "Show All Stories",
    "pages.backHome": "Back to Home",
    "pages.viewDetail": "View Detail",
    "pages.viewCertificate": "View Certificate",
    "pages.issuer": "Issuer",
    "pages.external": "External",
    "certificates.kicker": "Credentials",
    "certificates.title": "All Certificates",
    "certificates.subtitle":
      "Project management preparation, professional language certificates, and credentials that support international collaboration.",
    "projects.kicker": "Portfolio",
    "projects.title": "All Projects",
    "projects.subtitle":
      "A collection of projects that have been worked on, complete with a summary and a detailed page for each project.",
    "projects.cardLabel": "Personal Project",
    "stories.kicker": "Writing",
    "stories.title": "All Stories",
    "stories.subtitle":
      "This page contains all writings and story works, with a detail page for each title.",
  },
  id: {
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.education": "Pendidikan",
    "nav.certificates": "Sertifikat",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.stories": "Cerita",
    "nav.contact": "Kontak",
    "nav.language": "Bahasa",
    "nav.toggleTheme": "Ganti tema",
    "home.downloadCv": "Unduh CV",
    "home.contactMe": "Hubungi Saya",
    "home.showAllCertificates": "Lihat Semua Sertifikat",
    "home.showAllProjects": "Lihat Semua Proyek",
    "home.showAllStories": "Lihat Semua Cerita",
    "pages.backHome": "Kembali ke Home",
    "pages.viewDetail": "Lihat Detail",
    "pages.viewCertificate": "Lihat Sertifikat",
    "pages.issuer": "Penerbit",
    "pages.external": "Eksternal",
    "certificates.kicker": "Kredensial",
    "certificates.title": "Semua Sertifikat",
    "certificates.subtitle":
      "Persiapan manajemen proyek, sertifikat bahasa profesional, dan kredensial yang mendukung kolaborasi internasional.",
    "projects.kicker": "Portofolio",
    "projects.title": "Semua Proyek",
    "projects.subtitle":
      "Kumpulan proyek yang pernah dikerjakan, lengkap dengan ringkasan dan halaman detail untuk setiap proyek.",
    "projects.cardLabel": "Proyek Pribadi",
    "stories.kicker": "Tulisan",
    "stories.title": "Semua Cerita",
    "stories.subtitle":
      "Halaman ini berisi semua tulisan dan karya cerita, dengan halaman detail untuk setiap judul.",
  },
  "zh-TW": {
    "nav.about": "關於",
    "nav.experience": "經歷",
    "nav.education": "教育",
    "nav.certificates": "證書",
    "nav.skills": "技能",
    "nav.projects": "專案",
    "nav.stories": "故事",
    "nav.contact": "聯絡",
    "nav.language": "語言",
    "nav.toggleTheme": "切換主題",
    "home.downloadCv": "下載履歷",
    "home.contactMe": "聯絡我",
    "home.showAllCertificates": "查看所有證書",
    "home.showAllProjects": "查看所有專案",
    "home.showAllStories": "查看所有故事",
    "pages.backHome": "返回首頁",
    "pages.viewDetail": "查看詳情",
    "pages.viewCertificate": "查看證書",
    "pages.issuer": "發證單位",
    "pages.external": "外部連結",
    "certificates.kicker": "證照",
    "certificates.title": "所有證書",
    "certificates.subtitle": "專案管理準備、專業語言證書，以及支援國際合作的相關證照。",
    "projects.kicker": "作品集",
    "projects.title": "所有專案",
    "projects.subtitle": "這裡整理了已完成或參與的專案，每個專案都包含摘要與詳細頁面。",
    "projects.cardLabel": "個人專案",
    "stories.kicker": "寫作",
    "stories.title": "所有故事",
    "stories.subtitle": "此頁面收錄所有寫作與故事作品，每個標題都有對應的詳細頁面。",
  },
  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.education": "Bildung",
    "nav.certificates": "Zertifikate",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.stories": "Stories",
    "nav.contact": "Kontakt",
    "nav.language": "Sprache",
    "nav.toggleTheme": "Theme wechseln",
    "home.downloadCv": "CV herunterladen",
    "home.contactMe": "Kontakt",
    "home.showAllCertificates": "Alle Zertifikate anzeigen",
    "home.showAllProjects": "Alle Projekte anzeigen",
    "home.showAllStories": "Alle Stories anzeigen",
    "pages.backHome": "Zurück zur Startseite",
    "pages.viewDetail": "Details ansehen",
    "pages.viewCertificate": "Zertifikat ansehen",
    "pages.issuer": "Aussteller",
    "pages.external": "Extern",
    "certificates.kicker": "Nachweise",
    "certificates.title": "Alle Zertifikate",
    "certificates.subtitle":
      "Projektmanagement-Vorbereitung, professionelle Sprachzertifikate und Nachweise für internationale Zusammenarbeit.",
    "projects.kicker": "Portfolio",
    "projects.title": "Alle Projekte",
    "projects.subtitle":
      "Eine Sammlung bearbeiteter Projekte, jeweils mit Zusammenfassung und Detailseite.",
    "projects.cardLabel": "Persönliches Projekt",
    "stories.kicker": "Schreiben",
    "stories.title": "Alle Stories",
    "stories.subtitle":
      "Diese Seite enthält alle Texte und Story-Arbeiten, jeweils mit eigener Detailseite.",
  },
};

const STORAGE_KEY = "newporto-locale";

const LocalizationContext = createContext<LocalizationContextValue | undefined>(undefined);

function isLocale(value: string | null): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const storedLocale = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(storedLocale)) setLocaleState(storedLocale);
    } catch {
      // Keep English when storage is unavailable.
    }
  }, []);

  const value = useMemo<LocalizationContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      try {
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      } catch {
        // Ignore storage failures in restricted browsing contexts.
      }
    };

    return {
      locale,
      setLocale,
      t: (key) => dictionaries[locale][key],
    };
  }, [locale]);

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used inside LocalizationProvider");
  }
  return context;
}

export function getLocaleLabel(locale: Locale) {
  return localeLabels[locale];
}
