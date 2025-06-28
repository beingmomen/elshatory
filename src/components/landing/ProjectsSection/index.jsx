import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold">
            مشاريعنا، قصص نجاح تُروى بفضل عملائنا.
          </p>
          <h3 className="text-6xl font-bold text-sky-400 mt-6">
            مشاريع العملاء
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

const projects = [
  {
    title: "لوحة تحكم | أكاديمية النمر الذهبي",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/asudkkdx3cvhftlrrzz1.gif",
    altText:
      "لوحة تحكم أكاديمية النمر الذهبي باستخدام Nuxt 3 و Prisma، تطوير بواسطة عبدالمؤمن الشطوري - Frontend Developer و MEVN Stack متخصص.",
    tag: "نظام ادارة محتوي",
    url: "https://tiger-academy.netlify.app",
    tags: ["Nuxt 3", "Tailwind CSS", "Prisma", "Nuxt UI", "MongoDB"],
  },
  {
    title: "أكاديمية النمر الذهبي",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/x62mtrgzhxx2z3f9g4cc.gif",
    altText:
      "موقع أكاديمية النمر الذهبي المصمم باستخدام Nuxt 3 و TailwindCss، تطوير عبدالمؤمن الشطوري - Abdelmomen Elshatory، خبير Frontend Developer.",
    tag: "موقع شركة",
    url: "https://gloden-tiger-academy.netlify.app",
    tags: ["Nuxt 3", "Tailwind CSS", "Nuxt UI", "Cloudinary"],
  },
  {
    title: "دريم تي في بلاير",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/kmzaffnvlkogvicnv0zk.gif",
    altText:
      "موقع دريم تي في بلاير بتقنيات JavaScript و jQuery، تطوير بواسطة عبدالمؤمن الشطوري - beingmomen، متخصص في تطوير الواجهات.",
    tag: "موقع شركة",
    url: "https://www.dreamplayer.org",
    tags: ["JavaScript", "Bootstrap", "Css", "jQuery", "HTML"],
  },
  {
    title: "SPIDER TV",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/ktjvyiueqlcfdy5qpjdo.gif",
    altText:
      "موقع SPIDER TV المطور باستخدام JavaScript و Bootstrap، تنفيذ عبدالمؤمن الشطوري - Elshatory، خبير في تطوير المواقع والتطبيقات.",
    tag: "موقع شركة",
    url: "https://spidertvapp.com",
    tags: ["JavaScript", "Bootstrap", "Css", "jQuery", "HTML"],
  },
  {
    title: "موقع المهندس عصام فهمي",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/iv8rhzoktiaswedzt9ez.gif",
    altText:
      "موقع المهندس عصام فهمي  المصمم باستخدام Nuxt 3 و TailwindCss، تطوير عبدالمؤمن الشطوري - Abdelmomen Elshatory، خبير Frontend Developer.",
    tag: "موقع شخصي",
    url: "https://essamfahmy.io/",
    tags: ["Nuxt 3", "Tailwind CSS", "Nuxt UI", "Cloudinary", "MongoDB"],
  },
];
