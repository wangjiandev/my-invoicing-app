import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PlusCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { cn } from '@/lib/utils'
import Container from '@/components/Container'

export default async function Page() {
  const results = await db.select().from(Invoices)
  return (
    <main className="h-full">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Invoices</h1>
          <div>
            <Button variant="ghost" className="inline-flex items-center gap-2" asChild>
              <Link href="/invoices/new">
                <PlusCircleIcon className="h-4 w-4" />
                Create Invoice
              </Link>
            </Button>
          </div>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px] p-4">Date</TableHead>
              <TableHead className="p-4">Customer</TableHead>
              <TableHead className="p-4">Email</TableHead>
              <TableHead className="p-4 text-center">Status</TableHead>
              <TableHead className="p-4 text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => {
              return (
                <TableRow key={result.id}>
                  <TableCell className="p-0 text-left font-medium">
                    <Link href={`/invoices/${result.id}`} className="block p-4 font-semibold">
                      {new Date(result.createdAt).toLocaleDateString()}
                    </Link>
                  </TableCell>
                  <TableCell className="p-0 text-left">
                    <Link href={`/invoices/${result.id}`} className="block p-4 font-semibold">
                      John Doe
                    </Link>
                  </TableCell>
                  <TableCell className="p-0 text-left">
                    <Link href={`/invoices/${result.id}`} className="block p-4">
                      john.doe@example.com
                    </Link>
                  </TableCell>
                  <TableCell className="p-0 text-center">
                    <Link href={`/invoices/${result.id}`} className="block p-4">
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
                    </Link>
                  </TableCell>
                  <TableCell className="p-0 text-right">
                    <Link href={`/invoices/${result.id}`} className="block p-4 font-semibold">
                      ${(result.value / 100).toFixed(2)}
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Container>
    </main>
  )
}
