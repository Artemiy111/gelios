<script setup lang="ts">
import '~/shared/assets/main.css'
import { Header } from '~/widgets/header'
import { Footer } from '~/widgets/footer'

import { useUserModel } from '~/shared/model'

const userModel = useUserModel()
userModel.load()
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
