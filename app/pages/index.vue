<template>
  <div>
    <LandingHeroSection />
    <LandingSkillsSection />
    <LandingServicesSection />
    <LandingTestimonialsSection />
    <LandingProjectsSection />
    <LandingClientsSection />
  </div>
</template>

<script setup>
const { fetchLandingData } = await useLanding();
await fetchLandingData();
</script>

<style lang="scss" scoped>
</style>