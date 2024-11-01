import type { H3Event } from 'h3'

class AuthRepo {
  async assertAuthenticated(event: H3Event) {
    const userIdString = getCookie(event, 'userId')
    const userId = userIdString ? Number(userIdString) : null
    if (!userId) throw createError({ statusCode: 401, message: 'Not authenticated' })
    return { userId }
  }
}

export const authRepo = new AuthRepo()
