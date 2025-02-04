<template>
  <div id="projects" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-2xl uppercase text-white dark:text-white text-center"
    >
      مشاريعنا، قصص نجاح تُروى بفضل عملائنا.
    </p>
    <h2
      class="font-bold text-4xl sm:text-5xl uppercase mt-5 text-gradient text-center"
    >
      مشاريع العملاء
    </h2>
    <div class="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
      <UCard
        v-for="project in data.projects"
        :key="project._id"
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg">
          <NuxtImg
            class="h-full w-full"
            :src="project.image"
            provider="cloudinary"
            :alt="project.title"
            loading="lazy"
            width="325"
            height="240"
          />
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-400">#{{ project.tag }}</p>

            <h3
              class="mt-6 font-bold text-3xl hover:text-gradient text-gray-300 cursor-pointer"
            >
              <NuxtLink :to="project.url" target="_blank">
                {{ project.title }}
                <!-- <UIcon name="i-ic-baseline-launch" class="size-5" /> -->
              </NuxtLink>
            </h3>
          </div>

          <div class="mt-4 gap-3 flex flex-wrap">
            <UBadge
              v-for="badge in project.tags"
              :key="badge._id"
              color="primary"
              :label="badge.title"
              class="text-black dark:text-black font-bold"
            />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { data } = await useLanding();
</script>

<style lang="scss" scoped>
</style>