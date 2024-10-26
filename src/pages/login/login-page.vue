<script setup lang="ts">
import { Tabs } from '~~/src/shared/ui/tabs'
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Input } from '~~/src/shared/ui/kit/input'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema } from '~~/src/shared/config/validation'

const tabs = ['Физлицо', 'Ип', 'Юр лицо']
const currentTab = ref(tabs[0]!)

const { errors, handleSubmit, defineField, meta } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: { email: '', password: '' },
})

const [email, emailAttrs] = defineField('email', { validateOnModelUpdate: false })
const [password, passwordAttrs] = defineField('password', { validateOnModelUpdate: false })

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <PageHeading title="Вход в личный кабинет" />
  <Tabs
    v-model:tab="currentTab"
    :tabs="tabs"
  />
  <section class="form-section">
    <form @submit.prevent="onSubmit">
      <FormFields>
        <FormField
          :cols="2"
          for="login"
        >
          <FormLabel text="Email" />
          <Input
            v-bind="emailAttrs"
            id="login"
            v-model="email"
            name="email"
            type="text"
          />
          <FieldError :error="errors.email" />
        </FormField>

        <FormField
          :cols="2"
          for="password"
        >
          <FormLabel text="Пароль" />
          <Input
            v-bind="passwordAttrs"
            id="password"
            v-model="password"
            name="password"
            type="password"
          />
          <FieldError :error="errors.password" />
        </FormField>
      </FormFields>

      <div class="form-actions">
        <Button
          :disabled="!meta.valid"
          type="submit"
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
    color: var(--color-text-secondary);
  }
}
</style>
