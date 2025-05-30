<template>
  <div class="table-of-contents space-y-6">
    <BlogBlogSidebarTableOfContents />
    <USeparator class="my-5" size="sm" />
    <BlogBlogSidebarLinks />
    <USeparator class="my-5" size="sm" type="dashed" />
    <CommonCommonSocialPart />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.table-of-contents {
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  z-index: 100;
  direction: rtl;
}

.toc-navigation {
  direction: rtl;
}

// Custom scrollbar for the sticky TOC
.table-of-contents {
  scrollbar-width: thin;
  scrollbar-color: rgb(209 213 219) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(209 213 219);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(156 163 175);
  }
}

// Additional styling for level indicators
.toc-level-2 {
  font-weight: 600;
}

.toc-level-3 {
  font-weight: 400;
  opacity: 0.8;
}

.toc-level-4 {
  font-weight: 400;
  opacity: 0.7;
}
</style>
