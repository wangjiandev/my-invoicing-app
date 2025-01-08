import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">Invoicing App</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <Button variant="outline" asChild>
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </main>
  )
}
