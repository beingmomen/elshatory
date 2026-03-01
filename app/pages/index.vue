<script setup>
useSeoMeta({
  title: 'عبدالمؤمن الشطوري | مطور واجهات أمامية - MEVN Stack',
  description: 'مطور واجهات أمامية متخصص في MEVN Stack | خبرة 3+ سنوات في Vue.js و Nuxt.js. تصفح مشاريعي العملية، آراء العملاء، واتصل بي مباشرة لتنفيذ أفكارك التقنية.',
  ogTitle: 'عبدالمؤمن الشطوري | مطور واجهات أمامية - MEVN Stack',
  ogDescription: 'حلول برمجية مبتكرة بـ Vue.js/Nuxt.js - تصفح أعمالي واحصل على استشارة مجانية الآن',
  ogType: 'website',
  ogLocale: 'ar_EG',
  ogSiteName: 'عبدالمؤمن الشطوري',
  twitterCard: 'summary_large_image',
  twitterTitle: 'عبدالمؤمن الشطوري | مطور واجهات أمامية - MEVN Stack',
  twitterDescription: 'حلول برمجية مبتكرة بـ Vue.js/Nuxt.js - تصفح أعمالي واحصل على استشارة مجانية',
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
