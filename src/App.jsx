import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/landing/HeroSection";
import SkillsSection from "./components/landing/SkillsSection";
import ServicesSection from "./components/landing/ServicesSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import ProjectsSection from "./components/landing/ProjectsSection";

function App() {
  return (
    <div className="bg-slate-900 h-[5000px] space-y-14">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
