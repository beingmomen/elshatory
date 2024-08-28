// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: process.env.BROWSER_TITLE,
      meta: [
        {
          name: "description",
          content:
            "Experienced Frontend Developer specializing in creating engaging and user-friendly web experiences. Proficient in HTML, CSS, JavaScript, Vue.JS, Nuxt.JS, Vue3.JS, Nuxt3.JS, tailwindcss, and modern frontend frameworks. Portfolio showcasing a diverse range of projects that highlight responsive design, interactivity, and a passion for crafting intuitive user interfaces.",
        },
        {
          name: "keywords",
          content:
            "عبدالمؤمن الشطوري, عبدالمؤمن الشطورى, Abdelmo’men Elshatory, Abdelmo’men Elshatory portfolio, Abdelmomen Elshatory, Abdelmomen Elshatory portfolio, Abdelmo’men, Abdelmomen, Elshatory, الشطورى , عبدالمؤمن, الشطوري, frontend developer portfolio, frontend developer freelance, Frontend developer, web development, MEVN Stack Developer, Technical Support, Vue.JS & Nuxt.JS Developer, HTML, CSS, JavaScript, Vue.JS, Nuxt.JS, Nuxt3.JS, Vue3.JS, Vue, Vue3, Nuxt,  Nuxt3, tailwindcss, Tailwind, responsive design, user interface, web design, portfolio",
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "dark",
        lang: "en",
      },
      script: [

      ],
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: `/images/${process.env.LOGO}.svg`,
        },
      ],
    },
  },
  css: ["~/assets/style.scss"],

  imports: {
    dirs: ["stores"],
  },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-swiper",
    '@nuxtjs/robots',
    '@nuxt/image',
    // '@nuxtjs/i18n',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Nunito: true,
          Shrikhand: true,
          // 'Courgette': true,
          download: true,
          inject: true,
        },
      },
    ],
  ],

  image: {
    // inject: true,
    quality: 80,
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL
    },
    dir: 'assets',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  swiper: {

  },

  i18n: {
    // vueI18n: './i18n.config.ts', // if you are using custom path, default 


    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json'
      }
    ],
    defaultLocale: 'en',
  },

  ui: {

  },

  colorMode: {
    preference: "dark", // disable system
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  runtimeConfig: {
    public: {
      // Site
      logo: process.env.LOGO,
    },
  },
});
