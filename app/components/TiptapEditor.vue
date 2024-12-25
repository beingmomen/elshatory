<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="tiptap-editor-ui w-fit mx-auto max-w-[800px]">
    <div
      v-if="editor"
      class="tiptap-editor-ui__toolbar bg-neutral-800 rounded-xl [&>*]:after:border-e [&>*]:after:border-neutral-600 [&>*]:last-of-type:after:border-0 space-x-2"
    >
      <UButtonGroup
        v-for="(group, groupIndex) in toolbarGroups"
        :key="groupIndex"
      >
        <template v-for="button in group" :key="button.action">
          <UTooltip :text="button.tooltip">
            <UButton
              :variant="getButtonVariant(button)"
              color="neutral"
              size="xl"
              :disabled="getButtonDisabled(button)"
              :icon="button.icon"
              @click="executeAction(button)"
            />
          </UTooltip>
        </template>
      </UButtonGroup>
    </div>

    <TiptapEditorContent
      class="tiptap-editor-ui-content mt-10"
      :editor="editor"
    />
    <div
      v-if="editor"
      dir="ltr"
      class="min-w-full mt-10 prose prose-invert text-white"
      v-html="editor.getHTML()"
    />
  </div>
</template>

<script setup>
const editor = useEditor({
  content: "",
  // content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit],
});

// Button configurations
const toolbarGroups = [
  // Text style group
  [
    {
      icon: "i-material-symbols-format-bold",
      action: "toggleBold",
      isActive: () => editor.value?.isActive("bold"),
      tooltip: "Bold",
    },
    {
      icon: "i-material-symbols-format-italic",
      action: "toggleItalic",
      isActive: () => editor.value?.isActive("italic"),
      tooltip: "Italic",
    },
    {
      icon: "i-material-symbols-format-strikethrough",
      action: "toggleStrike",
      isActive: () => editor.value?.isActive("strike"),
      tooltip: "Strikethrough",
    },
    // {
    //   icon: "i-material-symbols-code",
    //   action: "toggleCode",
    //   isActive: () => editor.value?.isActive("code"),
    // },
  ],
  // Clear formatting group
  [
    {
      icon: "i-heroicons-backspace",
      action: "unsetAllMarks",
      variant: "ghost",
      tooltip: "Clear formatting",
    },
    {
      icon: "i-heroicons-trash",
      action: "clearNodes",
      variant: "ghost",
      tooltip: "Clear nodes",
    },
  ],
  // Heading group
  [
    {
      icon: "i-material-symbols-h-mobiledata-rounded",
      action: "setParagraph",
      isActive: () => editor.value?.isActive("paragraph"),
      tooltip: "Paragraph",
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      icon: `i-material-symbols-format-h${i + 1}`,
      action: "toggleHeading",
      level: i + 1,
      isActive: () => editor.value?.isActive("heading", { level: i + 1 }),
      tooltip: `Heading ${i + 1}`,
    })),
  ],
  // List group
  [
    {
      icon: "i-material-symbols-format-list-bulleted",
      action: "toggleBulletList",
      isActive: () => editor.value?.isActive("bulletList"),
      tooltip: "Bullet list",
    },
    {
      icon: "i-material-symbols-format-list-numbered",
      action: "toggleOrderedList",
      isActive: () => editor.value?.isActive("orderedList"),
      tooltip: "Numbered list",
    },
  ],
  // Block group
  [
    {
      icon: "i-material-symbols-code",
      action: "toggleCodeBlock",
      isActive: () => editor.value?.isActive("codeBlock"),
      tooltip: "Code block",
    },
    {
      icon: "i-material-symbols-format-quote",
      action: "toggleBlockquote",
      isActive: () => editor.value?.isActive("blockquote"),
      tooltip: "Blockquote",
    },
    {
      icon: "i-heroicons-minus",
      action: "setHorizontalRule",
      variant: "ghost",
      tooltip: "Horizontal rule",
    },
    // {
    //   icon: "i-heroicons-arrow-down-on-square",
    //   action: "setHardBreak",
    //   variant: "ghost",
    //   tooltip: "Hard break",
    // },
  ],
  // History group
  [
    {
      icon: "i-material-symbols-undo",
      action: "undo",
      isActive: () => editor.value?.can().chain().focus().undo().run(),
      getDisabled: () => !editor.value?.can().chain().focus().undo().run(),
      tooltip: "Undo",
    },
    {
      icon: "i-material-symbols-redo",
      action: "redo",
      isActive: () => editor.value?.can().chain().focus().redo().run(),
      getDisabled: () => !editor.value?.can().chain().focus().redo().run(),
      tooltip: "Redo",
    },
  ],
];

// Helper functions
const getButtonVariant = (button) => {
  if (button.variant) return button.variant;
  return button.isActive?.() ? "solid" : "ghost";
};

const getButtonDisabled = (button) => {
  if (button.getDisabled) return button.getDisabled();
  if (button.action === "toggleHeading") {
    return !editor.value
      ?.can()
      .chain()
      .focus()
      .toggleHeading({ level: button.level })
      .run();
  }
  return !editor.value?.can().chain().focus()[button.action]().run();
};

const executeAction = (button) => {
  const chain = editor.value?.chain().focus();
  if (!chain) return;

  if (button.action === "toggleHeading") {
    chain.toggleHeading({ level: button.level }).run();
  } else {
    chain[button.action]().run();
  }
};

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>

<style lang="scss">
@use "~/assets/scss/tiptap-editor-ui.scss";
</style>
