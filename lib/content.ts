export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  role: string;
  externalUrl?: string;
  details: string[];
};

export type Story = {
  slug: string;
  title: string;
  type: string;
  status: string;
  readTime: string;
  excerpt: string;
  pdfFile: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "Personal portfolio site built with Next.js to showcase projects, writing, and a career journey from engineering to project management.",
    tags: ["Next.js", "React", "Tailwind"],
    year: "2025",
    role: "Personal Project",
    externalUrl: "https://github.com/Hizrawan",
    details: [
      "This project was created to build a single place for professional identity, combining technical background, current focus, and writing plans.",
      "The site architecture emphasizes readability, visual storytelling, and smooth section-based navigation, while keeping pages lightweight.",
      "Going forward, the platform is planned to include deeper case studies, writing publication flow, and ongoing improvements in accessibility.",
    ],
  },
  {
    slug: "telecom-backend-service",
    title: "Telecom Backend Service",
    summary:
      "High-throughput REST API and async worker system built with Go for telecom workflows, handling cross-service data flows with PostgreSQL.",
    tags: ["Go", "PostgreSQL", "REST API"],
    year: "2024",
    role: "Backend Engineer",
    details: [
      "Designed backend endpoints and worker pipelines for telecom-grade reliability, with careful handling of high-frequency events.",
      "Focused on query performance, failure recovery, and observability to ensure predictable behavior under production load.",
      "Worked across teams to align API contracts and data consistency between integrated services and databases.",
    ],
  },
  {
    slug: "enterprise-management-app",
    title: "Enterprise Management App",
    summary:
      "Business application with Blazor frontend and .NET Core backend, built for enterprise clients with complex data models on MS SQL Server.",
    tags: ["C# .NET Core", "Blazor", "MS SQL Server"],
    year: "2024",
    role: "Backend Developer",
    details: [
      "Delivered backend modules that support enterprise operations with transactional integrity and clear validation rules.",
      "Collaborated on full feature lifecycle from requirements clarification to release-ready implementation.",
      "Maintained scalable relational models and query patterns to support reporting and business process workflows.",
    ],
  },
  {
    slug: "mobile-app-pt-lapi-divusi",
    title: "Mobile App — PT LAPI Divusi",
    summary:
      "Cross-platform mobile application built with React Native during internship, including UI implementation and REST API integration.",
    tags: ["React Native", "JavaScript", "REST API"],
    year: "2018",
    role: "Programmer Intern",
    details: [
      "Contributed to mobile UI development, interaction flows, and integration with backend endpoints.",
      "Worked in a mentorship environment with iterative testing and bug-fix cycles to strengthen delivery quality.",
      "Built a practical foundation in product collaboration and real-world mobile engineering practices.",
    ],
  },
];

export const stories: Story[] = [
  {
    slug: "from-code-to-kickoff-why-engineers-make-great-pms",
    title: "From Code to Kickoff: Why Engineers Make Great PMs",
    type: "Blog · Tech",
    status: "Coming soon",
    readTime: "5 min read",
    pdfFile: "/stories/from-code-to-kickoff-why-engineers-make-great-pms.pdf",
    excerpt:
      "What five years of backend engineering taught me about timelines, team dynamics, and why the best project managers often started with code.",
    details: [
      "The story explores how engineering habits such as systems thinking and root-cause analysis translate naturally into project leadership.",
      "It also discusses practical communication patterns that help PMs and engineers stay aligned on delivery scope and trade-offs.",
      "A key theme is balancing product priorities with technical realities in a way that protects both speed and quality.",
    ],
  },
  {
    slug: "studying-for-capm-while-working-full-time-in-taiwan",
    title: "Studying for CAPM While Working Full-Time in Taiwan",
    type: "Blog · Career",
    status: "Coming soon",
    readTime: "7 min read",
    pdfFile: "/stories/studying-for-capm-while-working-full-time-in-taiwan.pdf",
    excerpt:
      "A candid look at balancing a backend engineering job with CAPM exam prep — what works, what does not, and how consistency is maintained.",
    details: [
      "This piece shares a real routine for balancing certification study with full-time engineering responsibilities.",
      "It covers weekly planning, focus blocks, and techniques for retaining PMBOK concepts without burnout.",
      "The post closes with lessons learned and a practical roadmap for professionals preparing similar certifications.",
    ],
  },
  {
    slug: "sinyal-di-antara-kabut",
    title: "Sinyal di Antara Kabut",
    type: "Cerpen",
    status: "Segera hadir",
    readTime: "Fiksi · ID",
    pdfFile: "/stories/sinyal-di-antara-kabut.pdf",
    excerpt:
      "Sebuah cerita pendek tentang perjalanan, keputusan, dan hal-hal yang ditinggalkan di belakang saat memilih jalan baru.",
    details: [
      "Cerita ini menyorot momen ketika seseorang berdiri di persimpangan, antara stabilitas lama dan kemungkinan baru.",
      "Nuansa narasi dibangun lewat simbol perjalanan, jarak, dan sinyal yang samar tetapi tetap memanggil.",
      "Tema utamanya adalah keberanian mengambil keputusan saat masa depan belum sepenuhnya terlihat jelas.",
    ],
  },
  {
    slug: "untitled-novel",
    title: "Untitled Novel",
    type: "Novel · In Progress",
    status: "In progress",
    readTime: "Fiction",
    pdfFile: "/stories/untitled-novel.pdf",
    excerpt: "A longer-form work currently in progress. More details coming soon.",
    details: [
      "This is an early-stage long-form fiction project currently in drafting and world-building phase.",
      "The development process focuses on character arcs, emotional pacing, and thematic consistency across chapters.",
      "A complete synopsis and first public chapter are planned after the initial manuscript milestone is reached.",
    ],
  },
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
export const storyBySlug = new Map(stories.map((story) => [story.slug, story]));

export const projectSlugByTitle = new Map(
  projects.map((project) => [project.title, project.slug]),
);
export const storySlugByTitle = new Map(stories.map((story) => [story.title, story.slug]));
