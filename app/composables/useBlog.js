export const useBlog = () => {
  const route = useRoute()

  const { data: singleBlog } = useAPI(
    `/blogs/slug/${route.params.slug}`,
    {
      key: `blog-${route.params.slug}`,
      default: () => ({}),
      transform: response => response.data?.data || {}
    }
  )

  const breadcrumbList = computed(() => [
    {
      label: 'المقالات',
      icon: 'i-lucide-newspaper',
      to: '/blog'
    },
    {
      label: singleBlog.value?.title || route.params.slug,
      icon: 'i-lucide-rss',
      to: `/blog/${route.params.slug}`
    }
  ])

  return {
    singleBlog,
    breadcrumbList
  }
}
