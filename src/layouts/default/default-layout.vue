<script setup lang="ts">
import '~~/src/shared/assets/main.css'
// import { useEventListener, useWindowSize, watchImmediate } from '@vueuse/core'

import { Header } from '~~/src/widgets/header'
import { Footer } from '~~/src/widgets/footer'

// onMounted(() => {
//   console.log(getComputedStyle(document.documentElement).getPropertyValue('--_rem'))
// })

// const useRem = () => {
//   const { width } = useWindowSize()

//   const remInPx = ref(10)
//   const remInPxString = computed(() => `${remInPx.value}px`)

//   const calcRem = () => {
//     const max = 1920
//     const min = 960
//     const maxRemWidth = Math.min(max, width.value)
//     const widthInPx = Math.max(min, maxRemWidth)
//     const newRemInPx = 10 * widthInPx / max

//     remInPx.value = newRemInPx
//   }

//   watchImmediate(width, () => {
//     if (width.value !== 0) calcRem()
//   })

//   return {
//     remInPx, remInPxString,
//   }
// }

// const { remInPxString } = useRem()

// const setRem = () => {
//   if (window) document.documentElement.style.setProperty('--rem', remInPxString.value)
// }

// watchImmediate(remInPxString, setRem)
</script>

<template>
  <div class="layout">
    <Header />
    <main><slot /></main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr auto;
  background: var(--color-background);
}

main {
  inline-size: var(--container-width);
  min-block-size: calc(100dvh - var(--header-height));
  margin-inline: auto;
}
</style>
