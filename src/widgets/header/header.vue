<script setup lang="ts">
import { Menu, Search } from 'lucide-vue-next'
import { Separator } from '~~/src/shared/ui/kit/separator'
import { ButtonLink } from '~~/src/shared/ui/kit/button-link'
import { Input } from '~~/src/shared/ui/kit/input'
import { Button } from '~~/src/shared/ui/kit/button'

const searchMenuRef = ref<HTMLDialogElement>(null!)

const search = ref('')

const openSearch = () => {
  searchMenuRef.value.showModal()
}

const closeSearch = () => {
  searchMenuRef.value.close()
}

const searchSubmit = () => {
  closeSearch()

  navigateTo({
    path: '/catalog',
    query: {
      search: search.value,
    },
  })
}

type Link = {
  name: string
  url: string
}

const links: Link[] = [
  {
    name: 'Каталог',
    url: '/catalog',
  },
]

const burgerMenuRef = ref<HTMLDialogElement>(null!)

const openBurger = () => burgerMenuRef.value.showModal()
const closeBurger = () => burgerMenuRef.value.close()
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-left">
        <button
          class="icon-pad-start"
          type="button"
        >
          <Menu
            class="icon"
            @click="openBurger"
          />
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
          <Search
            class="icon"
            @click="openSearch"
          />
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

    <dialog
      ref="searchMenuRef"
      class="search-menu-backdrop"
      @click.self="closeSearch"
    >
      <div class="search-menu">
        <Input
          v-model="search"
          placeholder="Поиск"
        />
        <Button @click="searchSubmit">
          Найти
        </Button>
      </div>
    </dialog>

    <dialog
      ref="burgerMenuRef"
      class="burger-menu-backdrop"
      @click.self="closeBurger"
    >
      <div class="burger-menu">
        <ul
          v-for="link in links"
          :key="link.name"
        >
          <li>
            <NuxtLink :to="link.url">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </dialog>
  </header>
</template>

<style scoped>
.header {
  position: relative;
}

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

  transition: color 0.3s;
  &:hover {
    color: var(--color-accent);
  }
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

.search-menu-backdrop {
  inset: 0;
  background: none;
  border: none;
}

.search-menu {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 3rem;
  /* bottom: 0; */
  top: calc(var(--header-height) + 4rem);
  /* width: 100%; */
  padding: var(--container-pad);
  width: var(--container-width);
  inset-inline: var(--container-pad);
  background: var(--color-white);

  & button {
    height: 100%;
  }
}

.burger-menu-backdrop {
  inset: 0;
  background: none;
  border: none;
}

.burger-menu {
  position: fixed;
  left: 0;
  inset-block: 0;
  height: 100%;
  width: 30rem;
  background: var(--color-white);
  padding-block: 2rem 3rem;
  padding-inline: 3rem;

  & ul {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    list-style-type: none;
  }
}
</style>
