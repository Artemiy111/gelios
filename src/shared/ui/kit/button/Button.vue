<script setup lang="ts">
// import type { ButtonHTMLAttributes, ReservedProps } from 'vue'

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
  /* --variant: 'primary'; */
  --is-primary: initial;
  --is-secondary: ;
  /* display: inline-block; */
  color: var(--is-primary, var(--color-white)) var(--is-secondary, var(--color-text));

  background: var(--is-primary, var(--color-black)) var(--is-secondary, var(--color-black-3p));

  padding: 1rem 2.2rem;
  border: none;
  height: max-content;
}
</style>
