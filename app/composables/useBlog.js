const singleBlog = ref({})

export const useBlog = () => {
  const route = useRoute()
  const { get } = useApiRequest()

  const breadcrumbList = ref([
    {
      label: 'المقالات',
      icon: 'i-lucide-newspaper',
      to: '/blog'
    },
    {
      label: route.params.slug,
      icon: 'i-lucide-rss',
      to: `/blog/${route.params.slug}`
    }
  ])

  const fetchSingleBlog = async (slug) => {
    const { data } = await get(`/blogs/slug/${slug}`)

    singleBlog.value = data.data
  }

  return {
    fetchSingleBlog,
    singleBlog,
    breadcrumbList
  }
}
