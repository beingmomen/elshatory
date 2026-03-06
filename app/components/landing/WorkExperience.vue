<script setup>
const experiences = useExperiences()
</script>

<template>
  <UPageSection
    title="الخبرات العملية"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <template #description>
      <div
        dir="ltr"
        class="flex flex-col gap-2"
      >
        <Motion
          v-for="(experience, index) in experiences"
          :key="experience.company"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <ULink
            :to="experience.companySiteUrl"
            target="_blank"
            class="flex items-baseline justify-between gap-4 py-2 group"
          >
            <span class="text-base text-dimmed whitespace-nowrap">
              {{ experience.startDate }} – {{ experience.endDate }}
            </span>
            <span class="text-base text-muted text-right whitespace-nowrap">
              {{ experience.position }} at
              <span class="font-semibold text-primary group-hover:underline">{{ experience.company }}</span>
            </span>
          </ULink>
          <USeparator
            v-if="index < experiences.length - 1"
          />
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
