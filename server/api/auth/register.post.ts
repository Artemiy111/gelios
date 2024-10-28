import { registerSchema } from '~~/src/shared/config/validation'
import { Argon2id } from 'oslo/password'
import { userRepo } from '~~/server/repos/user'

const dateToString = (date: Date) => date.toISOString().slice(0, 10)

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, registerSchema.parse)

  const passwordHash = await new Argon2id().hash(body.password)

  const user = await userRepo.create({
    ...body,
    passwordHash,
    dateOfBirth: dateToString(body.dateOfBirth),
    issuedDate: dateToString(body.issuedDate),
  })

  setCookie(event, 'userId', user.id.toString())

  return user
})
