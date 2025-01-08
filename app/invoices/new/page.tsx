import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { db } from '@/db'
import { sql } from 'drizzle-orm'

export default async function Page() {
  const currentDatabase = await db.execute(sql`SELECT current_database()`)
  console.log(currentDatabase)
  return (
    <main className="mx-auto my-8 flex h-full max-w-5xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>
      <form className="grid max-w-xs gap-4">
        <div>
          <Label htmlFor="name" className="mb-2 block font-semibold">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block font-semibold">
            Billing Email
          </Label>
          <Input id="email" name="email" type="text" />
        </div>
        <div>
          <Label htmlFor="value" className="mb-2 block font-semibold">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 block font-semibold">
            Description
          </Label>
          <Textarea name="description" id="description" />
        </div>
        <div>
          <Button className="w-full" type="submit">
            Create Invoice
          </Button>
        </div>
      </form>
    </main>
  )
}
