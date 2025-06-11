<template>
  <div class="table-of-contents space-y-6">
    <BlogBlogSidebarTableOfContents />
    <USeparator class="my-5" size="sm" />
    <BlogBlogSidebarLinks />
    <USeparator class="my-5" size="sm" type="dashed" />
    <div class="flex justify-between">
      <SocialShare
        v-for="network in networks"
        :key="network"
        :network="network"
        :label="false"
      />
    </div>
  </div>
</template>

<script setup>
const networks = [
  "facebook",
  "x",
  "linkedin",
  "reddit",
  "whatsapp",
  "telegram",
];
</script>

<style lang="scss" scoped>
@use "assets/scss/table-of-contents";
</style>
