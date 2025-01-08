import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { Badge } from '@/components/ui/badge'
import { eq } from 'drizzle-orm'
import { cn } from '@/lib/utils'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { invoiceId: string } }) {
  const invoiceId = parseInt(params.invoiceId)
  if (isNaN(invoiceId)) {
    throw new Error('Invalid invoice ID')
  }

  const [result] = await db.select().from(Invoices).where(eq(Invoices.id, invoiceId)).limit(1)

  if (!result) {
    notFound()
  }

  return (
    <main className="mx-auto my-8 h-full max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          Invoice # {invoiceId}
          <Badge
            className={cn(
              'rounded-full capitalize',
              result.status === 'OPEN' && 'bg-green-500',
              result.status === 'PAID' && 'bg-blue-500',
              result.status === 'VOID' && 'bg-red-500',
              result.status === 'UNCOLLECTIBLE' && 'bg-gray-500',
            )}>
            {result.status}
          </Badge>
        </h1>
        <p></p>
      </div>
      <p className="mb-3 text-3xl">${(result.value / 100).toFixed(2)}</p>
      <p className="mb-8 text-lg">{result.description}</p>
      <h2 className="mb-4 text-lg font-bold">Billing Details</h2>
      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">Invoice ID</strong>
          <span>{invoiceId}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">Invoice Date</strong>
          <span>{new Date(result.createdAt).toLocaleDateString()}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">Billing Name</strong>
          <span></span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">Billing Email</strong>
          <span></span>
        </li>
      </ul>
    </main>
  )
}
