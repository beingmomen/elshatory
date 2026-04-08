<script setup>
const config = useRuntimeConfig()
const { cloudinary } = config.public

await useAPI('/landing', {
  key: 'landing',
  default: () => ({}),
  transform: response => response.data || {}
})

await useFetch('/api/blog', {
  key: 'blogs',
  default: () => [],
  transform: blogs => blogs.map(blog => ({
    ...blog,
    image: blog.image?.startsWith('http') ? blog.image : `${cloudinary.cloudinaryUrl}${blog.image}`
  }))
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'عبدالمؤمن الشطوري',
        'alternateName': 'Abdelmomen Elshatory',
        'url': config.public.siteUrl,
        'description': 'مهندس واجهات أمامية بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب حديثة وعالية الأداء',
        'inLanguage': 'ar'
      })
    }
  ]
})

useSeoMeta({
  title: 'عبدالمؤمن الشطوري | مهندس واجهات أمامية',
  description: 'مهندس واجهات أمامية بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب حديثة وعالية الأداء. تصفح مشاريعي العملية، آراء العملاء، واتصل بي مباشرة لتنفيذ أفكارك التقنية.',
  ogTitle: 'عبدالمؤمن الشطوري | مهندس واجهات أمامية',
  ogDescription: 'حلول برمجية مبتكرة وتجارب مستخدم استثنائية — تصفح أعمالي واحصل على استشارة مجانية الآن',
  ogType: 'website',
  ogLocale: 'ar_EG',
  ogSiteName: 'عبدالمؤمن الشطوري',
  twitterCard: 'summary_large_image',
  twitterTitle: 'عبدالمؤمن الشطوري | مهندس واجهات أمامية',
  twitterDescription: 'حلول برمجية مبتكرة وتجارب مستخدم استثنائية — تصفح أعمالي واحصل على استشارة مجانية',
  twitterSite: '@beingmomen',
  twitterCreator: '@beingmomen',
  author: 'عبدالمؤمن الشطوري'
})
</script>

<template>
  <UPage>
    <LandingHero />

    <UPageSection :ui="{ container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8 *:min-w-0' }">
      <LandingAbout />
      <LandingWorkExperience />
    </UPageSection>

    <LazyLandingStats />
    <LazyLandingBlog />
    <LazyLandingTestimonials />
    <LazyLandingFAQ />
  </UPage>
</template>
