<template>
  <section class="grow flex items-center py-10">
    <UContainer>
      <p class="font-bold text-xl sm:text-2xl text-center">
        نحن هنا نهتم برأيك
      </p>
      <p class="font-bold text-3xl sm:text-5xl mt-5 text-gradient text-center">
        نرجو منك ابداء رأيك فى عملنا
      </p>

      <UForm
        ref="form"
        :schema="schema"
        :state="state"
        class="space-y-4 mx-auto mt-8 w-1/2"
        @submit="onSubmit"
      >
        <UFormField label="الاسم" name="name" size="lg" required>
          <UInput v-model="state.name" class="w-full" />
        </UFormField>

        <UFormField label="البريد الإلكتروني" name="email" size="lg" required>
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField label="رأيك يهمنا" name="description" size="lg" required>
          <UTextarea v-model="state.description" class="w-full" :rows="6" />
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
    </UContainer>
  </section>
</template>

<script setup>
import Joi from "joi";
const { loading, post } = useApiRequest();
useHead({
  titleTemplate: "قم بتقييمنا - %s",
});

// SEO Meta for Testimonial Page
useSeoMeta({
  title: "آراء العملاء | عبدالمؤمن الشطوري",
  description:
    "اقرأ آراء وتجارب العملاء السابقين مع عبدالمؤمن الشطوري. شارك تجربتك معنا.",
  canonical: "https://beingmomen.com/testimonial",
  ogTitle: "Testimonial | Abdelmomen Elshatory",
  ogDescription:
    "Testimonial from clients showcasing the work of Abdelmomen Elshatory.",
  ogImage: "URL_TO_TESTIMONIAL_IMAGE",
  ogUrl: "https://beingmomen.com/testimonial",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Testimonial | Abdelmomen Elshatory",
  twitterDescription:
    "Read testimonial from satisfied clients of Abdelmomen Elshatory.",
  twitterImage: "URL_TO_TESTIMONIAL_IMAGE",
  twitterSite: "@beingmomen",
  keywords: "testimonial, client reviews, Abdelmomen Elshatory, beingmomen",
});

// Structured Data for Testimonial Page
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Testimonial",
        description: "Client testimonial for Abdelmomen Elshatory.",
        url: "https://beingmomen.com/testimonial",
      }),
    },
  ],
});

const form = ref(null);

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "الاسم مطلوب",
    "any.required": "الاسم مطلوب",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.empty": "البريد الإلكتروني مطلوب",
      "string.email": "يرجى إدخال عنوان بريد إلكتروني صالح",
      "any.required": "البريد الإلكتروني مطلوب",
    }),
  description: Joi.string().required().messages({
    "string.empty": "رسالتك مطلوبة",
    "any.required": "الوصف مطلوب",
  }),
  image: Joi.string().required().messages({
    "string.empty": "الصورة مطلوبة",
    "any.required": "الصورة مطلوبة",
  }),
});

const state = reactive({
  name: "",
  email: "",
  description: "",
  image: "",
});

watch(
  () => state.image,
  () => {
    // Add your logic here to handle image changes
    form.value.clear();
  }
);

async function onSubmit(event) {
  const { status } = await post("/testimonials", event.data);

  if (status === "success") {
    state.name = "";
    state.email = "";
    state.description = "";
    state.image = "";
  }
}
</script>

<style lang="scss" scoped></style>
