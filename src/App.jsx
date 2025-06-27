import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/landing/HeroSection";
import SkillsSection from "./components/landing/SkillsSection";
import ServicesSection from "./components/landing/ServicesSection";

function App() {
  return (
    <div className="bg-slate-900 h-[5000px] space-y-14">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
    </div>
  );
}

export default App;
