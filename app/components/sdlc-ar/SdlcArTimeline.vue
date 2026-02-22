<template>
  <section class="py-16">
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
          نظرة عامة بصرية
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-3 sdlc-display">
          ٦ مراحل · الأدوار في لمحة
        </h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          لكل مرحلة أصحاب مصلحة وإدخالات ومخرجات مختلفة. الدورة تكرارية — وليست خطية بالضرورة.
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
              index === phases.length - 1 ? 'chevron-last' : ''
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
              <span class="role-name">{{ role }}</span>
              <span class="arrow">←</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- Role Detail Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="activeRole"
          class="modal-backdrop"
          @click.self="closeModal"
        >
          <div
            class="modal-card"
            dir="rtl"
          >
            <button
              class="modal-close"
              @click="closeModal"
            >
              ×
            </button>

            <div
              class="modal-phase-tag"
              :style="`--mc: ${phaseColorMap[activePhase?.color] ?? '#06b6d4'}`"
            >
              {{ activePhase?.title }}
            </div>

            <h3 class="modal-title">
              {{ activeRole }}
            </h3>
            <p class="modal-role-en">
              {{ roleDetails[activeRole]?.en }}
            </p>

            <div class="modal-divider" />

            <p class="modal-summary">
              {{ roleDetails[activeRole]?.summary }}
            </p>
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
    required: true
  }
})

const phaseRoles = {
  analysis: ['مالك المنتج', 'مدير المشروع', 'محلل الأعمال', 'المدير التقني'],
  design: ['مهندس الأنظمة', 'مصمم UX/UI'],
  development: ['مطور الواجهة الأمامية', 'مطور الخلفية'],
  testing: ['مهندس الحلول', 'مهندس جودة', 'مختبِر', 'DevOps'],
  deployment: ['مدير قاعدة البيانات', 'DevOps'],
  maintenance: ['المستخدمون', 'المختبِرون', 'الدعم الفني']
}

const phaseColorMap = {
  cyan: '#06b6d4',
  violet: '#8b5cf6',
  emerald: '#10b981',
  amber: '#f59e0b',
  orange: '#f97316',
  pink: '#ec4899'
}

const roleDetails = {
  'مالك المنتج': {
    en: 'Product Owner',
    summary: 'يمثل رؤية المنتج ويحدد أولويات المتطلبات نيابةً عن أصحاب المصلحة. يدير قائمة الأعمال المتراكمة (Backlog) ويتخذ قرارات ما يُبنى أولاً لتحقيق أقصى قيمة للمنتج.'
  },
  'مدير المشروع': {
    en: 'Project Manager',
    summary: 'ينسّق عمل الفريق ويدير الجداول الزمنية والموارد والمخاطر. يضمن تسليم المشروع في الوقت المحدد وضمن الميزانية المقررة من خلال التواصل الفعّال مع جميع الأطراف.'
  },
  'محلل الأعمال': {
    en: 'Business Analyst',
    summary: 'يجمع متطلبات أصحاب المصلحة ويوثقها بدقة. يجسر الفجوة بين احتياجات الأعمال والحلول التقنية لضمان فهم الفريق الكامل لما يُبنى ولماذا.'
  },
  'المدير التقني': {
    en: 'Chief Technology Officer (CTO)',
    summary: 'يقود الاستراتيجية التقنية للشركة ويشرف على البنية التحتية والكوادر التقنية. يضمن توافق القرارات التكنولوجية مع أهداف الأعمال ورؤيتها بعيدة المدى.'
  },
  'مهندس الأنظمة': {
    en: 'System / Solution Architect',
    summary: 'يصمم البنية التقنية الشاملة للنظام ويختار الأنماط المعمارية والتقنيات المناسبة. يضمن تكامل المكونات وتلبية متطلبات الأداء والأمان والتوسع.'
  },
  'مصمم UX/UI': {
    en: 'UX/UI Designer',
    summary: 'يصمم تجربة المستخدم وواجهة التطبيق من الهيكل الشبكي حتى التصاميم النهائية. هدفه جعل المنتج جذاباً وسهل الاستخدام وملائماً لاحتياجات المستخدم الحقيقية.'
  },
  'مطور الواجهة الأمامية': {
    en: 'Frontend Developer',
    summary: 'يحوّل تصاميم UX/UI إلى واجهات تفاعلية يراها المستخدم مباشرة. يضمن الأداء والاستجابة لمختلف الأجهزة والمتصفحات مع الالتزام بمعايير جودة الكود.'
  },
  'مطور الخلفية': {
    en: 'Backend Developer',
    summary: 'يبني المنطق الخلفي للتطبيق وAPIs وقواعد البيانات. مسؤول عن أداء النظام وأمنه واستقراره ومعالجة البيانات بكفاءة عالية.'
  },
  'مهندس الحلول': {
    en: 'Solutions Architect',
    summary: 'يصمم حلولاً تقنية متكاملة تربط الاستراتيجية التقنية بالتنفيذ العملي. يشرف على مطابقة الحل للمتطلبات ويضمن جودة البنية الشاملة قبل الانتقال للتطوير.'
  },
  'مهندس جودة': {
    en: 'QA Engineer',
    summary: 'يضمن جودة البرمجيات من خلال تصميم خطط الاختبار وتنفيذها. يمنع وصول العيوب للمستخدم النهائي ويضع معايير الجودة للفريق بأكمله.'
  },
  'مختبِر': {
    en: 'Tester',
    summary: 'يختبر البرمجيات يدوياً أو آلياً للعثور على الأخطاء. يتحقق من أن النظام يعمل وفق المواصفات المحددة ويوثق العيوب بوضوح لفريق التطوير.'
  },
  'DevOps': {
    en: 'DevOps Engineer',
    summary: 'يجمع التطوير والعمليات لأتمتة عمليات البناء والنشر والمراقبة. يضمن استقرار البيئات وسرعة التسليم وموثوقية الأنظمة في بيئة الإنتاج.'
  },
  'مدير قاعدة البيانات': {
    en: 'Database Administrator (DBA)',
    summary: 'يدير قواعد البيانات ويصون أداءها وأمانها وتوفرها. يشرف على عمليات الترحيل والنسخ الاحتياطي واسترداد البيانات عند الحوادث الطارئة.'
  },
  'المستخدمون': {
    en: 'End Users',
    summary: 'يستخدمون النظام في بيئة الإنتاج ويقدمون ملاحظات حقيقية تُشكّل اتجاه التحسين في الدورة القادمة. رضاهم هو المقياس الحقيقي لنجاح المنتج.'
  },
  'المختبِرون': {
    en: 'Testers (Maintenance)',
    summary: 'يشاركون في الاختبار المستمر للنظام بعد النشر للتحقق من ثباته وأدائه في بيئة الإنتاج، والكشف المبكر عن أي تراجع في الجودة بين الإصدارات.'
  },
  'الدعم الفني': {
    en: 'Technical Support',
    summary: 'يستجيب لمشاكل المستخدمين ويحلها. يمثل الحلقة الأولى في سلسلة دعم ما بعد الإطلاق، ويوثق الأخطاء المتكررة ويوجهها للفريق التقني لمعالجتها.'
  }
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
  font-family: 'Tajawal', sans-serif;
  clip-path: polygon(18px 0, 100% 0, calc(100% - 18px) 50%, 100% 100%, 18px 100%, 0 50%);
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
}

.chevron-title {
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0;
}

/* RTL: first (index=0) is rightmost — flat right, point left */
.chevron-first {
  clip-path: polygon(18px 0, 100% 0, 100% 100%, 18px 100%, 0 50%);
}

/* RTL: last (index=5) is leftmost — notch right, flat left */
.chevron-last {
  clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 50%, 100% 100%, 0 100%);
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
  justify-content: space-between;
  line-height: 1.4;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  text-align: right;
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
  text-align: right;
}

.arrow {
  font-size: 10px;
  color: #4b5563;
  flex-shrink: 0;
  transition: color 0.18s, transform 0.18s;
}

.role-item:hover .arrow {
  color: #9ca3af;
  transform: translateX(-2px);
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
  left: 14px;
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
  font-size: 12px;
  font-weight: 700;
  border: 1px solid;
  margin-bottom: 16px;
  background: color-mix(in srgb, var(--mc) 14%, transparent);
  border-color: color-mix(in srgb, var(--mc) 40%, transparent);
  color: var(--mc);
  font-family: 'Tajawal', sans-serif;
}

.modal-title {
  font-size: 26px;
  font-weight: 900;
  color: #f1f5f9;
  margin-bottom: 5px;
  font-family: 'Tajawal', sans-serif;
  line-height: 1.2;
}

.modal-role-en {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 20px;
  font-family: 'Space Grotesk', sans-serif;
  direction: ltr;
  text-align: left;
}

.modal-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 18px;
}

.modal-summary {
  font-size: 15px;
  color: #b0bac9;
  line-height: 1.9;
  font-family: 'Tajawal', sans-serif;
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
