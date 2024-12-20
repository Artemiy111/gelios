import { db } from '~~/server/db'
import { services, type ServiceDbCreate } from '~~/server/db/schema'
import Image1 from '~~/public/images/base64/1.txt'
import Image2 from '~~/public/images/base64/2.txt'
import Image3 from '~~/public/images/base64/3.txt'
import Image4 from '~~/public/images/base64/4.txt'
import Image5 from '~~/public/images/base64/5.txt'
import Image6 from '~~/public/images/base64/6.txt'

const seedServices: ServiceDbCreate[] = [
  {
    section: 'property',
    title: 'Ипотека',
    description: 'Комплексная защита при покупке недвижимости в ипотеку',
    image: Image1,
    price: 120000,
  },
  {
    section: 'property',
    title: 'Квартира и дом',
    description: 'Защита от пожара, затопления, кражи и повреждения имущества',
    image: Image2,
    price: 100000,
  },
  {
    section: 'health',
    title: 'Страхование спортсменов',
    description: 'Финансовая защита при получении травмы на тренировке или соревнованиях',
    image: Image3,
    price: 70000,
  },
  {
    section: 'health',
    title: 'Страхование от несчастных случаев',
    description: 'Оформите страховку онлайн, не выходя из дома',
    image: Image4,
    price: 30000,
  },
  {
    section: 'health',
    title: 'Доктор на связи',
    description: 'Поговорите с врачом, не выходя из дома',
    image: Image5,
    price: 40000,
  },
  {
    section: 'health',
    title: 'Путешествия',
    description: 'Путешествуй без забот. По России и по всему миру',
    image: Image6,
    price: 30000,
  },
]
export default defineEventHandler(async () => {
  // throw new Error('Could not seed')

  console.log('seeding...')
  await db.delete(services)
  await db.insert(services).values(seedServices)
  console.log('seeded!')
})
