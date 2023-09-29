<template>
  <div id="experience" class="container mx-auto px-8 mt-16">
    <p class="text-center font-black text-xl sm:text-2xl uppercase">
      What I have done so far
    </p>
    <h2
      class="text-center font-black text-3xl sm:text-5xl uppercase mt-5 main-title"
    >
      Work Experience.
    </h2>

    <div
      class="timeline relative mt-16 flex justify-around items-end md:items-start flex-col-reverse pt-8"
      v-for="(experience, index) in experiences"
      :key="index"
      :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
    >
      <div
        class="timeline-company w-[76px] bg-gray-900 rounded-full p-1 border-2"
      >
        <nuxt-icon
          class="text-[4rem] shadow-lg"
          :name="experience.iconName"
        ></nuxt-icon>
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <UCard
          :ui="{
            base: 'test',
          }"
        >
          <h2 class="font-black text-2xl">{{ experience.position }}</h2>
          <p class="mt-2 main-title font-black text-lg">
            {{ experience.company }} | {{ experience.employmentType }} |
            {{ experience.workPlace }}
          </p>
          <ul class="list-outside ps-5 mt-5">
            <li class="list-image-[url(assets/icons/checkmark.svg)]">
              Responsibilities
            </li>
            <li>
              <ul class="list-outside list-disc ps-5 my-1">
                <li
                  v-for="(
                    responsibility, index2
                  ) in experience.responsibilities"
                  :key="index2"
                  class="text-gray-400"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </li>
            <li>
              <ul class="flex justify-end">
                <li>
                  <UButton
                    icon="i-devicon-linkedin"
                    size="md"
                    color="primary"
                    square
                    variant="link"
                    :to="experience.linkedInUrl"
                    target="_blank"
                    aria-label="Company Linkedin"
                  />
                </li>
                <li>
                  <UButton
                    icon="i-clarity-world-outline-badged"
                    size="md"
                    color="primary"
                    square
                    variant="link"
                    :to="experience.companySiteUrl"
                    target="_blank"
                    aria-label="Company Site"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </UCard>
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] pt-3">
        <h2 :class="{ 'md:text-end': index % 2 !== 0 }">
          {{ experience.startDate }} - {{ experience.endDate }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = experiencesData();
</script>

<style lang="scss" >
.timeline {
  &::before {
    left: 50%;
    margin-left: -2px;
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 4px;
    background: #fff;
    @media (max-width: 767.98px) {
      left: 3%;
    }
  }

  .timeline-company {
    position: absolute;
    top: 20px;
    left: calc(50% - (2.13rem + 2px));
    svg {
      width: 100%;
    }
    @media (max-width: 767.98px) {
      left: -1.5rem;
    }
  }

  .timeline-item {
    position: relative;
  }
}
</style>