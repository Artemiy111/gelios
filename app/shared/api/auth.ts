import type { LoginRequest, RegisterRequest } from '../config/validation'

export const authApi = {
  login: async (body: LoginRequest) => await $fetch('/api/auth/login', { method: 'POST', body }),
  register: async (body: RegisterRequest) => await $fetch('/api/auth/register', { method: 'POST', body }),
  logout: () => $fetch('/api/auth/logout'),
}
