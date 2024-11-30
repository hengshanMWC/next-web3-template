'use client'
import { Item } from '@/components/item'
import { Info } from './info'
import Image from 'next/image'
import logoImg from '@/assets/logo.webp'

export function Header() {
  return (
    <header>
      <Item className="h-78px">
        <div className="h-100% flex items-center justify-between">
          <Image src={logoImg} width={259} height={58.4} alt="logo"></Image>
          <Info></Info>
        </div>
      </Item>
    </header>
  )
}
