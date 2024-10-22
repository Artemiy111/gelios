<script setup lang="ts">
import { Menu, Search } from 'lucide-vue-next'
import { Separator } from '~~/src/shared/ui/kit/separator'
import { Button } from '~~/src/shared/ui/kit/button'

defineOptions({
  name: 'Header',
})
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-left">
        <button
          class="icon-pad-start"
          type="button"
        >
          <Menu />
        </button>
        <span class="logo">ГЕЛИОС</span>
        <span class="text-pad-start">Москва</span>
        <button type="button">
          <Search class="search icon-pad-start" />
        </button>
      </div>
      <div class="header-right">
        <NuxtLink class="text-pad-start">
          8 800 1 007 007
        </NuxtLink>
        <Button
          class="button-pad-start"
          variant="secondary"
        >
          Авторизация
        </Button>
      </div>
    </div>
    <Separator />
  </header>
</template>

<style scoped>
.header-inner {
  display: flex;
  justify-content: space-between;

  width: var(--container-width);
  height: var(--header-height);
  margin-inline: auto;
}

.header-left {
  display: flex;
  column-gap: 6rem;
}

.header-right {
  display: flex;
  column-gap: 3rem;
}

.logo {
  margin-block-start: 2rem;
  font-family: 'Dela Gothic One', sans-serif;
}

.icon-pad-start {
  margin-block-start: 2.8rem;
}

.text-pad-start {
  margin-block-start: 2rem;
}

.button-pad-start {
  margin-block-start: 14px;
}
</style>
