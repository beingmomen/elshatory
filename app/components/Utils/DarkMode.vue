&lt;template&gt;
  &lt;button 
    class="dark-mode-toggle"
    @click="toggleDarkMode"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  &gt;
    &lt;span class="sr-only"&gt;{{ isDark ? 'Light Mode' : 'Dark Mode' }}&lt;/span&gt;
    &lt;!-- Add icon placeholder --&gt;
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  updateTheme()
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  // Update document class and localStorage
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
&lt;/script&gt;

&lt;style scoped&gt;
.dark-mode-toggle {
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.dark-mode-toggle:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

:global(.dark) .dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
&lt;/style&gt;
