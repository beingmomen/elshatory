<template>
  <section id="services" class="mt-16">
    <UContainer>
      <p
        class="font-bold text-2xl uppercase text-white dark:text-white text-center"
      >
        خدمات متنوعة
      </p>
      <h2
        class="font-bold text-4xl sm:text-5xl uppercase mt-5 text-gradient text-center"
      >
        ما الذي أقدمه لك؟
      </h2>
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mt-8"
      >
        <UCard
          v-for="(service, index) in services"
          :key="index"
          class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
        >
          <div class="h-[12rem] rounded overflow-hidden">
            <NuxtImg
              class="object-cover w-full h-full"
              provider="cloudinary"
              :src="service.image"
              :alt="service.alt"
              loading="lazy"
              width="1000"
              height="800"
              sizes="300px md:400px"
            />
          </div>

          <h3 class="mt-4 font-bold text-2xl text-gradient">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-gray-300 text-xl">
            {{ service.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const services = useServices();
</script>

<style lang="scss" scoped>
</style>