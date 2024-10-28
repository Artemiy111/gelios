<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Input } from '~~/src/shared/ui/kit/input'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'
import { Tabs } from '~~/src/shared/ui/tabs'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { documentTypesWithNames, registerSchema } from '~~/src/shared/config/validation'
import { Select } from '~~/src/shared/ui/kit/select'
import { useUserModel } from '~~/src/shared/model'

const tabs = ['Физлицо', 'Ип', 'Юр лицо']
const currentTab = ref(tabs[0]!)

const userModel = useUserModel()
const { errors, meta, handleSubmit, defineField } = useForm({ validationSchema: toTypedSchema(registerSchema), initialValues: {
  firstName: 'Артемий',
  lastName: 'Набойщиков',
  middleName: 'Андреевич',
  email: 'mrart111@mail.ru',
  phone: '+79999999999',
  documentType: 'passport-russian',
  seriesAndNumber: '9090808080',

} })

const onSubmit = handleSubmit(async (values) => {
  await userModel.register(values)
})

const [firstName, firstNameAttrs] = defineField('firstName', { validateOnModelUpdate: false })
const [lastName, lastNameAttrs] = defineField('lastName', { validateOnModelUpdate: false })
const [middleName, middleNameAttrs] = defineField('middleName', { validateOnModelUpdate: false })
const [dateOfBirth, dateOfBirthAttrs] = defineField('dateOfBirth', { validateOnModelUpdate: false })
const [documentType, documentTypeAttrs] = defineField('documentType', { validateOnModelUpdate: false })
const [seriesAndNumber, seriesAndNumberAttrs] = defineField('seriesAndNumber', { validateOnModelUpdate: false })
const [issuedDate, issuedDateAttrs] = defineField('issuedDate', { validateOnModelUpdate: false })
const [issuedBy, issuedByAttrs] = defineField('issuedBy', { validateOnModelUpdate: false })
const [phone, phoneAttrs] = defineField('phone', { validateOnModelUpdate: false })
const [email, emailAttrs] = defineField('email', { validateOnModelUpdate: false })
const [password, passwordAttrs] = defineField('password', { validateOnModelUpdate: false })
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword', { validateOnModelUpdate: false })
</script>

<template>
  <PageHeading title="Регистрация" />
  <Tabs
    v-model:tab="currentTab"
    :tabs="tabs"
  />
  <section class="form-section">
    <form @submit.prevent="onSubmit">
      <fieldset class="form-fieldset">
        <legend class="text-subheading text-normal">
          Страхователь
        </legend>
        <FormFields>
          <FormField
            for="firstName"
          >
            <FormLabel text="Фамилия" />
            <Input
              id="lastName"
              v-model="lastName"
              v-bind="lastNameAttrs"
              name="lastName"
              type="text"
            />
            <FieldError :error="errors.lastName" />
          </FormField>
          <FormField
            for="firstName"
          >
            <FormLabel text="Имя" />
            <Input
              id="firstName"
              v-model="firstName"
              v-bind="firstNameAttrs"
              name="firstName"
              type="text"
            />
            <FieldError :error="errors.firstName" />
          </FormField>
          <FormField
            for="middleName"
          >
            <FormLabel text="Отчество" />
            <Input
              id="middleName"
              v-model="middleName"
              name="middleName"
              v-bind="middleNameAttrs"
              type="text"
            />
            <FieldError :error="errors.middleName" />
          </FormField>
          <FormField
            for="dateOfBirth"
          >
            <FormLabel text="Дата рождения" />
            <Input
              id="dateOfBirth"
              v-model="dateOfBirth"
              name="dateOfBirth"
              v-bind="dateOfBirthAttrs"
              type="date"
            />
            <FieldError :error="errors.dateOfBirth" />
          </FormField>
          <FormField
            for="documentType"
          >
            <FormLabel text="Тип документа" />
            <Select
              v-model="documentType"
              :options="documentTypesWithNames"
              v-bind="documentTypeAttrs"
            />
            <FieldError :error="errors.documentType" />
          </FormField>
          <FormField
            for="seriesAndNumber"
          >
            <FormLabel text="Серия и номер документа" />
            <Input
              id="seriesAndNumber"
              v-model="seriesAndNumber"
              name="seriesAndNumber"
              v-bind="seriesAndNumberAttrs"
              type="text"
            />
            <FieldError :error="errors.seriesAndNumber" />
          </FormField>
          <FormField
            for="issuedDate"
          >
            <FormLabel text="Дата выдачи" />
            <Input
              id="issuedDate"
              v-model="issuedDate"
              name="issuedDate"
              v-bind="issuedDateAttrs"
              type="date"
            />
            <FieldError :error="errors.issuedDate" />
          </FormField>
          <FormField
            for="issuedBy"
          >
            <FormLabel text="Кем выдан" />
            <Input
              id="issuedBy"
              v-model="issuedBy"
              name="issuedBy"
              v-bind="issuedByAttrs"
              type="text"
            />
            <FieldError :error="errors.issuedBy" />
          </FormField>
          <FormField
            for="phone"
          >
            <FormLabel text="Телефон" />
            <Input
              id="phone"
              v-model="phone"
              name="phone"
              v-bind="phoneAttrs"
              type="tel"
            />
            <FieldError :error="errors.phone" />
          </FormField>
          <FormField
            for="email"
          >
            <FormLabel text="Email" />
            <Input
              id="email"
              v-model="email"
              name="email"
              v-bind="emailAttrs"
              type="email"
            />
            <FieldError :error="errors.email" />
          </FormField>
          <FormField
            for="password"
          >
            <FormLabel text="Пароль" />
            <Input
              id="password"
              v-model="password"
              name="password"
              v-bind="passwordAttrs"
              type="password"
            />
            <FieldError :error="errors.password" />
          </FormField>
          <FormField
            for="confirmPassword"
          >
            <FormLabel text="Повторите пароль" />
            <Input
              id="confirmPassword"
              v-model="confirmPassword"
              name="confirmPassword"
              v-bind="confirmPasswordAttrs"
              type="password"
            />
            <FieldError :error="errors.confirmPassword" />
          </FormField>

          <!-- <FormField
            :cols="2"
            for=""
          >
            <span class="form-field-email-hint">
              Указанный email будет использован в качестве логина при автоматической регистрации. Также на него после оплаты придет полис в виде pdf файла
            </span>
          </FormField> -->
        </FormFields>
      </fieldset>

      <div class="form-actions">
        <Button
          :disabled="!meta.valid"
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
  color: var(--color-text-secondary);
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
