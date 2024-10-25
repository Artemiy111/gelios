<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary',
})
</script>

<template>
  <!-- eslint-disable vue/html-button-has-type -->
  <button
    class="text-small"
    :style="{
      '--is-primary': props.variant === 'primary' ? 'initial' : ' ',
      '--is-secondary': props.variant === 'secondary' ? 'initial' : ' ',
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  --is-primary: initial;
  --is-secondary: ;

  height: fit-content;
  padding: 1rem 2.2rem;

  color: var(--is-primary, var(--color-background)) var(--is-secondary, var(--color-text-base));

  background: var(--is-primary, var(--color-text-base)) var(--is-secondary, var(--color-foreground));
  border: none;

  transition: color 0.3s, background 0.3s;

  &:hover {
    color: var(--is-primary, var(--color-text-base)) var(--is-secondary, var(--color-background));
    background: var(--is-primary, var(--color-accent)) var(--is-secondary, var(--color-text-base));
  }
}
</style>
