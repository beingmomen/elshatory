<script setup>
const experiences = useExperiences()
</script>

<template>
  <UPageSection
    title="الخبرات العملية"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-right text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in experiences"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex flex-col gap-1"
        >
          <ULink
            class="flex items-center gap-1"
            :to="experience.companySiteUrl"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <span class="font-medium text-primary">{{ experience.company }}</span>
          </ULink>
          <p class="text-sm text-dimmed self-end">
            {{ experience.startDate }} - {{ experience.endDate }}
          </p>
          <USeparator v-if="index < experiences.length - 1" class="mt-1" />
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
