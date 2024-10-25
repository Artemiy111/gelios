<script setup lang="ts">
import { CatalogPage } from '~~/src/pages/catalog'

const route = useRoute()
const search = computed(() => (route.query.search ?? '') as string)
</script>

<template>
  <CatalogPage :search="search" />
</template>
