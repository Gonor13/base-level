'use client'

import { useState } from 'react'

export default function MintButton() {
  const [isPending, setIsPending] = useState(false)

  return (
    <button
      onClick={() => setIsPending(true)}
      disabled={isPending}
      className="w-full py-3 rounded-xl bg-blue-500 text-white mt-4 disabled:opacity-50"
    >
      {isPending ? 'Minting...' : 'Mint Level'}
    </button>
  )
}
