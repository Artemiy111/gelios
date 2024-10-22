<script setup lang="ts">
import '~~/src/shared/assets/main.css'
import { Header } from '~~/src/widgets/header'

defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <div class="layout">
    <Header />
    <main><slot /></main>
    <footer />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr auto;
  min-height: 100dvh;
}
</style>
