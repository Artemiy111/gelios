<script setup lang="ts">
import { Tabs } from '~~/src/shared/ui/tabs'
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Input } from '~~/src/shared/ui/kit/input'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'

const tabs = ['Физлицо', 'Ип', 'Юр лицо']
const currentTab = ref(tabs[0]!)
</script>

<template>
  <PageHeading title="Вход в личный кабинет" />
  <Tabs
    v-model:tab="currentTab"
    :tabs="tabs"
  />
  <section class="form-section">
    <form>
      <FormFields>
        <FormField
          :cols="2"
          for="login"
        >
          <FormLabel text="Телефон или email" />
          <Input
            id="login"
            type="text"
          />
          <FieldError error="Обязательное поле" />
        </FormField>

        <FormField
          :cols="2"
          for="password"
        >
          <FormLabel text="Пароль" />
          <Input
            id="password"
            type="text"
          />
          <FieldError error="Обязательное поле" />
        </FormField>
      </FormFields>

      <div class="form-actions">
        <Button
          type="submit"
          variant="secondary"
        >
          Продолжить
        </Button>
        <div class="form-redirect">
          <span>Нет аккаунта?</span>
          <NuxtLink to="/register">
            Зарегистрироваться
          </NuxtLink>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped>
.form-section {
  margin-block-start: 4.5rem;
}

.form-actions {
  margin-block-start: 5rem;
  margin-block-end: 5rem;
  display: flex;
  align-items: center;
  column-gap: 5rem;
}

.form-redirect {
  display: flex;
  column-gap: 2rem;

  & span {
    color: var(--color-black-60p);
  }
}
</style>
