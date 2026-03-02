export const useLanding = () => {
  return useAPI('/landing', {
    key: 'landing',
    default: () => ({}),
    transform: response => response.data || {}
  })
}
