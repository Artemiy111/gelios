import { useUserModel } from '.'

export const ensureAuthenticated = () => {
  const userModel = useUserModel()

  watch(() => userModel.user, () => {
    if (!userModel.user) {
      navigateTo('/login')
    }
  })
}
