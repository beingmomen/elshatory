<template>
  <div class="prose">
    <div v-if="editor">
      <UButton
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        icon="i-material-symbols-format-bold"
        @click="editor.chain().focus().toggleBold().run()"
      />

      <UButton
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        icon="i-material-symbols-format-italic"
        @click="editor.chain().focus().toggleItalic().run()"
      />
      <UButton
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        icon="i-material-symbols-format-strikethrough"
        @click="editor.chain().focus().toggleStrike().run()"
      />
      <UButton
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
        icon="i-material-symbols-code"
        @click="editor.chain().focus().toggleCode().run()"
      />

      <UButton @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </UButton>
      <UButton @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </UButton>
      <UButton
        :class="{ 'is-active': editor.isActive('paragraph') }"
        icon="i-material-symbols-h-mobiledata-rounded"
        @click="editor.chain().focus().setParagraph().run()"
      />

      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        icon="i-material-symbols-format-h1"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        icon="i-material-symbols-format-h2"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        icon="i-material-symbols-format-h3"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        icon="i-material-symbols-format-h4"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        icon="i-material-symbols-format-h5"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        icon="i-material-symbols-format-h6"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('bulletList') }"
        icon="i-material-symbols-format-list-bulleted"
        @click="editor.chain().focus().toggleBulletList().run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('orderedList') }"
        icon="i-material-symbols-format-list-numbered"
        @click="editor.chain().focus().toggleOrderedList().run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('codeBlock') }"
        icon="i-material-symbols-code"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      />
      <UButton
        :class="{ 'is-active': editor.isActive('blockquote') }"
        icon="i-material-symbols-format-quote"
        @click="editor.chain().focus().toggleBlockquote().run()"
      />
      <UButton @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </UButton>
      <UButton @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </UButton>
      <UButton
        :disabled="!editor.can().chain().focus().undo().run()"
        icon="i-material-symbols-undo"
        @click="editor.chain().focus().undo().run()"
      />
      <UButton
        :disabled="!editor.can().chain().focus().redo().run()"
        icon="i-material-symbols-redo"
        @click="editor.chain().focus().redo().run()"
      />
    </div>

    <TiptapEditorContent
      class="prose border border-gray-200 mt-10"
      :editor="editor"
    />
  </div>
</template>
  
  <script setup>
const toast = useToast();

async function uploadImage(file, id) {
  try {
    const formData = new FormData();
    formData.append(id, file);

    const urls = await $fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    return urls[0];
  } catch (e) {
    return toast.add({
      severity: "error",
      summary: e.statusMessage,
      detail: e.statusMessage,
      life: 3000,
    });
  }
}

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    TiptapStarterKit,
    TiptapImage,
    TiptapImageUpload.configure({
      acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
      upload: uploadImage,
    }),
    TiptapImagePlaceholder.configure({
      inline: false,
    }),
  ],
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>