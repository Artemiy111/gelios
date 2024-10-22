<script setup lang="ts">
import '~~/src/shared/assets/main.css'
import { Header } from '~~/src/widgets/header'
import { Footer } from '~~/src/widgets/footer'

defineOptions({
  name: 'DefaultLayout',
})
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
}

main {
  inline-size: var(--container-width);
  min-block-size: calc(100dvh - var(--header-height));
  margin-inline: auto;
}
</style>
