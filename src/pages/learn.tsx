import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
import theme from '../theme';

const line: string = "The Optimism ExosystemIndex (OPI) fives yourr exposure to cutting edge applications on one of Ethereum's most primising L2s."
const Learn: NextPage = () => {
  return (
    <>
      <Container
        maxWidth='md'
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
            <Button href='/learn'>
              <Typography
                variant='h4'
                sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
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
          <Box mb={2} pl={2}>
            <Button href='/stake' variant='text'>
              <Typography
                variant='h4'
                component='h1'
                sx={{ color: theme.palette.grey[700], fontWeight: 'bold' }}>
                STAKE
              </Typography>
            </Button>
          </Box>
        </Box>
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
        <Stack direction='row' justifyContent='flex-start' spacing={2}>
          <Box
            flex={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'baseline',
            }}>
            <Typography variant='body1' sx={{ mb: '1em', pb: '1em' }}>
            {line}
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
              borderRadius: '10px',
            }}>
            Graph Visualization
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Learn;
