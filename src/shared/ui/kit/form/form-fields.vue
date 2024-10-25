<template>
  <div class="form-fields">
    <slot />
  </div>
</template>

<style scoped>
.form-fields {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4.5rem;
  column-gap: 3.5rem;
}
</style>
