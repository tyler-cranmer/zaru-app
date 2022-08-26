import React from 'react';
import type { NextPage } from 'next';

import { Container, Typography, Box, Stack, Button } from '@mui/material';
import theme from '../src/theme';

const Learn: NextPage = () => {
  return (
    <>

      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box sx={{ pb: '1em', mb: '1em' }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              fontSize: '88px',
              lineHeight: '119px',
            }}>
            What is OPI?
          </Typography>
        </Box>
        <Stack
          direction='row'
          justifyContent='flex-start'
          spacing={2}>
          <Box
            flex={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'baseline',
            }}>
            <Typography variant='body1' sx={{ mb: '1em', pb: '1em' }}>
              The Optimism ExosystemIndex (OPI) fives yourr exposure to cutting
              edge applications on one of Ethereum's most primising L2s.
            </Typography>
            <Typography variant='body1' sx={{ mb: '1em', pb: '1em' }}>
              Buy OPI in 1-click and never worry about keeping pace with the
              innovations
            </Typography>

            <Button
              fullWidth
              variant='contained'
              sx={{ borderRadius: '10px', mb: '1em' }}>
              Buy OPI on TokenSets
            </Button>
            <Button fullWidth variant='contained' sx={{ borderRadius: '10px' }}>
              Stake OPI
            </Button>
          </Box>
          <Box
            flex={1}
            sx={{
              height: '380px',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              alignItems: 'center',
                justifyContent: 'center',
              borderRadius: '10px'
            }}>
            Graph Visualization
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Learn;
