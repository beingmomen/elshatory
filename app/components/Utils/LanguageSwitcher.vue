&lt;template&gt;
  &lt;div class="language-switcher"&gt;
    &lt;button 
      v-for="locale in availableLocales" 
      :key="locale.code"
      @click="switchLanguage(locale.code)"
      :class="{ active: currentLocale === locale.code }"
      class="lang-btn"
    &gt;
      {{ locale.name }}
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const currentLocale = ref('en')
const availableLocales = [
  { code: 'en', name: 'EN' },
  { code: 'ar', name: 'عربي' }
]

const switchLanguage = (locale) => {
  currentLocale.value = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  // Here you would typically use Nuxt's i18n module to switch languages
  // This is a basic implementation
}
&lt;/script&gt;

&lt;style scoped&gt;
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.lang-btn.active {
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.1);
}

:global(.dark) .lang-btn:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

:global(.dark) .lang-btn.active {
  background-color: rgba(255, 255, 255, 0.1);
}
&lt;/style&gt;
