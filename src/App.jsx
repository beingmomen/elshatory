import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/landing/HeroSection";

function App() {
  return (
    <div className="bg-slate-900 h-screen space-y-14">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
