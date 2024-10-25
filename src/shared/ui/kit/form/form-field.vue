<script setup lang="ts">
defineSlots<{
  default?: []
}>()

const props = defineProps<{
  cols?: 1 | 2 | 3 | 4
  for: string
}>()
</script>

<template>
  <label
    class="form-field"
    :data-cols="props.cols"
    :for="props.for"
  >
    <slot />
  </label>
</template>

<style scoped>
.form-field {
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: flex-end;

  &[data-cols="2"] {
    grid-column: span 2;
  }

  &[data-cols="3"] {
    grid-column: span 3;
  }

  &[data-cols="4"] {
    grid-column: span 4;
  }
}
</style>
