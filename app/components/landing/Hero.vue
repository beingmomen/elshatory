<script setup>
const { footer, global } = useAppConfig()

const hero = {
  title: 'عبدالمؤمن الشطوري',
  description: 'مهندس واجهات أمامية بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب حديثة وعالية الأداء مع التركيز على تجربة المستخدم.',
  links: [
    { label: 'تواصل معي', to: '/contact', color: 'primary', size: 'md' }
  ],
  images: [
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/kumcpisodzlmbjl09rkq', alt: 'Tiger Academy Dashboard' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/z6maczq6efi4frqrocr4', alt: 'Golden Tiger Academy' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/eue84zgeqqhcxnsqdmml', alt: 'STREAMMAXY' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/ntzcicgt0xive8ea4eof', alt: 'Dream TV Player' },
    { src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/projects/iioskrrbfdwywmta7ciy', alt: 'Spider TV' }
  ]
}
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <UColorModeAvatar
        class="size-18 ring ring-default ring-offset-3 ring-offset-bg animate-fade-in"
        :light="global.picture?.light"
        :dark="global.picture?.dark"
        :alt="global.picture?.alt"
      />
    </template>

    <template #title>
      <span class="animate-fade-in">
        {{ hero.title }}
      </span>
    </template>

    <template #description>
      <span class="animate-fade-in animation-delay-200">
        {{ hero.description }}
      </span>
    </template>

    <template #links>
      <div
        v-if="hero.links"
        class="flex items-center gap-2 animate-fade-in animation-delay-300"
      >
        <UButton v-bind="hero.links[0]" />
        <UButton
          :color="global.available ? 'success' : 'error'"
          variant="ghost"
          class="gap-2"
          :to="global.available ? global.meetingLink : ''"
          :target="global.available ? '_blank' : undefined"
          :label="global.available ? 'متاح للمشاريع الجديدة' : 'غير متاح حالياً'"
        >
          <template #leading>
            <span class="relative flex size-2">
              <span
                class="absolute inline-flex size-full rounded-full opacity-75"
                :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
              />
              <span
                class="relative inline-flex size-2 scale-90 rounded-full"
                :class="global.available ? 'bg-success' : 'bg-error'"
              />
            </span>
          </template>
        </UButton>
      </div>

      <div class="gap-x-4 inline-flex mt-4 animate-fade-in animation-delay-400">
        <UButton
          v-for="link of footer?.links"
          :key="link.to || link.href"
          v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
        />
      </div>
    </template>
  </UPageHero>
</template>
