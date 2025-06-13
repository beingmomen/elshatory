<template>
  <div class="px-10 xl:px-0 py-4 xl:p-0 flex justify-center">
    <!-- rotate-[4.29deg] hover:rotate-0 -->
    <div
      class="hero-img flex justify-center min-w-[180px] w-full max-w-[340px] lg:max-w-[700px] aspect-[340/323] lg:aspect-[472/510] rounded-[28px] border-2 border-pro-100 hover:border-pro-50 transition-transform duration-300"
    >
      <NuxtImg
        provider="cloudinary"
        src="Global/hzihujxexpmxa81g4dkn"
        alt="عبدالمؤمن الشطوري - Frontend Developer"
        class="w-full h-full object-cover rounded-3xl"
        format="webp"
        preload
        width="473"
        height="511"
        sizes="(max-width: 640px) 340px, 472px"
        loading="eager"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
