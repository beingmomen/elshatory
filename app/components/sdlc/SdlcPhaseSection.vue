<template>
  <section
    :id="phase.id"
    class="py-20 relative"
    @mousemove="onMouseMove"
  >
    <!-- Phase accent glow background -->
    <div
      class="phase-bg-glow"
      :style="`--phase-color: var(--color-${phase.color}-500, #06b6d4)`"
    />

    <UContainer>
      <!-- Header -->
      <div
        class="flex items-center gap-5 mb-10"
      >
        <div
          class="phase-num-box sdlc-display"
          :class="`bg-${phase.color}-500`"
        >
          {{ phase.num }}
        </div>
        <div>
          <div
            class="text-4xl font-black tracking-tight sdlc-display"
            :class="`text-${phase.color}-400`"
          >
            {{ phase.title }}
          </div>
          <div class="text-base text-neutral-500 mt-1">
            {{ phase.tagline }}
          </div>
        </div>
      </div>

      <!-- 3 Cognitive Layers — each has distinct design -->
      <div class="grid md:grid-cols-3 gap-5 mb-6">
        <!-- Layer A: Quick Scan — phase-colored background -->
        <div
          class="layer-a-card"
          :style="`--pc: var(--color-${phase.color}-500, #06b6d4)`"
        >
          <div class="badge badge-a mb-4">
            ⚡ Layer A · Quick Scan
          </div>
          <h4 class="text-base font-bold mb-3 sdlc-display text-neutral-100">
            {{ phase.layerA.title }}
          </h4>
          <p class="text-sm text-neutral-400 leading-relaxed mb-5">
            {{ phase.layerA.body }}
          </p>
          <div
            class="output-box"
            :style="`--pc: var(--color-${phase.color}-500, #06b6d4)`"
          >
            <div
              class="output-label"
              :class="`text-${phase.color}-400`"
            >
              Key Output
            </div>
            <div class="text-sm text-neutral-200 font-medium leading-relaxed">
              {{ phase.layerA.output }}
            </div>
          </div>
        </div>

        <!-- Layer B: Structured — neutral with phase top border -->
        <div
          class="layer-b-card"
          :style="`--pc: var(--color-${phase.color}-500, #06b6d4)`"
        >
          <div class="badge badge-b mb-4">
            📋 Layer B · Structured
          </div>
          <h4 class="text-base font-bold mb-4 sdlc-display text-neutral-100">
            {{ phase.layerB.title }}
          </h4>
          <ul class="layer-b-list">
            <li
              v-for="item in phase.layerB.items"
              :key="item"
              class="layer-b-item"
            >
              <span
                class="item-dot"
                :class="`bg-${phase.color}-500`"
              />
              <span class="text-sm text-neutral-300 leading-relaxed">
                <template v-if="item.includes(' — ')">
                  <strong class="text-neutral-100">{{ item.split(' — ')[0] }}</strong>
                  <span class="text-neutral-500"> — </span>{{ item.split(' — ').slice(1).join(' — ') }}
                </template>
                <template v-else>{{ item }}</template>
              </span>
            </li>
          </ul>
        </div>

        <!-- Layer C: Architect Notes — dark card with amber accent -->
        <div
          class="layer-c-card"
        >
          <div class="badge badge-c mb-4">
            🧠 Layer C · Architect Notes
          </div>
          <h4 class="text-base font-bold mb-4 sdlc-display text-neutral-100">
            {{ phase.layerC.title }}
          </h4>
          <ul class="space-y-3">
            <li
              v-for="item in phase.layerC.items"
              :key="item"
              class="text-sm text-neutral-400 leading-relaxed flex gap-3"
            >
              <span class="c-bullet">▸</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Meta Row -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div
          v-for="metaItem in metaItems"
          :key="metaItem.label"
          class="meta-item"
        >
          <div class="meta-label">
            {{ metaItem.label }}
          </div>
          <div class="meta-value">
            {{ metaItem.value }}
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const props = defineProps({
  phase: {
    type: Object,
    required: true
  }
})

const metaItems = computed(() => [
  { label: 'Roles', value: props.phase.meta.roles },
  { label: 'Key Question', value: props.phase.meta.question },
  { label: 'Next Phase Trigger', value: props.phase.meta.trigger },
  { label: 'Risk if Skipped', value: props.phase.meta.risk }
])

function onMouseMove() {
  // reserved for future mouse interactions
}
</script>

<style scoped>
.phase-bg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, var(--phase-color) 8%, transparent) 0%, transparent 70%);
}

/* Phase header number box */
.phase-num-box {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
}

/* ── Layer A: Phase-tinted card ── */
.layer-a-card {
  background: color-mix(in srgb, var(--pc) 8%, rgba(15,15,25,1));
  border: 1px solid color-mix(in srgb, var(--pc) 30%, transparent);
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.25s, transform 0.25s;
}
.layer-a-card:hover {
  border-color: color-mix(in srgb, var(--pc) 50%, transparent);
  transform: translateY(-3px);
}

/* ── Layer B: Clean card with phase top border ── */
.layer-b-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-top: 3px solid var(--pc);
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.25s, transform 0.25s;
}
.layer-b-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
  border-top-color: var(--pc);
  transform: translateY(-3px);
}

/* ── Layer C: Dark card with amber dashed border ── */
.layer-c-card {
  background: rgba(0, 0, 0, 0.30);
  border: 1px dashed rgba(251, 191, 36, 0.25);
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.25s, transform 0.25s;
}
.layer-c-card:hover {
  border-color: rgba(251, 191, 36, 0.45);
  transform: translateY(-3px);
}

/* Layer B list */
.layer-b-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.layer-b-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.layer-b-item:last-child { border-bottom: none; }

.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 7px;
  opacity: 0.8;
}

/* Layer C bullet */
.c-bullet {
  color: rgba(251, 191, 36, 0.7);
  flex-shrink: 0;
  margin-top: 1px;
  font-size: 12px;
}

/* Body text size overrides */
.layer-a-card p { font-size: 15px; }
.layer-b-item span { font-size: 15px; }
.layer-c-card li { font-size: 15px; }

/* Key Output box */
.output-box {
  background: color-mix(in srgb, var(--pc) 12%, rgba(0,0,0,0.2));
  border: 1px solid color-mix(in srgb, var(--pc) 35%, transparent);
  border-radius: 10px;
  padding: 14px 16px;
}

.output-label {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-a { background: rgba(99, 102, 241, 0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }
.badge-b { background: rgba(20, 184, 166, 0.15); color: #5eead4; border: 1px solid rgba(20,184,166,0.2); }
.badge-c { background: rgba(251, 191, 36, 0.12); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }

/* Meta row */
.meta-item {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 12px;
  padding: 18px;
  transition: border-color 0.2s, background 0.2s;
}

.meta-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.18);
}

.meta-label {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  color: #6b7280;
  margin-bottom: 6px;
}

.meta-value {
  font-size: 14px;
  color: #d1d5e0;
  line-height: 1.6;
}
</style>
