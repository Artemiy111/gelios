<script setup lang="ts">
import { DefaultLayout } from '~~/src/layouts/default'

import { useUserModel } from '~~/src/shared/model'

const userModel = useUserModel()
userModel.load()
// await useAsyncData('user', () => userModel.load().then(() => true))
</script>

<template>
  <DefaultLayout><slot /></DefaultLayout>
</template>
