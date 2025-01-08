import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const InvoiceStatusEnum = pgEnum('invoice_status', ['OPEN', 'PAID', 'VOID', 'UNCOLLECTIBLE'])

export const Invoices = pgTable('invoices', {
  id: serial('id').primaryKey().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  value: integer('value').notNull(),
  description: text('description').notNull(),
  status: InvoiceStatusEnum('status').default('OPEN').notNull(),
})
