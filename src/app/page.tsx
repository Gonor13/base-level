'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import LevelCard from '../components/LevelCard'

export default function Page() {
  const { address, isConnected } = useAccount()

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4'>
      <h1 className='text-3xl font-bold mb-6'>Base Level</h1>
      <ConnectButton />
      {isConnected && address && <LevelCard address={address} />}
    </main>
  )
}
