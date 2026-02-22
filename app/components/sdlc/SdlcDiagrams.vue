<template>
  <section
    id="diagrams"
    class="py-20"
  >
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
          Visual Artifacts
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sdlc-display">
          UML Diagram Zones
        </h2>
        <p class="text-neutral-400 max-w-xl mb-6 leading-relaxed">
          Each diagram type answers a specific architectural question. Use the right diagram for the right thinking problem.
        </p>
      </div>

      <div
        class="callout mb-10"
      >
        Diagram not understood? Check <strong>Ch5 [Notation]</strong> first. Still unclear — search it. Reference is the priority, not memorization.
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div
          v-for="(diagram, index) in diagrams"
          :key="diagram.name"
          class="sdlc-glass sdlc-tilt diagram-card text-center cursor-default"
          @mousemove="onTilt($event, index)"
          @mouseleave="resetTilt(index)"
        >
          <div
            class="icon-bg w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
            :style="`background: ${diagram.iconBg}`"
          >
            {{ diagram.icon }}
          </div>
          <h4 class="text-sm font-bold mb-2 sdlc-display text-neutral-100">
            {{ diagram.name }}
          </h4>
          <p
            class="text-xs leading-snug mb-3"
            style="color: #9ca3af"
          >
            {{ diagram.desc }}
          </p>
          <span
            class="inline-block px-2.5 py-1 rounded-lg text-xs font-bold"
            :style="`background: ${diagram.tagBg}; color: ${diagram.tagColor}`"
          >{{ diagram.phase }}</span>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const diagrams = [
  {
    icon: '👥',
    name: 'Use Case',
    desc: 'Who does what in the system',
    phase: 'Design',
    iconBg: 'rgba(139,92,246,0.12)',
    tagBg: 'rgba(139,92,246,0.1)',
    tagColor: '#a78bfa'
  },
  {
    icon: '🔄',
    name: 'Activity',
    desc: 'Flow of activities & decisions',
    phase: 'Analysis + Design',
    iconBg: 'rgba(6,182,212,0.12)',
    tagBg: 'rgba(6,182,212,0.1)',
    tagColor: '#22d3ee'
  },
  {
    icon: '🧩',
    name: 'Class',
    desc: 'Objects, attributes, relationships',
    phase: 'Development',
    iconBg: 'rgba(16,185,129,0.12)',
    tagBg: 'rgba(16,185,129,0.1)',
    tagColor: '#34d399'
  },
  {
    icon: '📨',
    name: 'Sequence',
    desc: 'Time-ordered object interactions',
    phase: 'Design + Dev',
    iconBg: 'rgba(245,158,11,0.12)',
    tagBg: 'rgba(245,158,11,0.1)',
    tagColor: '#fbbf24'
  },
  {
    icon: '🔧',
    name: 'Component',
    desc: 'System modules & their interfaces',
    phase: 'Architecture',
    iconBg: 'rgba(249,115,22,0.12)',
    tagBg: 'rgba(249,115,22,0.1)',
    tagColor: '#fb923c'
  },
  {
    icon: '⚙️',
    name: 'State Machine',
    desc: 'Object lifecycle & transitions',
    phase: 'Design',
    iconBg: 'rgba(236,72,153,0.12)',
    tagBg: 'rgba(236,72,153,0.1)',
    tagColor: '#f472b6'
  },
  {
    icon: '🖥️',
    name: 'Deployment',
    desc: 'Hardware & infrastructure layout',
    phase: 'Deployment',
    iconBg: 'rgba(99,102,241,0.12)',
    tagBg: 'rgba(99,102,241,0.1)',
    tagColor: '#818cf8'
  }
]

const _cardRefs = ref([])

function onTilt(e, _index) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const x = (e.clientX - cx) / (rect.width / 2)
  const y = (e.clientY - cy) / (rect.height / 2)
  card.style.transform = `perspective(400px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-3px)`
}

function resetTilt(index) {
  const card = document.querySelectorAll('.diagram-card')[index]
  if (card) {
    card.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg) translateY(0)'
  }
}
</script>

<style scoped>
.diagram-card {
  padding: 24px 16px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
}

.callout {
  background: rgba(251, 191, 36, 0.05);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 10px;
  padding: 14px 18px;
  font-size: 13px;
  color: #fcd34d;
  display: flex;
  gap: 10px;
  line-height: 1.6;
}

.callout::before {
  content: '⚠';
  flex-shrink: 0;
}

.icon-bg {
  transition: transform 0.3s;
}

.diagram-card:hover .icon-bg {
  transform: scale(1.1) rotate(5deg);
}
</style>
