<template>
  <div id="customers" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      Trust Us
    </p>
    <h2
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      Our customers.
    </h2>
    <div class="mt-16">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/5 justify-center items-center',
        }"
      >
        <div
          class="max-w-[150px] min-w-[100px] flex items-center justify-center"
        >
          <NuxtImg
            class="w-full object-cover"
            provider="cloudinary"
            :src="item"
            alt="client"
          />
        </div>
      </UCarousel>
    </div>
  </div>
</template>

<script setup>
const items = [
  "clients/kmjlnjntlcqy1bqhekb4",
  "clients/armsg41juqluibx003hf",
  "clients/tjwstowfbzzp8z8osn3e",
  "clients/knyl7hs3ny1vpz5qebbc",
  "clients/yah7ammgfnk5bp9chjzh",
  "clients/hnyqiyetlingybknpblx",
  "clients/nyehtoxkyeuglyj6pprn",
  "clients/tbxjvymjvgeogjytyxow",
  "clients/le5idxg7tvrg44ti5wj1",
  "clients/ygf61a5im66czrhmncf1",
  "clients/wcqsjnl4beqy1oerkr24",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 1000);
});
</script>

<style lang="scss" >
</style>