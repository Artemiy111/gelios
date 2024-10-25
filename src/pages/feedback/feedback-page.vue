<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Button } from '~~/src/shared/ui/kit/button'
import { Textarea } from '~~/src/shared/ui/kit/textarea'
import { FormFields, FormField, FieldError, FormLabel } from '~~/src/shared/ui/kit/form'
</script>

<template>
  <PageHeading title="Обратная связь" />
  <section class="form-section">
    <form>
      <FormFields>
        <FormField
          :cols="4"
          for="login"
        >
          <FormLabel text="Оставьте своё мнение" />
          <Textarea
            id="login"
            type="text"
          />
          <FieldError />
        </FormField>
      </FormFields>

      <div class="form-actions">
        <Button
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
