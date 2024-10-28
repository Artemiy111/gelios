<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import type { BreadCrumb } from '~~/src/shared/ui/page-heading/types'
import { Input } from '~~/src/shared/ui/kit/input'
import { useServicesModel } from '~~/src/shared/model/services'

const props = defineProps<{
  search?: string
}>()

const servicesModel = useServicesModel()

const breadcrumbs: BreadCrumb[] = [
  { name: 'Главная', url: '/' },
  { name: 'Каталог' },
]

watch(() => props.search, () => {
  servicesModel.filter = props.search ?? ''
})
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

  <section class="sections">
    <template v-if="servicesModel.filteredServicesBySection.length ">
      <section
        v-for="(section, sectionIdx) in servicesModel.filteredServicesBySection"
        :key="section.section"
        class="section"
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
            <h4 class="service-title">
              {{ item.title }}
            </h4>
            <span class="service-description">{{ item.description }}</span>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <div class="section section-skeleton">
        <div class="section-skeleton-title" />
        <div class="services">
          <div
            v-for="n in 4"
            :key="n"
            class="service"
          >
            <div class="service-skeleton-image" />
            <div class="service-title service-skeleton-title" />
            <div class="service-description service-skeleton-description" />
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
.search {
  margin-block-start: 3.5rem;
}

.sections {
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;

  margin-block-start: 3.5rem;
  margin-block-end: 5rem;
}

.section {
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
  display: flex;
  flex-direction: column;

  & img {
    width: 100%;
    height: 40rem;
  }

  & .service-title {
    margin-block-start: 2rem;
  }

  & .service-description {
    position: relative;
    margin-block-start: -0.4rem;
  }
}

.service-image-placeholder {
  width: 100%;
  background: var(--color-foreground);
}

@keyframes skeleton-pulse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.section-skeleton {
  --_duration: 0.5s;
  --_animation: skeleton-pulse var(--_duration) infinite ease-in-out alternate;
}

.section-skeleton-title {
  height: var(--text-subheading);
  margin-block: calc((var(--text-subheading) * var(--text-subheading-line-height) - var(--text-subheading)) / 2);
  width: 30%;
  background: var(--color-foreground);
  animation: skeleton-pulse var(--_duration) infinite ease-in-out alternate;
}

.service-skeleton-image {
  width: 100%;
  height: 40rem;
  background: var(--color-foreground);
  animation: skeleton-pulse var(--_duration) infinite ease-in-out alternate;
}

.service-skeleton-title {
  height: var(--text-base);
  margin-block: calc(var(--text-base) * var(--text-base-line-height) - var(--text-base));
  width: 50%;
  background: var(--color-foreground);
  animation: skeleton-pulse var(--_duration) infinite ease-in-out alternate;
}

.service-skeleton-description {
  height: var(--text-base);
  margin-block: calc(var(--text-base) * var(--text-base-line-height) - var(--text-base));
  width: 100%;
  background: var(--color-foreground);
  animation: skeleton-pulse var(--_duration) infinite ease-in-out alternate;
}
</style>
