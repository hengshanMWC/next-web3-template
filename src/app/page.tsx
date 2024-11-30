'use client'

import { Button } from '@mui/material'
import { useAppKit } from '@reown/appkit/react'
import { WalletIcon } from './_components/walletIcon'
import { useWalletMiddleEllipsis } from './_hooks/useWalletMiddleEllipsis'
import { useBalance } from 'wagmi'

export default function Page() {
  const { open } = useAppKit()
  const { walletMiddleEllipsis, address } = useWalletMiddleEllipsis()
  const { data: balance } = useBalance({
    address,
  })
  function handleConnectWallet() {
    open()
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div>
        <Button
          variant="outlined"
          onClick={handleConnectWallet}
          className="normal-case!"
        >
          <WalletIcon className="mr-1"></WalletIcon>
          {walletMiddleEllipsis}
        </Button>
        {balance ? <div className="mt-2">balance: {balance.value}</div> : null}
      </div>
    </div>
  )
}
