import { relations } from 'drizzle-orm'
import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core'
import { documentTypes } from '../../src/shared/config/validation'

export const users = sqliteTable('users', {
  id: int('id').primaryKey({ autoIncrement: true }),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  middleName: text('middle_name'),
  email: text('email').notNull(),
  dateOfBirth: text('date_of_birth').notNull(),
  documentType: text('document_type', { enum: documentTypes }).notNull(),
  seriesAndNumber: text('series_and_number').notNull(),
  issuedDate: text('issued_date').notNull(),
  issuedBy: text('issued_by').notNull(),
  phone: text('phone').notNull(),
  passwordHash: text('password_hash').notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  feedbacks: many(feedbacks),
}))

export type UserDb = typeof users.$inferSelect
export type UserDbCreate = typeof users.$inferInsert

export type User = {
  email: string
  firstName: string
  lastName: string
  middleName: string
  dateOfBirth: Date
  documentType: string
  seriesAndNumber: string
  issuedDate: Date
  issuedBy: string
  phone: string
}

export const serviceSections = ['property', 'health'] as const
export type ServiceSection = typeof serviceSections[number]

export const services = sqliteTable('services', {
  id: int('id').primaryKey({ autoIncrement: true }),
  section: text('section', { enum: serviceSections }).notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  price: int().notNull(),
  priceDiscount: int(),
})

export const servicesRelations = relations(services, () => ({}))

export type ServiceDb = typeof services.$inferSelect
export type ServiceDbCreate = typeof services.$inferInsert

export const feedbacks = sqliteTable('feedbacks', {
  id: int('id').primaryKey({ autoIncrement: true }),
  userId: int('user_id').notNull(),
  comment: text('comment').notNull(),
})

export const orders = sqliteTable('orders', {
  id: int('id').primaryKey({ autoIncrement: true }),
  userId: int('user_id').notNull(),
  serviceId: int('service_id').notNull(),
  count: int('count').notNull(),
  createdAt: int('created_at').notNull().$defaultFn(() => Date.now()),
})

export type OrderDb = typeof orders.$inferSelect
export type OrderDbCreate = typeof orders.$inferInsert

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  user: one(users, {
    fields: [feedbacks.userId],
    references: [users.id],
    relationName: 'user',
  }),
}))

export type FeedbackDb = typeof feedbacks.$inferSelect
export type FeedbackDbCreate = typeof feedbacks.$inferInsert
