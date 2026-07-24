# 🚀 Shubham Raj — Luxury Developer Portfolio

> **Production-Ready Developer Portfolio** built for **Shubham Raj**, Final Year Computer Science Engineer at **VIT Bhopal** (CGPA: 8.86). Inspired by design engineering standards from Apple, OpenAI, Vercel, and Linear.

![Portfolio Banner](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React 19](https://img.shields.io/badge/React-19.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-purple)

---

## 🌟 Key Highlights & Design Architecture

- **Luxury Aesthetics**: Dark mode default (`#050816`), glassmorphism cards, ambient radial glowing blobs, subtle borders, and HSL gradients.
- **Session-Based Preloader**: Sleek animated logo preloader that executes once per browser session using `sessionStorage`.
- **Custom Magnetic Cursor**: Spring-physics magnetic cursor that tracks interactive buttons and links.
- **3D Hero Background**: Interactive Three.js R3F particle sphere canvas responding to mouse motion.
- **Resume Integration**:
  - **1-Click Resume Download** (`/resume/resume.pdf`) with celebratory confetti burst.
  - **Inline Executive Resume Viewer Modal** for instant recruiter preview without navigating away.
- **Project Case Studies**:
  - **VitalVision** (AI Risk Scheduler — Round 2 Health-Hack 2025).
  - **NyayMitra** (AI Legal Assistant — 70% faster legal information retrieval).
  - Dynamic Live Demo status indicators showing `"Coming Soon"` for placeholder URLs (`#`).
- **Contact Engine with Anti-Spam**:
  - Connected to EmailJS with full validation (`react-hook-form`).
  - Cooldown timer to prevent rapid duplicate message submissions.
  - Custom toast notifications (`react-hot-toast`).
- **SEO & Accessibility**:
  - `sitemap.xml`, `robots.txt`, OpenGraph metadata, Twitter Cards, and structured `JSON-LD` (`Person` & `WebSite` schema).
  - Responsive keyboard shortcuts, ARIA labels, and high contrast mode compatibility.

---

## 📁 Directory Architecture

```
d:/Antigravity/
├── public/
│   ├── resume/
│   │   └── resume.pdf                 # Replace this file with your updated PDF
│   ├── favicon.svg
│   ├── robots.txt                     # SEO search engine rules
│   └── sitemap.xml                    # Sitemap configuration
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroCanvas.tsx         # Three.js particle canvas background
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Glass floating navbar with theme toggle
│   │   │   ├── Footer.tsx             # Dark luxury footer
│   │   │   └── ScrollProgress.tsx     # Top progress indicator
│   │   ├── ui/
│   │   │   ├── Preloader.tsx          # Session-persisted animated logo screen
│   │   │   ├── CustomCursor.tsx       # Magnetic custom cursor
│   │   │   ├── GlassCard.tsx          # Glass panel container with tilt & glow
│   │   │   ├── MagneticButton.tsx     # Framer motion magnetic button wrapper
│   │   │   ├── CodeWindow.tsx         # IDE typing animation code editor
│   │   │   ├── SectionHeader.tsx      # Reusable gradient section headers
│   │   │   └── Modal.tsx              # Accessible glass backdrop modal
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Dynamic headline, typing phrases, stats
│   │   │   ├── AboutSection.tsx       # Story, values & academic timeline
│   │   │   ├── SkillsSection.tsx      # Skill meters across 7 categories
│   │   │   ├── ProjectsSection.tsx    # Project cards with Live Demo & Case Studies
│   │   │   ├── ExperienceSection.tsx  # Timeline for Hacktoberfest & Codsoft
│   │   │   ├── AchievementsSection.tsx# Stat counters (LeetCode, NSS, Chegg)
│   │   │   ├── CertificatesSection.tsx# Certification grid & preview triggers
│   │   │   └── ContactSection.tsx     # Info cards & EmailJS contact form
│   │   └── modals/
│   │       ├── ProjectDetailModal.tsx # Full technical case study popup
│   │       ├── CertificateModal.tsx   # Certificate preview popup
│   │       └── ResumeViewerModal.tsx  # In-browser executive PDF viewer
│   ├── context/
│   │   └── ThemeContext.tsx           # Light/Dark theme manager with localStorage
│   ├── data/
│   │   ├── profileData.ts             # Personal bio, contact info & metrics
│   │   ├── skillsData.ts              # Categorized technical skills
│   │   ├── projectsData.ts            # Detailed project case studies
│   │   ├── experienceData.ts          # Work & open-source history
│   │   ├── achievementsData.ts        # Quantifiable milestones
│   │   └── certificatesData.ts        # Verified certificate credentials
│   ├── hooks/
│   │   ├── useContactForm.ts          # EmailJS form submission + anti-spam
│   │   └── useScrollPosition.ts       # Active section & scroll offset
│   ├── lib/
│   │   ├── email.ts                   # EmailJS browser service wrapper
│   │   └── utils.ts                   # Tailwind class merger
│   ├── styles/
│   │   └── globals.css                # Luxury theme tokens & keyframes
│   ├── App.tsx                        # Root container & Lenis provider
│   └── main.tsx                       # React 19 mounting root
├── .env.example                       # EmailJS credentials template
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Install Dependencies
Run the following command in the project root directory:

```bash
npm install
```

### 3. Start Development Server
Launch the Vite local dev server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

---

## 🔑 How to Update EmailJS Credentials

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail) and copy your **Service ID**.
3. Create an **Email Template** with variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, and copy your **Template ID**.
4. Navigate to **Account Settings > Public Key** and copy your **Public Key**.
5. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

6. Paste your credentials into `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

---

## 📄 How to Replace Your Resume PDF

To update the downloadable resume:
1. Export your latest resume as a PDF file named `resume.pdf`.
2. Replace the file at `/public/resume/resume.pdf`.
3. Clicking **Download Resume** on the portfolio will automatically download your updated file!

---

## 🔗 How to Update Live Demo Links

To update or add live demo links for projects:
1. Open `src/data/projectsData.ts`.
2. Locate the project object (e.g., `vitalvision` or `nyaymitra`).
3. Replace `liveDemoUrl: "#"` with your live deployment URL (e.g., `liveDemoUrl: "https://vitalvision.vercel.app"`).
4. The `"Coming Soon"` badge will automatically disappear and redirect users directly to your live demo!

---

## ➕ How to Add New Projects, Skills, or Certificates

Everything is completely decoupled into clean TypeScript data models inside `src/data/`:

- **Add a Project**: Add a new object to `projectsData` in `src/data/projectsData.ts`.
- **Add a Skill**: Edit `skillsData` in `src/data/skillsData.ts`.
- **Add Experience**: Append to `experienceData` in `src/data/experienceData.ts`.
- **Add a Certificate**: Append to `certificatesData` in `src/data/certificatesData.ts`.

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Set Build Command: `npm run build`
5. Set Output Directory: `dist`
6. Add Environment Variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).
7. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Connect your repository.
4. Set Build Command: `npm run build` and Publish Directory: `dist`.
5. Add environment variables under **Site configuration > Environment variables**.
6. Click **Deploy Site**.

---

## ⚡ Performance Optimization

- **Bundle Chunking**: Split vendor dependencies (Three.js, Framer Motion, React Icons) in `vite.config.ts`.
- **Lazy Loading**: Three.js hero canvas and heavy modals are loaded dynamically using `React.lazy` and `Suspense`.
- **Lighthouse Rating Target**: 95+ performance, accessibility, best practices, and SEO score.
