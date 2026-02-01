'use client'

import { useWriteContract } from 'wagmi'
import { abi } from '../lib/abi'

const CONTRACT = '0xa61878Cd14f87F22623A44Cf54D8F2F0a0E6c11a'

type Props = {
  level: number
}

export default function MintButton({ level }: Props) {
  const { writeContract, isPending } = useWriteContract()

  return (
    <button
      onClick={() =>
        writeContract({
          address: CONTRACT,
          abi,
          functionName: 'mint',
        })
      }
      className='w-full py-3 rounded-xl bg-blue-500 mt-4'
    >
      {isPending ? 'Minting...' : 'Mint Level ' + level}
    </button>
  )
}
