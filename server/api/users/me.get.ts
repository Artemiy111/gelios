import { userMapper } from '~~/server/mappers/user'
import { userRepo } from '~~/server/repos/user'

export default defineEventHandler(async (event) => {
  const userIdString = getCookie(event, 'userId')
  if (!userIdString) return undefined

  const userId = parseInt(userIdString)

  const user = await userRepo.getOne(userId)

  return user && userMapper.fromDb(user)
})
