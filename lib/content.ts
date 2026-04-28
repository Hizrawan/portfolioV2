export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  role: string;
  featuredOnHome?: boolean;
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
  featuredOnHome?: boolean;
  details: string[];
};

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  status: string;
  score?: string;
  imageFile: string;
  pdfFile: string;
  featuredOnHome?: boolean;
  summary: string;
  details: string[];
  externalUrl?: string;
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
    featuredOnHome: true,
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
    featuredOnHome: true,
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
    featuredOnHome: false,
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
    featuredOnHome: false,
    details: [
      "Contributed to mobile UI development, interaction flows, and integration with backend endpoints.",
      "Worked in a mentorship environment with iterative testing and bug-fix cycles to strengthen delivery quality.",
      "Built a practical foundation in product collaboration and real-world mobile engineering practices.",
    ],
  },
];

export const stories: Story[] = [
  {
    slug: "novel-1-pewayangan-dalang",
    title: "DALANG",
    type: "Novel",
    status: "Completed",
    readTime: "28 chapters",
    pdfFile: "/stories/dalang.pdf",
    featuredOnHome: true,
    excerpt:
      "Based on the Indonesian puppet tradition called wayang, DALANG is the first book in a trilogy that explores the intricate dynamics of power, identity, and destiny through two young cadets who must learn to synchronize their minds inside a legendary war machine—only to discover that the real enemy may already be inside the walls they swore to protect.",
    details: [
     "The story follows Mahakam and Perkasa as two cadets who must learn to synchronize their minds inside a giant humanoid mecha called Gatotkaca, revealing how vulnerability and neural sync can turn bitter rivals into a single unstoppable will.",
"It also explores how the silent language of shared combat data and the scars of a fallen nation shape their growth as pilots, showing that piloting a war machine requires not just instinct, but the courage to let someone else inside your head.",
"A key theme is the painful balance between military duty and the relentless hope of finding lost family, all while a crumbling fortress nation fights for its last breath behind walls that were never meant to keep its own people in."
    ],
  },
  {
    slug: "novel-2-pewayangan-wayang",
    title: "WAYANG",
    type: "Novel",
    status: "In progress",
    readTime: "28 chapters",
    pdfFile: "/stories/wayang.pdf",
    featuredOnHome: true,
    excerpt:
      "Based on the Indonesian puppet tradition called wayang, WAYANG is the second book in a trilogy that explores the intricate dynamics of power, identity, and destiny through two young cadets who must learn to synchronize their minds inside a legendary war machine—only to discover that the real enemy may already be inside the walls they swore to protect.",
    details: [
     "The story follows Mahakam and Perkasa as two cadets who must learn to synchronize their minds inside a giant humanoid mecha called Gatotkaca, revealing how vulnerability and neural sync can turn bitter rivals into a single unstoppable will.",
"It also explores how the silent language of shared combat data and the scars of a fallen nation shape their growth as pilots, showing that piloting a war machine requires not just instinct, but the courage to let someone else inside your head.",
"A key theme is the painful balance between military duty and the relentless hope of finding lost family, all while a crumbling fortress nation fights for its last breath behind walls that were never meant to keep its own people in."
    ],
  },
  {
    slug: "blog-1-deploying-web-on-raspberry-pi",
    title: "Deploying a Web App on a Raspberry Pi",
    type: "Blog · Technology",
    status: "Completed",
    readTime: "10 min read",
    pdfFile: "/stories/blog1.pdf",
    featuredOnHome: true,
    excerpt:
      "Based on the Indonesian puppet tradition called wayang, WAYANG is the second book in a trilogy that explores the intricate dynamics of power, identity, and destiny through two young cadets who must learn to synchronize their minds inside a legendary war machine—only to discover that the real enemy may already be inside the walls they swore to protect.",
    details: [
      "This blog post provides a step-by-step guide to deploying a web application on a Raspberry Pi, covering setup, configuration, and troubleshooting tips.",
      "It includes practical insights on optimizing performance, ensuring security, and managing resources effectively on a low-power device.",
      "The post is aimed at developers looking to explore edge computing or create DIY projects using Raspberry Pi as a web server.",
    ],
  },
  {
    slug: "novel-3-pewayangan-bayang",
    title: "BAYANG",
    type: "Novel",
    status: "Coming soon",
    readTime: "28 chapters",
    pdfFile: "/stories/bayang.pdf",
    featuredOnHome: true,
    excerpt:
      "Based on the Indonesian puppet tradition called wayang, BAYANG is the last book in a trilogy that explores the intricate dynamics of power, identity, and destiny through two young cadets who must learn to synchronize their minds inside a legendary war machine—only to discover that the real enemy may already be inside the walls they swore to protect.",
    details: [
     "The story follows Mahakam and Perkasa as two cadets who must learn to synchronize their minds inside a giant humanoid mecha called Gatotkaca, revealing how vulnerability and neural sync can turn bitter rivals into a single unstoppable will.",
"It also explores how the silent language of shared combat data and the scars of a fallen nation shape their growth as pilots, showing that piloting a war machine requires not just instinct, but the courage to let someone else inside your head.",
"A key theme is the painful balance between military duty and the relentless hope of finding lost family, all while a crumbling fortress nation fights for its last breath behind walls that were never meant to keep its own people in."
    ],
  },
];

export const certificates: Certificate[] = [
  {
    slug: "google-project-management-specialization",
    title: "Google Project Management Specialization",
    issuer: "Google / Coursera",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Google Project Management Specialization.jpg",
    pdfFile: "/certificates/google-project-management-specialization.pdf",
    featuredOnHome: true,
    summary:
      "Comprehensive project management certification covering foundational concepts, methodologies, and practical applications for effective project leadership.",
    details: [
      "The specialization provided a structured learning path through key project management principles, including scope, schedule, and stakeholder management.",
      "The curriculum included real-world case studies and practical exercises to apply concepts in simulated project scenarios.",
      "This credential supports a strong foundation in project management, complementing technical experience with formalized knowledge and best practices.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
   {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  },
  {
    slug: "architecting-on-aws-(building-cloud-architecture-on-aws)",
    title: "Architecting on AWS (Building Cloud Architecture on AWS)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).jpg",
    pdfFile: "/certificates/Architecting on AWS (Building Cloud Architecture on AWS).pdf",
    featuredOnHome: true,
    summary:
      "Cloud architecture certification focused on designing scalable, secure, and cost-effective solutions using AWS services.",
    details: [
      "This certification path provided foundational knowledge in cloud architecture principles and AWS service offerings.",
      "The curriculum covered key topics such as designing for scalability, security best practices, and cost optimization strategies on AWS.",
      "This credential supports a broader understanding of cloud infrastructure, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.coursera.org/account/accomplishments/specialization/3Z5K9Z6L2Z5C",
  }
];

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
export const storyBySlug = new Map(stories.map((story) => [story.slug, story]));
export const certificateBySlug = new Map(
  certificates.map((certificate) => [certificate.slug, certificate]),
);

export const projectSlugByTitle = new Map(
  projects.map((project) => [project.title, project.slug]),
);
export const storySlugByTitle = new Map(stories.map((story) => [story.title, story.slug]));
