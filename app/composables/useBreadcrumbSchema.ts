export const useBreadcrumbSchema = (items: { name: string, path: string }[]) => {
  const config = useRuntimeConfig()

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'الرئيسية',
      'item': config.public.siteUrl
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 2,
      'name': item.name,
      'item': `${config.public.siteUrl}${item.path}`
    }))
  ]

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': breadcrumbItems
        })
      }
    ]
  })
}
