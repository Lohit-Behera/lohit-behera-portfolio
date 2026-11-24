// Single source of truth for site + PDF content.
// Hosted on GitHub Pages as a project site (repo: Lohit-Behera/lohit-behera-portfolio).
// Keep in sync with `site` + `base` in astro.config.mjs. No trailing slash.
export const SITE_URL = 'https://lohit-behera.github.io/lohit-behera-portfolio';

export const person = {
  name: 'Lohit Sekhar Behera',
  shortName: 'Lohit Behera',
  title: 'Full Stack & AI Engineer',
  tagline: 'Full Stack Engineer specializing in AI Systems, LLM Pipelines, and Desktop Apps.',
  oneLiner:
    'I build AI features that read your documents, web apps your team uses every day, and native iOS and Android apps, from first prototype to production.',
  location: 'Bhubaneswar, India',
  timezone: 'IST (UTC+5:30)',
  email: 'lohitbehera.dev@gmail.com',
  github: 'https://github.com/Lohit-Behera',
  linkedin: 'https://www.linkedin.com/in/lohit-sekhar-behera',
  availability: 'Available for freelance work with clients worldwide, including India.',
};

export type Product = {
  slug: string;
  name: string;
  kind: string;
  url: string;
  summary: string;
  points: string[];
  platforms: string;
  stores: { label: string; href: string }[];
};

export const products: Product[] = [
  {
    slug: 'bhandar',
    name: 'Bhandar',
    kind: 'GST billing & inventory for Indian shops',
    url: 'https://bhandar.asemita.com',
    summary:
      'Stock, GST bills and daily sales in one place for kirana, medical, grocery, retail and wholesale shops.',
    points: [
      'GST orders and invoices with CGST/SGST or IGST split automatically; A4 PDF bills',
      'Inventory with low-stock alerts, suppliers, purchases, customers and staff in sync',
      'Sales, expenses and cash-flow reports with Excel export',
      'Video guides in English, Hindi and Odia',
    ],
    platforms: 'Web · native iOS · native Android',
    stores: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/bhandar/id6787615837' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.asemita.bhandar' },
    ],
  },
  {
    slug: 'easeva',
    name: 'EASEVA',
    kind: 'Home-services booking marketplace',
    url: 'https://easeva.asemita.com',
    summary:
      'Book home cleaning from local partners with one fixed price per service, while professionals keep the whole job price with zero commission.',
    points: [
      'Customer booking flow: pick a service and time, see the full total (job price, platform charge, GST) before paying',
      'Partner app: accept jobs, start-code verification on arrival, in-app chat without swapping numbers',
      'Automatic refunds if no partner accepts; customers pay the partner directly after the work',
      'Separate customer and partner apps',
    ],
    platforms: 'Native iOS & Android partner app · Android & web customer app',
    stores: [
      { label: 'Google Play (customer)', href: 'https://play.google.com/store/apps/details?id=com.asemita.easeva' },
      { label: 'App Store (partner)', href: 'https://apps.apple.com/in/app/easeva-partner/id6831645363' },
      { label: 'Google Play (partner)', href: 'https://play.google.com/store/apps/details?id=com.asemita.easeva.partner' },
    ],
  },
  {
    slug: 'rachna',
    name: 'Rachna',
    kind: 'Online form builder',
    url: 'https://rachna.asemita.com',
    summary:
      'Admission, registration, survey and feedback forms built in minutes, shared as one link, with answers and files in one place.',
    points: [
      'Drag-and-drop builder with 23 field types, multi-page forms and required rules',
      'Responses as a searchable table with charts; CSV and Excel export',
      'Uploaded files filed per form and response, with in-app PDF, Word and Excel preview',
    ],
    platforms: 'Web · Android',
    stores: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.asemita.rachna' }],
  },
  {
    slug: 'daybook',
    name: 'Daybook',
    kind: 'Tasks, habits & private journal',
    url: 'https://daybook.asemita.com',
    summary:
      'A daily planner, habit tracker and PIN-locked journal in one calm app, with honest insights into how your days go.',
    points: [
      'Tasks with subtasks, priorities, repeat schedules and a focus timer',
      'Habit streaks that respect scheduled time off and sick days',
      'Journal with photos, voice notes and video, locked with a PIN',
    ],
    platforms: 'Web · desktop · native iOS · native Android',
    stores: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/daybook-by-asemita/id6823162952' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=app.daybook.mobile' },
    ],
  },
];

export const aiWork = [
  {
    title: 'MCP-powered AI assistant for marketing workflows',
    body:
      'An AI assistant wired into a production platform through the Model Context Protocol, automating 4 core workflows: campaign discovery, outreach, status tracking and reporting.',
    tags: ['MCP', 'LLM tools', 'Node.js', 'MongoDB'],
    metric: '4 workflows automated',
  },
  {
    title: 'RAG pipeline for long regulatory documents',
    body:
      'A LlamaIndex + ChromaDB retrieval pipeline that orchestrates multiple LLMs to generate 200-300 page pharmaceutical regulatory dossiers from source material.',
    tags: ['RAG', 'LlamaIndex', 'ChromaDB', 'Multi-LLM'],
    metric: '200–300 page documents',
  },
  {
    title: 'Financial document extraction',
    body:
      'A production pipeline that turns 3 input formats (PDF, XLSX, scanned) into standardized financial spreads across 6+ statement types (P&L, balance sheet, cash flow, shareholding, borrowing/debt, stock statements), with source-traced outputs for audit and enrichment from public sources.',
    tags: ['Python', 'Go', 'PostgreSQL', 'Next.js'],
    metric: '6+ statement types',
  },
];

export const sideProjects = [
  {
    name: 'Vadana',
    kind: 'Open-source local desktop voice assistant',
    href: 'https://github.com/Lohit-Behera/vadana',
    body:
      'Cross-platform desktop app for 3 operating systems (Windows, macOS, Linux) built with Tauri 2 (Rust + React) and a Python sidecar over WebSocket. Full voice pipeline: mic, Silero VAD, local Whisper, any LLM via LiteLLM (Ollama, LM Studio, OpenAI, Groq and more), then TTS. Offline by default, with a RAG knowledge base, SQLite chat history, OS-keychain key storage and auto-updates through GitHub Actions and Releases.',
    tags: ['Tauri 2', 'Rust', 'React', 'Python', 'Whisper', 'LiteLLM', 'RAG'],
  },
  {
    name: 'Prismatic',
    kind: 'Open-source ambient lighting app',
    href: 'https://github.com/Lohit-Behera/prismatic',
    body:
      'Tauri + Rust + React desktop app that syncs each monitor’s screen colors to its own section of a WLED LED strip in real time, with profiles, manual zones and a tray menu. Near-zero CPU when idle, about 1-2% while syncing.',
    tags: ['Tauri', 'Rust', 'React'],
  },
];

export const services = [
  {
    title: 'AI agents & LLM pipelines',
    body: 'Chatbots that answer from your documents, RAG search, document data extraction, and MCP-based tool workflows.',
    offer: 'AI chatbot over your documents (up to 50 PDFs or pages, with a website widget)',
    price: 'from $199 / ₹12,999',
    time: '~7 days',
  },
  {
    title: 'Full-stack web apps & SaaS',
    body: 'Dashboards, internal tools, booking and form systems on React/Next.js with Node.js, Python or Go backends.',
    offer: 'Landing page or one-feature web tool, built and deployed',
    price: 'from $149 / ₹9,999',
    time: '~5 days',
  },
  {
    title: 'Native iOS & Android apps',
    body: 'Mobile apps for your customers or your field team, from a clickable prototype to store release.',
    offer: '5-screen native app prototype, or one feature or fix on an existing app',
    price: 'from $249 / ₹14,999',
    time: '~7 days',
  },
  {
    title: 'Desktop apps with Tauri',
    body: 'Lightweight cross-platform desktop apps in Rust + React, including local and offline AI.',
    offer: 'Desktop app or local-AI tool, scoped together',
    price: 'Fixed quote',
    time: 'after a short call',
  },
];

export const mvpOffer = {
  title: 'Custom MVPs in 2-4 weeks, at a fixed price',
  body: 'Web, mobile, desktop or AI: we agree the scope and the price upfront, then I ship in weekly milestones you can click through. Clients worldwide, including India; prices in USD or INR.',
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages & frontend', items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'React.js', 'Next.js', 'React Native (Expo)', 'Redux', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend & data', items: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT', 'RBAC', 'WebRTC', 'WebSocket', 'MongoDB', 'PostgreSQL', 'Redis', 'ChromaDB', 'SQLite'] },
  { group: 'AI & LLM', items: ['RAG (LlamaIndex)', 'LangChain', 'LiteLLM', 'Ollama', 'MCP', 'Vector Search', 'Whisper (STT)', 'Financial Document Extraction'] },
  { group: 'Desktop, cloud & DevOps', items: ['Tauri 2 (Rust + React)', 'Microsoft Azure', 'Azure DevOps CI/CD', 'Docker', 'Git', 'GitHub Actions'] },
];

export const experience = [
  {
    role: 'Engineer',
    org: 'AI and LLM platform company',
    period: 'Sept 2026 – Present',
    points: [
      'Improve a production AI pipeline that extracts figures from financial documents (PDF, XLSX, scans) into standardized spreads covering 6+ statement types',
      'Improve extraction accuracy and performance; ship features across ingestion, automated spreading, source tracing and data enrichment in Go, Python, PostgreSQL and Next.js',
    ],
  },
  {
    role: 'Full Stack Engineer',
    org: 'Influencer-marketing tech startup',
    period: 'Mar 2025 – Aug 2026',
    points: [
      'Owned 6 production Node.js/MongoDB microservices serving 10K+ daily API requests',
      'Technical owner of the backend and AI tooling, from architecture through Azure deployment',
      'Built an MCP-integrated AI assistant and a multi-LLM RAG pipeline generating 200–300 page regulatory documents',
      'Built an orders dashboard integrating 3 courier APIs for real-time shipment tracking, with WhatsApp automation and in-browser calling',
      'Rebuilt the Android and iOS apps with React Native (Expo) and shipped WebRTC in-app calling',
    ],
  },
  {
    role: 'MERN Stack Developer Intern',
    org: 'Web design studio',
    period: 'Dec 2024 – Mar 2025',
    points: ['Built 3 full-stack MERN applications with REST API integrations and Next.js rendering optimizations'],
  },
];

export const education = [
  { degree: 'Master of Computer Applications (MCA)', school: 'Jain University', period: '2022 – 2024' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'Utkal University', period: '2019 – 2022' },
];

// Numbers from Lohit's CV (work and side projects only).
export const stats = [
  { value: '10K+', label: 'daily API requests served by production microservices I owned' },
  { value: '6', label: 'production Node.js/MongoDB microservices owned end to end' },
  { value: '200–300', label: 'page regulatory documents generated by a multi-LLM RAG pipeline' },
  { value: '6+', label: 'financial statement types extracted from PDFs, spreadsheets and scans' },
];
