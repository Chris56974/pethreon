/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Playground } from "../Playground";

export class Playground__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Playground> {
    return super.deploy(overrides || {}) as Promise<Playground>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Playground {
    return super.attach(address) as Playground;
  }
  connect(signer: Signer): Playground__factory {
    return super.connect(signer) as Playground__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Playground {
    return new Contract(address, _abi, signerOrProvider) as Playground;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendMoney",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101d1806100606000396000f3fe60806040526004361061002d5760003560e01c80636f9fb98a14610039578063ee4ae2c91461006457610034565b3661003457005b600080fd5b34801561004557600080fd5b5061004e6100b2565b6040518082815260200191505060405180910390f35b6100b06004803603604081101561007a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100ba565b005b600047905090565b60008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d806000811461011a576040519150601f19603f3d011682016040523d82523d6000602084013e61011f565b606091505b5050905080610196576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f696e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b50505056fea26469706673582212208d1db0887973b01b175d4953570acde58b2a423a373fce6300672f37e3afe06e64736f6c63430007060033";