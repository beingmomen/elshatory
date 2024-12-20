// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/cloudinary",
    "@nuxtjs/seo",
    "nuxt-delay-hydration",
    "nuxt-booster",
    "@nuxtjs/fontaine",
  ],
  css: ["~/assets/css/main.css"],

  image: {
    quality: 80,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    domains: ["beingmomen.com", 'youtube.com', 'vimeo.com'],
    alias: {
      "https://beingmomen.com": "https://beingmomen.com",
      youtube: 'youtube.com',
      vimeo: 'vimeo.com'
    },
    provider: "cloudinary",
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
    modifiers: {
      effect: "sharpen:100",
      quality: "auto:best",
    },
    dir: "assets/images",
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
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
      battery: true, // Added to resolve TypeScript type error
    },

    performanceDeviceMetrics: {
      hardwareConcurrency: { min: 2, max: 48 },
      deviceMemory: { min: 2 },
    },

    performanceTimingMetrics: {
      fcp: 800,
      dcl: 1200,
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  app: {
    head: {
      title:
        "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري | Abdelmomen Elshatory",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "الموقع الرسمي للمهندس عبدالمؤمن الشطوري - مطور واجهات أمامية متخصص في Vue.js و Nuxt.js. خبرة في تطوير تطبيقات ويب تفاعلية عالية الأداء | Official website of Abdelmomen Elshatory - Frontend Developer",
        },
        {
          name: "keywords",
          content:
            "عبدالمؤمن الشطوري, beingmomen, الشطورى, Elshatory, Abdelmomen Elshatory, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, مبرمج, frontend developer",
        },
        {
          name: "google-site-verification",
          content: "81yw9t6e3WHEXdyKeGn-9UWQys3yharvd3GOdNTvTqo",
        },
        { name: "author", content: "Abdelmomen Elshatory" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "googlebot", content: "index, follow" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/webp",
          href: `${process.env.CLOUDINARY_URL}beingmomen/xhjsrjkz4pfcsworh2mt`,
        },
        {
          rel: "canonical",
          href: "https://beingmomen.com",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
    },
  },

  runtimeConfig: {
    public: {
      logo: process.env.LOGO,
      baseURL: process.env.BASE_URL,
    },
  },

  devServer: {
    port: 7777,
  },

  experimental: {
    viewTransition: true,
    treeshakeClientOnly: true,
  },

  site: {
    url: 'https://beingmomen.com',
  },

  build: {
    analyze: true,
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
          // require('tailwindcss'),
          // require("postcss-import"),
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

  sourcemap: {
    server: true,
    client: true,
  },
});
