<script setup>
const stats = [
  { value: '+5', label: 'سنوات خبرة', icon: 'i-lucide-calendar-days' },
  { value: '+10', label: 'مشروع منجز', icon: 'i-lucide-folder-check' },
  { value: '3', label: 'شركات', icon: 'i-lucide-building-2' },
  { value: '100%', label: 'التزام بالجودة', icon: 'i-lucide-star' }
]
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 !pt-0 !pb-0'
    }"
  >
    <div class="-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 border-y border-default py-10 px-4 sm:px-12 lg:px-16">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-(--ui-container) mx-auto">
        <Motion
          v-for="(stat, index) in stats"
          :key="stat.label"
          :initial="{ opacity: 0, transform: 'translateY(16px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ duration: 0.4, delay: 0.1 + index * 0.1 }"
          :in-view-options="{ once: true }"
        >
          <div class="flex flex-col items-center gap-2 text-center group" :aria-label="`${stat.value} ${stat.label}`">
            <div class="p-3 rounded-2xl bg-primary/10 dark:bg-primary/15 group-hover:bg-primary/20 transition-colors duration-300">
              <UIcon
                :name="stat.icon"
                class="size-5 text-primary"
              />
            </div>
            <span class="text-4xl sm:text-5xl font-bold text-gradient">
              {{ stat.value }}
            </span>
            <span class="text-sm text-muted">
              {{ stat.label }}
            </span>
          </div>
        </Motion>
      </div>
    </div>
  </UPageSection>
</template>
