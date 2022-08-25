import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import Header from '../src/Components/Header';
import StakingCard from '../src/Components/StakingCard';
import theme from '../src/theme';



const Staking: NextPage = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box margin={'0 1.5em'}>
            <Button>
              <Typography
                variant='h4'
                gutterBottom
                sx={{ color: 'gray', fontWeight: 'bold' }}>
                LEARN
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              background: 'black',
              height: '3.5em',
              width: '2px',
              marginBottom: '0.70em',
            }}
          />
          <Box margin={'0 1.5em'}>
            <Button variant='text'>
              <Typography
                variant='h4'
                component='h1'
                gutterBottom
                sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                STAKE
              </Typography>
            </Button>
          </Box>
        </Box>
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

export default Staking;
