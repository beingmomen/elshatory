<template>
  <nav class="pt-5">
    <UContainer class="flex justify-center md:justify-between items-center">
      <div class="flex items-center gap-3">
        <NuxtLink to="/">
          <NuxtImg
            provider="cloudinary"
            src="Global/ouw3rqzi0xym347xiyyw"
            alt="beingmomen"
            class="w-40 h-20 object-contain"
            width="200"
            height="100"
            format="webp"
          />
        </NuxtLink>
      </div>

      <div class="hidden sm:block">
        <template v-for="item in navItems" :key="item.label">
          <UChip v-if="item.isChip" position="top-left" inset>
            <UButton
              class="text-xl font-bold cursor-pointer"
              variant="link"
              color="neutral"
              :aria-label="item.ariaLabel"
              :to="item.to"
              rel="canonical"
            >
              {{ item.label }}
            </UButton>
          </UChip>
          <UButton
            v-else
            class="text-xl font-bold cursor-pointer"
            variant="link"
            color="neutral"
            :aria-label="item.ariaLabel"
            :to="item.to"
            @click="item.sectionId && scrollToSection(item.sectionId)"
          >
            {{ item.label }}
          </UButton>
        </template>
      </div>
    </UContainer>
  </nav>
</template>

<script setup>
const navItems = [
  {
    label: "الرئيسية",
    to: "/",
    ariaLabel: "Navigate to Home page",
  },
  {
    label: "خدماتنا",
    sectionId: "services",
    ariaLabel: "Navigate to Services section",
  },
  {
    label: "المشاريع",
    sectionId: "projects",
    ariaLabel: "Navigate to Projects section",
  },
  {
    label: "العملاء",
    sectionId: "customers",
    ariaLabel: "Navigate to Customers section",
  },
  {
    label: "المقالات",
    to: "/blog",
    ariaLabel: "Navigate to blog page",
    isChip: true,
  },
  {
    label: "قم بتقييمنا",
    to: "/testimonial",
    ariaLabel: "Navigate to testimonial page",
    isChip: true,
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped></style>
