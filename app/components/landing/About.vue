<script setup>
const aboutData = {
  title: 'نبذة عني',
  description: 'مهندس واجهات أمامية بخبرة تزيد عن 5 سنوات. أعمل على بناء تطبيقات ويب حديثة وعالية الأداء مع التركيز على تجربة المستخدم والتصميم المتجاوب.'
}
</script>

<template>
  <UPageSection
    :title="aboutData.title"
    :description="aboutData.description"
    :ui="{
      container: '!p-0',
      title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-right mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>
