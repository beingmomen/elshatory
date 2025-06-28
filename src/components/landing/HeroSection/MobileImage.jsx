import heroImage from "../../../assets/hero.webp";

function DesktopImage() {
  return (
    <div className="hero-img flex justify-center w-2xs  aspect-square rounded-[28px] rotate-[4.29deg] hover:rotate-0 border-2 border-white hover:border-pro-50 transition-transform duration-300">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={heroImage}
        alt="hero"
      />
    </div>
  );
}

export default DesktopImage;
