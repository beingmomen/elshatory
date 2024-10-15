// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          name: "keywords",
          content:
            "عبدالمؤمن الشطوري, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, تطوير مواقع, Frontend Developer, JavaScript, Abdelmomen Elshatory, Web Development, Websites, Responsive, Abdelmomen Elshatory عبدالمؤمن الشطوري",
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "",
        lang: "ar",
        dir: "rtl",
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

  // ssr: true,

  nitro: {
    compressPublicAssets: true,
    prerender: {
      // TODO: Add this when you want dist file
      // routes: ['/'],
      // crawlLinks: true
      // TODO: Add this when you want build
      routes: [],
      crawlLinks: false,
    },
  },

  devtools: { enabled: true },

  modules: [
    // "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/cloudinary",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/seo",
    'nuxt-purgecss',
  ],

  site: {
    url: 'https://beingmomen.com',
    name: 'الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري',
    description: 'عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة',
    defaultLocale: 'ar', // not needed if you have @nuxtjs/i18n installed
  },

  cloudinary: {
    cloudName: "dyqfclwdk",
    uploadPreset: "beingmomen",
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

  // i18n: {
  //   lazy: true,
  //   langDir: 'locales',
  //   locales: [
  //     // {
  //     //   code: 'en',
  //     //   name: 'English',
  //     //   file: 'en.json'
  //     // },
  //     {
  //       code: 'ar',
  //       name: 'Arabic',
  //       file: 'ar.json'
  //     }
  //   ],
  //   defaultLocale: 'ar',
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
      baseURL: process.env.BASE_URL,
    },
  },

  devServer: {
    port: 9731,
  },

  compatibilityDate: "2024-08-30",

  // Enable Nuxt's experimental tree-shaking
  experimental: {
    treeshakeClientOnly: true,
  },

  // Vite-specific optimizations
  vite: {
    build: {
      cssCodeSplit: true, // Split CSS into chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Group vendor modules into a separate chunk
            vendor: ['vue', 'vue-router']
          }
        }
      },
    },
    // Enable CSS optimization
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      },
      postcss: {
        plugins: [
          require('postcss-import'),
          // require('tailwindcss'),
          // require('autoprefixer'),
        ],
      },
    },
  },
});
