<script setup lang="ts">
import Joi from 'joi'

useSeoMeta({
  title: 'إضافة خادم MCP',
  description: 'إضافة إعداد خادم MCP جديد'
})

const toast = useToast()

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'اسم الخادم مطلوب',
    'any.required': 'اسم الخادم مطلوب'
  }),
  category: Joi.string().required().messages({
    'string.empty': 'التصنيف مطلوب',
    'any.required': 'التصنيف مطلوب'
  }),
  installationMethod: Joi.string().required().messages({
    'string.empty': 'طريقة التثبيت مطلوبة',
    'any.required': 'طريقة التثبيت مطلوبة'
  }),
  mcpKey: Joi.string().required().messages({
    'string.empty': 'مفتاح MCP مطلوب',
    'any.required': 'مفتاح MCP مطلوب'
  }),
  mcpConfigJson: Joi.string().required().messages({
    'string.empty': 'إعداد MCP مطلوب',
    'any.required': 'إعداد MCP مطلوب'
  }),
  installationSteps: Joi.string().required().messages({
    'string.empty': 'خطوات التثبيت مطلوبة',
    'any.required': 'خطوات التثبيت مطلوبة'
  }),
  notes: Joi.string().allow('').optional()
})

const state = reactive({
  name: undefined as string | undefined,
  category: undefined as string | undefined,
  installationMethod: undefined as string | undefined,
  mcpKey: undefined as string | undefined,
  mcpConfigJson: undefined as string | undefined,
  installationSteps: undefined as string | undefined,
  notes: undefined as string | undefined
})

const loading = ref(false)
const submitted = ref(false)
const createdPath = ref('')

const categoryOptions = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'DevOps', value: 'devops' },
  { label: 'AI', value: 'ai' },
  { label: 'Database', value: 'database' },
  { label: 'أخرى', value: 'other' }
]

const methodOptions = [
  { label: 'Cloud Code', value: 'cloud code' },
  { label: 'Cursor', value: 'cursor' },
  { label: 'CLI', value: 'cli' },
  { label: 'أخرى', value: 'other' }
]

async function onSubmit(event: any) {
  loading.value = true

  try {
    // Validate JSON before submitting
    if (event.data.mcpConfigJson) {
      try {
        JSON.parse(event.data.mcpConfigJson)
      } catch {
        toast.add({
          title: 'خطأ',
          description: 'إعداد MCP يجب أن يكون JSON صالح',
          color: 'error',
          icon: 'i-lucide-alert-circle'
        })
        loading.value = false
        return
      }
    }

    const result = await $fetch('/api/mcp', {
      method: 'POST',
      body: event.data
    })

    createdPath.value = (result as any).path
    submitted.value = true

    toast.add({
      title: 'تمت الإضافة بنجاح',
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  } catch (err: any) {
    toast.add({
      title: 'خطأ',
      description: err.data?.message || 'فشل في إنشاء الخادم',
      color: 'error',
      icon: 'i-lucide-alert-circle'
    })
  } finally {
    loading.value = false
  }
}

function resetForm() {
  state.name = undefined
  state.category = undefined
  state.installationMethod = undefined
  state.mcpKey = undefined
  state.mcpConfigJson = undefined
  state.installationSteps = undefined
  state.notes = undefined
  submitted.value = false
  createdPath.value = ''
}
</script>

<template>
  <UPage>
    <UPageHero
      title="إضافة خادم MCP"
      description="تسجيل إعداد خادم MCP جديد"
      :ui="{
        title: 'text-center',
        description: 'text-center'
      }"
    />

    <UPageSection
      :ui="{
        container: '!pt-0 max-w-2xl mx-auto'
      }"
    >
      <div class="rounded-2xl border border-default/60 bg-muted/40 backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-neutral-950/5">
        <Transition
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          mode="out-in"
        >
          <!-- Success State -->
          <div
            v-if="submitted"
            key="success"
            class="flex flex-col items-center justify-center py-12 gap-4 text-center"
          >
            <div class="size-16 rounded-full bg-success/10 flex items-center justify-center">
              <UIcon
                name="i-lucide-check-circle"
                class="size-8 text-success"
              />
            </div>
            <h3 class="text-xl font-bold text-highlighted">
              تمت الإضافة بنجاح!
            </h3>
            <p class="text-muted text-sm max-w-xs">
              تم حفظ خادم MCP كملف markdown.
            </p>
            <div class="flex items-center gap-3 mt-2">
              <UButton
                :to="createdPath"
                icon="i-lucide-eye"
                label="عرض الخادم"
              />
              <UButton
                variant="outline"
                color="neutral"
                icon="i-lucide-plus"
                label="إضافة آخر"
                @click="resetForm"
              />
              <UButton
                variant="ghost"
                color="neutral"
                to="/mcp"
                label="العودة للقائمة"
                icon="i-lucide-list"
              />
            </div>
          </div>

          <!-- Form -->
          <UForm
            v-else
            key="form"
            :schema="schema"
            :state="state"
            class="space-y-5"
            @submit="onSubmit"
          >
            <UFormField
              label="اسم الخادم"
              name="name"
              size="lg"
              required
            >
              <UInput
                v-model="state.name"
                leading-icon="i-lucide-server"
                placeholder="مثال: GitHub MCP Server"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="التصنيف"
              name="category"
              size="lg"
              required
            >
              <USelect
                v-model="state.category"
                :items="categoryOptions"
                placeholder="اختر التصنيف"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="طريقة التثبيت"
              name="installationMethod"
              size="lg"
              required
            >
              <USelect
                v-model="state.installationMethod"
                :items="methodOptions"
                placeholder="اختر الطريقة"
                class="w-full"
              />
            </UFormField>

            <USeparator label="إعداد MCP" />

            <UFormField
              label="MCP Key"
              name="mcpKey"
              size="lg"
              required
              hint="المعرّف في ملف .mcp.json"
            >
              <UInput
                v-model="state.mcpKey"
                leading-icon="i-lucide-key"
                placeholder="مثال: github, filesystem"
                class="w-full"
                dir="ltr"
              />
            </UFormField>

            <UFormField
              label="MCP Config JSON"
              name="mcpConfigJson"
              size="lg"
              required
              hint="إعداد الخادم بصيغة JSON"
            >
              <UTextarea
                v-model="state.mcpConfigJson"
                :placeholder="`{\n  \&quot;command\&quot;: \&quot;npx\&quot;,\n  \&quot;args\&quot;: [\&quot;-y\&quot;, \&quot;@example/mcp-server\&quot;]\n}`"
                class="w-full font-mono"
                :rows="6"
                dir="ltr"
              />
            </UFormField>

            <USeparator label="التوثيق" />

            <UFormField
              label="خطوات التثبيت"
              name="installationSteps"
              size="lg"
              required
              hint="يدعم Markdown"
            >
              <UTextarea
                v-model="state.installationSteps"
                placeholder="الخطوة 1: تثبيت الحزمة..."
                class="w-full"
                :rows="8"
              />
            </UFormField>

            <UFormField
              label="ملاحظات"
              name="notes"
              size="lg"
              hint="اختياري"
            >
              <UTextarea
                v-model="state.notes"
                placeholder="أي ملاحظات إضافية..."
                class="w-full"
                :rows="3"
              />
            </UFormField>

            <UButton
              type="submit"
              block
              size="xl"
              :loading="loading"
              leading-icon="i-lucide-save"
              class="font-bold cursor-pointer shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
            >
              حفظ الخادم
            </UButton>
          </UForm>
        </Transition>
      </div>

      <!-- Back Link -->
      <div class="text-center mt-6">
        <UButton
          to="/mcp"
          variant="ghost"
          color="neutral"
          icon="i-lucide-arrow-right"
          label="العودة للخوادم"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
