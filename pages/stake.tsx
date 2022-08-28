import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Stack } from '@mui/material';
import StakingCard from '../src/components/StakingCard';
import theme from '../src/theme';



const Stake: NextPage = () => {


  return (
    <>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StakingCard />
        <Stack
          mt={2}
          direction='column'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={2}>
          <Box display={'flex'}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              Currently Earning:
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                marginLeft: '8px',
                color: theme.palette.primary.main,
                textShadow: '1px 1px rgba(0, 0, 0, 0.25)',
              }}>
              420% APR
            </Typography>
          </Box>
          <Box display={'flex'}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
              Total Value Locked:
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                marginLeft: '8px',
                textShadow: '1px 1px rgba(0, 0, 0, 0.25)',
              }}>
              $12.3 Million
            </Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Stake;
