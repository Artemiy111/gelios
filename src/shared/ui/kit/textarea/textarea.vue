<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <textarea v-model="model" />
</template>

<style scoped>
textarea {
  padding: 1rem 2.2rem;

  font-size: var(--text-base);
  line-height: var(--text-base-line-height);

  background: var(--color-foreground);
  border: none;
}
</style>
