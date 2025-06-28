import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
// import { File, Settings, Search } from "lucide-react";

function OrbitingCirclesDemo() {
  return (
    <div className="relative hidden  md:flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles>
        {firstOrbit.map((orbit) => (
          <img className="w-10" src={orbit.src} alt={orbit.alt} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={1}>
        {secondOrbit.map((orbit) => (
          <img className="w-10" src={orbit.src} alt={orbit.alt} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={220} reverse speed={1}>
        {thirdOrbit.map((orbit) => (
          <img className="w-10" src={orbit.src} alt={orbit.alt} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

export default OrbitingCirclesDemo;

const firstOrbit = [
  {
    src: "https://api.iconify.design/skill-icons:css.svg",
    alt: "css",
  },
  {
    src: "https://api.iconify.design/skill-icons:sass.svg",
    alt: "sass",
  },
  {
    src: "https://api.iconify.design/skill-icons:html.svg",
    alt: "html",
  },
  {
    src: "https://api.iconify.design/skill-icons:tailwindcss-light.svg",
    alt: "tailwindcss",
  },
  {
    src: "https://api.iconify.design/skill-icons:bootstrap.svg",
    alt: "bootstrap",
  },
  {
    src: "https://api.iconify.design/logos:nuxt-icon.svg",
    alt: "nuxt ui",
  },
];

const secondOrbit = [
  {
    src: "https://api.iconify.design/skill-icons:javascript.svg",
    alt: "javascript",
  },
  {
    src: "https://api.iconify.design/skill-icons:vuejs-light.svg",
    alt: "vue js",
  },
  {
    src: "https://api.iconify.design/skill-icons:nuxtjs-light.svg",
    alt: "nuxt 3",
  },
  {
    src: "https://api.iconify.design/skill-icons:pinia-light.svg",
    alt: "pinia",
  },
  {
    src: "https://api.iconify.design/skill-icons:jquery.svg",
    alt: "jquery",
  },
  {
    src: "https://api.iconify.design/skill-icons:vuetify-light.svg",
    alt: "vuetify",
  },
  {
    src: "https://api.iconify.design/skill-icons:pug-light.svg",
    alt: "pug js",
  },
];

const thirdOrbit = [
  {
    src: "https://api.iconify.design/skill-icons:git.svg",
    alt: "git",
  },
  {
    src: "https://api.iconify.design/skill-icons:github-dark.svg",
    alt: "github",
  },
  {
    src: "https://api.iconify.design/skill-icons:gitlab-light.svg",
    alt: "gitlab",
  },
  {
    src: "https://api.iconify.design/skill-icons:githubactions-light.svg",
    alt: "github actions",
  },
  {
    src: "https://api.iconify.design/skill-icons:graphql-light.svg",
    alt: "graph ql",
  },
  {
    src: "https://api.iconify.design/skill-icons:prisma.svg",
    alt: "prisma",
  },
  {
    src: "https://api.iconify.design/logos:firebase.svg",
    alt: "firebase",
  },
  {
    src: "https://api.iconify.design/skill-icons:mongodb.svg",
    alt: "mongodb",
  },
  {
    src: "https://api.iconify.design/logos:cloudinary-icon.svg",
    alt: "cloudinary",
  },
  {
    src: "https://api.iconify.design/skill-icons:gulp.svg",
    alt: "gulp",
  },
  {
    src: "https://api.iconify.design/skill-icons:netlify-light.svg",
    alt: "netlify",
  },
  {
    src: "https://api.iconify.design/logos:digital-ocean-icon.svg",
    alt: "digital ocean",
  },
  {
    src: "https://api.iconify.design/skill-icons:figma-light.svg",
    alt: "figma",
  },
  {
    src: "https://api.iconify.design/skill-icons:xd.svg",
    alt: "xd",
  },
];
