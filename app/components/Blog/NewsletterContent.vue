<template>
  <div>
    <div class="space-y-4 mt-10">
      <h2 class="text-xl font-bold">
        قم بالاشتراك في النشرة البريدية للحصول على احدث الاخبار.
      </h2>

      <UInput
        v-model="value"
        class="w-1/4"
        placeholder="البريد الإلكتروني"
        size="xl"
        :ui="{ trailing: 'pe-1' }"
      >
        <template #trailing>
          <UButton
            class="py-1"
            color="neutral"
            variant="solid"
            size="xl"
            label="اشتراك"
            aria-label="Subscribe"
          />
        </template>
      </UInput>
    </div>
  </div>
</template>

<script setup>
const value = ref("");
</script>

<style lang="scss" scoped>
</style>