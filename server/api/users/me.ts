import { userRepo } from '~~/server/repos/user'

export default defineEventHandler((event) => {
  const userIdString = getCookie(event, 'userId')
  if (!userIdString) return undefined

  const userId = parseInt(userIdString)

  return userRepo.getOne(userId)
})
