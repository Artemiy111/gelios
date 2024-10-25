<script setup lang="ts">
import type { TableRow } from './types'

const props = defineProps<{
  rows: TableRow[]
}>()
</script>

<template>
  <table>
    <tbody>
      <tr
        v-for="row in props.rows"
        :key="row.header"
      >
        <th class="text-normal">
          {{ row.header }}
        </th>
        <td>
          <span v-if="typeof row.data === 'string'">
            {{ row.data }}
          </span>
          <ul v-else>
            <li
              v-for="item in row.data"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
tbody {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 2.5rem;
  }

th {
  color: var(--color-black-60p);
}

  tr {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;

  & + tr {
    padding-block-start: 1.7rem;
  }

  &:not(:last-child) {
    padding-block-end: 1.7rem;
    border-block-end: 1px solid var(--color-black-10p);
  }
}

  ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  list-style-type: none;
}
</style>
