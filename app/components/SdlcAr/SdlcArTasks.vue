<template>
  <section id="tasks" class="py-20">
    <UContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 500 }"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-3 sdlc-display">سير عمل الفريق</h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          مهام ملموسة لنظام <strong class="text-neutral-300">تتبع الإجازات</strong> (الفصل 12) — المشروع التطبيقي في برنامج الإرشاد OOA&amp;D.
        </p>
      </div>

      <div class="steps">
        <div
          v-for="(task, index) in tasks"
          :key="task.title"
          class="step"
          :class="{ 'pb-0': index === tasks.length - 1 }"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
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
            <div class="flex flex-wrap gap-2 justify-start">
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
    title: 'قراءة المتطلبات من الفصل 12',
    desc: 'استخراج وتوثيق جميع المتطلبات من فصل نظام تتبع الإجازات. إنشاء وثيقة متطلبات مشتركة يمكن للفريق بأكمله الرجوع إليها.',
    tags: ['الرؤية', 'المتطلبات الوظيفية', 'المتطلبات غير الوظيفية', 'القيود'],
  },
  {
    color: '#8b5cf6',
    title: 'تعريف نطاق المشكلة',
    desc: 'تحديد حدود النظام. تعريف ما هو داخل نطاق نظام تتبع الإجازات وما هو خارجه. توثيق ما يفعله النظام — وما لا يفعله صراحةً.',
    tags: ['حدود النطاق', 'تعريف النطاق', 'تحديد الكيانات'],
  },
  {
    color: '#10b981',
    title: 'استخراج أطراف النظام الفاعلة',
    desc: 'تحديد كل طرف بشري ونظامي سيتفاعل مع نظام تتبع الإجازات. تصنيف كل منهم كطرف أساسي أو ثانوي أو نظامي.',
    tags: ['الأطراف الأساسية', 'الأطراف الثانوية', 'أطراف النظام'],
  },
  {
    color: '#f59e0b',
    title: 'بناء حالات الاستخدام — "إدارة الوقت"',
    desc: 'لكل حالة استخدام، إنتاج أربعة مخرجات تُحدد السلوك بشكل كامل. هذه تصبح الأساس للتطوير والاختبار.',
    tags: ['الكيانات (نموذج البيانات)', 'مخطط التدفق', 'مخطط التسلسل', 'شبه الكود'],
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
  flex-direction: row-reverse;
  text-align: right;
}

.step::after {
  content: '';
  position: absolute;
  right: 17px;
  top: 44px;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.12);
}

.step.pb-0::after {
  display: none;
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
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
