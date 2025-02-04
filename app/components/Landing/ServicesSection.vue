<template>
  <section id="services" class="mt-16">
    <UContainer>
      <p
        class="font-bold text-2xl uppercase text-white dark:text-white text-center"
      >
        خدمات متنوعة
      </p>
      <h3
        class="font-bold text-4xl sm:text-5xl uppercase mt-5 text-gradient text-center"
      >
        ما الذي أقدمه لك؟
      </h3>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mt-8"
      >
        <UCard
          v-for="service in data.services"
          :key="service._id"
          class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
        >
          <div class="h-[12rem] rounded overflow-hidden">
            <NuxtImg
              class="object-cover w-full h-full"
              provider="cloudinary"
              :src="service.image"
              :alt="service.title"
              loading="lazy"
              width="1000"
              height="800"
              sizes="300px md:400px"
            />
          </div>

          <h3 class="mt-4 font-bold text-2xl text-gradient">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-neutral-50 text-xl">
            {{ service.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const { data } = await useLanding();
</script>

<style lang="scss" scoped>
</style>