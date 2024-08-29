<script lang="ts" setup>
import { useWindowScroll, useScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();

const el = ref<HTMLElement | null>(null);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div ref="el">
    <LandingTheNavbar />

    <!-- <LandingTheTestimonials /> -->
    <slot />
    <LandingTheFooter />
    <UButton
      v-if="y > 1000"
      class="fixed bottom-5 right-5 text-white dark:text-white"
      icon="i-ic-outline-arrow-upward"
      size="sm"
      color="blue"
      square
      variant="solid"
      @click="scrollTop"
    />
  </div>
</template>

<style scoped></style>
