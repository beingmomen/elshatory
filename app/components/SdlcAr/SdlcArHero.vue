<template>
  <section class="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <!-- Aurora background -->
    <div class="sdlc-aurora" />

    <!-- Canvas particles -->
    <canvas ref="canvasEl" class="absolute inset-0 w-full h-full pointer-events-none" />

    <UContainer class="w-full relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center py-16">
        <!-- Right: Title (RTL — this is the first column visually) -->
        <div>
          <p class="eyebrow sdlc-display">
            دليل المعماري · <span class="ooad-badge">OOA&amp;D</span>
          </p>
          <h1 class="hero-h1 mb-6">
            <span class="sdlc-word-wrap"><span class="sdlc-word-inner sdlc-display">دورة حياة</span></span><br>
            <span class="sdlc-word-wrap"><span class="sdlc-word-inner sdlc-display">تطوير</span></span><br>
            <span class="sdlc-word-wrap sdlc-display gradient-line"><span class="sdlc-word-inner text-gradient sdlc-display">البرمجيات</span></span>
          </h1>
          <p class="text-xl text-neutral-400 max-w-md mb-10 leading-relaxed">
            إطار بصري معرفي لمفكري الأنظمة — يُحوّل نظرية SDLC إلى نموذج ذهني تفاعلي للتحليل والتصميم الكائني التوجه.
          </p>
          <div class="flex gap-4 flex-wrap">
            <a href="#analysis" class="btn-primary">استكشف المراحل ←</a>
          </div>
        </div>

        <!-- Left: Phase navigator -->
        <div class="flex flex-col gap-2">
          <a
            v-for="phase in phases"
            :key="phase.id"
            :href="`#${phase.id}`"
            class="phase-nav-card group"
            :style="`--card-color: var(--color-${phase.color}-500, #06b6d4)`"
          >
            <span class="phase-num sdlc-display" :class="`text-${phase.color}-400`">{{ phase.num }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-bold sdlc-display text-neutral-100">{{ phase.title }}</div>
              <div class="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors truncate">{{ phase.tagline }}</div>
            </div>
            <span class="phase-arrow">←</span>
          </a>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
defineProps({
  phases: {
    type: Array,
    required: true,
  },
})

const canvasEl = ref(null)

onMounted(() => {
  initCanvas()
})

// ─── Canvas Particle System ─────────────────────────────────────────
function initCanvas() {
  const el = canvasEl.value
  if (!el) return
  const ctx = el.getContext('2d')
  const COLORS = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#f97316', '#ec4899']
  let W = 0, H = 0
  const mouse = { x: -999, y: -999 }

  const resize = () => {
    W = el.width = el.offsetWidth
    H = el.height = el.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  window.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  })

  class Particle {
    constructor() { this.reset() }
    reset() {
      this.x = Math.random() * W
      this.y = Math.random() * H
      this.vx = (Math.random() - 0.5) * 0.4
      this.vy = (Math.random() - 0.5) * 0.4
      this.r = Math.random() * 1.8 + 0.5
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      this.alpha = Math.random() * 0.5 + 0.2
    }
    update() {
      const dx = this.x - mouse.x
      const dy = this.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        this.vx += (dx / dist) * 0.3
        this.vy += (dy / dist) * 0.3
      }
      this.vx *= 0.98
      this.vy *= 0.98
      this.x += this.vx
      this.y += this.vy
      if (this.x < -10) this.x = W + 10
      if (this.x > W + 10) this.x = -10
      if (this.y < -10) this.y = H + 10
      if (this.y > H + 10) this.y = -10
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = this.alpha
      ctx.fill()
      ctx.globalAlpha = 1
    }
  }

  const particles = Array.from({ length: 80 }, () => new Particle())

  const drawLines = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 90) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = particles[i].color
          ctx.globalAlpha = (1 - d / 90) * 0.08
          ctx.lineWidth = 0.8
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }
    }
  }

  const loop = () => {
    ctx.clearRect(0, 0, W, H)
    particles.forEach(p => { p.update(); p.draw() })
    drawLines()
    requestAnimationFrame(loop)
  }
  loop()
}

</script>

<style scoped>
.eyebrow {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0;
  color: #06b6d4;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.eyebrow::before {
  content: '';
  width: 28px;
  height: 2px;
  background: #06b6d4;
  display: block;
  flex-shrink: 0;
}

.hero-h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 0;
}

.gradient-line {
  display: block;
  margin-top: 4px;
}

.btn-primary {
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.5);
  color: #06b6d4;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.btn-primary:hover {
  background: rgba(6, 182, 212, 0.22);
  border-color: rgba(6, 182, 212, 0.7);
  box-shadow: 0 0 28px rgba(6, 182, 212, 0.25);
}

.btn-ghost {
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.22);
  color: #e2e6f0;
}

.phase-nav-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-right: 3px solid var(--card-color, rgba(255,255,255,0.2));
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}
.phase-nav-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.16);
  border-right-color: var(--card-color);
  transform: translateX(-5px);
}

.phase-num {
  font-size: 18px;
  font-weight: 900;
  width: 28px;
  flex-shrink: 0;
  line-height: 1;
}

.phase-arrow {
  color: rgba(255,255,255,0.25);
  font-size: 14px;
  flex-shrink: 0;
  transition: color 0.2s, transform 0.2s;
}
.phase-nav-card:hover .phase-arrow {
  color: rgba(255,255,255,0.6);
  transform: translateX(-3px);
}

.ooad-badge {
  position: relative;
  font-size: 1.15em;
  font-weight: 900;
  color: #fff;
  padding: 2px 10px;
  letter-spacing: 0.08em;
  z-index: 1;
}

.ooad-badge::before {
  content: '';
  position: absolute;
  inset: -2px -4px;
  background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #06b6d4 100%);
  border-radius: 6px;
  z-index: -1;
  transform: rotate(-1.5deg) skewX(-4deg);
  opacity: 0.85;
}
</style>
