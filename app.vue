<template>
  <div dir="rtl" class="dark:bg-gray-900 bg-gray-900">
    <NuxtLoadingIndicator />
    <VitePwaManifest />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup >
useSeoMeta({
  title: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
  ogTitle:
    "عبدالمؤمن الشطوري (beingmomen) | مطور واجهات أمامية Vue.js و Nuxt.js",

  description:
    "الموقع الرسمي للمهندس عبدالمؤمن الشطوري (beingmomen) - مطور واجهات أمامية متخصص في Vue.js و Nuxt.js. خبرة في تطوير تطبيقات ويب تفاعلية عالية الأداء",

  ogDescription:
    "عبدالمؤمن الشطوري - مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",

  ogImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  ogUrl: "https://beingmomen.com",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "عبدالمؤمن الشطوري | beingmomen",
  twitterDescription:
    "مطور واجهات أمامية متخصص في Vue.js و Nuxt.js - تطوير تطبيقات ويب تفاعلية وعالية الأداء",

  twitterImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  twitterSite: "@beingmomen", // معرف تويتر الخاص بك
  keywords:
    "عبدالمؤمن الشطوري, beingmomen, الشطورى, مطور واجهات أمامية, Vue.js, Nuxt.js, تطوير ويب, مبرمج",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "عبدالمؤمن الشطوري",
        alternateName: [
          "beingmomen",
          "الشطورى",
          "عبدالمؤمن",
          "الشطوري",
          "Abdelmomen",
          "Elshatory",
          "Abdelmo’men",
        ],
        url: "https://beingmomen.com",
        jobTitle: "Senior Frontend Developer",
        description: "مطور واجهات أمامية متخصص في Vue.js و Nuxt.js",
        image:
          "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
        sameAs: [
          "https://twitter.com/beingmomen",
          "https://www.linkedin.com/in/beingmomen",
          "https://www.facebook.com/beingmomen",
          "https://qabilah.com/profile/beingmomen/professional-profile",
          "https://github.com/beingmomen",
          "https://www.instagram.com/beingmomen",
          // أضف روابط حساباتك الأخرى على مواقع التواصل الاجتماعي
        ],
      }),
    },
  ],
});
</script>


