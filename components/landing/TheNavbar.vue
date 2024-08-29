<template>
  <div class="h-20">
    <nav
      class="lg:container xl:container mx-auto px-4 xl:px-8 flex justify-between items-center h-full"
    >
      <div class="flex items-center gap-3">
        <img class="w-16 h-16" src="/beingmomen.svg" alt="logo" />
        <h1 class="uppercase font-black text-xl text-gray-150 main-title">
          Elshatory
        </h1>
      </div>
      <div class="hidden sm:block">
        <UButton
          variant="link"
          color="gray"
          :ui="{
            base: 'text-gray-400',
            font: 'font-black',
          }"
          aria-label="Home page"
        >
          Home
        </UButton>

        <UButton
          variant="link"
          color="gray"
          aria-label="Services Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-black',
          }"
          @click="scrollToSection('services')"
        >
          Services
        </UButton>
        <UButton
          variant="link"
          color="gray"
          aria-label="Experience Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-black',
          }"
          @click="scrollToSection('experience')"
        >
          Experience
        </UButton>
        <UButton
          variant="link"
          color="gray"
          aria-label="Projects Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-black',
          }"
          @click="scrollToSection('projects')"
        >
          Projects
        </UButton>
        <UButton
          variant="link"
          color="gray"
          aria-label="Customers Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-black',
          }"
          @click="scrollToSection('customers')"
        >
          Customers
        </UButton>
      </div>
      <div class="hidden">
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
          />
          <!-- @click="isDark = !isDark" -->

          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { isDark } = useToggleMode();

const runtimeConfig = useRuntimeConfig();

const logo = computed(() => {
  return runtimeConfig.public.logo;
});

const scrollToSection = (sectionRef) => {
  document.getElementById(sectionRef).scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
</style>