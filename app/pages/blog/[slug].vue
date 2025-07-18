<template>
  <div class="py-10">
    <UContainer>
      <UBreadcrumb :items="breadcrumbList" />

      <div class="flex items-center space-x-2 mt-10">
        <span class="text-2xl text-primary-500 font-bold">المقال</span>
        <span class="text-gray-500 dark:text-gray-400">
          ·&nbsp;&nbsp;

          <NuxtTime
            :datetime="singleBlog.createdAt"
            year="numeric"
            month="long"
            locale="ar-Cyrl-CO"
          />
        </span>
      </div>

      <div>
        <h1
          class="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-8"
        >
          {{ singleBlog.title }}
        </h1>
      </div>

      <div class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        <p>
          {{ singleBlog.description }}
        </p>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <UButton
          color="neutral"
          variant="ghost"
          :avatar="{
            src: 'https://res.cloudinary.com/dyqfclwdk/image/upload/v1749728101/Global/hzihujxexpmxa81g4dkn.webp',
            size: 'xl',
            alt: `عبدالمؤمن الشطوري - ${singleBlog.title}`,
          }"
          to="https://github.com/beingmomen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <template #default>
            <div class="flex items-start flex-col">
              <span class="text-xl font-bold">عبدالمؤمن الشطوري</span>
              <span dir="ltr" class="text-neutral-300">@beingmomen</span>
            </div>
          </template>
        </UButton>

        <!-- Blog Views Counter -->
        <div
          class="flex items-center gap-3 mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-eye" class="w-5 h-5" />
            <span class="text-sm font-medium">عدد المشاهدات:</span>
          </div>
          <div class="flex items-center gap-1">
            <span
              class="text-lg font-bold text-primary-600 dark:text-primary-400"
            >
              {{ singleBlog.uniqueViews || "0" }}
            </span>
          </div>
        </div>
      </div>

      <USeparator class="my-10" size="sm" />

      <div class="ProseMirror">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-9">
            <article v-html="singleBlog.content" />
          </div>
          <div class="col-span-3 space-y-5">
            <BlogBlogSidebar />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

const { fetchSingleBlog, singleBlog, breadcrumbList } = useBlog();

await fetchSingleBlog(route.params.slug);

provide("singleBlog", singleBlog);

// Computed values for DRY principle
const blogTitle = computed(
  () => singleBlog.value.title || "مقال - عبدالمؤمن الشطوري"
);
const blogDescription = computed(
  () => singleBlog.value.description || "مقال من مدونة عبدالمؤمن الشطوري"
);
const blogImage = computed(() =>
  singleBlog.value.image
    ? `${config.public.cloudinary.cloudinaryUrl}${singleBlog.value.image}`
    : `${config.public.siteUrl}/favicon.ico`
);
const blogUrl = computed(
  () => `${config.public.siteUrl}/blog/${route.params.slug}`
);

// SEO Meta Tags
useSeoMeta({
  title: blogTitle,
  description: blogDescription,
  keywords: () =>
    singleBlog.value.keywords || "مقال, برمجة, تطوير, عبدالمؤمن الشطوري",
  author: "عبدالمؤمن الشطوري",

  // Open Graph Tags
  ogTitle: blogTitle,
  ogDescription: blogDescription,
  ogImage: blogImage,
  ogUrl: blogUrl,
  ogType: "article",
  ogSiteName: "عبدالمؤمن الشطوري",
  ogLocale: "ar_EG",

  // Twitter Cards
  twitterCard: "summary_large_image",
  twitterTitle: blogTitle,
  twitterDescription: blogDescription,
  twitterImage: blogImage,
  twitterSite: "@beingmomen",
  twitterCreator: "@beingmomen",

  // Article specific meta
  articleAuthor: "عبدالمؤمن الشطوري",
  articlePublishedTime: () => singleBlog.value.createdAt,
  articleModifiedTime: () =>
    singleBlog.value.updatedAt || singleBlog.value.createdAt,
  articleSection: "تقنية",
  articleTag: () => singleBlog.value?.tags?.split(",") || ["برمجة", "تطوير"],
});

// Canonical URL
useHead({
  link: [
    {
      rel: "canonical",
      href: blogUrl,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: singleBlog.value.title,
          description: singleBlog.value.description,
          image: blogImage.value,
          author: {
            "@type": "Person",
            name: "عبدالمؤمن الشطوري",
            url: config.public.siteUrl,
            sameAs: [
              "https://github.com/beingmomen",
              "https://twitter.com/beingmomen",
            ],
          },
          publisher: {
            "@type": "Person",
            name: "عبدالمؤمن الشطوري",
            url: config.public.siteUrl,
          },
          datePublished: singleBlog.value.createdAt,
          dateModified:
            singleBlog.value.updatedAt || singleBlog.value.createdAt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${config.public.siteUrl}/blog/${route.params.slug}`,
          },
        }),
    },
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "الرئيسية",
              item: config.public.siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "المقالات",
              item: `${config.public.siteUrl}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: singleBlog.value.title,
              item: `${config.public.siteUrl}/blog/${route.params.slug}`,
            },
          ],
        }),
    },
  ],
});
</script>

<style lang="scss" scoped></style>
