export const CHAIN_NODE =
  process.env.CHAIN_NODE || 'wss://rpc.exosama.com'

export const CONTRACT_API_BATCH_SIZE = 100
export const IPFS_API_BATCH_SIZE = 100
export const FACTORY_ADDRESS =
  process.env.FACTORY_ADDRESS ||
  '0x76d156A8DaAF31a4E9Ded9a0DB975943898af2b3'.toLowerCase()
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const TOKEN_RELATIONS = {
  metadata: true,
  contract: true,
  owner: true,
}
