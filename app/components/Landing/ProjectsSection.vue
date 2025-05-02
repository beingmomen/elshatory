<template>
  <div id="projects" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-2xl uppercase text-white dark:text-white text-center"
    >
      مشاريعنا، قصص نجاح تُروى بفضل عملائنا.
    </p>
    <h5
      class="font-bold text-4xl sm:text-5xl uppercase mt-5 text-gradient text-center"
    >
      مشاريع العملاء
    </h5>
    <div class="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
      <!-- hover:scale-110 -->
      <UCard
        v-for="project in data.projects"
        :key="project._id"
        class="hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out bg-gray-900 hover:ring-primary-900 hover:ring-2"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg">
          <NuxtImg
            class="h-full w-full"
            :src="project.image"
            provider="cloudinary"
            :alt="`${project.altText} - ${project.title}`"
            loading="lazy"
            width="325"
            height="240"
          />
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-400">#{{ project.tag }}</p>

            <p
              class="mt-6 font-bold text-3xl hover:text-gradient text-gray-300 cursor-pointer"
            >
              <NuxtLink
                :to="project.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ project.title }}
                <!-- <UIcon name="i-ic-baseline-launch" class="size-5" /> -->
              </NuxtLink>
            </p>
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

    <div v-if="data.projectsTotal > 6" class="mt-10 flex justify-center">
      <UButton
        label="كل المشاريع"
        variant="outline"
        color="primary"
        class="font-bold text-xl"
        to="/projects"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = await useLanding();
</script>

<style lang="scss" scoped>
</style>