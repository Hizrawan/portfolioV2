export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  role: string;
  detailType: "article" | "pdf";
  featuredOnHome?: boolean;
  externalUrl?: string;
  pdfFile?: string;
  gallery?: {
    title: string;
    description: string;
    imageFile?: string;
  }[];
  details: string[];
};

export type Story = {
  slug: string;
  title: string;
  type: string;
  status: string;
  readTime: string;
  excerpt: string;
  detailType: "blog" | "novel";
  imageFile?: string;
  pdfFile?: string;
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
    detailType: "article",
    featuredOnHome: true,
    externalUrl: "https://github.com/Hizrawan",
    gallery: [
      {
        title: "Mobile learning flow",
        description: "A focused lesson path for vocabulary, grammar practice, and daily study rhythm.",
      },
      {
        title: "Admin dashboard",
        description: "Next.js and PostgreSQL support content management for lessons and progress data.",
      },
      {
        title: "Cloud backend",
        description: "Express services deployed on AWS handle synchronization and API operations.",
      },
      {
        title: "Quiz interaction",
        description: "Practice sessions are structured around short feedback loops and repeatable review.",
      },
      {
        title: "Progress tracking",
        description: "Learning progress gives users a quick view of completed material and next steps.",
      },
    ],
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
    detailType: "article",
    featuredOnHome: true,
    gallery: [
      {
        title: "Portfolio home",
        description: "Snap-based sections keep the landing page readable while preserving a strong visual identity.",
      },
      {
        title: "Content pages",
        description: "Projects, certificates, and stories use reusable layouts for consistent navigation.",
      },
      {
        title: "Self-hosted deploy",
        description: "The site is prepared for Raspberry Pi deployment as an edge computing experiment.",
      },
      {
        title: "Responsive cards",
        description: "Reusable card layouts keep projects, certificates, and stories consistent across screens.",
      },
    ],
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
    detailType: "article",
    featuredOnHome: false,
    gallery: [
      {
        title: "Attendance flow",
        description: "Mobile screens supported day-to-day attendance recording for field and office users.",
      },
      {
        title: "API integration",
        description: "REST API calls connected the React Native client to existing company systems.",
      },
    ],
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
    detailType: "pdf",
    pdfFile: "/projects/aplikasi-penerjemah-bahasa-isyarat-indonesia.pdf",
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
    detailType: "novel",
    imageFile: "/stories/dalang.png",
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
    detailType: "novel",
    imageFile: "/stories/wayang.png",
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
    title: "Deploying a Web App on Raspberry Pi 5 ",
    type: "Blog · Homelab",
    status: "Completed",
    readTime: "14 min read",
    detailType: "blog",
    imageFile: "/stories/raspberry-pi-cover.svg",
    pdfFile: "/stories/blog1.pdf",
    featuredOnHome: true,
    excerpt:
      "Catatan praktis tentang cara saya menyiapkan Raspberry Pi 5 8GB sebagai server kecil di rumah, memakai domain dari Rumahweb dan Cloudflare Tunnel agar web app bisa diakses publik tanpa membuka port router.",
    details: [
      "## Overview",
      "Setup ini cocok untuk portfolio, blog statis, dashboard pribadi, atau app kecil yang tidak membutuhkan server besar. Raspberry Pi 5 8GB cukup kuat untuk menjalankan Nginx, build ringan, dan beberapa service pendukung selama resource-nya dijaga.",
      "Arsitekturnya sederhana: domain dibeli di Rumahweb, DNS dikelola Cloudflare, traffic publik masuk melalui Cloudflare Tunnel, lalu diteruskan ke Nginx lokal di Raspberry Pi. Dengan cara ini router rumah tidak perlu port forwarding.",
      "Security note: Artikel ini sengaja tidak mencantumkan credential, token tunnel, API key, IP publik pribadi, atau nilai rahasia lain. Semua contoh memakai placeholder seperti example.com, portfolio, dan nama service generik.",
      "## Prerequisites",
      "Siapkan Raspberry Pi 5 8GB dengan Raspberry Pi OS 64-bit, akses SSH, koneksi internet stabil, domain aktif di Rumahweb, akun Cloudflare, repository web app, Node.js LTS, Git, Nginx, dan cloudflared.",
      "Untuk web app Next.js statis seperti portfolio ini, output build bisa disalin ke folder Nginx. Kalau aplikasinya butuh API runtime, jalankan app dengan process manager seperti PM2 dan arahkan tunnel ke port aplikasi tersebut.",
      "## Step-by-step deployment",
      "Step 1: Update Raspberry Pi OS - Login via SSH, update package list, lalu reboot jika kernel atau package penting ikut diperbarui.",
      "Command:\nsudo apt update\nsudo apt full-upgrade -y\nsudo reboot",
      "Step 2: Install dependency dasar - Pasang Git, Nginx, curl, dan tools yang dibutuhkan untuk mengambil source code serta menjalankan web server lokal.",
      "Command:\nsudo apt install -y git nginx curl ca-certificates",
      "Step 3: Install Node.js LTS - Gunakan Node.js LTS agar build Next.js stabil. Versi persisnya bisa mengikuti kebutuhan project, tetapi hindari versi terlalu lama.",
      "Command:\ncurl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt install -y nodejs\nnode -v\nnpm -v",
      "Step 4: Hubungkan domain Rumahweb ke Cloudflare - Tambahkan domain ke Cloudflare, salin nameserver yang diberikan Cloudflare, lalu ubah nameserver domain di panel Rumahweb. Tunggu sampai status domain di Cloudflare aktif.",
      "Step 5: Siapkan DNS record - Di Cloudflare DNS, buat record untuk root domain atau subdomain yang akan dipakai. Jika memakai Cloudflare Tunnel, record publik biasanya dibuat otomatis oleh tunnel, jadi hindari membuat record manual yang berisi IP rumah.",
      "Step 6: Clone project ke Raspberry Pi - Simpan source code di folder yang rapi, misalnya di home directory user deploy. Jangan commit file .env, credential, token tunnel, atau private key ke repository.",
      "Command:\ngit clone https://github.com/username/repository-name.git ~/apps/portfolio\ncd ~/apps/portfolio\nnpm ci",
      "Step 7: Build website - Untuk project ini, script deploy:prepare menjalankan build Next.js lalu menyiapkan folder deploy yang siap disajikan oleh Nginx.",
      "Command:\nnpm run deploy:prepare",
      "Step 8: Publish hasil build ke Nginx - Buat folder web root, salin isi folder deploy, lalu pastikan Nginx bisa membaca file tersebut.",
      "Command:\nsudo mkdir -p /var/www/portfolio\nsudo rsync -a --delete deploy/ /var/www/portfolio/\nsudo chown -R www-data:www-data /var/www/portfolio",
      "Step 9: Buat konfigurasi Nginx lokal - Nginx cukup mendengarkan localhost karena akses publik akan lewat Cloudflare Tunnel, bukan langsung dari internet.",
      "Config:\nserver {\n  listen 127.0.0.1:8080;\n  server_name localhost;\n  root /var/www/portfolio;\n  index index.html;\n\n  location / {\n    try_files $uri $uri.html $uri/ =404;\n  }\n}",
      "Step 10: Aktifkan site Nginx - Simpan konfigurasi di sites-available, aktifkan symlink ke sites-enabled, test config, lalu reload Nginx.",
      "Command:\nsudo nano /etc/nginx/sites-available/portfolio\nsudo ln -sfn /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio\nsudo nginx -t\nsudo systemctl reload nginx\ncurl -I http://127.0.0.1:8080",
      "Step 11: Install cloudflared - Install cloudflared dari dokumentasi resmi Cloudflare untuk arsitektur Raspberry Pi. Setelah itu login melalui browser dan buat tunnel untuk domain atau subdomain yang diinginkan.",
      "Command:\nsudo mkdir -p --mode=0755 /usr/share/keyrings\ncurl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null\necho \"deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main\" | sudo tee /etc/apt/sources.list.d/cloudflared.list\nsudo apt update\nsudo apt install -y cloudflared\ncloudflared tunnel login\ncloudflared tunnel create portfolio",
      "Step 12: Arahkan tunnel ke Nginx lokal - Konfigurasikan public hostname di Cloudflare Zero Trust agar example.com atau www.example.com mengarah ke service http://127.0.0.1:8080.",
      "Command:\ncloudflared tunnel route dns portfolio example.com\ncloudflared tunnel route dns portfolio www.example.com",
      "Config:\ntunnel: portfolio\ncredentials-file: /home/deploy/.cloudflared/<tunnel-id>.json\n\ningress:\n  - hostname: example.com\n    service: http://127.0.0.1:8080\n  - hostname: www.example.com\n    service: http://127.0.0.1:8080\n  - service: http_status:404",
      "Step 13: Jalankan tunnel sebagai service - Install tunnel sebagai systemd service supaya otomatis hidup lagi setelah Raspberry Pi restart. Simpan token dan credential tunnel di lokasi aman dengan permission terbatas.",
      "Command:\nsudo mkdir -p /etc/cloudflared\nsudo cp ~/.cloudflared/config.yml /etc/cloudflared/config.yml\nsudo cloudflared service install\nsudo systemctl enable --now cloudflared\nsudo systemctl status cloudflared",
      "Step 14: Test dari jaringan luar - Buka domain dari mobile data atau jaringan lain. Pastikan halaman tampil, asset CSS/JS termuat, dan tidak ada mixed content atau redirect loop.",
      "## Operational checklist",
      "Setelah deploy berhasil, cek status Nginx dan cloudflared, pantau suhu Raspberry Pi, pastikan storage tidak hampir penuh, dan lakukan update OS secara berkala. Untuk Raspberry Pi 5, pendinginan yang baik membantu performa tetap stabil.",
      "Untuk update berikutnya, alurnya cukup pull source terbaru, install dependency jika berubah, build ulang, salin folder deploy ke /var/www/portfolio, lalu reload Nginx bila perlu.",
      "Command:\ncd ~/apps/portfolio\ngit pull\nnpm ci\nnpm run deploy:prepare\nsudo rsync -a --delete deploy/ /var/www/portfolio/",
      "## Security notes",
      "Jangan membuka port 80 atau 443 dari router jika tidak perlu. Cloudflare Tunnel bekerja dengan koneksi outbound dari Raspberry Pi, sehingga permukaan serangan di jaringan rumah bisa lebih kecil.",
      "Jangan menaruh credential di artikel, repository publik, commit history, screenshot terminal, atau file deploy. Gunakan environment variable dan file permission yang ketat untuk token, password, dan private key.",
      "Aktifkan 2FA di Cloudflare dan akun registrar, gunakan SSH key dibanding password login, batasi user yang punya akses sudo, dan backup konfigurasi penting tanpa menyertakan secret.",
      "## Closing",
      "Dengan kombinasi Rumahweb, Cloudflare Tunnel, dan Raspberry Pi 5 8GB, sebuah web app kecil bisa berjalan dari rumah dengan biaya rendah tetapi tetap rapi. Kuncinya adalah memisahkan DNS, tunnel, web server lokal, dan proses deploy sehingga setiap bagian mudah dicek saat terjadi masalah.",
    ],
  },
  {
    slug: "novel-3-pewayangan-bayang",
    title: "BAYANG",
    type: "Novel",
    status: "Coming soon",
    readTime: "28 chapters",
    detailType: "novel",
    imageFile: "/stories/bayang.png",
    pdfFile: "/stories/bayang.pdf",
    featuredOnHome: false,
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
