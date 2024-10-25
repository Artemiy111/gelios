<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Input } from '~~/src/shared/ui/kit/input'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'
import { Tabs } from '~~/src/shared/ui/tabs'

const tabs = ['Физлицо', 'Ип', 'Юр лицо']
const currentTab = ref(tabs[0]!)
</script>

<template>
  <PageHeading title="Регистрация" />
  <Tabs
    v-model:tab="currentTab"
    :tabs="tabs"
  />
  <section class="form-section">
    <form>
      <fieldset class="form-fieldset">
        <legend class="text-subheading text-normal">
          Страхователь
        </legend>
        <FormFields>
          <FormField
            for="login"
          >
            <FormLabel text="Фамилия" />
            <Input
              id="login"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Имя" />
            <Input
              id="password"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Отчество" />
            <Input
              id="password"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Дата рождения" />
            <Input
              id="password"
              type="date"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Тип документа" />
            <Input
              id="password"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Серия и номер документа" />
            <Input
              id="password"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Дата выдачи" />
            <Input
              id="password"
              type="date"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Кем выдан" />
            <Input
              id="password"
              type="text"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Телефон" />
            <Input
              id="password"
              type="tel"
            />
            <FieldError />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Email" />
            <Input
              id="password"
              type="email"
            />
            <FieldError />
          </FormField>

          <FormField
            :cols="2"
            for=""
          >
            <span class="form-field-email-hint">
              Указанный email будет использован в качестве логина при автоматической регистрации. Также на него после оплаты придет полис в виде pdf файла
            </span>
          </FormField>
        </FormFields>
      </fieldset>

      <div class="form-actions">
        <Button
          type="submit"
        >
          Зарегистрироваться
        </Button>
        <div class="form-redirect">
          <span>Есть аккаунт?</span>
          <NuxtLink to="/login">
            Войти
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

.form-fieldset {
  border: none;

  & legend {
    display: block;
    margin-block-end: 3rem;

    &:has(+ .form-fields) {
      margin-block-end: 2.5rem;
    }
  }
}

.form-field-email-hint {
  align-self: flex-end;
  font-size: var(--font-small);
  line-height: 1.2;
  color: var(--color-black-60p);
}

.form-actions {
  display: flex;
  column-gap: 5rem;
  align-items: center;

  margin-block-start: 5rem;
  margin-block-end: 5rem;
}

.form-redirect {
  display: flex;
  column-gap: 2rem;

  & span {
    color: var(--color-black-60p);
  }
}
</style>
