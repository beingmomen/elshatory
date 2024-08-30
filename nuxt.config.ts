// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Abdelmo’men Elshatory",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Welcome to my personal website I'm [Your Name], a passionate [Your Profession/Interest] with over [Number of Years of Experience] years of experience. Explore my portfolio to see my work, learn more about my journey, and get in touch to discuss potential collaborations. Let's create something amazing together",
        },
        {
          name: "keywords",
          content:
            "Abdelmo’men Elshatory, portfolio, web developer, frontend developer, frontend engineer, frontend developer, Abdelmo’men, Elshatory",
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "",
        lang: "en",
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
    // '@nuxtjs/i18n',
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/robots",
    "@formkit/auto-animate/nuxt",
  ],

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

  // i18n: {
  //   vueI18n: './i18n.config.ts',
  //   defaultLocale: 'en',
  // },

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
    },
  },

  compatibilityDate: "2024-08-30",
});
