import type { UserDb } from '~~/server/db/schema'
import { usersApi, type LoginRequest } from '../api'
import { authApi } from '../api/auth'
import type { RegisterRequest } from '../config/validation'

export const userModel = defineStore('user', () => {
  const user = ref<UserDb | null>(null)

  const login = async (data: LoginRequest) => {
    const user_ = await authApi.login(data)
    user.value = user_
  }
  const register = async (data: RegisterRequest) => {
    const user_ = await authApi.register(data)
    user.value = user_
  }

  const logout = async () => {
    await authApi.logout()
    user.value = null
  }

  const load = async () => {
    user.value = (await usersApi.getMe()) ?? null
  }

  load()

  return {
    user,
    login,
    register,
    logout,
    load,
  }
})
