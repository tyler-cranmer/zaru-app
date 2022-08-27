import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';


const Home: NextPage = () => {
  const {  account  } = useEthers()
  const Rutoken: string = '0x3d4DF72c7C70dfD127f5470ED7350fBd7bF63f7B';
  const testToken: string = '0x068F465A140131f6996Bbc5c5B7435A1a52c7DA2';
  const ruTokenBalance = useTokenBalance(Rutoken, account)
  const testTokenBalance = useTokenBalance(testToken, account)
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
          {ruTokenBalance && (
            <p>Ru token balance: {formatEther(ruTokenBalance)} RU </p>
          )}
          {testTokenBalance && (
            <p>Test token balance: {formatEther(testTokenBalance)} ttone </p>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
