export const usersApi = {
  getMe: async () => await $fetch('/api/users/me'),
}
