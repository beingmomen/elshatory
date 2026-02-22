<script setup>
const { global } = useAppConfig()

const page = {
  title: 'نبذة عني',
  description: 'مطور واجهات أمامية متخصص في MEVN Stack بخبرة أكثر من 3 سنوات في Vue.js و Nuxt.js. أعمل على تطوير تطبيقات ويب حديثة وعالية الأداء مع التركيز على تجربة المستخدم والتصميم المتجاوب.',
  content: 'شغفي بالبرمجة بدأ من سنوات، ومنذ ذلك الحين وأنا أسعى لتطوير مهاراتي باستمرار. أؤمن بأن التكنولوجيا يمكنها تغيير حياة الناس للأفضل، ولهذا أحرص على بناء تطبيقات تقدم قيمة حقيقية للمستخدمين. أتخصص في تطوير الواجهات الأمامية باستخدام Vue.js و Nuxt.js، مع خبرة في Node.js و MongoDB و Express.js لبناء حلول متكاملة.',
  images: [
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/beingmomen-01_xczmdz', alt: 'عبدالمؤمن الشطوري' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/services/qhrcwqztvqltvawgzdlq', alt: 'تطوير الويب' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/services/rt2aapfyn1mw57cuqc0p', alt: 'البرمجة' }
  ]
}

useSeoMeta({
  title: 'نبذة عني - عبدالمؤمن الشطوري',
  ogTitle: 'نبذة عني - عبدالمؤمن الشطوري',
  description: page.description,
  ogDescription: page.description
})

useBreadcrumbSchema([{ name: 'نبذة عني', path: '/about' }])
</script>

<template>
  <UPage>
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-right',
        description: '!mx-0 text-right',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light"
        :dark="global.picture?.dark"
        :alt="global.picture?.alt"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <p class="text-muted text-right leading-relaxed">
        {{ page.content }}
      </p>
      <div class="flex flex-row justify-center items-center py-10 space-x-[-2rem]">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
