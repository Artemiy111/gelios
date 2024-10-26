import { loginSchema } from '~~/src/shared/config/validation'

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, loginSchema.parse)

  if (!email || !password) {
    return json({ error: 'Не указаны поля для входа' }, 400)
  }

  const user = await getUserByEmail(email)

  if (!user) {
    return json({ error: 'Не найден пользователь' }, 400)
  }

  if (!user.password) {
    return json({ error: 'Пользователь не имеет пароля' }, 400)
  }

  const isPasswordCorrect = await comparePassword(password, user.password)

  if (!isPasswordCorrect) {
    return json({ error: 'Неверный пароль' }, 400)
  }

  return json({ token: generateToken(user) })
})
