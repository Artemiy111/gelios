<script setup lang="ts">
import { Menu, Search } from 'lucide-vue-next'
import { Separator } from '~~/src/shared/ui/kit/separator'
import { ButtonLink } from '~~/src/shared/ui/kit/button-link'
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-left">
        <button
          class="icon-pad-start"
          type="button"
        >
          <Menu class="icon" />
        </button>
        <NuxtLink
          class="logo"
          to="/"
        >
          ГЕЛИОС
        </NuxtLink>
        <span class="text-pad-start">Москва</span>
        <button
          class="icon-pad-start"
          type="button"
        >
          <Search class="icon " />
        </button>
      </div>
      <div class="header-right">
        <NuxtLink class="text-pad-start">
          8 800 1 007 007
        </NuxtLink>
        <ButtonLink
          class="button-pad-start"
          to="/login"
          variant="secondary"
        >
          Вход
        </ButtonLink>
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

.icon {
  width: 2.4rem;
  height: 2.4rem;
}

.icon-pad-start {
  margin-block-start: 2.8rem;
}

.text-pad-start {
  margin-block-start: 2rem;
}

.button-pad-start {
  margin-block-start: 1.4rem;
}
</style>
