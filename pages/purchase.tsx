import type { NextPage } from 'next';
import { useEthers } from '@usedapp/core';
import { Container, Typography, Box } from '@mui/material';
import { PurchaseCard } from '../src/Components/tokens/PurchaseCard';


const Purchase: NextPage = () => {
  const { account } = useEthers();
  const isConnected = account !== undefined;

    return (
      <>
        <Container maxWidth='lg' sx={{ height: '100vh' }}>
          <Box sx={{ maxWidth: 450, display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '5em'}}>
            <PurchaseCard />
          </Box>
        </Container>
      </>
    );
};

export default Purchase;
