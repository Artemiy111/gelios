<script setup lang="ts">
const props = defineProps<{
  tabs: string[]
}>()
const currentTab = defineModel<string>('tab', { required: true })
</script>

<template>
  <section class="tabs">
    <label
      v-for="tab in props.tabs"
      :key="tab"
      class="tab"
    >
      <input
        v-model="currentTab"
        name="tabs"
        type="radio"
        :value="tab"
      >
      <h2
        v-if="currentTab === tab"
        class="text-subheading"
      >{{ tab }}</h2>
      <span
        v-else
        class="text-normal text-subheading"
      >{{ tab }}</span>
    </label>
  </section>
</template>

<style scoped>
.tabs {
  display: flex;
  column-gap: 3.5rem;
  align-items: start;

  margin-block-start: 4rem;
  border-block-end: 1px solid var(--color-separator);
}

.tab {
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--color-accent);
  }

  & span {
    display: inline-block;
    padding-block-end: 1rem;
  }

  & h2 {
    display: inline-block;
    padding-block-end: 1rem;
    border-block-end: 1px solid var(--color-black);
  }

  & input {
    appearance: none;
  }
}
</style>
