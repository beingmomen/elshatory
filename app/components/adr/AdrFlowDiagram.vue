<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
    // Each step: { title, description, icon, color? }
  },
  direction: { type: String, default: 'vertical' }
})
</script>

<template>
  <div :class="direction === 'horizontal' ? 'flex flex-wrap items-start gap-3' : 'space-y-0'">
    <template v-for="(step, index) in steps" :key="step.title">
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(16px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.4, delay: 0.1 + index * 0.1 }"
        :in-view-options="{ once: true }"
        :class="direction === 'horizontal' ? 'flex-1 min-w-[200px]' : ''"
      >
        <div class="rounded-xl border border-default/60 bg-elevated/30 p-4 hover:bg-elevated/60 transition-colors duration-300">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl" :class="step.color ? `bg-${step.color}/10` : 'bg-primary/10'">
              <UIcon
                :name="step.icon || 'i-lucide-circle-dot'"
                class="size-4"
                :class="step.color ? `text-${step.color}` : 'text-primary'"
              />
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-base font-semibold">{{ step.title }}</div>
              <div v-if="step.description" class="text-sm text-muted mt-0.5">{{ step.description }}</div>
            </div>
            <UBadge v-if="step.badge" :label="step.badge" color="primary" variant="subtle" size="xs" />
          </div>
          <div v-if="step.details" class="mt-3 text-sm text-muted leading-relaxed">
            {{ step.details }}
          </div>
        </div>
      </Motion>

      <div
        v-if="index < steps.length - 1"
        class="flex justify-center py-1"
        :class="direction === 'horizontal' ? 'hidden' : ''"
      >
        <UIcon name="i-lucide-arrow-down" class="size-5 text-primary/40" />
      </div>
    </template>
  </div>
</template>
