<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}>(), {
  variant: 'primary',
})
</script>

<template>
  <!-- eslint-disable vue/html-button-has-type -->
  <button
    class="text-small"
    :class="{
      primary: props.variant === 'primary',
      secondary: props.variant === 'secondary',
    }"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  height: fit-content;
  padding: 1rem 2.2rem;

  /* color: var(--is-primary, var(--color-background)) var(--is-secondary, var(--color-text-base));

  background: var(--is-primary, var(--color-text-base)) var(--is-secondary, var(--color-foreground)); */
  border: none;
  transition: color 0.3s, background 0.3s;
/*
  &:hover {
    color: var(--is-primary, var(--color-text-base)) var(--is-secondary, var(--color-background));
    background: var(--is-primary, var(--color-accent)) var(--is-secondary, var(--color-text-base));
  } */
   &[disabled] {
      cursor:default;
   }
}

.primary {
  color: var(--color-background);
  background: var(--color-text-base);

  &:hover {
    color: var(--color-text-base);
    background: var(--color-accent);
  }

  &[disabled] {
    color: var(--color-background);
    background: var(--color-text-secondary);
  }
}

.secondary {
  color: var(--color-text-base);
  background: var(--color-foreground);

  &:hover {
    color: var(--color-background);
    background: var(--color-text-base);
  }

  &[disabled] {
    color: var(--color-text-secondary);
    background: var(--color-foreground);
  }
}
</style>
