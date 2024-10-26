<script setup lang="ts" generic="Type extends InputTypeHTMLAttribute, Model extends (Type extends 'date' ? Date : string)">
import type { InputTypeHTMLAttribute } from 'vue'

const props = defineProps<{
  type: Type
}>()

const model = defineModel<Model>()
</script>

<template>
  <input
    v-model="model"
    :type="props.type"
  >
</template>

<style scoped>
input {
  width: 100%;
  padding: 1rem 2.2rem;

  font-size: var(--text-base);
  line-height: var(--text-base-line-height);

  background: var(--color-foreground);
  border: none;

}
::placeholder {
    color: var(--color-text-tertiary);
  }
</style>
