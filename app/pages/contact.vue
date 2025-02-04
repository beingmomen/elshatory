<template>
  <section class="grow flex items-center py-10">
    <UContainer>
      <p class="font-bold text-xl sm:text-2xl text-center">
        نحن هنا لنهتم بما تريد
      </p>
      <h2 class="font-bold text-3xl sm:text-5xl text-gradient mt-5 text-center">
        أخبرنا بما تريد وسنقوم بالتواصل معك باذن الله تعالي
      </h2>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 mx-auto mt-8"
        @submit="onSubmit"
      >
        <UFormField label="الاسم" name="name" size="lg" required>
          <UInput v-model="state.name" class="w-full" />
        </UFormField>

        <UFormField label="الهاتف" name="phone" size="lg" required>
          <UInput v-model="state.phone" class="w-full" />
        </UFormField>

        <UFormField label="البريد الإلكتروني" name="email" size="lg">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="رأيك يهمنا" name="description" size="lg" required>
          <UTextarea v-model="state.description" class="w-full" :rows="6" />
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
    </UContainer>
  </section>
</template>

<script setup>
import Joi from "joi";
const { loading, post } = useApiRequest();

// SEO Meta for Contact Page
useSeoMeta({
  title: "تواصل معنا | عبدالمؤمن الشطوري",
  description:
    "تواصل مع عبدالمؤمن الشطوري لمناقشة مشروعك القادم. نحن هنا لمساعدتك في تحقيق رؤيتك التقنية.",
  canonical: "https://beingmomen.com/contact",
  ogTitle: "Contact | Abdelmomen Elshatory",
  ogDescription: "Contact page for reaching out to Abdelmomen Elshatory.",
  ogImage: "URL_TO_CONTACT_IMAGE",
  ogUrl: "https://beingmomen.com/contact",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Contact | Abdelmomen Elshatory",
  twitterDescription: "Get in touch with Abdelmomen Elshatory.",
  twitterImage: "URL_TO_CONTACT_IMAGE",
  twitterSite: "@beingmomen",
  keywords: "contact, get in touch, Abdelmomen Elshatory, beingmomen",
});

// Structured Data for Contact Page
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact",
        description: "Contact page for reaching out to Abdelmomen Elshatory.",
        url: "https://beingmomen.com/contact",
      }),
    },
  ],
  titleTemplate: "تواصل معنا - %s",
});

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "الاسم مطلوب",
    "any.required": "الاسم مطلوب",
  }),
  phone: Joi.string().required().messages({
    "string.empty": "الهاتف مطلوب",
    "any.required": "الهاتف مطلوب",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.empty": "البريد الإلكتروني مطلوب",
      "string.email": "يرجى إدخال عنوان بريد إلكتروني صالح",
      "any.required": "البريد الإلكتروني مطلوب",
    }),
  description: Joi.string().required().messages({
    "string.empty": "النبذة مطلوبة",
    "any.required": "النبذة مطلوبة",
  }),
});

const state = reactive({
  name: undefined,
  phone: undefined,
  email: undefined,
  description: undefined,
});

async function onSubmit(event) {
  const { status } = await post("/contact", event.data);

  if (status === "success") {
    state.name = undefined;
    state.phone = undefined;
    state.email = undefined;
    state.description = undefined;
  }
}
</script>

<style lang="scss" scoped>
</style>