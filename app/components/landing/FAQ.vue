<script setup>
const faqData = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات على الأسئلة الأكثر شيوعاً',
  categories: [
    {
      title: 'عام',
      questions: [
        { label: 'ما هي خبرتك في تطوير الويب؟', content: 'لدي خبرة تزيد عن 5 سنوات في تطوير واجهات المستخدم وبناء تطبيقات ويب متكاملة باستخدام أحدث التقنيات والأدوات.' },
        { label: 'ما هي التقنيات التي تستخدمها؟', content: 'أستخدم Vue.js, Nuxt.js, React, Tailwind CSS, TypeScript, Node.js وغيرها من التقنيات الحديثة حسب متطلبات كل مشروع.' },
        { label: 'هل تقدم خدمات استشارية؟', content: 'نعم، أقدم استشارات تقنية في مجال تطوير الويب والواجهات الأمامية.' }
      ]
    },
    {
      title: 'المشاريع',
      questions: [
        { label: 'كم يستغرق تنفيذ مشروع؟', content: 'يعتمد على حجم وتعقيد المشروع. المشاريع البسيطة تأخذ من أسبوع إلى أسبوعين، والمشاريع الكبيرة قد تأخذ شهراً أو أكثر.' },
        { label: 'هل تقدم دعم فني بعد التسليم؟', content: 'نعم، أقدم دعم فني مجاني لمدة شهر بعد تسليم المشروع، ويمكن تمديده حسب الاتفاق.' }
      ]
    },
    {
      title: 'التواصل',
      questions: [
        { label: 'كيف يمكنني التواصل معك؟', content: 'يمكنك التواصل معي عبر صفحة التواصل في الموقع أو عبر حساباتي على وسائل التواصل الاجتماعي.' },
        { label: 'ما هي أوقات العمل؟', content: 'أعمل عن بُعد ومتاح للتواصل من الأحد إلى الخميس من الساعة 9 صباحاً حتى 5 مساءً.' }
      ]
    }
  ]
}

const items = computed(() => {
  return faqData.categories.map(faq => ({
    label: faq.title,
    key: faq.title.toLowerCase(),
    questions: faq.questions
  }))
})

const allQuestions = faqData.categories.flatMap(c => c.questions)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': allQuestions.map(q => ({
          '@type': 'Question',
          'name': q.label,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': q.content
          }
        }))
      })
    }
  ]
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted',
  label: 'truncate'
}
</script>

<template>
  <UPageSection
    :title="faqData.title"
    :description="faqData.description"
    :ui="{
      container: 'px-0 !pt-0 gap-4 sm:gap-4',
      title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-right mt-2 text-base sm:text-lg lg:text-base text-muted leading-relaxed'
    }"
  >
    <UTabs
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <UAccordion
          trailing-icon="i-lucide-plus"
          :items="item.questions"
          :unmount-on-hide="false"
          :ui="{
            item: 'border-none',
            trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
          }"
        >
          <template #body="{ item: _item }">
            <p class="px-4 text-muted">
              {{ _item.content }}
            </p>
          </template>
        </UAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
