<script setup>
const { fetchBlogs, data } = useBlog()

await fetchBlogs()

const posts = computed(() => {
  return (data.value || []).map(blog => ({
    title: blog.title,
    description: blog.description,
    image: {
      src: blog.image,
      alt: blog.title
    },
    date: blog.createdAt,
    path: `/blog/${blog.slug}`
  }))
})

useSeoMeta({
  title: 'المدونة - عبدالمؤمن الشطوري',
  ogTitle: 'المدونة - عبدالمؤمن الشطوري',
  description: 'اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا',
  ogDescription: 'اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا'
})

useHead({
  meta: [
    { name: 'keywords', content: 'مدونة, برمجة, تطوير الويب, جافا سكريبت, vue.js, nuxt.js, تقنية' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'المدونة - عبدالمؤمن الشطوري' },
    { name: 'twitter:description', content: 'اكتشف أحدث المقالات والمدونات حول تطوير الويب والبرمجة وأفضل الممارسات في عالم التكنولوجيا' }
  ]
})

useBreadcrumbSchema([{ name: 'المدونة', path: '/blog' }])
</script>

<template>
  <UPage>
    <UPageHero
      title="المدونة"
      description="اكتشف أحدث المقالات والمواضيع التقنية حول تطوير الويب والبرمجة"
      :ui="{
        title: '!mx-0 text-right',
        description: '!mx-0 text-right'
      }"
    />

    <UPageSection :ui="{ container: '!pt-0' }">
      <UBlogPosts orientation="vertical">
        <UBlogPost
          v-for="(post, index) in posts"
          :key="post.path"
          variant="naked"
          orientation="horizontal"
          :to="post.path"
          v-bind="post"
          :ui="{
            root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
            image: 'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
            header: index % 2 === 0
              ? 'sm:-rotate-1 overflow-visible'
              : 'sm:rotate-1 overflow-visible'
          }"
        />
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
