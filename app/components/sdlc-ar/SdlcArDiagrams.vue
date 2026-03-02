<script setup>
const diagrams = [
  { icon: '📐', name: 'UML' },
  { icon: '🔧', name: 'Component Diagrams' },
  { icon: '👥', name: 'Use-case Diagram' },
  { icon: '🔄', name: 'Activity Diagram' },
  { icon: '🧩', name: 'Class Diagram' },
  { icon: '📨', name: 'Sequence Diagram' },
  { icon: '⚙️', name: 'State Machine Diagram' },
  { icon: '🖥️', name: 'Deployment Diagram' }
]
</script>

<template>
  <UPageSection
    title="Diagrams"
    :ui="{
      container: 'py-8 sm:py-12 lg:py-16',
      title: 'text-right text-xl sm:text-2xl font-medium'
    }"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Motion
        v-for="(diagram, index) in diagrams"
        :key="diagram.name"
        :initial="{ opacity: 0, transform: 'translateY(16px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ duration: 0.4, delay: 0.1 + index * 0.06 }"
        :in-view-options="{ once: true }"
      >
        <div class="rounded-xl border border-default/60 bg-elevated/30 p-5 text-center hover:bg-elevated/60 transition-colors duration-300">
          <div class="size-12 rounded-xl bg-primary/10 mx-auto mb-3 flex items-center justify-center text-xl">
            {{ diagram.icon }}
          </div>
          <h4 class="text-base font-semibold">
            {{ diagram.name }}
          </h4>
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
