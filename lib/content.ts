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
    slug: "Verba",
    title: "Verba — Mobile Indonesian Language Learning App",
    summary:
     "Mobile Indonesian Language Learning App built with swift, designed to provide an engaging and effective platform for mastering Indonesian vocabulary and grammar through interactive lessons, quizzes, and personalized learning paths.",
    tags: ["Swift", "SwiftUI", "SQLite", "Node.js","Express","NextJS", "postgreSQL", "AWS", "Mobile Development"],
    year: "2026",
    role: "Solo Developer",
    featuredOnHome: true,
    externalUrl: "https://github.com/Hizrawan",
    details: [
      "Designed and developed a mobile application focused on Indonesian language learning, utilizing Swift and SwiftUI for a native iOS experience.",
      "Implemented interactive lessons, quizzes, and personalized learning paths to enhance user engagement and retention.",
      "Used SQLite for local data storage and NextJS with PostgreSQL for administrator page, and node js with express js for backend services, deployed on AWS for scalability and reliability.",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "Personal portfolio website built with Next.js and TypeScript, showcasing projects, skills, and experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","raspberry pi", "Linux", "Web Development"],
    year: "2026",
    role: "Solo Developer",
    featuredOnHome: true,
    details: [
      "Designed and developed a personal portfolio website using Next.js and TypeScript, with a focus on clean design and responsive layout.",
      "Implemented dynamic content rendering and optimized performance for fast load times.",
      "Deployed the website on a Raspberry Pi, demonstrating proficiency in edge computing and self-hosting solutions.",
    ],
  },
  {
    slug: "siakang",
    title: "Mobile Attendance recording system for PT LAPI Divusi (SI-AKANG)",
    summary:
      "Cross-platform mobile application built with React Native during internship, including UI implementation and REST API integration.",
    tags: ["React Native", "JavaScript", "REST API"],
    year: "2017",
    role: "Programmer Intern",
    featuredOnHome: false,
    details: [
      "Contributed to mobile UI development, interaction flows, and integration with backend endpoints.",
      "Worked in a mentorship environment with iterative testing and bug-fix cycles to strengthen delivery quality.",
      "Built a practical foundation in product collaboration and real-world mobile engineering practices.",
    ],
  },
  {
    slug: "aplikasi-penerjemah-bahasa-isyarat-indonesia",
    title: "Indonesian Sign Language Translation App",
    summary:
    "using python opencv and cnn to create a real-time sign language translation app, designed to facilitate communication for the deaf and hard of hearing community by translating Indonesian Sign Language (BISINDO) into text or speech.",    
    tags: ["Python", "openCV", "CNN", "pyQT"],
    year: "2018",
    role: "Solo Developer",
    featuredOnHome: false,
    details: [
    "associate degree final project that involved designing and implementing a real-time sign language translation application using Python, OpenCV, and Convolutional Neural Networks (CNN).",
    "The application was developed to facilitate communication for the deaf and hard of hearing community by translating Indonesian Sign Language (BISINDO) into text or speech.",
    "The project included data collection, model training, and integration of the translation functionality into a user-friendly interface using pyQT.", 
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
    externalUrl: "https://coursera.org/share/e614cf7042e1902e9fe855d633428bbc",
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
    slug: "google-data-analytics-specialization",
    title: "Google Data Analytics Specialization",
    issuer: "Google / Coursera",
    year: "2021",
    status: "Completed",
    imageFile: "/certificates/Google Data Analytics Specialization.jpg",
    pdfFile: "/certificates/google-data-analytics-specialization.pdf",
    featuredOnHome: true,
    summary:
      "Data analytics certification focused on extracting insights and making data-driven decisions using Google's tools and methodologies.",
    details: [
      "This certification path provided foundational knowledge in data analysis principles and Google's data analytics tools.",
      "The curriculum covered key topics such as data cleaning, visualization, and statistical analysis using Google's platform.",
      "This credential supports a broader understanding of data analytics, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://coursera.org/share/3beeb99f2ac5d164e3f183cbb1bb2c56",
  },
   {
    slug: "entrepreneurship-specialization",
    title: "Entrepreneurship Specialization",
    issuer: "University of Pennsylvania / Coursera",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Entrepreneurship Specialization.jpg",
    pdfFile: "/certificates/Entrepreneurship Specialization.pdf",
    featuredOnHome: false,
    summary:
      "Entrepreneurship certification covering key concepts and practical skills for launching and managing successful ventures.", 
    details: [
      "The specialization provided a comprehensive overview of entrepreneurship principles, including opportunity recognition, business model development, and funding strategies.",
      "The curriculum included case studies and practical exercises to apply concepts in real-world entrepreneurial scenarios.",
      "This credential supports a strong foundation in entrepreneurship, complementing project management and technical skills with business acumen and innovation strategies.",
    ],
    externalUrl: "https://coursera.org/share/7cfae6b31dd3ca11c2d46e1c7878f082",
  },
  {
    slug: "beginner-back-end-learning-with-javascript",
    title: "Beginner Back-End Learning with JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Beginner Back-End Learning with JavaScript.jpg",
    pdfFile: "/certificates/Beginner Back-End Learning with JavaScript.pdf",
    featuredOnHome: false,
    summary:
      "Back-end development certification focused on learning JavaScript for building server-side applications.",
    details: [
      "This certification path provided foundational knowledge in JavaScript and back-end development principles.",
      "The curriculum covered key topics such as Node.js, Express.js, database integration, and API development.",
      "This credential supports a broader understanding of back-end technologies, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/07Z6JNG0JXQR",
  },
  {
    slug: "getting-started-with-swift-programming",
    title: "Getting Started Programming With Swift",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Getting Started Programming With Swift.jpg",
    pdfFile: "/certificates/Getting Started Programming With Swift.pdf",
    featuredOnHome: false,
    summary:
      "Programming certification focused on learning the Swift programming language, covering fundamental concepts and practical applications for building modern applications.",
    details: [
      "This certification path provided foundational knowledge in Swift programming principles and modern development practices.",
      "The curriculum covered key topics such as variables, functions, object-oriented programming, and asynchronous programming in Swift.",
      "This credential supports a broader understanding of programming languages, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/53XEK263VXRN",
  },
  {
    slug: "getting-started-with-dart-programming",
    title: "Getting Started with Dart Programming",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Getting Started with Dart Programming.jpg",
    pdfFile: "/certificates/Getting Started with Dart Programming.pdf",
    featuredOnHome: false,
    summary:
     "Programming certification focused on learning the Dart programming language, covering fundamental concepts and practical applications for building modern applications.",
    details: [
      "This certification path provided foundational knowledge in Dart programming principles and modern development practices.",
      "The curriculum covered key topics such as variables, functions, object-oriented programming, and asynchronous programming in Dart.",
      "This credential supports a broader understanding of programming languages, which complements project management skills in technology-focused projects.",
     
    ],
    externalUrl: "https://www.dicoding.com/certificates/JMZVVGLJRZN9",
  },
  {
    slug: "learn-cloud-basics-and-gen-ai-on-aws",
    title: "Learn Cloud Basics and Gen AI on AWS",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Learn Cloud Basics and Gen AI on AWS.jpg",
    pdfFile: "/certificates/Learn Cloud Basics and Gen AI on AWS.pdf",
    featuredOnHome: true,
    summary:
      "Cloud computing and generative AI certification covering foundational concepts and practical applications of cloud services and AI technologies on AWS.",
    details: [
      "This certification path provided foundational knowledge in cloud computing principles and generative AI concepts, with a focus on AWS services.",
      "The curriculum covered key topics such as cloud infrastructure, AI model training, and deployment strategies for generative AI applications on AWS.",
      "This credential supports a broader understanding of cloud and AI technologies, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/0LZ05LJ63X65",
  },
  {
    slug: "learn-javascript-programming-basics",
    title: "Learn JavaScript Programming Basics",
    issuer: "Dicoding Indonesia",
    year: "2024",
    status: "Completed",
    imageFile: "/certificates/Learn JavaScript Programming Basics.jpg",
    pdfFile: "/certificates/Learn JavaScript Programming Basics.pdf",
    featuredOnHome: false,
    summary:
      "JavaScript programming certification covering fundamental concepts and skills for building web applications.",
    details: [
      "This certification path provided foundational knowledge in JavaScript programming principles and modern development practices.",
      "The curriculum covered key topics such as variables, functions, DOM manipulation, and asynchronous programming in JavaScript.",
      "This credential supports a broader understanding of web development, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/KEXL2KD6WZG2",
  },
  {
    slug: "learn-basics-of-mobile-application-development",
    title: "Learn the Basics of Mobile Application Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    status: "Completed",
    imageFile: "/certificates/Learn the Basics of Mobile Application Development.jpg",
    pdfFile: "/certificates/Learn the Basics of Mobile Application Development.pdf",
    featuredOnHome: false,
    summary:
      "Mobile app development certification covering fundamental concepts and skills for building native applications on Android and iOS platforms.",
    details: [
      "This certification path provided foundational knowledge in mobile app development principles and native development frameworks.",
      "The curriculum covered key topics such as user interface design, app functionality, and deployment strategies for both Android and iOS platforms.",
      "This credential supports a broader understanding of mobile development, which complements project management skills in technology-focused projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/QLZ96W047Z5D",
  },
  {
    slug: "learn-to-create-flutter-apps-for-beginners",
    title: "Learn to Create Flutter Apps for Beginners",
    issuer: "Dicoding Indonesia",
    year: "2025",
    status: "Completed",
    imageFile: "/certificates/Learn to Create Flutter Apps for Beginners.jpg",
    pdfFile: "/certificates/Learn to Create Flutter Apps for Beginners.pdf",
    featuredOnHome: false,
    summary:
      "Mobile app development certification focused on building cross-platform applications using Flutter framework.",
    details: [
      "This certification provided foundational knowledge in Flutter development, covering core concepts, widgets, and state management.",
      "The curriculum included hands-on projects to apply Flutter skills in real-world app development scenarios.",
      "This credential supports a broader skill set in mobile development, complementing project management and cloud architecture knowledge for technology projects.",
    ],
    externalUrl: "https://www.dicoding.com/certificates/EYX4K23M6PDL",
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
