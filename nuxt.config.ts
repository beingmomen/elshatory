// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'motion-v/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/seo',
    '@nuxtjs/fontaine',
    '@nuxt/fonts'
  ],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'عبدالمؤمن الشطوري | Frontend Developer',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content:
            'مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js. تصفح مشاريعي العملية، آراء العملاء، واتصل بي مباشرة لتنفيذ أفكارك التقنية.'
        },
        {
          name: 'keywords',
          content:
            'مطور MEVN, Nuxt.js Developer, Vue.js Expert, عبدالمؤمن الشطوري, Elshatory, beingmomen, تطوير تطبيقات ويب, واجهات أمامية, MEVN Stack, مشاريع برمجية, تقييم عملاء'
        },
        {
          property: 'og:title',
          content:
            'عبدالمؤمن الشطوري - مطور MEVN Stack | مشاريع واقعية لأكثر من +50 عميل'
        },
        {
          property: 'og:description',
          content:
            'حلول برمجية مبتكرة بـ Vue.js/Nuxt.js - تصفح أعمالي واحصل على استشارة مجانية الآن'
        },
        {
          name: 'google-site-verification',
          content: '81yw9t6e3WHEXdyKeGn-9UWQys3yharvd3GOdNTvTqo'
        },
        { name: 'author', content: 'Abdelmomen Elshatory' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/webp',
          href: `${process.env.CLOUDINARY_URL}Global/ouw3rqzi0xym347xiyyw`
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: process.env.SITE_URL,
    name: 'عبدالمؤمن الشطوري',
    description:
      'مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js',
    defaultLocale: 'ar'
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
        apiKey: process.env.CLOUDINARY_API_KEY
      }
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/projects': { prerender: true },
    '/sdlc': { prerender: true },
    '/sdlc-ar': { prerender: true },
    '/blog': { swr: 600 },
    '/blog/**': { swr: 3600 },
    '/contact': { ssr: true },
    '/testimonial': { ssr: true },
    '/api/blog': { swr: 600 }
  },

  devServer: {
    port: process.env.PORT
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@nuxt/ui')) return 'nuxt-ui'
              if (id.includes('motion-v')) return 'motion'
            }
          }
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Tajawal',
        provider: 'google',
        weights: [300, 400, 500, 700],
        subsets: ['arabic', 'latin']
      },
      {
        name: 'Space Grotesk',
        provider: 'google',
        weights: [400, 500, 700]
      }
    ]
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      }
    ]
  },

  image: {
    quality: 80,
    format: ['avif', 'webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    domains: ['beingmomen.com'],
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
    },
    modifiers: {
      effect: 'sharpen:100',
      quality: 'auto:best'
    }
  },

  ogImage: {
    defaults: {
      component: 'OgImageArabic',
      width: 1200,
      height: 630
    },
    fonts: ['Tajawal:700']
  },

  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/admin/']
      }
    ]
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'عبدالمؤمن الشطوري',
      alternateName: ['Abdelmomen Elshatory', 'beingmomen'],
      url: process.env.SITE_URL,
      image:
        'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/beingmomen-01_xczmdz',
      sameAs: [
        'https://github.com/beingmomen',
        'https://linkedin.com/in/beingmomen',
        'https://twitter.com/beingmomen',
        'https://www.facebook.com/beingmomen/',
        'https://www.instagram.com/beingmomen/'
      ],
      jobTitle: 'مطور واجهات أمامية ومتخصص في MEVN Stack',
      worksFor: {
        type: 'Organization',
        name: 'عمل حر'
      },
      email: 'beingmomen@gmail.com',
      knowsLanguage: ['ar', 'en']
    }
  },

  seo: {
    redirectToCanonicalSiteUrl: true
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },

  socialShare: {
    baseUrl: process.env.SITE_URL
  }
})
