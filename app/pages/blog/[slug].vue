<template>
  <div class="py-10">
    <UContainer>
      {{ route.params.slug }}
    </UContainer>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
</style>