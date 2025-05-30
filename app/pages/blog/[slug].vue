<template>
  <div class="py-10">
    <UContainer>
      <UBreadcrumb :items="breadcrumbList" />

      <div class="flex items-center space-x-2 mt-10">
        <span class="text-2xl text-primary-500 font-bold">المقال</span>
        <span class="text-gray-500 dark:text-gray-400">
          ·&nbsp;&nbsp;
          <time>
            {{
              useFormatDate({
                date: singleBlog.createdAt,
                format: "DD MMMM YYYY",
              })
            }}
          </time>
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

      <div class="mt-4">
        <UButton
          color="neutral"
          variant="ghost"
          :avatar="{
            src: 'https://github.com/nuxt.png',
            size: 'xl',
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
      </div>

      <USeparator class="my-10" size="sm" />

      <div class="ProseMirror">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-9">
            <ClientOnly>
              <article v-html="decodeHTMLEntities(singleBlog.content)" />
            </ClientOnly>
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

const { fetchSingleBlog, singleBlog, breadcrumbList } = useBlog();

await fetchSingleBlog(route.params.slug);

function decodeHTMLEntities(html) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  return textArea.value;
}
</script>

<style lang="scss" scoped></style>
