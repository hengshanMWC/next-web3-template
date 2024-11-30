import type {
  Address,
  PublicClient,
  WaitForTransactionReceiptParameters,
} from 'viem'
import { getAddress } from 'viem'
import { inconsistentBindAddressErrorText } from './message'

export function bindAddressExist(bindAddress: Address, addresses: Address[]) {
  const _bindAddress = getAddress(bindAddress)
  const account = addresses.find(
    account => getAddress(account) === _bindAddress,
  )
  if (!account) {
    throw new Error(inconsistentBindAddressErrorText)
  }
}

export function baseAddress(address?: Address | string) {
  return address !== undefined ? getAddress(ensure0xPrefix(address)) : address
}

export async function waitForTransactionReceipt(
  publicClient: PublicClient,
  params: WaitForTransactionReceiptParameters,
) {
  const transaction = await publicClient.waitForTransactionReceipt(params)
  console.log('waitForTransactionReceipt', transaction)
  if (transaction.status === 'success') {
    return transaction
  } else {
    throw transaction
  }
}

export function ensure0xPrefix(input: string): Address {
  // 判断字符串是否以 "0x" 开头
  if (!input.startsWith('0x')) {
    // 如果没有，添加 "0x" 前缀
    return `0x${input}`
  }
  // 如果已经以 "0x" 开头，直接返回原字符串
  return input as Address
}

export function handleHasAddress(address?: string) {
  if (!address) return false
  try {
    getAddress(address)
    return true
  } catch {
    return false
  }
}
