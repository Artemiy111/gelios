<script setup lang="ts">
const props = defineProps<{
  error?: string
}>()
</script>

<template>
  <span
    class="text-small form-error"
    :class="{ 'show-error': props.error !== undefined }"
  >{{ props.error }}</span>
</template>

<style scoped>
.form-error {
  position: absolute;
  bottom: -3.5rem;

  color: var(--color-error);

  opacity: 0;

  transition: opacity 0.3s;
}

.show-error {
  opacity: 1;
}
</style>
