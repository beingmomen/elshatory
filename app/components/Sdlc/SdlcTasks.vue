<template>
  <section id="tasks" class="py-20">
    <UContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 500 }"
      >
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sdlc-display">Team Workflow</h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          Concrete tasks for the <strong class="text-neutral-300">Vacation Tracking System</strong> (Ch12) — the applied project for this OOA&amp;D mentorship program.
        </p>
      </div>

      <div class="steps">
        <div
          v-for="(task, index) in tasks"
          :key="task.title"
          class="step"
          :class="{ 'pb-0': index === tasks.length - 1 }"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :transition="{ duration: 450, delay: index * 180 }"
        >
          <!-- Number -->
          <div
            class="step-num border-2 sdlc-display"
            :style="`border-color: ${task.color}; color: ${task.color}; box-shadow: 0 0 20px ${task.color}33; background: color-mix(in srgb, ${task.color} 8%, transparent)`"
          >
            {{ index + 1 }}
          </div>

          <!-- Content -->
          <div class="step-body">
            <h3 class="text-xl font-bold mb-2 sdlc-display">{{ task.title }}</h3>
            <p class="text-base text-neutral-400 leading-relaxed mb-4">{{ task.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in task.tags"
                :key="tag"
                variant="soft"
                color="neutral"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const tasks = [
  {
    color: '#06b6d4',
    title: 'Read Requirements from Ch12',
    desc: 'Extract and document all requirements from the Vacation Tracking System chapter. Create a shared requirements document the whole team can reference.',
    tags: ['Vision', 'Functional Requirements', 'Non-Functional Requirements', 'Constraints'],
  },
  {
    color: '#8b5cf6',
    title: 'Define the Problem Domain',
    desc: 'Establish system boundaries. Identify what is inside and outside the scope of the Vacation Tracking System. Document what the system is — and explicitly what it is not.',
    tags: ['Domain Boundaries', 'Scope Definition', 'Entity Identification'],
  },
  {
    color: '#10b981',
    title: 'List Actors of the System',
    desc: 'Identify every human and system actor that will interact with the Vacation Tracking System. Classify each as primary, secondary, or system actor.',
    tags: ['Primary Actors', 'Secondary Actors', 'System Actors'],
  },
  {
    color: '#f59e0b',
    title: 'Build Use Cases — "Manage Time"',
    desc: 'For each use case, produce four artifacts that together fully specify the behavior. These become the foundation for development and testing.',
    tags: ['Entities (Data Model)', 'Flowchart [Flow]', 'Sequence Diagram', 'Pseudocode'],
  },
]
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
}

.step {
  display: flex;
  gap: 22px;
  padding-bottom: 36px;
  position: relative;
}

.step::after {
  content: '';
  position: absolute;
  left: 17px;
  top: 44px;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.07);
}

.step.pb-0::after {
  display: none;
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  flex-shrink: 0;
  z-index: 1;
  transition: box-shadow 0.3s;
}

.step-body {
  flex: 1;
  padding-top: 6px;
}
</style>
