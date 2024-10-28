import { db } from '.'
import type { ServiceDbCreate } from './schema'
import { services } from './schema'

const seedServices: ServiceDbCreate[] = [
  {
    section: 'property',
    title: 'Ипотека',
    description: 'Комплексная защита при покупке недвижимости в ипотеку',
  },
  {
    section: 'property',
    title: 'Квартира и дом',
    description: 'Защита от пожара, затопления, кражи и повреждения имущества',
  },
  {
    section: 'health',
    title: 'Страхование спортсменов',
    description: 'Финансовая защита при получении травмы на тренировке или соревнованиях',
  },
  {
    section: 'health',
    title: 'Страхование от несчастных случаев',
    description: 'Оформите страховку онлайн, не выходя из дома',
  },
  {
    section: 'health',
    title: 'Доктор на связи',
    description: 'Поговорите с врачом, не выходя из дома',
  },
  {
    section: 'health',
    title: 'Путешествия',
    description: 'Путешествуй без забот. По России и по всему миру',
  },
]

const seed = async () => {
  console.log('seeding...')
  // await db.delete(services)

  await db.insert(services).values(seedServices[0])
  console.log('seeded!')
}

seed()
