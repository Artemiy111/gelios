import type { FeedbackRequest } from '../config/validation'

export const usersApi = {
  getMe: async () => await $fetch('/api/users/me'),
  sendFeedback: async (data: FeedbackRequest) => await $fetch('/api/users/feedback', { method: 'POST', body: data }),
}
