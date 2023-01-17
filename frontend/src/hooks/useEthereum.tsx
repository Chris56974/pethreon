import { useState, useEffect } from 'react'

export interface EthereumWindow extends Window {
  ethereum?: Ethereum
}

type Ethereum = any

/** 
 * Currently only compatible with metamask wallets
 * I should use this https://docs.walletconnect.com/2.0/
 */
export function useEthereum() {
  const [ethereum, setEthereum] = useState<Ethereum | null>(null)

  useEffect(() => {
    if ((window as EthereumWindow).ethereum) setEthereum((window as EthereumWindow).ethereum)
  }, [])

  return ethereum
}