import { z } from 'zod'
import { db } from '~~/server/db'
import { orders as ordersTable, type OrderDbCreate } from '~~/server/db/schema'
import { authRepo } from '~~/server/repos/auth'

const purchaseSchema = z.object({
  orders: z.array(z.object({
    serviceId: z.number(),
    count: z.number(),
  })),
})

export default defineEventHandler(async (event) => {
  const { userId } = await authRepo.assertAuthenticated(event)
  const body = await readValidatedBody(event, purchaseSchema.parse)

  const orders: OrderDbCreate[] = body.orders.map(o => ({
    ...o,
    userId,
  }))

  await db.insert(ordersTable).values(orders)
})
