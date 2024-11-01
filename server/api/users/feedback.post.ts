import { authRepo } from '~~/server/repos/auth'
import { userRepo } from '~~/server/repos/user'
import { feedbackSchema } from '~~/src/shared/config/validation'

export default defineEventHandler(async (event) => {
  const { userId } = await authRepo.assertAuthenticated(event)

  const body = await readValidatedBody(event, feedbackSchema.parse)
  await userRepo.sendFeedback({ ...body, userId })
})
