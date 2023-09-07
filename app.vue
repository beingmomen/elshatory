<template>
  <!-- <div :dir="useAR()"> -->
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>



<script setup>
const colorMode = useColorMode();
colorMode.preference = "dark";
</script>




<style lang="scss">
body {
  font-family: "Nunito";
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}
</style>





