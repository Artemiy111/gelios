<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import type { BreadCrumb } from '~~/src/shared/ui/page-heading/types'
// import { catalog } from './config'
import { Input } from '~~/src/shared/ui/kit/input'
import { useServicesModel } from '~~/src/shared/model/services'

const props = defineProps<{
  search?: string
}>()

const servicesModel = useServicesModel()
// const { filteredServicesBySection } = storeToRefs(servicesModel)

const breadcrumbs: BreadCrumb[] = [
  { name: 'Главная', url: '/' },
  { name: 'Каталог' },
]

watch(() => props.search, () => {
  servicesModel.filter = props.search ?? ''
})

// const filter = ref(props.search ?? '')

// const filteredCatalog = computed(() => {
//   const mappedSections = catalog.map((section) => {
//     const filteredItems = section.items.filter(item =>
//       item.title.toLowerCase().includes(filter.value.toLowerCase()),
//     )
//     return {
//       ...section,
//       items: filteredItems,
//     }
//   })

//   return mappedSections.filter(section =>
//     section.items.length > 0,
//   )
// })
</script>

<template>
  <PageHeading
    :breadcrumbs="breadcrumbs"
    title="Каталог"
  />

  <Input
    v-model="servicesModel.filter"
    class="search"
    placeholder="Поиск"
    type="text"
  />

  <section class="catalog">
    <section
      v-for="(section, sectionIdx) in servicesModel.filteredServicesBySection"
      :key="section.section"
      class="catalog-section"
    >
      <component
        :is="sectionIdx === 0 ? 'h2' : 'h3'"
        class="text-subheading"
      >
        {{ section.title }}
      </component>
      <div class="services">
        <div
          v-for="item in section.services"
          :key="item.title"
          class="service"
        >
          <img
            v-if="item.image"
            :alt="item.title"
            :src="item.image"
          >
          <div
            v-else
            class="service-image-placeholder"
          />
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

.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.5rem;
  column-gap: 6rem;
}

.service {
  & img {
    width: 100%;
  }
}

.service-image-placeholder {
  width: 100%;
  background: var(--color-foreground);
}
</style>
