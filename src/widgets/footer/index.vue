<script setup lang="ts">
import Separator from '~~/src/shared/ui/kit/separator/Separator.vue'

const links = [{
  name: 'Реквизиты',
  url: '/',
}, {
  name: 'Документы',
  url: '/',
}, {
  name: 'Пользовательское соглашение',
  url: '/',
}, {
  name: 'Карта сайта',
  url: '/',
}]
</script>

<template>
  <footer class="footer">
    <Separator />
    <div class="footer-inner">
      <div class="links">
        <NuxtLink
          v-for="link in links"
          :key="link.url"
          class="link"
          :to="link.url"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <NuxtLink
        class="mini-link text-small"
        to="/"
      >
        Информация для получателей страховых услуг
      </NuxtLink>
      <span class="copyright text-small">
        © ООО Страховая Компания «Гелиос»
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer-inner {
  width: var(--container-width);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  column-gap: 3rem;
  margin-block-start: 4.5rem;
}

.mini-link {
  margin-block-start: 1.5rem;
  color: var(--color-black-80p);

  &:is(:hover, :active) {
    color: var(--color-text-accent);
  }
}

.copyright {
  margin-block-start: 2.5rem;
  margin-block-end: 4.5rem;
  color: var(--color-black-60p)
}
</style>
