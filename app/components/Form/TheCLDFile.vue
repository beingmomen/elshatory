<template>
  <UFormField
    :size="size"
    :label="label"
    :name="name"
    :hint="hint"
    eager-validation
  >
    <CldUploadWidget
      v-slot="{ open }"
      :on-upload="onUploadSuccess"
      :on-error="onError"
      :on-result="onResult"
    >
      <UInput
        :key="name"
        class="w-full"
        placeholder="Choose File"
        icon="i-heroicons-folder"
        :model-value="modelValue"
        readonly
        @click="open"
      >
        <template #trailing>
          <NuxtImg
            v-if="image"
            provider="cloudinary"
            class="rounded-full"
            :src="image"
            width="40"
            height="40"
            alt="logo"
          />
          <UAvatar v-else icon="i-heroicons-photo" size="md" />
        </template>
      </UInput>
    </CldUploadWidget>
  </UFormField>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Object],
    default: "",
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  hint: {
    type: [String, Number],
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "lg",
  },
});

const emit = defineEmits(["update:modelValue"]);
const image = ref();

onMounted(() => {
  image.value = props.modelValue;
});

const onUploadSuccess = (result) => {
  try {
    console.warn("result", result.info);
    if (result?.info) {
      const fullPath = `${result.info.public_id}.${result.info.format}`;
      image.value = fullPath;
      emit("update:modelValue", fullPath);
    }
  } catch (error) {
    console.error("Error processing upload result:", error);
    onError(error);
  }
};

const onError = (error) => {
  console.error("Upload error:", error);
  emit("update:modelValue", "");
};

const onResult = (result) => {
  if (!result?.info) {
    console.warn("Invalid upload result:", result);
  }
};
</script>

<style lang="scss" scoped>
</style>