import { eq } from 'drizzle-orm'
import { db } from '~~/server/db'
import { type UserDbCreate, users, type UserDb } from '~~/server/db/schema'

class UserRepo {
  async getOne(id: number): Promise<UserDb | undefined> {
    return (await db.query.users.findFirst({ where: eq(users.id, id) }))
  }

  async getOneByEmail(email: string): Promise<UserDb | undefined> {
    return (await db.query.users.findFirst({ where: eq(users.email, email) }))
  }

  async create(user: UserDbCreate): Promise<UserDb> {
    const id = (await db.insert(users).values(user)).lastInsertRowid
    return (await this.getOne(Number(id)))!
  }
}

export const userRepo = new UserRepo()
