<script setup lang="ts">
import { ServicePage } from '~~/src/pages/service'

const id = computed(() => parseInt(useRoute().params!.id! as string))
</script>

<template>
  <ServicePage :id="id" />
</template>
