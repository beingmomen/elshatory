<template>
  <footer class="mt-auto py-8">
    <UContainer>
      <UCard class="bg-gray-900">
        <div
          class="flex items-center gap-5 sm:justify-between flex-col sm:flex-row"
        >
          <div class="text-center sm:text-start">
            <span class="text-xl text-gray-600 dark:text-gray-400"
              >&copy; {{ new Date().getFullYear() }}
            </span>
            <UButton
              to="https://beingmomen.com"
              target="_blank"
              aria-label="الشطوري"
              label="عبدالمؤمن الشطوري"
              color="primary"
              variant="link"
              class="text-3xl text-gradient font-black"
            />
          </div>

          <nav
            class="flex gap-4 flex-wrap justify-center"
            aria-label="Social Media Links"
          >
            <CommonSocialLink
              v-for="link in socialLinks"
              :key="link.url"
              v-bind="link"
            />
          </nav>
        </div>
      </UCard>
    </UContainer>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    url: "https://www.linkedin.com/in/beingmomen/",
    icon: "i-skill-icons-linkedin",
    label: "Linkedin Profile",
  },
  {
    url: "https://github.com/beingmomen",
    icon: "i-skill-icons-github-dark",
    label: "Github Profile",
  },
  {
    url: "https://qabilah.com/profile/beingmomen/posts",
    image: "beingmomen/icons/rfq6c4v71eb49k6btf7r",
    label: "Qabilah Profile",
  },
  {
    url: "https://twitter.com/beingmomen",
    icon: "i-devicon-twitter",
    label: "Twitter Profile",
  },
  {
    url: "https://www.facebook.com/beingmomen/",
    icon: "i-devicon-facebook",
    label: "Facebook Profile",
  },
  {
    url: "https://www.instagram.com/beingmomen/",
    icon: "i-skill-icons-instagram",
    label: "Instagram Profile",
  },
];
</script>

<style lang="scss" scoped>
</style>