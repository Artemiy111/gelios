<script setup lang="ts">
import { Menu, Search } from 'lucide-vue-next'
import { Separator } from '~~/src/shared/ui/kit/separator'
import { ButtonLink } from '~~/src/shared/ui/kit/button-link'
import { Input } from '~~/src/shared/ui/kit/input'
import { Button } from '~~/src/shared/ui/kit/button'

const searchMenuRef = ref<HTMLDialogElement>(null!)
const search = ref('')

const closeSearch = () => {
  searchMenuRef.value.hidePopover()
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
const closeBurger = () => burgerMenuRef.value.hidePopover()

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Мурманск', 'Самара', 'Новосибирск', 'Красноярск']
const currentCity = ref(cities[0])

const cityPopoverRef = ref<HTMLDivElement>(null!)

const openCity = () => cityPopoverRef.value.showPopover()
const closeCity = () => cityPopoverRef.value.hidePopover()
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-left">
        <div class="icon-pad-start">
          <button
            popovertarget="burger-menu-dialog"
            popovertargetaction="show"
            type="button"
          >
            <Menu
              class="icon"
            />
          </button>
          <dialog
            id="burger-menu-dialog"
            ref="burgerMenuRef"
            class="burger-menu-dialog"
            popover
            @click.self="closeBurger"
          >
            <div class="burger-menu">
              <ul
                v-for="link in links"
                :key="link.name"
              >
                <li>
                  <NuxtLink
                    :to="link.url"
                    @click="closeBurger"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </dialog>
        </div>
        <NuxtLink
          class="logo"
          to="/"
        >
          ГЕЛИОС
        </NuxtLink>
        <div class="text-pad-start city">
          <button
            popovertarget="city-popover"
            popovertargetaction="show"
            type="button"
            @mouseenter="openCity"
          >
            {{ currentCity }}
          </button>
          <div
            id="city-popover"
            ref="cityPopoverRef"
            class="city-popover"
            popover
            @mouseleave="closeCity"
          >
            <ul>
              <li
                v-for="city in cities"
                :key="city"
              >
                <label>
                  <input
                    v-model="currentCity"
                    name="city"
                    type="radio"
                    :value="city"
                  >
                  <span>{{ city }}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="icon-pad-start">
          <button
            popovertarget="search-menu-dialog"
            popovertargetaction="show"
            type="button"
          >
            <Search
              class="icon"
            />
          </button>

          <dialog
            id="search-menu-dialog"
            ref="searchMenuRef"
            class="search-menu-dialog"
            popover
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
        </div>
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
.header {
  position: sticky;
  z-index: var(--header-z-index);
  inset-block-start: 0;

  width: 100%;

  background: var(--color-background);
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

.search-menu-dialog {
  inset: 0;

  opacity: 0;
  background: none;
  border: none;

  transition: opacity 0.3s;

  transition-behavior: allow-discrete;

  &::backdrop {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:popover-open {
    opacity: 1;

    &::backdrop {
      opacity: 1;
      background: var(--color-backdrop);
    }
  }

}

.search-menu {
  position: fixed;
  top: calc(var(--header-height) + 4rem);
  inset-inline: var(--container-pad);

  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 3rem;

  width: var(--container-width);
  padding: var(--container-pad);

  background: var(--color-background);

  transition: all 0.3s;

  transition-behavior: allow-discrete;

  .search-menu-dialog:popover-open & {
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }

  & button {
    height: 100%;
  }
}

.burger-menu-dialog {
  inset: 0;

  background: none;
  border: none;

  transition: all 0.3s;

  transition-behavior: allow-discrete;

  &::backdrop {
    opacity: 0;
    background: var(--color-backdrop);
    transition: all 0.3s;
  }

  &:popover-open {
    &::backdrop {
      opacity: 1;
    }
  }

}

.burger-menu {
  --_translate-start: 0 0;
  --_translate-end:  -100% 0;

  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  translate: var(--_translate-end);

  width: 30rem;
  height: 100%;
  padding-block: 2rem 3rem;
  padding-inline: 3rem;

  background: var(--color-background);

  transition: all 0.3s;

  .burger-menu-dialog:popover-open & {
    translate: var(--_translate-start);

    @starting-style {
      translate: var(--_translate-end);
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    list-style-type: none;
  }
}

.city {
  position: relative;

  anchor-name: --city;

  & button {
    transition: color 0.3s;

    &:hover {
      color: var(--color-accent);
    }
  }

}

.city-popover {
  --_pad-inline: 3rem;
  --_pad-block: 2rem;

  position: absolute;
  inset-block-start: calc(var(--_pad-block) * -1);
  inset-inline-start: calc(var(--_pad-inline) * -1);

  padding-block: var(--_pad-block);
  padding-inline: var(--_pad-inline);

  opacity: 0;
  border: 1px solid var(--color-separator);

  transition: all 0.3s;

  position-anchor: --city;
  position-area: span-bottom span-right;
  transition-behavior: allow-discrete;

  &:popover-open {
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    width: max-content;

    list-style-type: none;
  }

  & label {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: var(--color-accent);
    }
  }

  & label:has(input:checked) {
    font-weight: bold;
  }

  & input {
    appearance: none;
  }
}
</style>
