<template>
  <div class="text">
    <TheHomeHeroSection />
    <TheHomeSkillsSection />
    <TheHomeServicesSection />
    <!-- <TheHomeExperienceSection /> -->
    <TheHomeTestimonialsSection />
    <TheHomeProjectsSection />
    <TheHomeClientsSection />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: "عبدالمؤمن الشطوري",
  ogTitle: "عبدالمؤمن الشطوري | مطور واجهات أمامية باستخدام Vue.js و Nuxt.js",
  description:
    "عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
  ogDescription:
    "مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js.",
  ogImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "عبدالمؤمن الشطوري",
  twitterDescription:
    "عبدالمؤمن الشطوري، مطور واجهات أمامية متخصص في تطوير تطبيقات ويب عالية الأداء باستخدام Vue.js و Nuxt.js. أعمل على تحويل الأفكار إلى تجارب ويب تفاعلية ومبتكرة",
  twitterImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
  twitterSite: "@beingmomen", // معرف تويتر الخاص بك
});

// useSeoMeta({
//   title: t("system.title"),
//   ogTitle: t("system.og:title"),
//   description: t("system.description"),
//   ogDescription: t("system.og:description"),
//   ogImage:
//     "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
//   twitterCard: "summary_large_image",
//   twitterTitle: t("system.title"),
//   twitterDescription: t("system.description"),
//   twitterImage:
//     "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/fdr33lrypqxafnvpu1ql.jpg",
//   twitterSite: "@beingmomen", // معرف تويتر الخاص بك
// });
</script>