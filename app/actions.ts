'use server'

import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { redirect } from 'next/navigation'

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(formData.get('value') as string) * 100)
  const description = formData.get('description') as string

  const [invoice] = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: 'OPEN',
    })
    .returning({
      id: Invoices.id,
    })

  redirect(`/invoices/${invoice.id}`)
}
