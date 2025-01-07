import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-6">
      <h1 className="text-5xl font-bold">Invoicing App</h1>

      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  )
}
