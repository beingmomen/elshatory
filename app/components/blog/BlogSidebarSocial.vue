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
