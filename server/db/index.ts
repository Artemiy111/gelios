import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from './schema'

export const client = new Database('db.sqlite')

export const db = drizzle({ schema, client })