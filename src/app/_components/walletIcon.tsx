import { useWalletInfo } from '@reown/appkit/react'
import Image, { type ImageProps } from 'next/image'

type WalletIconProps = {
  alt?: string
} & Omit<ImageProps, 'src' | 'alt'>
export function WalletIcon({
  width = 20,
  height = 20,
  alt,
  ...otherProps
}: WalletIconProps) {
  const { walletInfo } = useWalletInfo()
  return (
    <>
      {walletInfo?.icon ? (
        <Image
          {...otherProps}
          src={walletInfo?.icon}
          alt={alt || 'wallet icon'}
          width={width}
          height={height}
        ></Image>
      ) : null}
    </>
  )
}
