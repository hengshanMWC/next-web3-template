'use client'

import { Button } from '@mui/material'
import { useAppKit } from '@reown/appkit/react'
import { WalletIcon } from './_components/walletIcon'
import { useWalletMiddleEllipsis } from './_hooks/useWalletMiddleEllipsis'

export default function Page() {
  const { open } = useAppKit()
  const { walletMiddleEllipsis } = useWalletMiddleEllipsis()

  function handleConnectWallet() {
    open()
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Button
        variant="outlined"
        onClick={handleConnectWallet}
        className="normal-case!"
      >
        <WalletIcon className="mr-1"></WalletIcon>
        {walletMiddleEllipsis}
      </Button>
    </div>
  )
}
