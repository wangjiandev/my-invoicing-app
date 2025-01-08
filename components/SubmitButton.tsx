'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button className="w-full">
      <span className={pending ? 'text-transparent' : ''}>Submit</span>
      {pending && (
        <span className="absolute flex h-full w-full items-center justify-center text-gray-400">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  )
}

export default SubmitButton
