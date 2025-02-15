<template>
  <div
    class="mt-10 flex flex-wrap justify-center xl:justify-start gap-4 items-center"
  >
    <NuxtLink
      to="https://www.linkedin.com/in/beingmomen/"
      target="_blank"
      aria-label="الشطوري | LinkedIn"
      rel="noopener noreferrer"
    >
      <UIcon name="i-skill-icons-linkedin" class="w-8 h-8" />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/beingmomen"
      target="_blank"
      aria-label="الشطوري | Github"
      rel="noopener noreferrer"
    >
      <UIcon name="i-skill-icons-github-dark" class="w-8 h-8" />
    </NuxtLink>
    <NuxtLink
      to="https://qabilah.com/profile/beingmomen/posts"
      target="_blank"
      aria-label="linkedin Profile"
      rel="noopener noreferrer"
    >
      <UIcon name="i-custom-qabilah" class="w-8 h-8" />
    </NuxtLink>

    <UButton
      class="font-bold rounded-full"
      color="primary"
      size="xl"
      icon="i-heroicons-arrow-down-tray"
      trailing
      variant="outline"
      target="_blank"
      :to="data?.info.resumeUrl"
      rel="noopener noreferrer"
    >
      تحميل السيرة الذاتية
    </UButton>
  </div>
</template>

<script setup>
const { data } = await useLanding();
</script>

<style lang="scss" scoped>
</style>