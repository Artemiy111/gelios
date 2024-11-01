<script setup lang="ts">
import { useServicesModel } from '~~/src/shared/model/services'
import PageHeading from '~~/src/shared/ui/page-heading/page-heading.vue'
import { Button } from '~~/src/shared/ui/kit/button'
import type { BreadCrumb } from '~~/src/shared/ui/page-heading/types'

const props = defineProps<{
  id: number
}>()

const servicesModel = useServicesModel()

const service = servicesModel.useService(props.id)
watch(service, () => {
  if (!service.value) navigateTo('/catalog')
})

const breadcrumbs = computed<BreadCrumb[]>(() => [
  { name: 'Каталог', url: '/catalog' },
  { name: service.value?.title ?? '' },
])
</script>

<template>
  <template v-if="service">
    <PageHeading
      :breadcrumbs="breadcrumbs"
      :title="service.title"
    />

    <section class="service">
      <img
        alt="Изображение услуги"
        class="service-image"
        :src="service.image!"
      >
      <div class="service-data">
        <p>{{ service.description }}</p>
        <p class="text-bold service-price">
          Цена {{ service.price }} Р
        </p>
        <Button class="service-button">
          Заказать услугу
        </Button>
      </div>
    </section>
  </template>
</template>

<style scoped>
.service {
  margin-block-start: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 40rem;
  column-gap: 4rem;
}

.service-image {
  width: 100%;
  height: auto;
}

.service-button {
  margin-block-start: 3rem;
}
</style>
