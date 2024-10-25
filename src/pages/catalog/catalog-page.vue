<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import type { BreadCrumb } from '~~/src/shared/ui/page-heading/types'
import Image1 from './assets/image-1.png'
import Image2 from './assets/image-2.png'
import Image3 from './assets/image-3.png'
import Image4 from './assets/image-4.png'
import Image5 from './assets/image-5.png'
import Image6 from './assets/image-6.png'

const breadcrumbs: BreadCrumb[] = [
  { name: 'Главная', url: '/' },
  { name: 'Каталог' },
]

type CatalogSection = {
  title: string
  items: CatalogItem[]
}

type CatalogItem = {
  title: string
  description: string
  image: string
}

const catalog: CatalogSection[] = [
  {
    title: 'Имущество',
    items: [
      {
        title: 'Ипотека',
        description: 'Комплексная защита при покупке недвижимости в ипотеку',
        image: Image1,
      },
      {
        title: 'Квартира и дом',
        description: 'Защита от пожара, затопления, кражи и повреждения имущества',
        image: Image2,
      },
    ],
  },
  {
    title: 'Здоровье',
    items: [
      {
        title: 'Страхование спортсменов',
        description: 'Финансовая защита при получении травмы на тренировке или соревнованиях',
        image: Image3,
      },
      {
        title: 'Страхование от несчастных случаев',
        description: 'Оформите страховку онлайн, не выходя из дома',
        image: Image4,
      },
      {
        title: 'Доктор на связи',
        description: 'Поговорите с врачом, не выходя из дома',
        image: Image5,
      },
      {
        title: 'Путешествия',
        description: 'Путешествуй без забот. По России и по всему миру',
        image: Image6,
      },
    ],
  },
]
</script>

<template>
  <PageHeading
    :breadcrumbs="breadcrumbs"
    title="Каталог"
  />

  <section class="catalog">
    <section
      v-for="(section, sectionIdx) in catalog"
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
