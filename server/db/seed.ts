import { db } from '.'
import { type UserDbCreate, services, type ServiceDbCreate, users } from './schema'
import { Argon2id } from 'oslo/password'
import { readFileSync } from 'node:fs'

const Image1 = readFileSync('./public/images/base64/1.txt').toString()
const Image2 = readFileSync('./public/images/base64/2.txt').toString()
const Image3 = readFileSync('./public/images/base64/3.txt').toString()
const Image4 = readFileSync('./public/images/base64/4.txt').toString()
const Image5 = readFileSync('./public/images/base64/5.txt').toString()
const Image6 = readFileSync('./public/images/base64/6.txt').toString()

const imgPath = (img: string) => `${img}`

const seedServices: ServiceDbCreate[] = [
  {
    section: 'property',
    title: 'Ипотека',
    description: 'Комплексная защита при покупке недвижимости в ипотеку',
    image: imgPath(Image1),
    price: 120000,
  },
  {
    section: 'property',
    title: 'Квартира и дом',
    description: 'Защита от пожара, затопления, кражи и повреждения имущества',
    image: imgPath(Image2),
    price: 100000,
  },
  {
    section: 'health',
    title: 'Страхование спортсменов',
    description: 'Финансовая защита при получении травмы на тренировке или соревнованиях',
    image: imgPath(Image3),
    price: 70000,
  },
  {
    section: 'health',
    title: 'Страхование от несчастных случаев',
    description: 'Оформите страховку онлайн, не выходя из дома',
    image: imgPath(Image4),
    price: 30000,
  },
  {
    section: 'health',
    title: 'Доктор на связи',
    description: 'Поговорите с врачом, не выходя из дома',
    image: imgPath(Image5),
    price: 40000,
  },
  {
    section: 'health',
    title: 'Путешествия',
    description: 'Путешествуй без забот. По России и по всему миру',
    image: imgPath(Image6),
    price: 30000,
  },
]

const seedUsers: UserDbCreate[] = [
  {
    email: 'art@art.art',
    firstName: 'Артемий',
    lastName: 'Набойщиков',
    middleName: 'Андреевич',
    dateOfBirth: '1990-01-01',
    documentType: 'passport-russian',
    seriesAndNumber: '1234567890',
    issuedDate: '2022-01-01',
    issuedBy: 'Гелиос',
    phone: '+7 (495) 123-45-67',
    passwordHash: await new Argon2id().hash('00000000'),
  },
]

const seed = async () => {
  console.log('seeding...')
  await db.delete(services)
  await db.insert(services).values(seedServices)
  await db.delete(users)
  await db.insert(users).values(seedUsers)

  console.log('seeded!')
}

seed()
