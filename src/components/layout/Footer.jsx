function Footer() {
  return (
    <footer className="pb-10">
      <div className="container mx-auto px-4 ring-1 ring-slate-600 rounded-md py-8 bg-slate-950/20 flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
          <p className="text-center text-slate-200 text-2xl">&copy; 2025</p>
          <p className="text-center text-sky-400 text-4xl font-bold">
            عبدالمؤمن الشطوري
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          {social.map((social) => (
            <img className="w-9" src={social.img} alt={social.name} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import qabilah from "@icons/qabilah.svg";

const social = [
  {
    name: "linkedin",
    img: "https://api.iconify.design/skill-icons:linkedin.svg",
  },
  {
    name: "github",
    img: "https://api.iconify.design/skill-icons:github-dark.svg",
  },
  {
    name: "linkedin",
    img: qabilah,
  },
  {
    name: "twitter",
    img: "https://api.iconify.design/skill-icons:twitter.svg",
  },
  {
    name: "facebook",
    img: "https://api.iconify.design/devicon:facebook.svg",
  },
  {
    name: "github",
    img: "https://api.iconify.design/skill-icons:instagram.svg",
  },
];
