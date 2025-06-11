<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    class="rounded-xl ring-1 hover:ring-3 ring-gray-800 hover:ring-primary-900 transition-all duration-200 shadow bg-gray-900 hover:bg-gray-900/50 relative group flex flex-col overflow-hidden"
  >
    <NuxtLink :to="`/blog/${blog.slug}`">
      <div class="aspect-video max-h-[267px]">
        <img
          class="w-full h-full object-cover object-top"
          :src="blog.image"
          :alt="blog.altText"
        />
      </div>
      <div class="flex-1 px-4 py-5 sm:p-6">
        <UBadge class="mb-5" color="primary" variant="subtle">{{
          blog.tag
        }}</UBadge>
        <p
          class="text-white font-semibold truncate flex items-center gap-1.5 text-lg"
        >
          {{ blog.title }}
        </p>
        <div class="text-[15px] text-gray-400 mt-1 line-clamp-2">
          {{ blog.description }}
        </div>
      </div>
      <div class="px-4 py-4 sm:px-6 pt-0">
        <div class="flex items-center justify-between gap-3">
          <time class="text-gray-500 dark:text-gray-400">
            {{
              useFormatDate({ date: blog.createdAt, format: "DD MMMM YYYY" })
            }}
          </time>
          <div class="inline-flex flex-row-reverse justify-end">
            <img
              class="rounded-full h-6 w-6 text-xs"
              src="https://res.cloudinary.com/dyqfclwdk/image/upload/v1749667056/Global/wg9qe16lqfbgcaizbhuj.jpg"
              :alt="`Abdelmomen Elshatory - ${blog.title}`"
            />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
