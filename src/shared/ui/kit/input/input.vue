<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model">
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
</style>
