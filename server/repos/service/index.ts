import { db } from '~~/server/db'
import type { ServiceDb } from '~~/server/db/schema'

class ServiceRepo {
  async getAll(): Promise<ServiceDb[]> {
    return await db.query.services.findMany()
  }
}

export const serviceRepo = new ServiceRepo()
