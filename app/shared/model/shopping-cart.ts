import type { ServiceDb } from '~~/server/db/schema'

type ShoppingCartItem = {
  id: number
  serviceId: number
  service: ServiceDb
  count: number
}

export const useShoppingCartModel = defineStore('shopping-cart', () => {
  const items = ref<ShoppingCartItem[]>([])

  const totalPrice = computed(() => items.value.reduce((acc, item) => acc + item.count * item.service.price, 0))

  const getItems = () => {
    const l = localStorage.getItem('shopping-cart-items')
    if (l) {
      try {
        const parsed = JSON.parse(l)
        console.log(parsed)
        items.value = parsed
      }
      catch (_e) { items.value = [] }
    }
  }

  const setItems = () => {
    localStorage.setItem('shopping-cart-items', JSON.stringify(items.value))
  }

  const purchase = async () => {
    await $fetch('/api/shopping/purchase', {
      method: 'POST', body: {
        orders: items.value.map(i => ({ serviceId: i.serviceId, count: i.count })),
      },
    })

    items.value = []
    setItems()
  }

  onMounted(() => {
    getItems()
  })

  const increaseItem = (service: ServiceDb) => {
    const item = items.value.find(i => i.serviceId === service.id)

    if (item) {
      item.count++
    }
    else {
      console.log('add item', service)
      items.value.push({
        id: Date.now(),
        serviceId: service.id,
        service,
        count: 1,
      })
    }
    setItems()
  }

  const decreaseItem = (service: ServiceDb) => {
    const item = items.value.find(i => i.serviceId === service.id)
    if (!item) return
    item.count--
    if (item.count === 0) items.value = items.value.filter(i => i.id !== item.id)
    setItems()
  }

  const useItem = (serviceId: number) => {
    const item = computed(() => items.value.find(i => i.serviceId === serviceId))
    return item
  }

  return {
    items,
    totalPrice,
    useItem,
    increaseItem,
    decreaseItem,
    purchase,
  }
})
