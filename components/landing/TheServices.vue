<template>
  <div id="services" class="container mx-auto px-8 mt-16">
    <p class="font-black text-2xl uppercase text-white dark:text-white">
      VARIOUS SERVICES
    </p>
    <h2 class="font-black text-4xl sm:text-5xl uppercase mt-5 main-title">
      Our services.
    </h2>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mt-8"
    >
      <UCard
        class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out bg-slate-900 dark:bg-slate-900 ring-gray-800 dark:ring-gray-800"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="h-[12rem] rounded overflow-hidden">
          <NuxtImg
            class="h-full w-full object-cover"
            provider="cloudinary"
            :src="service.image"
            :alt="service.description"
          />
        </div>

        <h3 class="mt-4 font-black text-2xl main-title">{{ service.title }}</h3>
        <p class="mt-3 text-gray-300">
          {{ service.description }}
        </p>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const services = servicesData();
</script>

<style lang="scss" scoped>
</style>