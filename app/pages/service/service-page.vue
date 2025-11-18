<script setup lang="ts">
import { useServicesModel } from '~/shared/model/services'
import PageHeading from '~/shared/ui/page-heading/page-heading.vue'
import { Button } from '~/shared/ui/kit/button'
import type { BreadCrumb } from '~/shared/ui/page-heading/types'
import { useShoppingCartModel } from '~/shared/model/shopping-cart'
import { Minus, Plus } from 'lucide-vue-next'

const props = defineProps<{
  id: number
}>()

const servicesModel = useServicesModel()
const shoppingCartModel = useShoppingCartModel()

const shoppingItem = shoppingCartModel.useItem(props.id)

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
        <div class="service-buttons">
          <Button
            v-if="!shoppingItem"
            @click="shoppingCartModel.increaseItem(service)"
          >
            Добавить в корзину
          </Button>
          <template
            v-else
          >
            <button
              type="button"
              @click="shoppingCartModel.decreaseItem(shoppingItem.service)"
            >
              <Minus />
            </button>
            {{ shoppingItem.count }}
            <button
              type="button"
              @click="shoppingCartModel.increaseItem(shoppingItem.service)"
            >
              <Plus />
            </button>
          </template>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
.service {
  display: grid;
  grid-template-columns: 1fr 40rem;
  column-gap: 4rem;
  margin-block-start: 4.5rem;
}

.service-image {
  width: 100%;
  height: auto;
}

.service-buttons {
  display: flex;
  column-gap: 2rem;
  margin-block-start: 3rem;
}
</style>
