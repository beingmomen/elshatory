import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
    onResponseError({ response }) {
      const toast = useToast()
      const status = response?.status
      if (status === 500) {
        toast.add({ title: 'حدث خطأ في الخادم', color: 'error', timeout: 4000 })
      } else if (status === 404) {
        toast.add({ title: 'البيانات المطلوبة غير موجودة', color: 'error', timeout: 4000 })
      }
    }
  })
}
