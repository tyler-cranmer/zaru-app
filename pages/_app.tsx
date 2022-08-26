import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/layouts/Layout';

import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config,  ChainId, Optimism, OptimismGoerli, Localhost, Hardhat } from '@usedapp/core';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


const config: Config = {
  readOnlyUrls: {
    [ChainId.Optimism]: 'Alchemy RPC',
    [ChainId.Hardhat]: 'http://localhost:8545',
    [ChainId.Localhost]: 'http://localhost:8545',
  },
  networks: [
    Localhost,
    Hardhat,
    OptimismGoerli,
    Optimism

  ],
  autoConnect: true,

};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <DAppProvider config={config}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </DAppProvider>
  );
}
