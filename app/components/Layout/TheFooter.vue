<template>
  <footer class="mt-auto py-8 bg-gray-900">
    <UContainer>
      <UCard>
        <div
          class="flex items-center gap-5 sm:justify-between flex-col sm:flex-row"
        >
          <div class="text-center sm:text-start">
            <span class="text-xl">&copy; {{ new Date().getFullYear() }} </span>
            <UButton
              aria-label="الشطوري"
              label="عبدالمؤمن الشطوري"
              color="primary"
              variant="link"
              class="text-3xl text-gradient font-black"
            />
          </div>
          <CommonCommonSocialPart />
        </div>
      </UCard>
    </UContainer>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
