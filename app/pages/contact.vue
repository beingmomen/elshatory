<script setup>
import Joi from 'joi'

const config = useRuntimeConfig()
const { loading, post } = useApiRequest()

useSeoMeta({
  title: 'تواصل معنا | عبدالمؤمن الشطوري',
  description: 'تواصل مع عبدالمؤمن الشطوري لمناقشة مشروعك القادم. نحن هنا لمساعدتك في تحقيق رؤيتك التقنية.',
  ogTitle: 'تواصل معنا | عبدالمؤمن الشطوري',
  ogDescription: 'تواصل مع عبدالمؤمن الشطوري لمناقشة مشروعك القادم. نحن هنا لمساعدتك في تحقيق رؤيتك التقنية.',
  ogUrl: `${config.public.siteUrl}/contact`,
  ogType: 'website',
  ogLocale: 'ar_EG',
  twitterCard: 'summary_large_image',
  twitterTitle: 'تواصل معنا | عبدالمؤمن الشطوري',
  twitterDescription: 'تواصل معنا لمناقشة مشروعك القادم ونحوّل فكرتك إلى واقع.',
  twitterSite: '@beingmomen',
  keywords: 'تواصل, اتصل بنا, عبدالمؤمن الشطوري, مطور ويب, استشارة برمجية'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'تواصل معنا',
        'description': 'تواصل مع عبدالمؤمن الشطوري لمناقشة مشروعك القادم.',
        'url': `${config.public.siteUrl}/contact`
      })
    }
  ]
})

useBreadcrumbSchema([{ name: 'تواصل معنا', path: '/contact' }])

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'الاسم مطلوب',
    'any.required': 'الاسم مطلوب'
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'الهاتف مطلوب',
    'any.required': 'الهاتف مطلوب'
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.empty': 'البريد الإلكتروني مطلوب',
      'string.email': 'يرجى إدخال عنوان بريد إلكتروني صالح',
      'any.required': 'البريد الإلكتروني مطلوب'
    }),
  description: Joi.string().required().messages({
    'string.empty': 'النبذة مطلوبة',
    'any.required': 'النبذة مطلوبة'
  })
})

const state = reactive({
  name: undefined,
  phone: undefined,
  email: undefined,
  description: undefined
})

async function onSubmit(event) {
  const { status } = await post('/contacts', event.data)

  if (status === 'success') {
    state.name = undefined
    state.phone = undefined
    state.email = undefined
    state.description = undefined
  }
}
</script>

<template>
  <UPage>
    <UPageHero
      title="نحن هنا لنهتم بما تريد"
      description="أخبرنا بما تريد وسنقوم بالتواصل معك باذن الله تعالي"
      :ui="{
        title: '!mx-0',
        description: '!mx-0 text-gradient font-bold'
      }"
    />
    <UPageSection :ui="{ container: '!pt-0' }">
      <UForm
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
          label="الهاتف"
          name="phone"
          size="lg"
          required
        >
          <UInput
            v-model="state.phone"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="البريد الإلكتروني"
          name="email"
          size="lg"
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
