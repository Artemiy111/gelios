<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <span
    id="login"
    class="form-label"
  >{{ props.text }}</span>
</template>

<style scoped>
.form-label {
  color: var(--color-black-60p);
}
</style>
