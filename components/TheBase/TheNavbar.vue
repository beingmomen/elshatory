<template>
  <div class="h-20">
    <nav
      class="lg:container xl:container mx-auto px-4 xl:px-8 flex justify-between items-center h-full"
    >
      <div class="flex items-center gap-3">
        <img
          class="w-16 h-16"
          src="/logo.svg"
          alt="Abdelmomen Elshatory Logo"
        />
        <h1 class="uppercase font-bold text-xl text-gray-150 main-title">
          Abdelmo’men
        </h1>
      </div>
      <TheBaseTheLang />
      <div class="hidden sm:block">
        <UButton
          variant="link"
          color="gray"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
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
            font: 'font-bold',
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
            font: 'font-bold',
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
            font: 'font-bold',
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
            font: 'font-bold',
          }"
          @click="scrollToSection('customers')"
        >
          Customers
        </UButton>
      </div>
    </nav>
  </div>
</template>

<script setup>
const scrollToSection = (sectionRef) => {
  document.getElementById(sectionRef).scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
</style>