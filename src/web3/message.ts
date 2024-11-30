import type { RpcError } from 'viem'

export type MessageError = RpcError | Error | any

export const blockchainErrorCodeList = {
  reject: 1, // 拒绝交易
  noFreeMint: 2, // 已经mint过
  inconsistentBindAddress: 3, // 绑定地址不一致
  insufficientBalance: 4, // 余额不足
  rejectSignature: 5, // 拒绝签名
  immutableUnbind: 6, // 未绑定immutable钱包
  disconnectWallet: 7, // 未连接钱包
}
const itemErrorText = 'itemError-'
export const inconsistentBindAddressErrorText = `${itemErrorText}绑定地址不一致`
export const connectWalletErrorText = `${itemErrorText}请连接钱包`
export const immutableUnbindErrorText = `${itemErrorText}未绑定immutable钱包`
export const insufficientBalanceErrorText = `${itemErrorText}余额不足`
export function getBlockchainErrorCode(error: MessageError) {
  if (error?.shortMessage === 'User rejected the request.') {
    if (error?.name === 'TransactionExecutionError') {
      return blockchainErrorCodeList.reject
    } else if (error?.name === 'UserRejectedRequestError') {
      return blockchainErrorCodeList.rejectSignature
    } else {
      return -1
    }
  } else if (error?.functionName === 'freeMint') {
    return blockchainErrorCodeList.noFreeMint
  } else if (
    error?.message === inconsistentBindAddressErrorText ||
    // immutable绑定地址和当前地址不一样就会出现
    error?.message?.includes(
      'personal_sign requires the signer to be the from address',
    )
  ) {
    return blockchainErrorCodeList.inconsistentBindAddress
  } else if (error?.message === connectWalletErrorText) {
    return blockchainErrorCodeList.disconnectWallet
  } else if (error?.message === insufficientBalanceErrorText) {
    return blockchainErrorCodeList.insufficientBalance
  } else if (error?.message === immutableUnbindErrorText) {
    return blockchainErrorCodeList.immutableUnbind
  } else {
    return -1
  }
}
export function getBlockchainErrorMessage(error: MessageError) {
  return error?.details || getShortMessage(error?.shortMessage) || 'failed'
}

export function getShortMessage(shortMessage: string) {
  if (!shortMessage) return ''
  try {
    return shortMessage.split('\n')[1]
  } catch {
    return shortMessage
  }
}

export function getBlockchainNeedErrorMessage(error: MessageError) {
  switch (getBlockchainErrorCode(error)) {
    case blockchainErrorCodeList.reject:
      return 'User denied transaction signature.'
    case blockchainErrorCodeList.inconsistentBindAddress:
      return 'Please connect to the bound wallet'
    case blockchainErrorCodeList.insufficientBalance:
      return 'Insufficient balance'
    case blockchainErrorCodeList.disconnectWallet:
      return 'Please connect the wallet'
    case blockchainErrorCodeList.rejectSignature:
      return 'User denied signature.'
    case blockchainErrorCodeList.immutableUnbind:
      return 'Unbind immutable wallet'
    default:
      return getBlockchainErrorMessage(error)
  }
}
