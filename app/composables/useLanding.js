// Deprecated: landing data is now fetched directly in pages using useAPI('/landing', { key: 'landing' }).
// Components read from Nuxt payload via useNuxtData('landing').
export const useLanding = () => {
  return useNuxtData('landing')
}
