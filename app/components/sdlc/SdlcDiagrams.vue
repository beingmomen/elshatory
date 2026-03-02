<script setup>
const diagrams = [
  { icon: '👥', name: 'Use Case', desc: 'Who does what in the system', phase: 'Design' },
  { icon: '🔄', name: 'Activity', desc: 'Flow of activities & decisions', phase: 'Analysis + Design' },
  { icon: '🧩', name: 'Class', desc: 'Objects, attributes, relationships', phase: 'Development' },
  { icon: '📨', name: 'Sequence', desc: 'Time-ordered object interactions', phase: 'Design + Dev' },
  { icon: '🔧', name: 'Component', desc: 'System modules & their interfaces', phase: 'Architecture' },
  { icon: '⚙️', name: 'State Machine', desc: 'Object lifecycle & transitions', phase: 'Design' },
  { icon: '🖥️', name: 'Deployment', desc: 'Hardware & infrastructure layout', phase: 'Deployment' }
]
</script>

<template>
  <UPageSection
    title="UML Diagram Zones"
    description="Each diagram type answers a specific architectural question. Use the right diagram for the right thinking problem."
    :ui="{
      container: 'py-8 sm:py-12 lg:py-16',
      title: 'text-xl sm:text-2xl font-medium',
      description: 'text-sm text-muted mt-2'
    }"
  >
    <div class="rounded-xl border border-warning/30 bg-warning/5 p-4 mb-6 flex items-start gap-3">
      <UIcon
        name="i-lucide-alert-triangle"
        class="size-5 text-warning shrink-0 mt-0.5"
      />
      <p class="text-sm text-muted">
        Diagram not understood? Check <strong class="text-highlighted">Ch5 [Notation]</strong> first. Still unclear — search it. Reference is the priority, not memorization.
      </p>
    </div>

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
          <h4 class="text-base font-semibold mb-1">
            {{ diagram.name }}
          </h4>
          <p class="text-sm text-muted mb-2 leading-relaxed">
            {{ diagram.desc }}
          </p>
          <UBadge
            :label="diagram.phase"
            color="primary"
            variant="subtle"
            size="xs"
          />
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
