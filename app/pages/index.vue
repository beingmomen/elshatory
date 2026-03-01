<script setup>
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

    <LandingStats />
    <LandingBlog />
    <LandingTestimonials />
    <LandingFAQ />
  </UPage>
</template>
