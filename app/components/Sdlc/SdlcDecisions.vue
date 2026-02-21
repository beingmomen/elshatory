<template>
  <section class="py-20">
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Feedback Loops</p>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sdlc-display">Decision Flow System</h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          The conditional logic an architect applies when something is wrong, incomplete, or ambiguous — and how to recover.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div class="dec-col">
          <div
            v-for="node in leftNodes"
            :key="node.condition"
            class="dec-node"
            :class="node.type"
          >
            <div class="dec-dot sdlc-node-dot" />
            <div class="dec-card">
              <div class="dec-cond" :style="`color: ${node.condColor}`">{{ node.condition }}</div>
              <div class="dec-action">
                → {{ node.action.prefix }}<strong>{{ node.action.target }}</strong>{{ node.action.suffix }}
              </div>
            </div>
          </div>
        </div>

        <div class="dec-col">
          <div
            v-for="node in rightNodes"
            :key="node.condition"
            class="dec-node"
            :class="node.type"
          >
            <div class="dec-dot sdlc-node-dot" />
            <div class="dec-card">
              <div class="dec-cond" :style="`color: ${node.condColor}`">{{ node.condition }}</div>
              <div class="dec-action">
                → {{ node.action.prefix }}<strong>{{ node.action.target }}</strong>{{ node.action.suffix }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const leftNodes = [
  {
    type: 'warn',
    condition: 'IF requirement is unclear',
    condColor: '#f59e0b',
    action: { prefix: 'Return to ', target: 'Analysis', suffix: '. Re-engage stakeholders. Clarify vision and functional expectations before any design work begins.' },
  },
  {
    type: 'err',
    condition: 'IF architecture is unstable',
    condColor: '#f87171',
    action: { prefix: 'Revisit ', target: 'Design', suffix: '. Decompose further. Validate the architecture against requirements again before resuming development.' },
  },
  {
    type: 'err',
    condition: 'IF use case is incomplete',
    condColor: '#f87171',
    action: { prefix: 'Return to ', target: 'Design', suffix: '. Add missing actors, flows, or edge cases. Re-model before writing a single line of code.' },
  },
]

const rightNodes = [
  {
    type: 'warn',
    condition: 'IF a test fails',
    condColor: '#f59e0b',
    action: { prefix: 'Return to ', target: 'Development', suffix: '. Fix root cause — not the symptom. Re-run the full regression suite before resubmitting for QA.' },
  },
  {
    type: 'err',
    condition: 'IF deployment fails',
    condColor: '#f87171',
    action: { prefix: 'Execute ', target: 'Rollback Plan', suffix: '. Investigate root cause. Fix in Development → re-test → redeploy with confidence.' },
  },
  {
    type: 'ok',
    condition: 'IF all checkpoints pass',
    condColor: '#10b981',
    action: { prefix: 'Proceed to ', target: 'next phase', suffix: '. Document decisions and rationale. Notify stakeholders and update progress tracking.' },
  },
]
</script>

<style scoped>
.dec-col {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 36px;
}

.dec-col::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.15), rgba(255,255,255,0.06));
}

.dec-node {
  position: relative;
  padding-bottom: 20px;
}

.dec-dot {
  position: absolute;
  left: -28px;
  top: 18px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid;
}

.dec-node.warn .dec-dot { background: rgba(245,158,11,0.3); border-color: #f59e0b; box-shadow: 0 0 8px rgba(245,158,11,0.3); }
.dec-node.err  .dec-dot { background: rgba(239,68,68,0.3);  border-color: #f87171; box-shadow: 0 0 8px rgba(239,68,68,0.3); }
.dec-node.ok   .dec-dot { background: rgba(16,185,129,0.3); border-color: #10b981; box-shadow: 0 0 8px rgba(16,185,129,0.3); }

.dec-card {
  border-radius: 12px;
  padding: 18px 20px;
  transition: transform 0.2s;
}

.dec-card:hover { transform: translateX(3px); }

.dec-node.warn .dec-card { background: rgba(245,158,11,0.07); border: 1px solid rgba(245,158,11,0.25); border-left: 3px solid #f59e0b; }
.dec-node.err  .dec-card { background: rgba(239,68,68,0.07);  border: 1px solid rgba(239,68,68,0.25);  border-left: 3px solid #f87171; }
.dec-node.ok   .dec-card { background: rgba(16,185,129,0.07); border: 1px solid rgba(16,185,129,0.25); border-left: 3px solid #10b981; }

.dec-cond {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
}

.dec-action {
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.65;
}
</style>
