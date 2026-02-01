import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TravelSection from './components/TravelSection';
import TikTokSection from './components/TikTokSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Background mesh gradient */}
      <div className="mesh-gradient" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TravelSection />
        <TikTokSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
