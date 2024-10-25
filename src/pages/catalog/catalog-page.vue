<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import type { BreadCrumb } from '~~/src/shared/ui/page-heading/types'
import { catalog } from './config'
import { Input } from '~~/src/shared/ui/kit/input'

const props = defineProps<{
  search?: string
}>()

const breadcrumbs: BreadCrumb[] = [
  { name: 'Главная', url: '/' },
  { name: 'Каталог' },
]

watch(() => props.search, () => {
  filter.value = props.search ?? ''
})

const filter = ref(props.search ?? '')

const filteredCatalog = computed(() => {
  const mappedSections = catalog.map((section) => {
    const filteredItems = section.items.filter(item =>
      item.title.toLowerCase().includes(filter.value.toLowerCase()),
    )
    return {
      ...section,
      items: filteredItems,
    }
  })

  return mappedSections.filter(section =>
    section.items.length > 0,
  )
})
</script>

<template>
  <PageHeading
    :breadcrumbs="breadcrumbs"
    title="Каталог"
  />

  <Input
    v-model="filter"
    class="search"
    placeholder="Поиск"
    type="text"
  />

  <section class="catalog">
    <section
      v-for="(section, sectionIdx) in filteredCatalog"
      :key="section.title"
      class="catalog-section"
    >
      <component
        :is="sectionIdx === 0 ? 'h2' : 'h3'"
        class="text-subheading"
      >
        {{ section.title }}
      </component>
      <div class="catalog-items">
        <div
          v-for="item in section.items"
          :key="item.title"
          class="catalog-item"
        >
          <img
            :alt="item.title"
            :src="item.image"
          >
          <h4>{{ item.title }}</h4>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.search {
  margin-block-start: 3.5rem;
}
.catalog {
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;

  margin-block-start: 3.5rem;
  margin-block-end: 5rem;
}

.catalog-section {
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
}

.catalog-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.5rem;
  column-gap: 6rem;
}

.catalog-item {
  & img {
    width: 100%;
  }
}
</style>
