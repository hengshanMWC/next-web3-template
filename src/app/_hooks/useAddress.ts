import { useAppKitAccount } from '@reown/appkit/react'
import { useMemo } from 'react'
import { baseAddress } from '@/web3/utils'
import type { Address } from 'viem'

function useAddress(address?: Address) {
  const data = useAppKitAccount()
  const accountAddress = useMemo(
    () => baseAddress(address || data.address),
    [address, data.address],
  )
  return {
    address: accountAddress,
  }
}

export { useAddress }
