<template>
  <section id="testimonials" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      <!-- رحم الله امرأ عمل عملاً فأحسنه -->
      إبداعنا يُقاس برضا من تعاملوا معنا.
    </p>
    <h4
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 text-gradient text-center"
    >
      آراء العملاء والشركاء
    </h4>

    <div
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <!-- First Marquee -->
      <AnimationsMarquee pause-on-hover class="[--duration:20s]">
        <AnimationsReviewCard
          v-for="review in firstRow"
          :key="review.email"
          :img="review.image"
          :name="review.name"
          :email="review.email"
          :body="review.description"
        />
      </AnimationsMarquee>

      <!-- Second Marquee (reverse) -->
      <AnimationsMarquee reverse pause-on-hover class="[--duration:20s]">
        <AnimationsReviewCard
          v-for="review in secondRow"
          :key="review.email"
          :img="review.image"
          :name="review.name"
          :email="review.email"
          :body="review.description"
        />
      </AnimationsMarquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-900"
      />

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-900"
      />
    </div>
  </section>
</template>

<script setup>
const { data } = await useLanding();
const testimonials = data?.value?.testimonials || [];

// Split reviews into two rows
const firstRow = ref(testimonials.slice(0, testimonials.length / 2));
const secondRow = ref(testimonials.slice(testimonials.length / 2));
</script>

<style lang="scss" scoped>
.description {
  position: relative;
  z-index: 1;
  &::before {
    content: url("/images/RiDoubleQuotesR.svg");
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    z-index: -1;
  }
}
</style>