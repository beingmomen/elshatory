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
</script>

<style lang="scss" scoped>
</style>