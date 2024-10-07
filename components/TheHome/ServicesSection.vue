<template>
  <section id="services" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-2xl uppercase text-white dark:text-white text-center"
    >
      {{ $t("various_services") }}.
    </p>
    <h2
      class="font-bold text-4xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      {{ $t("our_services") }}
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

        <h3 class="mt-4 font-bold text-2xl main-title">{{ service.title }}</h3>
        <p class="mt-3 text-gray-300 text-xl">
          {{ service.description }}
        </p>
      </UCard>
    </div>
  </section>
</template>

<script setup>
const services = useServices();
</script>

<style lang="scss" scoped>
</style>