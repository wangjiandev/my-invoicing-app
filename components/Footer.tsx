import Container from '@/components/Container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pb-8 pt-6">
      <Container>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Invoicing App</p>
        <p className="text-center text-sm">
          Created by Wangjian with <Link href="https://nextjs.org">Next.js</Link> and{' '}
          <Link href="https://clerk.com">Clerk</Link>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
