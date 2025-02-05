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
    domains: ["beingmomen.com", "youtube.com", "vimeo.com"],
    alias: {
      "https://beingmomen.com": "https://beingmomen.com",
      youtube: "youtube.com",
      vimeo: "vimeo.com",
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
      title: "عبدالمؤمن الشطوري | Frontend Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js. تصفح مشاريعي العملية، آراء العملاء، واتصل بي مباشرة لتنفيذ أفكارك التقنية.",
        },
        {
          name: "keywords",
          content:
            "مطور MEVN, Nuxt.js Developer, Vue.js Expert, عبدالمؤمن الشطوري, Elshatory, beingmomen, تطوير تطبيقات ويب, واجهات أمامية, MEVN Stack, مشاريع برمجية, تقييم عملاء",
        },
        {
          property: "og:title",
          content:
            "عبدالمؤمن الشطوري - مطور MEVN Stack | مشاريع واقعية لأكثر من +50 عميل",
        },
        {
          property: "og:description",
          content:
            "حلول برمجية مبتكرة بـ Vue.js/Nuxt.js - تصفح أعمالي واحصل على استشارة مجانية الآن",
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
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Person", "ProfessionalService"],
            name: "Abdelmomen Elshatory",
            alternateName: ["عبدالمؤمن الشطوري", "beingmomen"],
            jobTitle: "Frontend Developer & MEVN Stack Specialist",
            description: "مطور واجهات أمامية متخصص في MEVN Stack بخبرة 3 سنوات",
            url: "https://beingmomen.com",
            image: {
              "@type": "ImageObject",
              url: "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
              width: "800",
              height: "600",
            },
            sameAs: [
              "https://github.com/beingmomen",
              "https://linkedin.com/in/beingmomen",
              "https://twitter.com/beingmomen",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "الخدمات",
              itemListElement: [
                { "@type": "Offer", name: "تطوير تطبيقات Vue.js" },
                { "@type": "Offer", name: "حلول Nuxt.js متكاملة" },
              ],
            },
          }),
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/", "/contact", "/testimonial"],
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
    },
    routeRules: {
      "/*": {
        headers: {
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
      },
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
    url: "https://beingmomen.com",
  },

  // seo: {
  //   redirectToCanonicalSiteUrl: false,
  // },

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
        plugins: [],
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
