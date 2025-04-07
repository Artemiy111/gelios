import { authRepo } from '~~/server/repos/auth'
import { userRepo } from '~~/server/repos/user'
import { feedbackSchema } from '~~/src/shared/config/validation'

// defineRouteMeta({
//   openAPI: {
//     parameters: [{ in: 'cookie', name: 'token', required: true, schema: { type: 'string', enum: ['f', 'g'] } }],
//     requestBody: {
//       required: true,
//       content: {

//         'application/json': {
//           schema: { description: 'Отправить фидбек', type: 'object', properties: { comment: { type: 'string' } } },
//         },
//       },
//     },
//   },
// })

export default defineEventHandler(async (event) => {
  const { userId } = await authRepo.assertAuthenticated(event)

  const body = await readValidatedBody(event, feedbackSchema.parse)
  await userRepo.sendFeedback({ ...body, userId })
})
