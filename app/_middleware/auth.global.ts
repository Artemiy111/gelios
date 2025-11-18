import { useUserModel } from '~/shared/model'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userModel = useUserModel()

  if (to.path === '/feedback' && !userModel.user) {
    return await navigateTo('/login')
  }
})
