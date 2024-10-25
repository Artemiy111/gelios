<script setup lang="ts">
import type { BreadCrumb } from './types'

const props = defineProps<{
  breadcrumbs?: BreadCrumb[]
  title: string
}>()
</script>

<template>
  <section class="heading">
    <div
      v-if="props.breadcrumbs"
      class="breadcrumbs"
    >
      <div
        v-for="(crumb, idx) in breadcrumbs"
        :key="crumb.name"
        class="crumb text-small"
      >
        <NuxtLink
          v-if="crumb.url"
          :to="crumb.url"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span v-else>{{ crumb.name }}</span>
        <span v-if="idx !== props.breadcrumbs.length - 1"> · </span>
      </div>
    </div>
    <h1 class="text-heading">
      {{ title }}
    </h1>
  </section>
</template>

<style scoped>
.heading {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  font-size: var(--text-heading);
  line-height: 0.95;

  &:has(.breadcrumbs) {
    margin-block-start: 2.5rem;
  }

  &:not(:has(.breadcrumbs)) {
    margin-block-start: 6.8rem;
  }
}

.breadcrumbs {
  display: flex;
  column-gap: 0.5rem;
}

.crumb,
.crumb a {
  color: var(--color-black-60p);
}

.crumb a:is(:hover, :active) {
  color: var(--color-text-accent);
}
</style>
