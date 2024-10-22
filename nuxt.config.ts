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
            "عبدالمؤمن الشطوري, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, تطوير مواقع, Frontend Developer, JavaScript, Abdelmomen Elshatory, Web Development, Websites, Responsive, Abdelmomen Elshatory عبدالمؤمن الشطوري, Elshatory, الشطوري, الشطورى, Abdelmomen, Abdelmo’men, مطور frontend , مطور واجهات أمامية و vue.js, مطور vue.js, مطور nuxt.js",
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
          type: "image/webp",
          href: `${process.env.CLOUDINARY_URL}beingmomen/xhjsrjkz4pfcsworh2mt`,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      // TODO: Add this when you want dist file
      routes: ["/", "/testimonial", "/contact"],
      crawlLinks: true,
      // TODO: Add this when you want build
      // routes: [],
      // crawlLinks: false,
    },
  },

  devtools: { enabled: true },

  modules: [
    // "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/cloudinary",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
    "nuxt-booster",
    "nuxt-delay-hydration",
    "@nuxtjs/fontaine",
    "nuxt-vitalizer",
  ],

  pwa: {
    manifest: {
      name: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
      short_name: "عبدالمؤمن الشطوري",
      icons: [
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_192,h_192,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_auto,w_512,h_512,c_fill/v1729081164/beingmomen/edisxdkamb8dn3z0bhez.webp",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },

  booster: {
    detection: {
      performance: true,
      browserSupport: true,
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },

    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  site: {
    url: "https://beingmomen.com",
    name: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
    description:
      "عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
    defaultLocale: "ar", // not needed if you have @nuxtjs/i18n installed
  },

  cloudinary: {
    cloudName: "dyqfclwdk",
    uploadPreset: "beingmomen",
  },

  css: ["~/assets/scss/main.scss"],

  imports: {
    dirs: [],
  },

  image: {
    // inject: true,
    quality: 80,
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL,
    },
    dir: "assets",
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   "2xl": 1536,
    // },

    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      "4k": 1921,
    },

    domains: ["img.youtube.com", "i.vimeocdn.com"],

    alias: {
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    },
  },

  ui: {
    global: true,
  },

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

  vite: {
    build: {
      cssCodeSplit: true, // Split CSS into chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Group vendor modules into a separate chunk
            vendor: [],
          },
        },
      },
    },
    // Enable CSS optimization
    css: {
      postcss: {
        plugins: [
          require("postcss-import"),
          // require('tailwindcss'),
          // require('autoprefixer'),
        ],
      },
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
