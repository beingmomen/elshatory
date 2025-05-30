<template>
  <div>
    <nav
      class="flex gap-4 flex-wrap justify-center"
      aria-label="Social Media Links"
    >
      <LazyCommonSocialLink
        v-for="link in socialLinks"
        :key="link.url"
        v-bind="link"
      />
    </nav>
  </div>
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
    icon: "i-custom-qabilah",
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

<style lang="scss" scoped></style>
