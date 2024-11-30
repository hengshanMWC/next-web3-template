import { WalletIcon } from '@/app/_components/connect/walletIcon'
import { useWalletMiddleEllipsis } from '@/hooks/useWalletMiddleEllipsis'
import { Button, Menu, MenuItem } from '@mui/material'
import { useAppKit } from '@reown/appkit/react'
import { useDebounceFn, useResetState } from 'ahooks'
import { useMemo, useRef } from 'react'

export function Info() {
  const { open } = useAppKit()
  const { walletMiddleEllipsis, address } = useWalletMiddleEllipsis()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [anchorEl, setAnchorEl, resetAnchorEl] =
    useResetState<HTMLButtonElement | null>(null)
  const show = useMemo(() => Boolean(anchorEl), [anchorEl])
  // TODO 组件限制，暂时不实现hover
  const { run, cancel } = useDebounceFn(resetAnchorEl, {
    wait: 200,
  })
  const handleMouseEnter = () => {
    cancel()
    setAnchorEl(buttonRef.current)
  }

  function handleConnectWallet() {
    resetAnchorEl()
    open()
  }
  function goToAddressEthereum() {
    resetAnchorEl()
    window.open(`https://etherscan.io/address/${address}`)
  }
  return (
    <div>
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={run}
        variant="outlined"
        id="header-info-button"
        aria-controls={show ? 'header-info-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={show ? 'true' : undefined}
        className="normal-case!"
      >
        {walletMiddleEllipsis}
        <WalletIcon className="ml1"></WalletIcon>
      </Button>
      <Menu
        id="header-info-menu"
        sx={{ pointerEvents: 'none' }}
        anchorEl={anchorEl}
        open={show}
        MenuListProps={{
          'aria-labelledby': 'header-info-button',
        }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={run}
          className="pointer-events-auto"
        >
          <MenuItem onClick={handleConnectWallet}>
            {address ? 'Wallet' : 'Connect'}
          </MenuItem>
          {address ? (
            <MenuItem onClick={goToAddressEthereum}>View On Ethereum</MenuItem>
          ) : null}
        </div>
      </Menu>
    </div>
  )
}
