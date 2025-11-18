import type { UserDb } from '~~/server/db/schema'
import { usersApi, type LoginRequest } from '../api'
import { authApi } from '../api/auth'
import type { FeedbackRequest, RegisterRequest } from '../config/validation'

export type UserDto = Omit<UserDb, 'passwordHash'>

export const userModel = defineStore('user', () => {
  const user = ref<UserDto | null>(null)

  const login = async (data: LoginRequest) => {
    const user_ = await authApi.login(data)
    user.value = user_
    await navigateTo('/catalog')
  }
  const register = async (data: RegisterRequest) => {
    const user_ = await authApi.register(data)
    user.value = user_
    await navigateTo('/catalog')
  }

  const logout = async () => {
    await authApi.logout()
    user.value = null
  }

  const load = async () => {
    const data = (await usersApi.getMe())
    user.value = data ?? null
  }

  const sendFeedback = async (data: FeedbackRequest) => {
    await usersApi.sendFeedback(data)
  }

  // load()

  return {
    user,
    login,
    register,
    logout,
    load,
    sendFeedback,
  }
})
