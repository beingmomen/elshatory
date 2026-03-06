<template>
  <UPage dir="rtl">
    <UPageHero
      :ui="{
        container: 'py-12 sm:py-16 lg:py-20',
        title: 'text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'text-md max-w-2xl text-muted',
        links: 'mt-4'
      }"
    >
      <template #headline>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          <UBadge
            label="Architecture Decision Records"
            color="primary"
            variant="soft"
            size="sm"
            icon="i-lucide-landmark"
          />
        </Motion>
      </template>

      <template #title>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          القرارات <span class="text-gradient">المعمارية</span>
        </Motion>
      </template>

      <template #description>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          توثيق للقرارات المعمارية التي اتخذتها في المشاريع الحقيقية — لماذا اخترت هذا النمط؟ ما البدائل التي درستها؟ وما النتائج؟
        </Motion>
      </template>
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0 pb-12 sm:pb-16 lg:pb-20' }">
      <div class="grid sm:grid-cols-2 gap-6">
        <Motion
          v-for="(adr, index) in adrs"
          :key="adr.slug"
          :initial="{ opacity: 0, transform: 'translateY(24px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ duration: 0.5, delay: 0.1 + index * 0.15 }"
          :in-view-options="{ once: true }"
        >
          <NuxtLink
            :to="`/adr/${adr.slug}`"
            class="group block rounded-2xl border border-default/60 bg-elevated/30 p-6 hover:bg-elevated/60 hover:border-primary/30 transition-all duration-300 h-full"
          >
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <UIcon :name="adr.icon" class="size-6 text-primary" />
              </div>
              <div class="flex-1 min-w-0">
                <h2 class="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{{ adr.title }}</h2>
                <code class="text-xs font-mono text-muted" dir="ltr">{{ adr.subtitle }}</code>
              </div>
              <UIcon
                name="i-lucide-arrow-left"
                class="size-5 text-muted group-hover:text-primary transition-colors shrink-0 mt-1"
              />
            </div>

            <p class="text-sm text-muted leading-relaxed mb-4">{{ adr.description }}</p>

            <USeparator class="mb-4" />

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="topic in adr.topics"
                :key="topic"
                :label="topic"
                color="neutral"
                variant="subtle"
                size="xs"
              />
            </div>

            <div class="flex items-center gap-4 mt-4 text-xs text-muted">
              <div class="flex items-center gap-1">
                <UIcon name="i-lucide-layers" class="size-3" />
                <span>{{ adr.sections }} قسم</span>
              </div>
              <div class="flex items-center gap-1">
                <UIcon name="i-lucide-clock" class="size-3" />
                <span>{{ adr.readTime }}</span>
              </div>
            </div>
          </NuxtLink>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>

<script setup>
definePageMeta({
  title: 'القرارات المعمارية'
})

useHead({
  title: 'القرارات المعمارية — Architecture Decision Records',
  meta: [
    {
      name: 'description',
      content: 'توثيق القرارات المعمارية في مشاريع حقيقية — الأنماط المستخدمة، البدائل المدروسة، والنتائج العملية.'
    }
  ]
})

useSeoMeta({
  ogTitle: 'القرارات المعمارية — Architecture Decision Records',
  ogDescription: 'توثيق القرارات المعمارية في مشاريع حقيقية — الأنماط المستخدمة، البدائل المدروسة، والنتائج العملية.',
  ogType: 'website',
  ogLocale: 'ar_EG',
  twitterCard: 'summary_large_image',
  twitterTitle: 'القرارات المعمارية',
  twitterDescription: 'توثيق القرارات المعمارية في مشاريع حقيقية.',
  twitterSite: '@beingmomen'
})

useBreadcrumbSchema([{ name: 'القرارات المعمارية', path: '/adr' }])

const config = useRuntimeConfig()

const adrs = [
  {
    slug: 'global-data',
    icon: 'i-lucide-database',
    title: 'إدارة البيانات العامة',
    subtitle: 'useGlobal Composable',
    description: 'نمط composable مركزي يوفر وصولاً موحداً لبيانات الجلسة (بيانات المستخدم + lookup lists) في أي مكان بالتطبيق — بدون نسخ البيانات أو مزامنة يدوية.',
    topics: ['Computed Reactivity', 'Session Management', 'Single Source of Truth', 'API Design'],
    sections: 10,
    readTime: '8 دقائق قراءة'
  },
  {
    slug: 'multi-mode-system',
    icon: 'i-lucide-layers',
    title: 'نظام الأوضاع المتعددة',
    subtitle: 'Multi-Mode Architecture',
    description: 'بنية تدعم أوضاع تشغيل متعددة (خاص، حكومي، مختلط) تُحدد في وقت التشغيل — مع فصل كامل بالملفات بدون أي شروط في الكود.',
    topics: ['Runtime Switching', 'File Separation', 'Orchestrator Pattern', 'Zero Conditionals'],
    sections: 14,
    readTime: '15 دقيقة قراءة'
  }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'القرارات المعمارية — Architecture Decision Records',
        'description': 'توثيق القرارات المعمارية في مشاريع حقيقية — الأنماط المستخدمة، البدائل المدروسة، والنتائج العملية.',
        'url': `${config.public.siteUrl}/adr`,
        'inLanguage': 'ar',
        'mainEntity': {
          '@type': 'ItemList',
          'itemListElement': adrs.map((adr, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
              '@type': 'TechArticle',
              'name': adr.title,
              'url': `${config.public.siteUrl}/adr/${adr.slug}`,
              'description': adr.description
            }
          }))
        }
      })
    }
  ]
})
</script>
