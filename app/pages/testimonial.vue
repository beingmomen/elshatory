<template>
  <section class="grow flex items-center">
    <UContainer>
      <p class="font-bold text-xl sm:text-2xl text-center">
        نحن هنا نهتم برأيك
      </p>
      <h2 class="font-bold text-3xl sm:text-5xl mt-5 text-gradient text-center">
        نرجو منك ابداء رأيك فى عملنا
      </h2>

      <UForm
        ref="form"
        :schema="schema"
        :state="state"
        class="space-y-4 mx-auto mt-8"
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

        <FormTheCLDFile
          v-model="state.image"
          label="الصورة"
          name="image"
          class="w-full"
        />

        <UButton
          type="submit"
          block
          class="font-black text-xl"
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
useHead({
  titleTemplate: "قم بتقييمنا - %s",
});

const config = useRuntimeConfig();
const toast = useToast();
const form = ref(null);

const loading = ref(false);

const baseUrl = config.public.baseURL;

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
  description: Joi.string().min(50).required().messages({
    "string.empty": "رسالتك مطلوبة",
    "string.min": "يجب أن يحتوي الوصف على الأقل على {#limit} حرفًا",
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
  // Do something with event.data
  console.log(event.data);
  console.warn("baseUrl", baseUrl);
  loading.value = true;

  try {
    const { message, status } = await $fetch(`${baseUrl}${"/testimonials"}`, {
      method: "POST",
      body: event.data,
    });

    if (status === "success") {
      toast.add({ title: message, color: "green", timeout: 3000 });
      loading.value = false;
      state.name = "";
      state.email = "";
      state.description = "";
      state.image = "";
    }
  } catch (error) {
    console.warn("error", error);
  }
}
</script>

<style lang="scss" scoped>
</style>