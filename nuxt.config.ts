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

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@vueuse/motion/nuxt"],

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
    // provider: "cloudinary",
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
      siteUrl: process.env.BASE_URL || 'https://beingmomen.com',
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
