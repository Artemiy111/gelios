import { Argon2id } from 'oslo/password'
import { userMapper } from '~~/server/mappers/user'
import { userRepo } from '~~/server/repos/user'
import { loginSchema } from '~/shared/config/validation'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginSchema.parse)

  const existingUser = await userRepo.getOneByEmail(body.email)
  if (!existingUser) throw createError({ statusCode: 400, message: 'Неверный логин или пароль' })

  const isValidPassword = await new Argon2id().verify(existingUser.passwordHash, body.password)
  if (!isValidPassword) throw createError({
    statusCode: 400,
    message: 'Неверный логин или пароль',
  })

  setCookie(event, 'userId', existingUser.id.toString(), { maxAge: 60 * 60 * 24 * 30 })

  return userMapper.fromDb(existingUser)
})
