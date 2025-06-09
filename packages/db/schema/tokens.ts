import { pgTable, pgEnum, text, timestamp, json } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { users } from './users'

export const tokenTypes = pgEnum('token_types', [
  'access',
  'refresh',
  'verification',
  'password_reset',
])

export const tokens = pgTable('tokens', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  type: tokenTypes('type').notNull(),
  data: json('data').default('{}'),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export type Token = typeof tokens.$inferSelect
export type NewToken = typeof tokens.$inferInsert

export const tokensRelations = relations(tokens, ({ one }) => ({
  user: one(users, {
    fields: [tokens.userId],
    references: [users.id],
  }),
}))
