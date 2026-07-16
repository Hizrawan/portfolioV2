export type HomeLocale = "en" | "id" | "zh-TW" | "de";

export type ExperienceItem = {
  id: string;
  date: string;
  title: string;
  company: string;
  summary: string;
  detail: string[];
};

export type EducationItem = {
  title: string;
  meta: string;
  year: string;
  gpa: string;
  text: string;
  href: string;
};

export type SkillCategoryId =
  | "teaching"
  | "backend"
  | "database"
  | "frontend"
  | "tools"
  | "languages";

export type HomeContent = {
  hero: {
    badge: string;
    roleLabel: string;
    engineerLabel: string;
    leadBefore: string;
    leadMiddle: string;
    leadAfter: string;
  };
  about: {
    headline: string;
    body: string;
    highlights: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  educationVisit: string;
  certificates: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    blurb: string;
    categories: Record<SkillCategoryId, { label: string; items: string[] }>;
  };
  projects: {
    title: string;
    cardLabel: string;
  };
  stories: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
  experienceMore: string;
  experienceClose: string;
  downloadToast: string;
  profilePhoto: string;
};

const skillItems: Record<SkillCategoryId, string[]> = {
  teaching: [
    "Curriculum Delivery",
    "Student Mentoring",
    "Academic Writing",
    "Research Methodology",
    "Software Engineering Education",
    "Lab Instruction",
    "Assessment Design",
    "Technical Communication",
    "Project Mentorship",
    "Image Processing Research",
    "Data Hiding",
  ],
  backend: [
    "Go",
    "C# .NET Core",
    "Laravel",
    "REST API",
    "Microservices",
    "System Architecture",
    "NSQ",
    "Swift",
    "Node.js",
    "Express.js",
    "php",
    "Python",
  ],
  database: [
    "PostgreSQL",
    "Microsoft SQL Server",
    "MySQL",
    "Query Optimization",
    "Data Modeling",
    "SQLite",
  ],
  frontend: [
    "React Native",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "nuxt.js",
    "Flutter",
    "SwiftUI",
    "Electron",
    "Blazor WASM",
    "HTML / CSS",
    "KendoUI",
  ],
  tools: [
    "Git & GitHub",
    "Github Actions",
    "Microsoft Office 365",
    "Jira",
    "Redmine",
    "Notion",
    "Postman",
    "Docker",
    "Technical Documentation",
  ],
  languages: [],
};

const educationBase = [
  {
    title: "National Chin-Yi University of Technology",
    year: "2021 - 2023",
    gpa: "3.92",
    href: "https://www.ncut.edu.tw/",
  },
  {
    title: "Bina Nusantara University",
    year: "2018 - 2021",
    gpa: "3.27",
    href: "https://binus.ac.id",
  },
  {
    title: "Politeknik Negeri Bandung",
    year: "2015 - 2018",
    gpa: "2.85",
    href: "https://www.polban.ac.id/",
  },
] as const;

const homeContentByLocale: Record<HomeLocale, HomeContent> = {
  en: {
    hero: {
      badge: "Informatics Engineering Lecturer | Universitas Bunda Mulia",
      roleLabel: "Informatics Engineering Lecturer",
      engineerLabel: "Software Engineer",
      leadBefore: "An",
      leadMiddle: "at Universitas Bunda Mulia with industry experience as a",
      leadAfter: ".",
    },
    about: {
      headline:
        "Informatics Engineering Lecturer at Universitas Bunda Mulia, bridging industry practice and classroom learning.",
      body: "After years building backend systems and shipping software in industry, I now teach Informatics Engineering—helping students connect theory with how real systems are designed, built, and maintained. My focus is clear instruction, practical mentorship, and research-minded learning that prepares graduates for both academic depth and professional work.",
      highlights: ["Teaching", "Research", "Software Engineering"],
    },
    experience: [
      {
        id: "ubm-lecturer",
        date: "2026 - Present",
        title: "Informatics Engineering Lecturer",
        company: "Universitas Bunda Mulia",
        summary:
          "Teaching informatics courses and mentoring students with industry-grounded software engineering practice.",
        detail: [
          "Deliver lectures and lab sessions across software engineering and applied computing topics in the Informatics Engineering program.",
          "Mentor students on projects, research foundations, and professional practices drawn from industry experience.",
          "Bridge classroom theory with real-world system design, backend development, and collaborative delivery.",
        ],
      },
      {
        id: "xinchuan",
        date: "2024 - 2026",
        title: "Backend Engineer",
        company: "Xinchuan Telecommunication Co. Ltd",
        summary:
          "Maintained Laravel backend systems and developed scalable Go microservices in production.",
        detail: [
          "Maintain and enhance backend systems built with Laravel, including bug fixing, feature improvements, and performance optimization.",
          "Manage MySQL operations through schema updates, query tuning, and data integrity work.",
          "Design and develop Go microservices, RESTful APIs, internal services, logging, error handling, and monitoring for stable integrations.",
        ],
      },
      {
        id: "xiangshun",
        date: "Mar 2024 - Oct 2024",
        title: "Fullstack Developer",
        company: "Xiangshun Information Co. Ltd",
        summary: "Built Taiwan government digital systems using .NET Core, SQL Server, and Blazor.",
        detail: [
          "Developed backend services and RESTful APIs with C# and .NET Core to support government workflows and data processing.",
          "Built database structures in Microsoft SQL Server, including authentication, RBAC, and validation flows.",
          "Implemented Blazor interfaces, dashboards, forms, administrative panels, and API integrations for real-time data operations.",
        ],
      },
      {
        id: "ncut-ra",
        date: "2021 - 2023",
        title: "Research Assistant",
        company: "National Chin-Yi University of Technology",
        summary:
          "Conducted computer science research on data hiding schemes and AMBTC-based image processing.",
        detail: [
          "Researched block feature enhanced AMBTC-based data hiding methods for academic publication.",
          "Designed experiments, analyzed image quality and hiding capacity, and documented research findings.",
          "Published research with DOI: https://doi.org/10.1145/3634814.3634830.",
        ],
      },
      {
        id: "fujitsu",
        date: "Feb 2019 - Dec 2020",
        title: "Fullstack Developer",
        company: "Fujitsu Indonesia",
        summary: "Delivered healthcare system features across .NET Core APIs, PostgreSQL, and Kendo UI.",
        detail: [
          "Designed RESTful APIs and business logic for patient registration, appointment management, and medical record workflows.",
          "Designed and optimized PostgreSQL structures for healthcare system modules.",
          "Built Kendo UI dashboards, forms, validation flows, and high-volume data grids with virtualization, filtering, and pagination.",
        ],
      },
      {
        id: "lapi",
        date: "2017",
        title: "Programmer Internship",
        company: "PT LAPI Divusi",
        summary:
          "Supported mobile application development through React Native UI work and REST API integration.",
        detail: [
          "Contributed to mobile UI screens, interaction flows, and integration with backend endpoints.",
          "Worked through iterative testing, bug fixes, and mentorship-based development practices.",
          "Built an early foundation in product collaboration, frontend implementation, and delivery quality.",
        ],
      },
    ],
    education: [
      {
        ...educationBase[0],
        meta: "Master of Science in Computer Science",
        text: "Thesis: A Novel Data Hiding Scheme based on Block Features Enhanced AMBTC.",
      },
      {
        ...educationBase[1],
        meta: "Bachelor of Science in Computer Science",
        text: "Thesis: Mobile application for clinical laboratory examination booking using React Native.",
      },
      {
        ...educationBase[2],
        meta: "Associate's Degree in Computer Science",
        text: "Final project: Indonesian sign language to text translation using convolutional neural network.",
      },
    ],
    educationVisit: "Visit Website →",
    certificates: {
      title: "Certificates & Credentials",
      subtitle:
        "Certifications and language credentials that strengthen teaching, technical depth, and international academic collaboration.",
    },
    skills: {
      title: "Technical Expertise",
      blurb: "Focus areas used across teaching, research, and industry-informed software practice.",
      categories: {
        teaching: { label: "Teaching & Research", items: skillItems.teaching },
        backend: { label: "Backend", items: skillItems.backend },
        database: { label: "Database", items: skillItems.database },
        frontend: { label: "Frontend & Mobile", items: skillItems.frontend },
        tools: { label: "Tools", items: skillItems.tools },
        languages: {
          label: "Languages",
          items: [
            "Indonesian - Native",
            "English - TOEFL iBT 96",
            "Mandarin - Basic",
            "German - Basic",
          ],
        },
      },
    },
    projects: {
      title: "Personal Projects",
      cardLabel: "Personal Project",
    },
    stories: {
      title: "Stories & Thoughts",
      subtitle:
        "In my spare time, I like to write. This section collects stories, blog notes, and personal writing pieces created outside of teaching and research work.",
    },
    contact: {
      title: "Let's connect.",
      subtitle:
        "Reach out for teaching collaboration, research discussion, student mentorship, or writing conversations.",
      email: "Email Me",
    },
    experienceMore: "More +",
    experienceClose: "Close -",
    downloadToast: "CV download started successfully.",
    profilePhoto: "Profile Photo",
  },
  id: {
    hero: {
      badge: "Dosen Teknik Informatika | Universitas Bunda Mulia",
      roleLabel: "Dosen Teknik Informatika",
      engineerLabel: "Software Engineer",
      leadBefore: "Seorang",
      leadMiddle: "di Universitas Bunda Mulia dengan pengalaman industri sebagai",
      leadAfter: ".",
    },
    about: {
      headline:
        "Dosen Teknik Informatika di Universitas Bunda Mulia, menjembatani praktik industri dan pembelajaran di kelas.",
      body: "Setelah bertahun-tahun membangun sistem backend dan mengirimkan perangkat lunak di industri, saya kini mengajar Teknik Informatika—membantu mahasiswa menghubungkan teori dengan cara sistem nyata dirancang, dibangun, dan dipelihara. Fokus saya adalah pengajaran yang jelas, mentorship praktis, dan pembelajaran berorientasi riset yang mempersiapkan lulusan untuk kedalaman akademik sekaligus kerja profesional.",
      highlights: ["Pengajaran", "Riset", "Software Engineering"],
    },
    experience: [
      {
        id: "ubm-lecturer",
        date: "2026 - Sekarang",
        title: "Dosen Teknik Informatika",
        company: "Universitas Bunda Mulia",
        summary:
          "Mengajar mata kuliah informatika dan membimbing mahasiswa dengan praktik software engineering berbasis industri.",
        detail: [
          "Mengampu kuliah dan praktikum di bidang software engineering serta topik komputasi terapan pada program Teknik Informatika.",
          "Membimbing mahasiswa pada proyek, dasar riset, dan praktik profesional yang diambil dari pengalaman industri.",
          "Menjembatani teori di kelas dengan desain sistem nyata, pengembangan backend, dan kolaborasi pengiriman produk.",
        ],
      },
      {
        id: "xinchuan",
        date: "2024 - 2026",
        title: "Backend Engineer",
        company: "Xinchuan Telecommunication Co. Ltd",
        summary:
          "Memelihara sistem backend Laravel dan mengembangkan microservice Go yang skalabel di lingkungan produksi.",
        detail: [
          "Memelihara dan meningkatkan sistem backend berbasis Laravel, termasuk perbaikan bug, peningkatan fitur, dan optimasi performa.",
          "Mengelola operasi MySQL melalui pembaruan skema, penyetelan query, dan menjaga integritas data.",
          "Merancang dan mengembangkan microservice Go, RESTful API, layanan internal, logging, penanganan error, serta monitoring untuk integrasi yang stabil.",
        ],
      },
      {
        id: "xiangshun",
        date: "Mar 2024 - Okt 2024",
        title: "Fullstack Developer",
        company: "Xiangshun Information Co. Ltd",
        summary:
          "Membangun sistem digital pemerintah Taiwan menggunakan .NET Core, SQL Server, dan Blazor.",
        detail: [
          "Mengembangkan layanan backend dan RESTful API dengan C# dan .NET Core untuk mendukung alur kerja pemerintah dan pemrosesan data.",
          "Membangun struktur basis data di Microsoft SQL Server, termasuk autentikasi, RBAC, dan alur validasi.",
          "Mengimplementasikan antarmuka Blazor, dasbor, formulir, panel administrasi, dan integrasi API untuk operasi data real-time.",
        ],
      },
      {
        id: "ncut-ra",
        date: "2021 - 2023",
        title: "Asisten Peneliti",
        company: "National Chin-Yi University of Technology",
        summary:
          "Melakukan riset ilmu komputer pada skema data hiding dan pemrosesan citra berbasis AMBTC.",
        detail: [
          "Meneliti metode data hiding berbasis AMBTC yang ditingkatkan dengan fitur blok untuk publikasi akademik.",
          "Merancang eksperimen, menganalisis kualitas citra dan kapasitas penyembunyian, serta mendokumentasikan temuan riset.",
          "Memublikasikan riset dengan DOI: https://doi.org/10.1145/3634814.3634830.",
        ],
      },
      {
        id: "fujitsu",
        date: "Feb 2019 - Des 2020",
        title: "Fullstack Developer",
        company: "Fujitsu Indonesia",
        summary:
          "Mengembangkan fitur sistem kesehatan lintas API .NET Core, PostgreSQL, dan Kendo UI.",
        detail: [
          "Merancang RESTful API dan logika bisnis untuk registrasi pasien, manajemen janji, dan alur rekam medis.",
          "Merancang dan mengoptimalkan struktur PostgreSQL untuk modul sistem kesehatan.",
          "Membangun dasbor Kendo UI, formulir, alur validasi, dan data grid volume tinggi dengan virtualisasi, filter, dan paginasi.",
        ],
      },
      {
        id: "lapi",
        date: "2017",
        title: "Magang Programmer",
        company: "PT LAPI Divusi",
        summary:
          "Mendukung pengembangan aplikasi mobile melalui pekerjaan UI React Native dan integrasi REST API.",
        detail: [
          "Berkontribusi pada layar UI mobile, alur interaksi, dan integrasi dengan endpoint backend.",
          "Bekerja melalui siklus pengujian iteratif, perbaikan bug, dan praktik pengembangan berbasis mentoring.",
          "Membangun fondasi awal dalam kolaborasi produk, implementasi frontend, dan kualitas pengiriman.",
        ],
      },
    ],
    education: [
      {
        ...educationBase[0],
        meta: "Magister Ilmu Komputer",
        text: "Tesis: A Novel Data Hiding Scheme based on Block Features Enhanced AMBTC.",
      },
      {
        ...educationBase[1],
        meta: "Sarjana Ilmu Komputer",
        text: "Tesis: Aplikasi mobile untuk pemesanan pemeriksaan laboratorium klinis menggunakan React Native.",
      },
      {
        ...educationBase[2],
        meta: "Diploma Ilmu Komputer",
        text: "Proyek akhir: Penerjemahan bahasa isyarat Indonesia ke teks menggunakan convolutional neural network.",
      },
    ],
    educationVisit: "Kunjungi Situs →",
    certificates: {
      title: "Sertifikat & Kredensial",
      subtitle:
        "Sertifikasi dan kredensial bahasa yang memperkuat pengajaran, kedalaman teknis, dan kolaborasi akademik internasional.",
    },
    skills: {
      title: "Keahlian Teknis",
      blurb:
        "Area fokus yang digunakan lintas pengajaran, riset, dan praktik perangkat lunak berbasis industri.",
      categories: {
        teaching: { label: "Pengajaran & Riset", items: skillItems.teaching },
        backend: { label: "Backend", items: skillItems.backend },
        database: { label: "Basis Data", items: skillItems.database },
        frontend: { label: "Frontend & Mobile", items: skillItems.frontend },
        tools: { label: "Alat", items: skillItems.tools },
        languages: {
          label: "Bahasa",
          items: [
            "Indonesia - Native",
            "Inggris - TOEFL iBT 96",
            "Mandarin - Dasar",
            "Jerman - Dasar",
          ],
        },
      },
    },
    projects: {
      title: "Proyek Pribadi",
      cardLabel: "Proyek Pribadi",
    },
    stories: {
      title: "Cerita & Catatan",
      subtitle:
        "Di waktu luang, saya senang menulis. Bagian ini mengumpulkan cerita, catatan blog, dan tulisan pribadi di luar pekerjaan mengajar dan riset.",
    },
    contact: {
      title: "Mari terhubung.",
      subtitle:
        "Hubungi saya untuk kolaborasi pengajaran, diskusi riset, mentorship mahasiswa, atau percakapan seputar tulisan.",
      email: "Email Saya",
    },
    experienceMore: "Selengkapnya +",
    experienceClose: "Tutup -",
    downloadToast: "Unduhan CV berhasil dimulai.",
    profilePhoto: "Foto Profil",
  },
  "zh-TW": {
    hero: {
      badge: "資訊工程講師 | Universitas Bunda Mulia",
      roleLabel: "資訊工程講師",
      engineerLabel: "軟體工程師",
      leadBefore: "現任",
      leadMiddle: "於 Universitas Bunda Mulia，並具備",
      leadAfter: "產業經驗。",
    },
    about: {
      headline: "於 Universitas Bunda Mulia 擔任資訊工程講師，連結產業實務與課堂學習。",
      body: "在產業界多年從事後端系統建置與軟體交付後，我目前教授資訊工程，協助學生把理論連結到真實系統的設計、開發與維運。我重視清楚的教學、實務導向的指導，以及具研究思維的學習，幫助畢業生同時具備學術深度與職場能力。",
      highlights: ["教學", "研究", "軟體工程"],
    },
    experience: [
      {
        id: "ubm-lecturer",
        date: "2026 - 至今",
        title: "資訊工程講師",
        company: "Universitas Bunda Mulia",
        summary: "教授資訊相關課程，並以產業導向的軟體工程實務指導學生。",
        detail: [
          "於資訊工程學程授課並帶領實驗，涵蓋軟體工程與應用計算主題。",
          "指導學生專案、研究基礎，以及來自產業經驗的專業實務。",
          "把課堂理論與真實系統設計、後端開發及協作交付連結起來。",
        ],
      },
      {
        id: "xinchuan",
        date: "2024 - 2026",
        title: "後端工程師",
        company: "Xinchuan Telecommunication Co. Ltd",
        summary: "維運 Laravel 後端系統，並開發可擴展的 Go 微服務於正式環境。",
        detail: [
          "維護與強化以 Laravel 建置的後端系統，包含修錯、功能改進與效能優化。",
          "管理 MySQL 作業，包含結構更新、查詢調校與資料完整性維護。",
          "設計並開發 Go 微服務、RESTful API、內部服務、日誌、錯誤處理與監控，以確保穩定整合。",
        ],
      },
      {
        id: "xiangshun",
        date: "2024/03 - 2024/10",
        title: "全端工程師",
        company: "Xiangshun Information Co. Ltd",
        summary: "以 .NET Core、SQL Server 與 Blazor 建置台灣政府數位系統。",
        detail: [
          "以 C# 與 .NET Core 開發後端服務與 RESTful API，支援政府流程與資料處理。",
          "在 Microsoft SQL Server 建置資料庫結構，包含身分驗證、RBAC 與驗證流程。",
          "實作 Blazor 介面、儀表板、表單、管理後台與 API 整合，支援即時資料操作。",
        ],
      },
      {
        id: "ncut-ra",
        date: "2021 - 2023",
        title: "研究助理",
        company: "國立勤益科技大學",
        summary: "從事電腦科學研究，聚焦資料隱藏技術與基於 AMBTC 的影像處理。",
        detail: [
          "研究以區塊特徵強化之 AMBTC 資料隱藏方法，並用於學術發表。",
          "設計實驗、分析影像品質與隱藏容量，並撰寫研究成果。",
          "研究成果 DOI：https://doi.org/10.1145/3634814.3634830。",
        ],
      },
      {
        id: "fujitsu",
        date: "2019/02 - 2020/12",
        title: "全端工程師",
        company: "Fujitsu Indonesia",
        summary: "以 .NET Core API、PostgreSQL 與 Kendo UI 交付醫療系統功能。",
        detail: [
          "設計 RESTful API 與業務邏輯，支援病患掛號、預約管理與病歷流程。",
          "設計並優化醫療系統模組的 PostgreSQL 結構。",
          "建置 Kendo UI 儀表板、表單、驗證流程，以及具備虛擬化、篩選與分頁的大量資料表格。",
        ],
      },
      {
        id: "lapi",
        date: "2017",
        title: "程式實習",
        company: "PT LAPI Divusi",
        summary: "透過 React Native UI 開發與 REST API 整合，支援行動應用開發。",
        detail: [
          "參與行動端 UI 畫面、互動流程，以及與後端端點的整合。",
          "透過反覆測試、除錯與師徒式開發實務完成交付。",
          "建立產品協作、前端實作與交付品質的早期基礎。",
        ],
      },
    ],
    education: [
      {
        ...educationBase[0],
        title: "國立勤益科技大學",
        meta: "資訊工程碩士",
        text: "論文：A Novel Data Hiding Scheme based on Block Features Enhanced AMBTC。",
      },
      {
        ...educationBase[1],
        meta: "資訊工程學士",
        text: "論文：以 React Native 開發臨床檢驗預約行動應用。",
      },
      {
        ...educationBase[2],
        meta: "資訊工程副學士",
        text: "專題：以卷積神經網路將印尼手語翻譯為文字。",
      },
    ],
    educationVisit: "造訪網站 →",
    certificates: {
      title: "證書與資歷",
      subtitle: "強化教學、技術深度與國際學術合作的專業證照與語言資歷。",
    },
    skills: {
      title: "技術專長",
      blurb: "橫跨教學、研究與產業導向軟體實務的重點領域。",
      categories: {
        teaching: { label: "教學與研究", items: skillItems.teaching },
        backend: { label: "後端", items: skillItems.backend },
        database: { label: "資料庫", items: skillItems.database },
        frontend: { label: "前端與行動", items: skillItems.frontend },
        tools: { label: "工具", items: skillItems.tools },
        languages: {
          label: "語言",
          items: ["印尼語 - 母語", "英語 - TOEFL iBT 96", "華語 - 基礎", "德語 - 基礎"],
        },
      },
    },
    projects: {
      title: "個人專案",
      cardLabel: "個人專案",
    },
    stories: {
      title: "故事與想法",
      subtitle: "閒暇時我喜歡寫作。這個區塊收錄教學與研究之外的故事、部落格筆記與個人文章。",
    },
    contact: {
      title: "歡迎聯繫。",
      subtitle: "歡迎洽詢教學合作、研究討論、學生指導，或寫作相關交流。",
      email: "寄信給我",
    },
    experienceMore: "更多 +",
    experienceClose: "關閉 -",
    downloadToast: "履歷下載已開始。",
    profilePhoto: "個人照片",
  },
  de: {
    hero: {
      badge: "Dozent für Informatik | Universitas Bunda Mulia",
      roleLabel: "Dozent für Informatik",
      engineerLabel: "Software Engineer",
      leadBefore: "Ein",
      leadMiddle: "an der Universitas Bunda Mulia mit Industrieerfahrung als",
      leadAfter: ".",
    },
    about: {
      headline:
        "Dozent für Informatik an der Universitas Bunda Mulia – Brücke zwischen Industriepraxis und Lehre.",
      body: "Nach Jahren im Aufbau von Backend-Systemen und der Auslieferung von Software in der Industrie unterrichte ich heute Informatik und helfe Studierenden, Theorie mit der Art und Weise zu verbinden, wie reale Systeme entworfen, gebaut und betrieben werden. Mein Fokus liegt auf klarer Vermittlung, praktischer Mentorschaft und forschungsorientiertem Lernen, das Absolventinnen und Absolventen auf akademische Tiefe und berufliche Praxis vorbereitet.",
      highlights: ["Lehre", "Forschung", "Software Engineering"],
    },
    experience: [
      {
        id: "ubm-lecturer",
        date: "2026 - Heute",
        title: "Dozent für Informatik",
        company: "Universitas Bunda Mulia",
        summary:
          "Lehre in der Informatik und Mentoring von Studierenden mit industriebasierter Software-Engineering-Praxis.",
        detail: [
          "Halte Vorlesungen und Labore zu Software Engineering und angewandter Informatik im Studiengang Informatik.",
          "Betreue Studierende bei Projekten, Forschungsgrundlagen und professionellen Praktiken aus der Industrie.",
          "Verbinde Theorie im Unterricht mit realem Systemdesign, Backend-Entwicklung und kollaborativer Delivery.",
        ],
      },
      {
        id: "xinchuan",
        date: "2024 - 2026",
        title: "Backend Engineer",
        company: "Xinchuan Telecommunication Co. Ltd",
        summary:
          "Wartete Laravel-Backend-Systeme und entwickelte skalierbare Go-Microservices in Produktion.",
        detail: [
          "Wartung und Weiterentwicklung von Laravel-Backends, inklusive Bugfixes, Feature-Verbesserungen und Performance-Optimierung.",
          "Verwaltung von MySQL-Operationen durch Schema-Updates, Query-Tuning und Sicherstellung der Datenintegrität.",
          "Entwurf und Entwicklung von Go-Microservices, RESTful APIs, internen Diensten, Logging, Fehlerbehandlung und Monitoring für stabile Integrationen.",
        ],
      },
      {
        id: "xiangshun",
        date: "März 2024 - Okt 2024",
        title: "Fullstack Developer",
        company: "Xiangshun Information Co. Ltd",
        summary:
          "Aufbau digitaler Systeme der taiwanesischen Verwaltung mit .NET Core, SQL Server und Blazor.",
        detail: [
          "Entwicklung von Backend-Services und RESTful APIs mit C# und .NET Core für Verwaltungsprozesse und Datenverarbeitung.",
          "Aufbau von Datenbankstrukturen in Microsoft SQL Server inklusive Authentifizierung, RBAC und Validierungsflüssen.",
          "Implementierung von Blazor-Oberflächen, Dashboards, Formularen, Admin-Panels und API-Integrationen für Echtzeitdaten.",
        ],
      },
      {
        id: "ncut-ra",
        date: "2021 - 2023",
        title: "Wissenschaftlicher Mitarbeiter",
        company: "National Chin-Yi University of Technology",
        summary:
          "Informatikforschung zu Data-Hiding-Verfahren und AMBTC-basierter Bildverarbeitung.",
        detail: [
          "Forschung zu blockmerkmal-verstärkten AMBTC-basierten Data-Hiding-Methoden für wissenschaftliche Publikationen.",
          "Planung von Experimenten, Analyse von Bildqualität und Versteckskapazität sowie Dokumentation der Ergebnisse.",
          "Veröffentlichte Forschung mit DOI: https://doi.org/10.1145/3634814.3634830.",
        ],
      },
      {
        id: "fujitsu",
        date: "Feb 2019 - Dez 2020",
        title: "Fullstack Developer",
        company: "Fujitsu Indonesia",
        summary:
          "Umsetzung von Features für ein Gesundheitssystem mit .NET Core APIs, PostgreSQL und Kendo UI.",
        detail: [
          "Entwurf von RESTful APIs und Geschäftslogik für Patientenregistrierung, Terminverwaltung und Krankenaktenprozesse.",
          "Entwurf und Optimierung von PostgreSQL-Strukturen für Module des Gesundheitssystems.",
          "Aufbau von Kendo-UI-Dashboards, Formularen, Validierungsflüssen und hochvolumigen Datengrids mit Virtualisierung, Filterung und Paginierung.",
        ],
      },
      {
        id: "lapi",
        date: "2017",
        title: "Programmierpraktikum",
        company: "PT LAPI Divusi",
        summary:
          "Unterstützung der mobilen App-Entwicklung durch React-Native-UI-Arbeit und REST-API-Integration.",
        detail: [
          "Mitwirkung an mobilen UI-Screens, Interaktionsflüssen und der Integration mit Backend-Endpunkten.",
          "Arbeit in iterativen Test-, Bugfix- und Mentoring-basierten Entwicklungsprozessen.",
          "Aufbau früher Grundlagen in Produktkollaboration, Frontend-Umsetzung und Lieferqualität.",
        ],
      },
    ],
    education: [
      {
        ...educationBase[0],
        meta: "Master of Science in Informatik",
        text: "Thesis: A Novel Data Hiding Scheme based on Block Features Enhanced AMBTC.",
      },
      {
        ...educationBase[1],
        meta: "Bachelor of Science in Informatik",
        text: "Thesis: Mobile App zur Buchung klinischer Laboruntersuchungen mit React Native.",
      },
      {
        ...educationBase[2],
        meta: "Associate Degree in Informatik",
        text: "Abschlussprojekt: Übersetzung indonesischer Gebärdensprache in Text mit Convolutional Neural Network.",
      },
    ],
    educationVisit: "Website besuchen →",
    certificates: {
      title: "Zertifikate & Nachweise",
      subtitle:
        "Zertifizierungen und Sprachnachweise, die Lehre, technische Tiefe und internationale akademische Zusammenarbeit stärken.",
    },
    skills: {
      title: "Technische Expertise",
      blurb:
        "Schwerpunkte aus Lehre, Forschung und industrieinformierter Softwarepraxis.",
      categories: {
        teaching: { label: "Lehre & Forschung", items: skillItems.teaching },
        backend: { label: "Backend", items: skillItems.backend },
        database: { label: "Datenbank", items: skillItems.database },
        frontend: { label: "Frontend & Mobile", items: skillItems.frontend },
        tools: { label: "Tools", items: skillItems.tools },
        languages: {
          label: "Sprachen",
          items: [
            "Indonesisch - Muttersprache",
            "Englisch - TOEFL iBT 96",
            "Mandarin - Grundkenntnisse",
            "Deutsch - Grundkenntnisse",
          ],
        },
      },
    },
    projects: {
      title: "Persönliche Projekte",
      cardLabel: "Persönliches Projekt",
    },
    stories: {
      title: "Stories & Gedanken",
      subtitle:
        "In meiner Freizeit schreibe ich gern. Dieser Bereich sammelt Stories, Blognotizen und persönliche Texte außerhalb von Lehre und Forschung.",
    },
    contact: {
      title: "Lass uns sprechen.",
      subtitle:
        "Melde dich für Lehrkooperationen, Forschungsgespräche, Studierenden-Mentoring oder Schreibthemen.",
      email: "E-Mail senden",
    },
    experienceMore: "Mehr +",
    experienceClose: "Schließen -",
    downloadToast: "CV-Download wurde gestartet.",
    profilePhoto: "Profilfoto",
  },
};

export const skillCategoryOrder: SkillCategoryId[] = [
  "teaching",
  "backend",
  "database",
  "frontend",
  "tools",
  "languages",
];

export function getHomeContent(locale: HomeLocale): HomeContent {
  return homeContentByLocale[locale];
}
