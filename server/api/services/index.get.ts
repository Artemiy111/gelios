import { serviceRepo } from '~~/server/repos/service'

export default defineEventHandler(() => {
  return serviceRepo.getAll()
})
