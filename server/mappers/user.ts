import type { UserDb } from '../db/schema'

export const userMapper = {
  fromDb: (user: UserDb) => {
    const { passwordHash, ...user_ } = user

    return user_
  },
}
