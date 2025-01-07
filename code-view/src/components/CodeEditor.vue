<script setup lang="ts">
// Props for two-way binding using v-model and dynamic language support
const props = defineProps({
  modelValue: String,
  language: {
    type: String,
    default: 'javascript'
  }
});
const emit = defineEmits(['update:modelValue']);

// Reference for the editor container
const editorContainer = ref<HTMLElement | null>(null);
let editorView: EditorView | null = null;

// Dynamically select the language extension
const getLanguageExtension = computed(() => {
  switch (props.language) {
    case 'python': return python();
    case 'html': return html();
    case 'css': return css();
    case 'scss': return css();
    case 'markdown': return markdown();
    case 'typescript': return javascript({ typescript: true });
    case 'vue': return html();
    default: return javascript();
  }
});

onMounted(() => {
  if (editorContainer.value) {
    const state = EditorState.create({
      doc: props.modelValue,
      extensions: [
        basicSetup,
        getLanguageExtension.value,
        oneDark, // Applied the oneDark theme here
        keymap.of([indentWithTab])
      ]
    });

    editorView = new EditorView({
      state,
      parent: editorContainer.value,
      dispatch: (tr) => {
        editorView?.update([tr]);
        if (tr.docChanged) {
          emit('update:modelValue', editorView!.state.doc.toString());
        }
      }
    });
  }
});

// Watch for model changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (editorView && editorView.state.doc.toString() !== newValue) {
      editorView.dispatch({
        changes: {
          from: 0,
          to: editorView.state.doc.length,
          insert: newValue
        }
      });
    }
  }
);

// Watch for language changes and reconfigure the editor
watch(
  () => props.language,
  () => {
    if (editorView) {
      editorView.dispatch({
        effects: StateEffect.reconfigure.of([
          basicSetup,
          getLanguageExtension.value,
          keymap.of([indentWithTab])
        ])
      });
    }
  }
);
</script>

<template>
  <div ref="editorContainer" class="editor-container"></div>
</template>

<script lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { EditorState, StateEffect } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';

export default {
  name: 'CodeEditor',
}
</script>

<style scoped lang="scss">
.editor-container {
  height: calc(100vh - 260px);
  overflow: auto;
  font-family: monospace;
  background-color: #282c34;
  padding: 0px 30px;
}

/* Add padding to the editor content */
:deep(.cm-content) {
  padding: 10px 15px;
}

/* Remove the focus border (active state) from the entire editor */
:deep(.cm-editor) {
  outline: none !important;
  border: none !important;
}
</style>
