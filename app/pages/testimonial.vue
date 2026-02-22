<script setup>
import Joi from 'joi'

const config = useRuntimeConfig()
const { loading, post } = useApiRequest()

useSeoMeta({
  title: 'آراء العملاء | عبدالمؤمن الشطوري',
  description: 'شارك تجربتك معنا. اقرأ آراء وتجارب العملاء السابقين مع عبدالمؤمن الشطوري.',
  ogTitle: 'آراء العملاء | عبدالمؤمن الشطوري',
  ogDescription: 'شارك تجربتك مع عبدالمؤمن الشطوري واقرأ آراء العملاء السابقين.',
  ogUrl: `${config.public.siteUrl}/testimonial`,
  ogType: 'website',
  ogLocale: 'ar_EG',
  twitterCard: 'summary_large_image',
  twitterTitle: 'آراء العملاء | عبدالمؤمن الشطوري',
  twitterDescription: 'شارك تجربتك معنا واقرأ آراء العملاء.',
  twitterSite: '@beingmomen',
  keywords: 'آراء العملاء, تقييمات, عبدالمؤمن الشطوري, تجارب العملاء'
})

useHead({
  titleTemplate: 'قم بتقييمنا - %s',
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'آراء العملاء',
        'description': 'صفحة تقييمات عملاء عبدالمؤمن الشطوري.',
        'url': `${config.public.siteUrl}/testimonial`
      })
    }
  ]
})

useBreadcrumbSchema([{ name: 'آراء العملاء', path: '/testimonial' }])

const form = ref(null)

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'الاسم مطلوب',
    'any.required': 'الاسم مطلوب'
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.empty': 'البريد الإلكتروني مطلوب',
      'string.email': 'يرجى إدخال عنوان بريد إلكتروني صالح',
      'any.required': 'البريد الإلكتروني مطلوب'
    }),
  description: Joi.string().required().messages({
    'string.empty': 'رسالتك مطلوبة',
    'any.required': 'الوصف مطلوب'
  }),
  image: Joi.string().required().messages({
    'string.empty': 'الصورة مطلوبة',
    'any.required': 'الصورة مطلوبة'
  })
})

const state = reactive({
  name: '',
  email: '',
  description: '',
  image: ''
})

watch(
  () => state.image,
  () => {
    form.value.clear()
  }
)

async function onSubmit(event) {
  const { status } = await post('/testimonials', event.data)

  if (status === 'success') {
    state.name = ''
    state.email = ''
    state.description = ''
    state.image = ''
  }
}
</script>

<template>
  <UPage>
    <UPageHero
      title="نحن هنا نهتم برأيك"
      description="نرجو منك ابداء رأيك فى عملنا"
      :ui="{
        title: '!mx-0',
        description: '!mx-0 text-gradient font-bold'
      }"
    />
    <UPageSection :ui="{ container: '!pt-0' }">
      <UForm
        ref="form"
        :schema="schema"
        :state="state"
        class="space-y-4 mx-auto w-full md:w-2/3 lg:w-1/2"
        @submit="onSubmit"
      >
        <UFormField
          label="الاسم"
          name="name"
          size="lg"
          required
        >
          <UInput
            v-model="state.name"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="البريد الإلكتروني"
          name="email"
          size="lg"
          required
        >
          <UInput
            v-model="state.email"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="رأيك يهمنا"
          name="description"
          size="lg"
          required
        >
          <UTextarea
            v-model="state.description"
            class="w-full"
            :rows="6"
          />
        </UFormField>

        <FormFileInput
          v-model="state.image"
          label="الصورة"
          name="image"
          size="xl"
          input-size="lg"
          folder="testimonial"
        />

        <UButton
          type="submit"
          block
          class="font-black text-xl cursor-pointer"
          :loading="loading"
        >
          ارسال
        </UButton>
      </UForm>
    </UPageSection>
  </UPage>
</template>
