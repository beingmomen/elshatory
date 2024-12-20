<template>
  <main>
    <section class="py-8 sm:py-16">
      <UContainer>
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <!-- Left Content Column -->
          <div class="flex-1 space-y-8">
            <div>
              <LandingHeroSectionHeroTitle />
              <LandingHeroSectionHeroTypedText />
            </div>

            <!-- Mobile Image -->
            <LandingHeroSectionHeroImageMobile class="block lg:hidden w-full" />

            <div class="space-y-6">
              <LandingHeroSectionHeroDescription />
              <LandingHeroSectionHeroSocialMedia />
              <LandingHeroSectionHeroCallToAction />
            </div>
          </div>

          <!-- Desktop Image -->
          <LandingHeroSectionHeroImageDesktop class="hidden lg:flex flex-1" />
        </div>
      </UContainer>
    </section>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>