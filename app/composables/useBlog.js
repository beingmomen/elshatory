// Deprecated: blog data is now fetched directly in pages using useAPI.
// The breadcrumbList was dead code (never used at call sites).
export const useBlog = () => {
  const route = useRoute()
  return useNuxtData(`blog-${route.params.slug}`)
}
