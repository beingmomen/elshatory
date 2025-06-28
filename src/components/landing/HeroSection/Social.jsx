import SkillIconsLinkedin from "@icons/SkillIconsLinkedin";
import SkillIconsGithubDark from "@icons/SkillIconsGithubDark";
import Qabilah from "@icons/qabilah.svg";
import LucideDownload from "@icons/LucideDownload";

function Social() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <SkillIconsLinkedin className="text-4xl" />
      <SkillIconsGithubDark className="text-4xl" />
      <img src={Qabilah} alt="qabilah" className="w-9" />
      <button className="flex gap-3 items-center rounded-full ring-1 ring-sky-500 py-3 px-4 text-sky-500 font-bold text-xl leading-none cursor-pointer hover:bg-sky-500/10 transition-all duration-300">
        تحميل السيرة الذاتية
        <LucideDownload />
      </button>
    </div>
  );
}

export default Social;
