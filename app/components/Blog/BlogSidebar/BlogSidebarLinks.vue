<template>
  <div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">المصادر</h3>

    <div class="flex flex-col">
      <UButton
        v-for="link in links"
        :key="link._id"
        :to="link.url"
        target="_blank"
        color="neutral"
        variant="link"
        :label="link.title"
        size="xl"
        trailing-icon="i-lucide-arrow-up-left"
        class="uppercase py-1"
        :ui="{
          trailingIcon: 'mb-3 size-4',
        }"
      />
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    url: "https://www.w3schools.com/js/js_hoisting.asp",
    title: "w3schools",
    _id: "6839cfdc858deec80e83df9d",
    id: "6839cfdc858deec80e83df9d",
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
    title: "MDN",
    _id: "6839cfdc858deec80e83df9e",
    id: "6839cfdc858deec80e83df9e",
  },
  {
    url: "https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript",
    title: "digitalocean",
    _id: "6839cfdc858deec80e83df9f",
    id: "6839cfdc858deec80e83df9f",
  },
];
</script>

<style lang="scss" scoped></style>
