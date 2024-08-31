<template>
  <div>
    <TheHomeHeroSection />
    <TheHomeSkillsSection />
    <TheHomeServicesSection />
    <TheHomeExperienceSection />
    <TheHomeProjectsSection />
    <TheHomeClientsSection />
  </div>
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("system.title"),
  ogTitle: t("system.og:title"),
  description: t("system.description"),
  ogDescription: t("system.og:description"),
  ogImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/sm5wn92lrhss6oj4vtfm.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: t("system.title"),
  twitterDescription: t("system.description"),
  twitterImage:
    "https://res.cloudinary.com/dyqfclwdk/image/upload/v1725117794/beingmomen/sm5wn92lrhss6oj4vtfm.jpg",
  twitterSite: "@beingmomen", // معرف تويتر الخاص بك
});
</script>