import OrbitingCirclesMobile from "./OrbitingCirclesMobile";
import OrbitingCirclesDesktop from "./OrbitingCirclesDesktop";

function SkillsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 flex gap-10 ">
        <OrbitingCirclesMobile />
        <OrbitingCirclesDesktop />
      </div>
    </section>
  );
}

export default SkillsSection;
