<template>
  <nav class="pt-5 h-full">
    <UContainer class="flex justify-center md:justify-between items-center">
      <div class="flex items-center gap-3">
        <NuxtLink to="/">
          <NuxtImg
            provider="cloudinary"
            src="beingmomen/xhjsrjkz4pfcsworh2mt"
            alt="Abdelmomen Elshatory"
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

<script setup lang="ts">
interface NavItem {
  label: string;
  to?: string;
  sectionId?: string;
  ariaLabel: string;
  isChip?: boolean;
}

const navItems: NavItem[] = [
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
    label: "قم بتقييمنا",
    to: "/testimonial",
    ariaLabel: "Navigate to testimonial page",
    isChip: true,
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
</style>