import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { CommandPalette } from './components/ui/CommandPalette';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { TechMarquee } from './components/sections/TechMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { StatsSection } from './components/sections/StatsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { BlogSection } from './components/sections/BlogSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';

import { ResumeViewerModal } from './components/modals/ResumeViewerModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';

import { Project } from './data/projectsData';

export const App: React.FC = () => {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleToggleCmdK = () => setIsCmdKOpen((prev) => !prev);
    window.addEventListener('toggle-cmd-k', handleToggleCmdK);

    return () => {
      lenis.destroy();
      window.removeEventListener('toggle-cmd-k', handleToggleCmdK);
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Toast Notification Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Session-based Preloader Screen */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCmdKOpen}
        onClose={() => setIsCmdKOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* App Container */}
      <div className="min-h-screen bg-[#050816] text-[#F9FAFB] selection:bg-[#FF6B57]/30 selection:text-[#FFE5D9] relative font-sans antialiased">
        {/* Floating Glass Navbar */}
        <Navbar
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCmdK={() => setIsCmdKOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <TechMarquee />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection onOpenCaseStudy={(proj) => setSelectedProject(proj)} />
          <ExperienceSection />
          <AchievementsSection />
          <StatsSection />
          <ServicesSection />
          <BlogSection />
          <FAQSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <ResumeViewerModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;

