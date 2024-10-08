<template>
  <div class="pt-5">
    <nav
      class="lg:container xl:container mx-auto px-4 xl:px-8 flex justify-center md:justify-between items-center h-full"
    >
      <div class="flex items-center gap-3">
        <NuxtLink to="/">
          <img class="w-40" src="/logo.svg" alt="Abdelmomen Elshatory Logo" />
        </NuxtLink>
        <!-- <h1 class="uppercase font-bold text-xl text-gray-150 main-title">
          Abdelmo’men
        </h1> -->
      </div>
      <!-- <TheBaseTheLang /> -->
      <div class="hidden sm:block">
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          aria-label="Home page"
          to="/"
        >
          الرئيسية
        </UButton>

        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Services Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('services')"
        >
          خدماتنا
        </UButton>
        <!-- <UButton
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
        </UButton> -->
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Projects Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('projects')"
        >
          المشاريع
        </UButton>
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Customers Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('customers')"
        >
          العملاء
        </UButton>
        <UChip position="top-left" inset>
          <UButton
            class="text-xl"
            variant="link"
            color="gray"
            aria-label="testimonial Page"
            :ui="{
              base: 'text-gray-400',
              font: 'font-bold',
            }"
            to="/testimonial"
          >
            قم بتقييمنا
          </UButton>
        </UChip>
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