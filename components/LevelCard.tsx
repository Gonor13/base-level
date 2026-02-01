'use client'

import MintButton from './MintButton'

export default function LevelCard({ address }: { address: `0x${string}` }) {
  return (
    <div className="mt-6 p-6 border rounded-xl max-w-md">
      <p className="mb-4 break-all">
        Connected wallet: <b>{address}</b>
      </p>

      <MintButton />
    </div>
  )
}
