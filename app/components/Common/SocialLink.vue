<template>
  <NuxtLink
    :to="url"
    target="_blank"
    :aria-label="label"
    class="hover:opacity-80 transition-opacity"
  >
    <template v-if="icon">
      <UIcon :name="icon" class="w-8 h-8" />
    </template>
    <template v-else-if="image">
      <NuxtImg
        provider="cloudinary"
        :src="image"
        :alt="label"
        class="w-8 min-w-8 h-8 object-cover"
      />
    </template>
  </NuxtLink>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
});
</script>
