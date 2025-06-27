import Welcome from "./Welcome";
import DesktopImage from "./DesktopImage";
import Info from "./Info";
import Social from "./Social";
import Contact from "./Contact";

function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-4 flex gap-10">
        <div className="space-y-10 flex-1">
          <Welcome />
          <h1 className="text-6xl font-bold text-sky-400">عبدالمؤمن الشطوري</h1>
          <Info />
          <p class="text-xl mb-8 text-white">
            أنا لست مجرد مطور، بل شريك في نجاحك. دعنا نحول أفكارك إلى تجارب ويب
            تفاعلية تترك انطباعًا لا يُنسى.{" "}
          </p>
          <Social />
          <Contact />
        </div>
        <div className=" hidden lg:flex justify-center items-center flex-1">
          <DesktopImage />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
