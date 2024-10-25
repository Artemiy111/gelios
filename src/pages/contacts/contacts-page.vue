<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'
import { Table, type TableRow } from './ui/table'

const hours: TableRow[] = [
  {
    header: 'Пн — Чт',
    data: '9 — 18:00',
  },
  {
    header: 'Пт',
    data: ['9 — 16:45', '9 — 16:45'],
  }, {
    header: 'Перерыв',
    data: '13 — 13:45',
  },
  {
    header: 'Сб — Вс',
    data: 'Выходной',
  },
]

const phone: TableRow[] = [
  {
    header: 'Единый номер для звонков по РФ',
    data: '8 800 100 70 07',
  },
  {
    header: 'Доп. номер горячей линии',
    data: '8 495 981 96 33',
  },
  {
    header: 'Круглосуточный медицинский пульт',
    data: ['8 800 511 97 54', '8 495 981 96 34'],
  },
  {
    header: 'Факс',
    data: ['8 861 255 65 73', '8 861 212 64 09'],
  },
]
</script>

<template>
  <div class="">
    <PageHeading title="Контакты" />

    <div class="content">
      <section class="office">
        <h2 class="text-base">
          Центральный офис компании
        </h2>
        <span>350015, Краснодарский край, г Краснодар, ул Новокузнечная, д 40, оф 68</span>
      </section>

      <section class="hours">
        <h3 class="text-base text-bold">
          Режим работы
        </h3>
        <Table
          class="table"
          :rows="hours"
        />
      </section>

      <section class="phone">
        <h3 class="text-base text-bold">
          Телефон
        </h3>
        <Table
          class="table"
          :rows="phone"
        />
      </section>

      <section class="email">
        <h3 class="text-base text-bold">
          Электронный адрес
        </h3>
        <table class="table">
          <tbody>
            <tr>
              <td colspan="2">
                company@skgelios.ru
              </td>
            </tr>
            <tr>
              <th class="text-normal">
                Отдел по работе с обращениями
              </th>
              <td>ORsOb@skgelios.ru</td>
            </tr>
            <tr>
              <th class="text-normal">
                Урегулирование убытков
              </th>
              <td>Claims_Dept@skgelios.ru</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div class="map">
      <img
        alt="Карта"
        src="./assets//map.png"
      >
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  row-gap: 5rem;
  column-gap: 8rem;
}

.office {
  grid-column: 1 / -1;
  margin-block-start: 4rem;
}

.hours {
  /* margin-block-start: 5rem; */
}

.table {
  margin-block-start: 3.5rem;
}

.email {
  & tbody {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 3rem;
  }

  & tr {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;

    &[colspan="2"] {
    grid-column: 1 / -1;

    }

    & + tr {
      padding-block-start: 1.7rem;
    }

    &:not(:last-child) {
      padding-block-end: 1.7rem;
      border-block-end: 1px solid var(--color-black-10p);
    }
  }

  & th {
    color: var(--color-black-60p);
  }
}

.map {
  height: 60rem;
  margin-block: 8rem 6rem;

  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
