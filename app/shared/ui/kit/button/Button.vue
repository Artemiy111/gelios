<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  type?: ButtonHTMLAttributes['type']
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}>(), {
  variant: 'primary',
  type: 'button',
})
</script>

<template>
  <button
    class="text-small"
    :class="{
      primary: props.variant === 'primary',
      secondary: props.variant === 'secondary',
    }"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  height: fit-content;
  padding: 1rem 2.2rem;
  border: none;

  background: var(--is-primary, var(--color-text-base)) var(--is-secondary, var(--color-foreground));

  transition: color 0.3s, background 0.3s;

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
