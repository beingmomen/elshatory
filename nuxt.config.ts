// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],

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
          href: `${process.env.CLOUDINARY_URL}Global/ouw3rqzi0xym347xiyyw`,
        },
        {
          rel: "canonical",
          href: process.env.SITE_URL,
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
            url: process.env.SITE_URL,
            image: {
              "@type": "ImageObject",
              url: "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/Global/hzihujxexpmxa81g4dkn",
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

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxtjs/seo",
  ],

  socialShare: {
    baseUrl: process.env.SITE_URL, // required!
  },

  site: {
    url: process.env.SITE_URL,
    name: "عبدالمؤمن الشطوري",
    description:
      "مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js",
    defaultLocale: "ar",
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: ["/admin/", "/api/", "/_nuxt/"],
    Sitemap: `${process.env.SITE_URL}/sitemap.xml`,
    CrawlDelay: 1,
  },

  sitemap: {
    hostname: process.env.SITE_URL,
    gzip: true,
    routes: async () => {
      // Static routes
      const staticRoutes = [
        {
          url: "/",
          changefreq: "weekly",
          priority: 1.0,
          lastmod: new Date().toISOString(),
        },
        {
          url: "/blog",
          changefreq: "daily",
          priority: 0.9,
          lastmod: new Date().toISOString(),
        },
        {
          url: "/projects",
          changefreq: "weekly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        },
        {
          url: "/contact",
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        },
        {
          url: "/testimonial",
          changefreq: "monthly",
          priority: 0.6,
          lastmod: new Date().toISOString(),
        },
      ];
      return staticRoutes;
    },
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "عبدالمؤمن الشطوري",
      alternateName: ["Abdelmomen Elshatory", "beingmomen"],
      url: process.env.SITE_URL,
      image:
        "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/Global/hzihujxexpmxa81g4dkn",
      sameAs: [
        "https://github.com/beingmomen",
        "https://linkedin.com/in/beingmomen",
        "https://twitter.com/beingmomen",
      ],
      jobTitle: "Frontend Developer & MEVN Stack Specialist",
      worksFor: {
        type: "Organization",
        name: "Freelancer",
      },
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },

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

    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
    modifiers: {
      effect: "sharpen:100",
      quality: "auto:best",
    },
    dir: "assets/images",
  },

  tiptap: {
    prefix: "Tiptap",
  },

  runtimeConfig: {
    public: {
      logo: process.env.LOGO,
      baseURL: process.env.BASE_URL,
      siteUrl: process.env.SITE_URL,
      cloudinary: {
        cloudinaryUrl: process.env.CLOUDINARY_URL,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
        apiKey: process.env.CLOUDINARY_API_KEY,
      },
    },
  },

  devServer: {
    port: process.env.PORT,
  },

  compatibilityDate: "2024-11-27",
});
