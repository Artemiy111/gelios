<script setup lang="ts">
import { ServicePage } from '~/pages/service'

const id = computed(() => parseInt(useRoute().params!.id! as string))
</script>

<template>
  <ServicePage :id="id" />
</template>
