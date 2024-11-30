import type { Metadata } from 'next'
import './globals.css'
import { headers } from 'next/headers'
import UILayout from '@/components/layout/ui'
import Web3Provider from '@/components/layout/web3'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'web3 next template',
  description: 'web3 next template',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookies = (await headers()).get('cookie')
  return (
    <html lang="en">
      <body>
        <UILayout>
          <Web3Provider cookies={cookies}>{children}</Web3Provider>
        </UILayout>
        <Analytics></Analytics>
      </body>
    </html>
  )
}
