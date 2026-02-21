<template>
  <section class="py-16">
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Visual Overview</p>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sdlc-display">6 Phases · Roles at a Glance</h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          Every phase has distinct stakeholders, inputs, and outputs. The cycle is iterative — not strictly linear.
        </p>
      </div>

      <div class="timeline-grid">
        <div
          v-for="(phase, index) in phases"
          :key="phase.id"
          class="timeline-phase"
        >
          <div
            class="chevron"
            :class="[
              `bg-${phase.color}-500`,
              index === 0 ? 'chevron-first' : '',
              index === phases.length - 1 ? 'chevron-last' : '',
            ]"
          >
            <span class="chevron-num">{{ phase.num }}</span>
            <span class="chevron-title">{{ phase.title }}</span>
          </div>
          <ul class="role-list">
            <li
              v-for="role in phaseRoles[phase.id]"
              :key="role"
              class="role-item"
              @click="openModal(role, phase)"
            >
              <span class="arrow">→</span>
              <span class="role-name">{{ role }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- Role Detail Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="activeRole" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-card" dir="ltr">
            <button class="modal-close" @click="closeModal">×</button>

            <div
              class="modal-phase-tag"
              :style="`--mc: ${phaseColorMap[activePhase?.color] ?? '#06b6d4'}`"
            >
              {{ activePhase?.title }}
            </div>

            <h3 class="modal-title">{{ activeRole }}</h3>

            <div class="modal-divider" />

            <p class="modal-summary">{{ roleDetails[activeRole]?.summary }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
defineProps({
  phases: {
    type: Array,
    required: true,
  },
})

const phaseRoles = {
  analysis: ['Product Owner', 'Project Manager', 'Business Analyst', 'CTO'],
  design: ['System Architect', 'UX/UI Designer'],
  development: ['Frontend Developer', 'Backend Developer'],
  testing: ['Solutions Architect', 'QA Engineer', 'Tester', 'DevOps'],
  deployment: ['Database Administrator', 'DevOps'],
  maintenance: ['End Users', 'Testers', 'Technical Support'],
}

const phaseColorMap = {
  cyan: '#06b6d4',
  violet: '#8b5cf6',
  emerald: '#10b981',
  amber: '#f59e0b',
  orange: '#f97316',
  pink: '#ec4899',
}

const roleDetails = {
  'Product Owner': {
    summary: 'Represents the product vision and prioritizes requirements on behalf of stakeholders. Manages the Product Backlog and decides what to build first to maximize product value.',
  },
  'Project Manager': {
    summary: 'Coordinates team work, manages timelines, resources, and risks. Ensures project delivery on time and within budget through effective communication with all parties.',
  },
  'Business Analyst': {
    summary: 'Gathers and documents stakeholder requirements. Bridges the gap between business needs and technical solutions to ensure the team fully understands what is being built and why.',
  },
  'CTO': {
    summary: 'Leads the company\'s technical strategy and oversees infrastructure and engineering teams. Ensures technology decisions align with business goals and long-term vision.',
  },
  'System Architect': {
    summary: 'Designs the overall technical architecture of the system and selects appropriate architectural patterns and technologies. Ensures component integration and meets performance, security, and scalability requirements.',
  },
  'UX/UI Designer': {
    summary: 'Designs user experience and application interface from wireframes to final mockups. Aims to make the product visually appealing, user-friendly, and aligned with real user needs.',
  },
  'Frontend Developer': {
    summary: 'Transforms UX/UI designs into interactive interfaces that users directly interact with. Ensures performance and responsiveness across devices and browsers while maintaining code quality standards.',
  },
  'Backend Developer': {
    summary: 'Builds application business logic, APIs, and databases. Responsible for system performance, security, stability, and efficient data processing.',
  },
  'Solutions Architect': {
    summary: 'Designs integrated technical solutions connecting technical strategy with practical implementation. Oversees solution-to-requirement alignment and ensures overall architecture quality.',
  },
  'QA Engineer': {
    summary: 'Ensures software quality by designing and executing test plans. Prevents defects from reaching end users and sets quality standards for the entire team.',
  },
  'Tester': {
    summary: 'Tests software manually or automatically to find bugs. Verifies the system works according to defined specifications and documents defects clearly for the development team.',
  },
  'DevOps': {
    summary: 'Bridges development and operations to automate build, deployment, and monitoring processes. Ensures environment stability, delivery speed, and system reliability in production.',
  },
  'Database Administrator': {
    summary: 'Manages and maintains databases, ensuring their performance, security, and availability. Oversees migration, backup, and disaster recovery operations.',
  },
  'End Users': {
    summary: 'Use the system in production and provide real feedback that shapes improvement direction in the next cycle. Their satisfaction is the true measure of product success.',
  },
  'Testers': {
    summary: 'Participate in continuous post-deployment testing to verify system stability and performance in production, and detect early quality regressions between releases.',
  },
  'Technical Support': {
    summary: 'Responds to and resolves user issues. Represents the first line in the post-launch support chain, documenting recurring bugs and routing them to the engineering team.',
  },
}

const activeRole = ref(null)
const activePhase = ref(null)

function openModal(role, phase) {
  activeRole.value = role
  activePhase.value = phase
}

function closeModal() {
  activeRole.value = null
  activePhase.value = null
}
</script>

<style scoped>
.timeline-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 14px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .timeline-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .timeline-grid { grid-template-columns: repeat(2, 1fr); }
}

.timeline-phase {
  display: flex;
  flex-direction: column;
}

.chevron {
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: rgba(255, 255, 255, 0.95);
  font-family: 'Space Grotesk', sans-serif;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
  transition: filter 0.25s;
  text-shadow: 0 1px 4px rgba(0,0,0,0.35);
}

.chevron:hover {
  filter: brightness(1.18) drop-shadow(0 0 10px rgba(255,255,255,0.15));
}

.chevron-num {
  font-size: 10px;
  font-weight: 700;
  opacity: 0.60;
  line-height: 1;
  letter-spacing: 0.02em;
}

.chevron-title {
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.chevron-first {
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
}

.chevron-last {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 18px 50%);
}

.role-list {
  list-style: none;
  padding: 10px 8px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-top: none;
  flex: 1;
}

.role-item {
  font-size: 13px;
  color: #a0aabf;
  padding: 6px 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  line-height: 1.4;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.18s, background 0.18s;
}

.role-item:last-child {
  border-bottom: none;
}

.role-item:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
}

.role-name {
  flex: 1;
}

.arrow {
  font-size: 10px;
  color: #4b5563;
  flex-shrink: 0;
  transition: color 0.18s, transform 0.18s;
}

.role-item:hover .arrow {
  color: #9ca3af;
  transform: translateX(2px);
}

/* ── Modal ── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  background: rgba(12, 12, 22, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  padding: 36px 36px 32px;
  max-width: 460px;
  width: 100%;
  position: relative;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255,255,255,0.05);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: #9ca3af;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  line-height: 1;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.modal-phase-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid;
  margin-bottom: 16px;
  background: color-mix(in srgb, var(--mc) 14%, transparent);
  border-color: color-mix(in srgb, var(--mc) 40%, transparent);
  color: var(--mc);
  font-family: 'Space Grotesk', sans-serif;
}

.modal-title {
  font-size: 26px;
  font-weight: 900;
  color: #f1f5f9;
  margin-bottom: 18px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.modal-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 18px;
}

.modal-summary {
  font-size: 15px;
  color: #b0bac9;
  line-height: 1.8;
}

/* Fade + scale transition */
.modal-fade-enter-active {
  transition: opacity 0.22s ease;
}
.modal-fade-leave-active {
  transition: opacity 0.18s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes modal-card-in {
  from { transform: scale(0.95) translateY(10px); opacity: 0; }
  to   { transform: scale(1) translateY(0);       opacity: 1; }
}

.modal-fade-enter-active .modal-card {
  animation: modal-card-in 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
