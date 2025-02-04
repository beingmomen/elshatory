<template>
  <section>
    <UContainer dir="ltr" class="overflow-hidden mx-auto">
      <div class="slider my-6">
        <div class="flex gap-6 justify-center animation slide-track">
          <div
            v-for="(skill, i) in firstSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
          <div
            v-for="(skill, i) in firstSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
      <div class="slider my-6">
        <div class="flex gap-6 justify-center animation-reverse slide-track">
          <div
            v-for="(skill, i) in secondSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
          <div
            v-for="(skill, i) in secondSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
      <div class="slider my-6">
        <div class="flex gap-6 justify-center animation slide-track">
          <div
            v-for="(skill, i) in thirdSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
          <div
            v-for="(skill, i) in thirdSkills"
            :key="i"
            class="p-5 mb-5 slide"
          >
            <div
              class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
            >
              <UIcon :name="skill.icon" class="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const { data } = await useLanding();
const slideCount = ref(9);

// Initialize skills data with a default empty array
const skills = computed(() => data.value?.skills || []);

// Split skills into three groups for different sliders
const skillsCount = computed(() => skills.value.length);
const groupSize = computed(() => Math.ceil(skillsCount.value / 3));

const firstSkills = computed(() => skills.value.slice(0, groupSize.value));

const secondSkills = computed(() =>
  skills.value.slice(groupSize.value, groupSize.value * 2)
);

const thirdSkills = computed(() => skills.value.slice(groupSize.value * 2));
</script>

<style lang="scss">
@keyframes scroll {
  0% {
    transform: translate(0);
  }

  to {
    transform: translate(calc(-200px * v-bind(slideCount)));
  }
}

.slider {
  height: 100px;
  margin-inline: auto;
  position: relative;
  // width: 960px;
  overflow: hidden;
}

.slider:after {
  right: 0;
  top: 0;
  transform: rotate(180deg);
}

.slider:before {
  left: 0;
  top: 0;
}

.animation {
  animation: scroll 30s linear infinite;
}

.slide-track:hover {
  animation-play-state: paused;
}

.slide-track:hover .slide {
  animation-play-state: running;
}

.animation-reverse {
  animation: scroll 30s linear infinite reverse;
}

.slider .slide-track {
  display: flex;
  width: calc(200px * (v-bind(slideCount) * 2));
}

.slider .slide {
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide:hover {
  animation: gradient-rotate-1413e9b7 5s linear 0s infinite reverse;
  opacity: 1;
  transition: all 0.3s linear;
}
</style>
