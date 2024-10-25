<script setup lang="ts">
import { PageHeading } from '~~/src/shared/ui/page-heading'

const mockBreadcrumbs = [
  {
    name: 'Главная',
    url: '/',
  },
  {
    name: 'О компании',
  },
]

const info = [
  {
    header: '100%',
    data: 'Российский капитал',
  }, {

    header: '600 млн рублей',
    data: 'Уставный капитал',
  },
  {
    header: '5,6 млрд рублей',
    data: 'Страховые премии за 2022',
  },
  {
    header: '23-е место',
    data: 'В рэнкинге страховщиков non-life по итогам 2022',
  },
  {
    header: '2,8 млрд. рублей',
    data: 'Страховые выплаты в 2022',
  },
  {
    header: '1 200 000+',
    data: 'Клиентов и партнеров',
  },
  {
    header: '1 500+',
    data: 'Продавцов и агентов',
  },
]
const breadcrumbs = ref(mockBreadcrumbs)

const mission = [
  {
    title: 'Клиентам',
    text: 'Надежность и удобство',
  },
  {
    title: 'Партнёрам',
    text: 'Прибыльность и технологичность',
  },
  {
    title: 'Сотрудникам',
    text: 'Возможность профессионального роста вместе с Компанией',
  },
  {
    title: 'Участникам',
    text: 'Прибыльный, высокопотенциальный актив',
  },
]
</script>

<template>
  <div class="">
    <PageHeading
      :breadcrumbs="breadcrumbs"
      title="Компания"
    />

    <section class="content">
      <h2 class="text-subheading">
        ООО Страховая Компания «Гелиос» – это универсальная технологичная страховая компания, оказывающая услуги на финансовом рынке с 1993 года
      </h2>
      <p>
        Обеспечивать комплексную защиту финансовых интересов клиентов Компании позволяют лицензии Банка России на осуществление ОСАГО, добровольного имущественного страхования, добровольного личного страхования (кроме страхования жизни), а также лицензия на перестрахование, выданные бессрочно.
        Страховая Компания «Гелиос» – член Всероссийского Союза Страховщиков (ВСС), Российского Союза Автостраховщиков (РСА), Национального союза агростраховщиков (НСА).
        Ответственность перед клиентами по полной сумме возможных убытков Страховая Компания «Гелиос» несет благодаря финансовой устойчивости, объёмам собственных средств и надежным перестраховочным программам. В числе партнеров по перестрахованию – ведущие российские и международные компании.
        В долгосрочной перспективе Компания планирует сохранить и расширить свою роль и место на страховом рынке Российской Федерации как технологичной страховой организации рыночного типа со сбалансированным портфелем универсальных (классических) страховых рисков и высокой финансовой устойчивостью.
      </p>
    </section>
    <section class="map-and-info">
      <div class="map">
        <div class="map-items">
          <div class="map-item">
            <span class="text-subheading">31</span>
            <span>Субъект РФ</span>
          </div>
          <div class="map-item">
            <span class="text-subheading">50+</span>
            <span>Офисов</span>
          </div>
        </div>
        <img
          alt="Карта"
          src="./assets/map.png"
          width="910"
        >
      </div>
      <div class="info">
        <table>
          <tbody>
            <tr
              v-for="row in info"
              :key="row.header"
            >
              <th>{{ row.header }}</th>
              <td>{{ row.data }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="mission">
      <h3 class="text-subheading">
        Наша миссия:<br>
        Сохранять ваше настоящее, чтобы вы уверенно создавали свое будущее
      </h3>
      <table class="mission-items">
        <tbody>
          <tr
            v-for="item in mission"
            :key="item.title"
            class="mission-item"
          >
            <th>{{ item.title }}</th>
            <td>{{ item.text }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.content {
  margin-block-start: 4.5rem;

  & h2 + p {
    margin-block-start: 3rem;
  }
}

.map-and-info {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 10rem;
  margin-block-start: 5.5rem;
}

.map {
  position: relative;
}

.map-items {
  position: absolute;
  inset-block-start: 4.5rem;
  display: flex;
  column-gap: 4rem;
}

.map-item {
  display: flex;
  column-gap: 1.5rem;
  align-items: flex-end;
}

.map img {
  width: 91rem;
}

.info {
  & tbody {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 2.5rem;
  }

  & tr {
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

  & th {
    text-align: start;
  }
}

.mission {
  margin-block-start: 8rem;
  margin-block-end: 4.5rem;
}

.mission-items tbody {
  display: grid;
  grid-template-columns: 35rem 1fr;
  gap: 3.5rem 6rem;

  width: 100%;
  margin-block-start: 4.5rem;
}

.mission-item {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  & th {
    text-align: start;
  }
}
</style>
