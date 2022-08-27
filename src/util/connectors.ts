import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { ChainId } from '@usedapp/core';

const NETWORK_CONNECTIONS = {
  [ChainId.OptimismGoerli]:
    'https://opt-goerli.g.alchemy.com/v2/pCsL-C-dpHI7f-XuBOkzpDILvcjr84WN',
  // [ChainId.Optimism]:
  //   'https://opt-mainnet.g.alchemy.com/v2/WuZmaEQbN8Rhk-q74-A-MdUQzc605Btc',
  // [ChainId.Localhost]: 'http://127.0.0.1:8545',
};
const RPC_URLS: { [chainId: number]: string } = {
  10: 'need to fill',
  420: 'https://opt-goerli.g.alchemy.com/v2/pCsL-C-dpHI7f-XuBOkzpDILvcjr84WN',
};

export const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_CONNECTIONS,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[420],
  appName: 'Coinbase',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001],
});
