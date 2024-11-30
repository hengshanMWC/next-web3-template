import type { Storage } from 'wagmi'
import { cookieStorage, createStorage } from 'wagmi'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { envConfig } from '@/configs/envConfig'
import { networks } from './networks'

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: <Storage>createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: envConfig.web3ProjectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
