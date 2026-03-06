<script setup>
defineProps({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  highlight: { type: String, default: '' },
  description: { type: String, required: true }
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
            :label="badge"
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
          {{ title }} <span v-if="highlight" class="text-gradient">{{ highlight }}</span>
        </Motion>
      </template>

      <template #description>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          {{ description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          :initial="{ scale: 1.1, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.6 }"
        >
          <UButton
            label="العودة للقرارات المعمارية"
            to="/adr"
            color="neutral"
            variant="ghost"
            size="md"
            icon="i-lucide-arrow-right"
          />
        </Motion>
      </template>
    </UPageHero>
  </div>
</template>
