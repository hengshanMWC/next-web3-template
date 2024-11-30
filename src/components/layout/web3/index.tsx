'use client'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { QueryClient } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import {
  type Config,
  WagmiProvider,
  cookieToInitialState,
  deserialize,
  serialize,
} from 'wagmi'
import { wagmiAdapter } from '@/web3/config'
import { envConfig } from '@/configs/envConfig'
import { networks } from '@/web3/networks'

// Set up queryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

// 3. Set up the persister.
const persister = createAsyncStoragePersister({
  serialize,
  storage: AsyncStorage,
  deserialize,
})

// Set up metadata
const metadata = {
  name: 'web3 next template',
  description: 'web3 next template',
  url: envConfig.websiteUrl, // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}
export type TCreateAppKitOptions = Parameters<typeof createAppKit>[0]
export type TNetworks = TCreateAppKitOptions['networks']
// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: envConfig.web3ProjectId,
  networks,
  defaultNetwork: mainnet,
  metadata,
  features: {
    email: false, // default to true
    socials: [],
    analytics: true,
    swaps: false, // Optional - true by default
    onramp: false, // Optional - true by default
  },
})

function Web3Provider({
  children,
  cookies,
}: {
  children: ReactNode
  cookies: string | null
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies,
  )
  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {children}
      </PersistQueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
