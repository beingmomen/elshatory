<script setup>
const { cloudinary } = useRuntimeConfig().public

const { data: blogs } = await useFetch('/api/blog', {
  key: 'blogs',
  default: () => [],
  transform: blogs => blogs.map(blog => ({
    ...blog,
    image: `${cloudinary.cloudinaryUrl}${blog.image}`
  }))
})

const latestBlogs = computed(() => {
  return (blogs.value || []).slice(0, 3).map(blog => ({
    title: blog.title,
    description: blog.description,
    date: blog.createdAt,
    path: `/blog/${blog.slug}`,
    to: `/blog/${blog.slug}`
  }))
})
</script>

<template>
  <UPageSection
    title="آخر المقالات"
    description="اطلع على أحدث المقالات والمواضيع التقنية"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-right mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <UBlogPosts
      orientation="vertical"
      class="gap-4 lg:gap-y-4"
    >
      <UBlogPost
        v-for="(post, index) in latestBlogs"
        :key="index"
        orientation="horizontal"
        variant="naked"
        v-bind="post"
        :to="post.path"
        :ui="{
          root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
          body: '!px-0',
          header: 'hidden'
        }"
      >
        <template #footer>
          <UButton
            size="xs"
            variant="link"
            class="px-0 gap-0"
            label="اقرأ المقال"
          >
            <template #trailing>
              <UIcon
                name="i-lucide-arrow-left"
                class="size-4 text-primary transition-all opacity-0 group-hover:-translate-x-1 group-hover:opacity-100"
              />
            </template>
          </UButton>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPageSection>
</template>
