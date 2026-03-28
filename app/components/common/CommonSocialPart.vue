<template>
  <div
    class="flex gap-4 flex-wrap justify-center"
    role="group"
    aria-label="روابط التواصل الاجتماعي"
  >
    <CommonSocialPartLink
      v-for="link in socialLinks"
      :key="link.url"
      v-bind="link"
    />
  </div>
</template>
