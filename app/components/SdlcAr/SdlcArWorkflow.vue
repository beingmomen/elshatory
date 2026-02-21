<template>
  <section class="py-20">
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">تدفق عملية <span class="ooad-badge">OOA&amp;D</span></p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-3 sdlc-display">سير عمل التحليل والتصميم</h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          التدفق المنظّم من المتطلبات الخام إلى البنية المنشورة — كل مرحلة تنتج مخرجات ملموسة تُغذّي المرحلة التالية.
        </p>
      </div>

      <div class="flow-grid">
        <div
          v-for="(stage, index) in stages"
          :key="stage.title"
          class="flow-stage"
        >
          <div
            class="sdlc-glass sdlc-stage flow-card"
            :data-num="index + 1"
            :style="`border-top: 3px solid ${stage.color}; background: color-mix(in srgb, ${stage.color} 5%, rgba(10,10,20,1)); color: ${stage.color}`"
          >
            <div class="flow-title" :style="`color: ${stage.color}`">{{ stage.title }}</div>
            <ul class="flow-list">
              <li v-for="item in stage.items" :key="item">
                <span class="dot" :style="`color: ${stage.color}`">·</span> {{ item }}
              </li>
            </ul>
          </div>
          <div v-if="index < stages.length - 1" class="flow-arrow">←</div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const stages = [
  {
    title: 'المتطلبات',
    color: '#06b6d4',
    items: ['الرؤية', 'المتطلبات الوظيفية', 'المتطلبات غير الوظيفية', 'القيود', 'الافتراضات'],
  },
  {
    title: 'نطاق المشكلة',
    color: '#8b5cf6',
    items: ['تحديد حدود النظام', 'الكيانات الأساسية', 'علاقات النطاق', 'حدود النطاق'],
  },
  {
    title: 'حالات الاستخدام',
    color: '#10b981',
    items: ['حالة الاستخدام المحورية', 'حالات النظام', 'قائمة الأطراف الفاعلة', 'مخططات النشاط'],
  },
  {
    title: 'تعريف البنية',
    color: '#f59e0b',
    items: ['تحليل البنية', 'تعريف المكوّنات', 'ربط الواجهات', 'اختيار الأنماط'],
  },
  {
    title: 'النشر',
    color: '#f97316',
    items: ['إعداد البنية التحتية', 'خط CI/CD', 'ضبط البيئات', 'خطة الإطلاق'],
  },
]
</script>

<style scoped>
.flow-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  align-items: start;
}

@media (max-width: 1024px) {
  .flow-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .flow-arrow { display: none; }
}

.flow-stage {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
}

@media (min-width: 1025px) {
  .flow-stage { flex-direction: row; }
}

.flow-card {
  flex: 1;
  padding: 22px 18px;
  margin: 0 3px;
  min-height: 220px;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}

.flow-card::after {
  content: attr(data-num);
  position: absolute;
  bottom: -10px;
  right: 8px;
  font-size: 80px;
  font-weight: 900;
  font-family: 'Tajawal', sans-serif;
  color: currentColor;
  opacity: 0.06;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.flow-title {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  font-family: 'Tajawal', sans-serif;
  text-align: right;
}

.flow-list {
  list-style: none;
  text-align: right;
}

.flow-list li {
  font-size: 14px;
  color: #9ca3af;
  padding: 5px 0;
  display: flex;
  gap: 8px;
  line-height: 1.5;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.flow-list li:last-child { border-bottom: none; }

.dot {
  flex-shrink: 0;
  margin-top: 2px;
}

.flow-arrow {
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 16px;
  margin-top: 90px;
  flex-shrink: 0;
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
