import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Container from '@/components/Container'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="">
      <Container>
        <div className="flex h-24 items-center justify-between gap-4 border-b border-gray-200">
          <p className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
            <Link href="/dashboard">Invoicing App</Link>
          </p>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
