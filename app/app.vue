<template>
  <UApp :locale="ar">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
import { ar } from "@nuxt/ui/locale";

const lang = computed(() => ar.code);
const dir = computed(() => ar.dir);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
});
</script>