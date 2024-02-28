import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { useAtom } from 'jotai'
import { mutate } from 'swr'

import { postMessage } from '../lib/api'
import { userAtom } from '../store/store'

export function ChatInput() {
  const [user] = useAtom(userAtom)
  const [message, setMessage] = useState('')

  async function sendMessage() {
    const payload = {
      value: message,
      date: new Date().toISOString(),
      author: user.name,
    }

    const { error } = await postMessage(payload)

    if (error) return

    setMessage('')
    mutate('messages')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of the Enter key
      sendMessage();
    }
  }

  return (
    <div className="flex items-stretch gap-5 mt-6">
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        variant="bordered"
        className="text-lg"
      />
      <Button
        className="h-auto"
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  )
}