<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model">
</template>

<style scoped>
input {
  padding: 1rem 2.2rem;
  width: 100%;
  font-size: var(--text-base);
  line-height: var(--text-base-line-height);

  background: var(--color-black-3p);
  border: none;
}
</style>
