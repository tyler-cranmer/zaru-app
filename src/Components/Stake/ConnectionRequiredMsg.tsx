import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Button,
  Typography,
  styled,
} from '@mui/material';
import { CustomTextField } from '../minorComponents/CustomTextField';
import theme from '../../theme';

const StyledFields = styled(Box)({
  backgroundColor: '#F3F8FC',
  display: 'flex',
  flexDirection: 'column',
  width: '11em',
  borderRadius: '10px',
  marginRight: '1em',
  padding: '8px 12px 8px 12px',
});

export const ConnectionRequiredMsg = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '20px',
        }}>
        <Box pl='3em' pr='1.5em'>
          <CardContent>
            <Typography
              variant='h5'
              component='h1'
              color='text.primary'
              pt='.5em'
              gutterBottom>
              Stake Your $OPI to Earn $RU
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <Box
              sx={{
                display: 'flex',
                marginBottom: '1.5em',
                paddingBottom: '1em',
                marginRight: '.5em',
              }}>
              <StyledFields sx={{ marginLeft: '8px' }}>
                <Box sx={{ display: 'flex' }}></Box>
                <Typography variant='caption'> Staked OPI</Typography>

                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                  0
                </Typography>
              </StyledFields>
              <StyledFields>
                <Typography variant='caption'>RU Earned</Typography>

                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                  0
                </Typography>
              </StyledFields>
              <Box />
              <Button
                disabled
                variant='contained'
                sx={{
                  borderRadius: '10px',
                  paddingLeft: '2em',
                  paddingRight: '2em',
                  margin: '1px',
                }}>
                Unstake
              </Button>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box>
                <CustomTextField
                  label='Stake OPI Tokens'
                  id='reddit-input'
                  variant='filled'
                  type={'number'}
                  InputProps={{
                    inputProps: { min: 0, max: 0 },
                    disableUnderline: true,
                  }}
                  defaultValue='0'
                />
              </Box>

              <Button
                disabled
                type='submit'
                variant='contained'
                fullWidth
                sx={{
                  borderRadius: '10px',

                  paddingLeft: '2.75em',
                  paddingRight: '2.75em',
                  margin: '1px',
                }}>
                Stake
              </Button>
            </Box>
            <Box sx={{ marginBottom: '2em', paddingTop: '.5em' }}>
              <Typography variant='caption'>OPI Tokens in Wallet:</Typography>

              <Typography
                variant='caption'
                sx={{ fontWeight: 'bold' }}
                gutterBottom>
                0
              </Typography>
            </Box>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
