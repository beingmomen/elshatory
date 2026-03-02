<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('mcp').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    message: 'Server not found'
  })
}

const categoryColors: Record<string, string> = {
  frontend: 'info',
  backend: 'success',
  devops: 'warning',
  ai: 'error',
  database: 'neutral',
  other: 'neutral'
}

useSeoMeta({
  title: page.value?.title || 'MCP Server',
  description: `MCP Server: ${page.value?.title} — ${page.value?.category}`
})
</script>

<template>
  <UPage>
    <UPageSection>
      <!-- Back Button -->
      <UButton
        to="/mcp"
        icon="i-lucide-arrow-right"
        label="العودة للخوادم"
        variant="ghost"
        color="neutral"
        class="mb-6"
      />

      <div v-if="page">
        <!-- Header -->
        <div class="mb-8 space-y-4">
          <h1 class="text-3xl sm:text-4xl font-bold">
            {{ page.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-3">
            <UBadge
              :color="(categoryColors[page.category] as any) || 'neutral'"
              variant="subtle"
              :label="page.category"
              size="lg"
            />
            <UBadge
              color="neutral"
              variant="outline"
              :label="page.installation_method"
              size="lg"
            />
            <span class="text-sm text-muted">
              {{ page.created_at }}
            </span>
          </div>
        </div>

        <!-- Markdown Content -->
        <div class="ProseMirror">
          <ContentRenderer :value="page" />
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
