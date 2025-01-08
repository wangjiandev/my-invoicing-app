import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PlusCircleIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="mx-auto my-8 flex h-full max-w-5xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Invoices</h1>
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
          <TableRow>
            <TableCell className="p-4 text-left font-medium">
              <span className="font-semibold">2025-01-07</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-semibold">John Doe</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="">john.doe@example.com</span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="p-4 text-right">
              <span className="font-semibold">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
