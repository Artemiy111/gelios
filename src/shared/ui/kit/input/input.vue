<script setup lang="ts" generic="Type extends InputTypeHTMLAttribute, Model extends (Type extends 'date' ? Date : string)">
import type { InputTypeHTMLAttribute } from 'vue'

const props = withDefaults(defineProps<{
  type?: Type
}>(), {
  // @ts-expect-error: generic type is not working properly
  type: 'text',
})

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
  border: none;

  font-size: var(--text-base);
  line-height: var(--text-base-line-height);

  background: var(--color-foreground);

}
::placeholder {
    color: var(--color-text-tertiary);
  }
</style>
