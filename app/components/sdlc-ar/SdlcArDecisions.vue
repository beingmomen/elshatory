<template>
  <section class="py-20">
    <UContainer>
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
          حلقات التغذية الراجعة
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold mb-3 sdlc-display">
          نظام تدفق القرارات
        </h2>
        <p class="text-neutral-400 max-w-xl mb-10 leading-relaxed">
          المنطق الشرطي الذي يطبّقه المعماري حين يكون هناك خطأ أو غموض أو نقص — وكيفية التعافي.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div class="dec-col">
          <div
            v-for="node in rightNodes"
            :key="node.condition"
            class="dec-node"
            :class="node.type"
          >
            <div class="dec-dot sdlc-node-dot" />
            <div class="dec-card">
              <div
                class="dec-cond"
                :style="`color: ${node.condColor}`"
              >
                {{ node.condition }}
              </div>
              <div class="dec-action">
                ← {{ node.action.prefix }}<strong>{{ node.action.target }}</strong>{{ node.action.suffix }}
              </div>
            </div>
          </div>
        </div>

        <div class="dec-col">
          <div
            v-for="node in leftNodes"
            :key="node.condition"
            class="dec-node"
            :class="node.type"
          >
            <div class="dec-dot sdlc-node-dot" />
            <div class="dec-card">
              <div
                class="dec-cond"
                :style="`color: ${node.condColor}`"
              >
                {{ node.condition }}
              </div>
              <div class="dec-action">
                ← {{ node.action.prefix }}<strong>{{ node.action.target }}</strong>{{ node.action.suffix }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const rightNodes = [
  {
    type: 'warn',
    condition: 'إذا كان المتطلب غير واضح',
    condColor: '#f59e0b',
    action: { prefix: 'العودة إلى ', target: 'التحليل', suffix: '. إعادة التواصل مع أصحاب المصلحة. توضيح الرؤية والتوقعات الوظيفية قبل أي عمل تصميمي.' }
  },
  {
    type: 'err',
    condition: 'إذا كانت البنية غير مستقرة',
    condColor: '#f87171',
    action: { prefix: 'مراجعة ', target: 'التصميم', suffix: '. مزيد من التفكيك. التحقق من البنية مقابل المتطلبات قبل استئناف التطوير.' }
  },
  {
    type: 'err',
    condition: 'إذا كانت حالة الاستخدام غير مكتملة',
    condColor: '#f87171',
    action: { prefix: 'العودة إلى ', target: 'التصميم', suffix: '. إضافة الأطراف والتدفقات والحالات الاستثنائية. إعادة النمذجة قبل كتابة أي كود.' }
  }
]

const leftNodes = [
  {
    type: 'warn',
    condition: 'إذا فشل اختبار',
    condColor: '#f59e0b',
    action: { prefix: 'العودة إلى ', target: 'التطوير', suffix: '. معالجة السبب الجذري لا العرض. إعادة تشغيل مجموعة الاختبار كاملة قبل إعادة التقديم لضمان الجودة.' }
  },
  {
    type: 'err',
    condition: 'إذا فشل النشر',
    condColor: '#f87171',
    action: { prefix: 'تنفيذ ', target: 'خطة التراجع', suffix: '. تحقيق في السبب الجذري. إصلاح في التطوير ← إعادة الاختبار ← إعادة النشر بثقة.' }
  },
  {
    type: 'ok',
    condition: 'إذا اجتازت جميع نقاط التحقق',
    condColor: '#10b981',
    action: { prefix: 'الانتقال إلى ', target: 'المرحلة التالية', suffix: '. توثيق القرارات والمبررات. إخطار أصحاب المصلحة وتحديث متتبع التقدم.' }
  }
]
</script>

<style scoped>
.dec-col {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 36px;
  text-align: right;
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

.dec-card:hover { transform: translateX(-3px); }

.dec-node.warn .dec-card { background: rgba(245,158,11,0.07); border: 1px solid rgba(245,158,11,0.25); border-right: 3px solid #f59e0b; }
.dec-node.err  .dec-card { background: rgba(239,68,68,0.07);  border: 1px solid rgba(239,68,68,0.25);  border-right: 3px solid #f87171; }
.dec-node.ok   .dec-card { background: rgba(16,185,129,0.07); border: 1px solid rgba(16,185,129,0.25); border-right: 3px solid #10b981; }

.dec-cond {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0;
  margin-bottom: 8px;
  font-family: 'Tajawal', sans-serif;
}

.dec-action {
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.65;
}
</style>
