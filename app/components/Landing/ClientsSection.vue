<template>
  <div id="customers" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      شراكات تحقق طموحاتنا المشتركة.
    </p>
    <h5
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 text-gradient text-center"
    >
      شراكاتنا وعملاءنا
    </h5>
    <div class="mt-16">
      <UCarousel
        v-slot="{ item }"
        loop
        :autoplay="{ delay: 1000 }"
        :items="data.clients"
        :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/5 flex justify-center items-center',
        }"
      >
        <div
          class="max-w-[150px] min-w-[100px] flex items-center justify-center"
        >
          <NuxtImg
            class="w-32 h-32 object-contain"
            provider="cloudinary"
            :src="item.image"
            :alt="`الشطوري - ${item.name}`"
            loading="lazy"
            format="webp"
            quality="80"
            width="1200"
            height="1200"
            :modifiers="{
              c: 'crop',
              g: 'auto',
            }"
          />
        </div>
      </UCarousel>
    </div>
  </div>
</template>

<script setup>
const { data } = await useLanding();
// const items = [
//   "beingmomen/clients/kmjlnjntlcqy1bqhekb4",
//   "beingmomen/clients/armsg41juqluibx003hf",
//   "beingmomen/clients/tjwstowfbzzp8z8osn3e",
//   "beingmomen/clients/knyl7hs3ny1vpz5qebbc",
//   "beingmomen/clients/yah7ammgfnk5bp9chjzh",
//   "beingmomen/clients/hnyqiyetlingybknpblx",
//   "beingmomen/clients/nyehtoxkyeuglyj6pprn",
//   "beingmomen/clients/tbxjvymjvgeogjytyxow",
//   "beingmomen/clients/le5idxg7tvrg44ti5wj1",
//   "beingmomen/clients/ygf61a5im66czrhmncf1",
//   "beingmomen/clients/wcqsjnl4beqy1oerkr24",
// ];
</script>

<style lang="scss" >
</style>