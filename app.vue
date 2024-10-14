<template>
  <div dir="rtl" class="dark:bg-gray-900 bg-gray-900">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup >
useSeoMeta({
  title: "الموقع الرسمي لمهندس البرمجيات عبدالمؤمن الشطوري",
  ogTitle: "عبدالمؤمن الشطوري | مطور واجهات أمامية باستخدام Vue.js و Nuxt.js",
  description:
    "عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
  ogDescription:
    "مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js.",
  ogImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  ogUrl: "https://beingmomen.com",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "عبدالمؤمن الشطوري",
  twitterDescription:
    "عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
  twitterImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  twitterSite: "@beingmomen", // معرف تويتر الخاص بك
});
</script>


