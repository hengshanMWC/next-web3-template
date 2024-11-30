import { useMemo } from 'react'
import { useAddress } from './useAddress'
import { middleEllipsis } from '@/utils'

export function useWalletMiddleEllipsis() {
  const { address } = useAddress()
  const walletMiddleEllipsis = useMemo(() => {
    return address ? middleEllipsis(address) : 'Connect Wallet'
  }, [address])
  return {
    address,
    walletMiddleEllipsis,
  }
}
