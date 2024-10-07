// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description", content: "",
        },
        {
          name: "keywords",
          content: "عبدالمؤمن الشطوري, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, تطوير مواقع, Frontend Developer, JavaScript, Abdelmomen Elshatory, Web Development, Websites, Responsive",
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "",
        lang: "ar",
      },
      script: [],
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: `/logo.svg`,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/robots",
    "@nuxtjs/cloudinary",
    "@formkit/auto-animate/nuxt",
  ],

  cloudinary: {
    cloudName: 'dyqfclwdk',
    uploadPreset: 'beingmomen',
  },

  css: ["~/assets/scss/main.scss"],

  imports: {
    dirs: ["stores"],
  },

  image: {
    // inject: true,
    quality: 80,
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL,
    },
    dir: "assets",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  ui: {},

  colorMode: {
    preference: "dark",
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      // {
      //   code: 'en',
      //   name: 'English',
      //   file: 'en.json'
      // },
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json'
      }
    ],
    defaultLocale: 'ar',
  },

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //     cssnano:
  //       process.env.NODE_ENV === "production"
  //         ? { preset: ["default", { discardComments: { removeAll: true } }] }
  //         : false, // disable cssnano when not in production
  //   },
  // },

  runtimeConfig: {
    // jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,

    public: {
      logo: process.env.LOGO,
      baseURL: process.env.BASE_URL,
    },
  },

  compatibilityDate: "2024-08-30",
});
