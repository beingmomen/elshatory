<template>
  <div class="py-10">
    <UContainer>
      <BlogHeaderContent />
      <BlogNewsletterContent />
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        <BlogCardContent v-for="blog in data" :key="blog._id" :blog="blog" />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const { fetchBlogs, data } = useBlog();

await fetchBlogs();

useHead({
  title: "المدونة - عبدالمؤمن الشطوري",
  meta: [
    {
      name: "description",
      content:
        "اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا",
    },
    {
      name: "keywords",
      content: "مدونة, برمجة, تطوير الويب, جافا سكريبت, vue.js, nuxt.js, تقنية",
    },
    { property: "og:title", content: "المدونة - عبدالمؤمن الشطوري" },
    {
      property: "og:description",
      content:
        "اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "المدونة - عبدالمؤمن الشطوري" },
    {
      name: "twitter:description",
      content:
        "اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا",
    },
  ],
});
</script>

<style lang="scss" scoped>
</style>