import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';




const Home: NextPage = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const Rutoken: string = '0x3d4DF72c7C70dfD127f5470ED7350fBd7bF63f7B';
  const gEthBlance = useTokenBalance(Rutoken, account)

 
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h4' component='h1' gutterBottom>
          useDapp tutorial page
        </Typography>
        <Box>


          {account && <p>Account: {account}</p>}
          {gEthBlance && <p>Ether balance: {formatEther(gEthBlance)} ETH </p>}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
