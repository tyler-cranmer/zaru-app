import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';


const POLLING_INTERVAL = 12000;
const RPC_URLS: { [chainId: number]: string } = {
  10: 'need to fill',
  420: 'https://opt-goerli.g.alchemy.com/v2/pCsL-C-dpHI7f-XuBOkzpDILvcjr84WN',
};
// export const walletconnect = new WalletConnectConnector({
//   rpc: { 1: RPC_URLS[1] },
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
// });

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'Coinbase',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001],
});
