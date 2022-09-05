import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Stack, IconButton, Button } from '@mui/material';
import { StakingCard } from '../src/Components/Stake/StakingCard';
import { ConnectionRequiredMsg } from '../src/Components/Stake/ConnectionRequiredMsg';
import theme from '../src/theme';
import { useEthers } from '@usedapp/core'
const Home: NextPage = () => {
    const { account } = useEthers();
    const isConnected = account !== undefined;
  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box mb={2} pr={2}>
            <IconButton
              href='/learn'
              disableRipple={true}
              disableFocusRipple={true}>
              <Typography
                variant='h4'
                sx={{ color: theme.palette.grey[700], fontWeight: 'bold' }}>
                LEARN
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              background: 'black',
              height: '3.5em',
              width: '2px',
              marginBottom: '0.70em',
            }}
          />
          <Box mb={2} pl={2}>
            <IconButton
              href='/'
              disableRipple={true}
              disableFocusRipple={true}>
              <Typography
                variant='h4'
                component='h1'
                sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                STAKE
              </Typography>
            </IconButton>
          </Box>
        </Box>
        {isConnected ? <StakingCard /> : <ConnectionRequiredMsg />}

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

export default Home;
