<script setup>
defineProps({
  phases: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <UPageHero
      :ui="{
        container: 'py-12 sm:py-16 lg:py-20',
        title: 'text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'text-md max-w-xl text-muted',
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
            label="دليل المعماري · OOA&D"
            color="primary"
            variant="soft"
            size="sm"
            icon="i-lucide-book-open"
          />
        </Motion>
      </template>

      <template #title>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          دورة حياة <span class="text-gradient">تطوير البرمجيات</span>
        </Motion>
      </template>

      <template #description>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          إطار بصري معرفي للمفكرين النظاميين — يحوّل نظرية SDLC إلى نموذج ذهني تفاعلي للتحليل والتصميم كائني التوجه.
        </Motion>
      </template>

      <template #links>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.6 }"
        >
          <UButton
            label="استكشف المراحل"
            to="#analysis"
            color="primary"
            size="md"
            trailing-icon="i-lucide-arrow-down"
          />
        </Motion>
      </template>
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0 pb-8 sm:pb-12 lg:pb-16' }">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Motion
          v-for="(phase, index) in phases"
          :key="phase.id"
          :initial="{ opacity: 0, transform: 'translateY(16px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ duration: 0.4, delay: 0.1 + index * 0.08 }"
          :in-view-options="{ once: true }"
        >
          <a
            :href="`#${phase.id}`"
            class="flex items-center gap-3 rounded-xl border border-default/60 bg-elevated/30 p-4 hover:bg-elevated/60 transition-colors duration-300 group"
          >
            <span class="text-lg font-bold text-primary">{{ phase.num }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-base font-semibold">
                {{ phase.title }}
              </div>
              <div class="text-sm text-muted">
                {{ phase.tagline }}
              </div>
            </div>
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4 text-muted group-hover:text-primary transition-colors shrink-0"
            />
          </a>
        </Motion>
      </div>
    </UPageSection>
  </div>
</template>
