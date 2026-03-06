<script setup>
const { footer, global } = useAppConfig()

const quickLinks = [
  { label: 'الرئيسية', to: '/' },
  { label: 'المشاريع', to: '/projects' },
  { label: 'المدونة', to: '/blog' },
  { label: 'نبذة عني', to: '/about' },
  { label: 'تواصل معي', to: '/contact' },
  { label: 'قم بتقييمنا', to: '/testimonial' }
]

const guides = [
  { label: 'SDLC Framework', to: '/sdlc' },
  { label: 'دورة حياة تطوير البرمجيات', to: '/sdlc-ar' }
]

const aiTools = [
  { label: 'MCP Servers', to: '/mcp', icon: 'i-lucide-server' },
  { label: 'Agents', to: '/agents', icon: 'i-lucide-bot' },
  { label: 'Skills', to: '/skills', icon: 'i-lucide-zap' },
  { label: 'Commands', to: '/commands', icon: 'i-lucide-terminal' }
]
</script>

<template>
  <footer class="z-10 mt-16">
    <div class="-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 border-t border-default px-4 sm:px-12 lg:px-16">
      <div class="max-w-(--ui-container) mx-auto py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Column 1: Brand -->
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold">
                عبدالمؤمن الشطوري
              </h3>
              <p class="text-sm text-muted mt-1">
                مهندس واجهات أمامية
              </p>
            </div>
            <p class="text-sm text-muted leading-relaxed">
              أبني تطبيقات ويب حديثة وعالية الأداء مع التركيز على تجربة المستخدم.
            </p>
            <div class="flex gap-1">
              <UButton
                v-for="link of footer?.links"
                :key="link.to || link.href"
                v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
              />
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="text-sm font-semibold mb-4">
              روابط سريعة
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="link in quickLinks"
                :key="link.to"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-muted hover:text-primary transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 3: AI Tools -->
          <div>
            <h4 class="text-sm font-semibold mb-4">
              أدوات AI
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="tool in aiTools"
                :key="tool.to"
              >
                <NuxtLink
                  :to="tool.to"
                  class="text-sm text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2"
                >
                  <UIcon
                    :name="tool.icon"
                    class="size-3.5 text-primary/60 shrink-0"
                  />
                  {{ tool.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 4: Contact + Guides -->
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-semibold mb-4">
                تواصل معي
              </h4>
              <a
                :href="`mailto:${global.email}`"
                class="text-sm text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="size-4 text-primary/60 shrink-0"
                />
                {{ global.email }}
              </a>
            </div>

            <div>
              <h4 class="text-sm font-semibold mb-4">
                أدلة تقنية
              </h4>
              <ul class="space-y-2.5">
                <li
                  v-for="guide in guides"
                  :key="guide.to"
                >
                  <NuxtLink
                    :to="guide.to"
                    class="text-sm text-muted hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <UIcon
                      name="i-lucide-book-open"
                      class="size-3.5 text-primary/60 shrink-0"
                    />
                    {{ guide.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <USeparator class="mt-10 mb-6" />
        <p class="text-xs text-muted text-center">
          {{ footer.credits }}
        </p>
      </div>
    </div>
  </footer>
</template>
