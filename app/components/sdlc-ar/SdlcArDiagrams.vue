<script setup>
const diagrams = [
  { icon: '👥', name: 'حالة الاستخدام', desc: 'من يفعل ماذا في النظام', phase: 'التصميم' },
  { icon: '🔄', name: 'النشاط', desc: 'تدفق الأنشطة والقرارات', phase: 'التحليل + التصميم' },
  { icon: '🧩', name: 'الفئة', desc: 'الكائنات والخصائص والعلاقات', phase: 'التطوير' },
  { icon: '📨', name: 'التسلسل', desc: 'تفاعلات الكائنات المرتبة زمنياً', phase: 'التصميم + التطوير' },
  { icon: '🔧', name: 'المكوّن', desc: 'وحدات النظام وواجهاتها', phase: 'البنية' },
  { icon: '⚙️', name: 'آلة الحالة', desc: 'دورة حياة الكائن وتحولاته', phase: 'التصميم' },
  { icon: '🖥️', name: 'النشر', desc: 'تخطيط العتاد والبنية التحتية', phase: 'النشر' }
]
</script>

<template>
  <UPageSection
    title="مناطق مخططات UML"
    description="كل نوع مخطط يجيب على سؤال معماري محدد. استخدم المخطط المناسب لمشكلة التفكير المناسبة."
    :ui="{
      title: 'text-right text-xl sm:text-2xl font-medium',
      description: 'text-right text-sm text-muted mt-2'
    }"
  >
    <div class="rounded-xl border border-warning/30 bg-warning/5 p-4 mb-6 flex items-start gap-3 flex-row-reverse">
      <UIcon
        name="i-lucide-alert-triangle"
        class="size-5 text-warning shrink-0 mt-0.5"
      />
      <p class="text-sm text-muted text-right">
        المخطط غير مفهوم؟ راجع <strong class="text-highlighted">الفصل 5 [الترميز]</strong> أولاً. لا يزال غامضاً — ابحث عنه. المرجع هو الأولوية، وليس الحفظ.
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
