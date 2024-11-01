<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Textarea } from '~~/src/shared/ui/kit/textarea'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'
import { useUserModel } from '~~/src/shared/model'
import { feedbackSchema } from '~~/src/shared/config/validation'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { ensureAuthenticated } from '~~/src/shared/model/ensure-authenticated'

ensureAuthenticated()

const userModel = useUserModel()

const { errors, meta, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(feedbackSchema),
})
const [comment, commentAttrs] = defineField('comment', { validateOnModelUpdate: false })

const onSubmit = handleSubmit(async (data) => {
  await userModel.sendFeedback(data)
})
</script>

<template>
  <PageHeading title="Обратная связь" />
  <section class="form-section">
    <form @submit.prevent="onSubmit">
      <FormFields>
        <FormField
          :cols="4"
          for="comment"
        >
          <FormLabel text="Оставьте своё мнение" />
          <Textarea
            v-bind="commentAttrs"
            id="comment"
            v-model="comment"
            name="comment"
            type="text"
          />
          <FieldError :error="errors.comment" />
        </FormField>
      </FormFields>

      <div class="form-actions">
        <Button
          :disabled="!meta.valid"
          type="submit"
        >
          Отправить
        </Button>
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
