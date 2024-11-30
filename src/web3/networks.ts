import type { TNetworks } from '@/components/layout/web3'
import type { AppKitNetwork } from '@reown/appkit/networks'
import {
  arbitrum,
  arbitrumSepolia,
  base,
  mainnet,
  polygon,
  scroll,
  sepolia,
  solana,
} from '@reown/appkit/networks'

export const networks: TNetworks = [
  mainnet,
  solana,
  arbitrum,
  base,
  scroll,
  polygon,
  arbitrumSepolia,
  sepolia,
]

export function idToNetwork(id: AppKitNetwork['id']) {
  return networks.find(network => Number(network.id) === Number(id))
}
