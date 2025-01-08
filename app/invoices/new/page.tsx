'use client'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { createAction } from '@/app/actions'
import { SyntheticEvent, useState } from 'react'
import Form from 'next/form'
import SubmitButton from '@/components/SubmitButton'
import Container from '@/components/Container'

export default function Page() {
  const [status, setStatus] = useState('ready')

  async function submitHandler(event: SyntheticEvent) {
    if (status === 'pending') {
      event.preventDefault()
      return
    }
    setStatus('pending')
  }

  return (
    <main className="h-full">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create Invoice</h1>
        </div>
        <Form action={createAction} onSubmit={submitHandler} className="grid max-w-xs gap-4">
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
            <SubmitButton />
          </div>
        </Form>
      </Container>
    </main>
  )
}
