import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Button,
  Typography,
  TextField,
  styled,
  TextFieldProps,
  OutlinedInputProps,
} from '@mui/material';
import theme from '../theme';
import { useStakeTokens } from '../hooks';
import { utils } from "ethers";

const StyledFields = styled(Box)({
  backgroundColor: '#F3F8FC',
  display: 'flex',
  flexDirection: 'column',
  width: '11em',
  borderRadius: '10px',
  marginRight: '1em',
  padding: '8px 12px 8px 12px',
});

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  label: {
    color: theme.palette.primary.main,
  },
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderColor: 'red',
    borderRadius: 10,
    border: '1px solid transparent',
    backgroundColor: 'white',
    color: 'gray',
    fontWeight: 'bold',
    width: '23em',
    marginRight: '1em',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'white',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
      borderColor: 'transparent',
      color: 'black',
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
  },
}));

export default function StakingCard() {

  const [stake, setStake] = useState('');
  const [stakeError, setStakeError] = useState(false);
   const [stakeAmount, setStakeAmount] = useState<
     number | string | Array<number | string>
     >(0);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStakeError(false);

    if (stake == '') {
      setStakeError(true);
    }

    if (stake) {
      console.log(stake);
    }
  };

  const stakeTokenAddress: string =
    '0x068F465A140131f6996Bbc5c5B7435A1a52c7DA2'; //NEED TO CHANGE FROM HARD CODEING
  const { stakeTokens, stakeTokensState } = useStakeTokens(stakeTokenAddress);

  const handleStakeSubmit = () => {
    const amountAsWei = utils.parseEther(stakeAmount.toString());
    return stakeTokens(amountAsWei.toString())
  }

  return (
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
            }}>
            <StyledFields>
              <Typography variant='caption'> Staked OPI</Typography>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                420.69
              </Typography>
            </StyledFields>
            <StyledFields>
              <Typography variant='caption'>RU Earned</Typography>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                420.69
              </Typography>
            </StyledFields>
            <Button
              variant='contained'
              sx={{
                borderRadius: '10px',
                paddingLeft: '2em',
                paddingRight: '2em',
                margin: '2px',
              }}>
              Unstake
            </Button>
          </Box>

          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <CustomTextField
                  onChange={(e) => setStake(e.target.value)}
                  label='Stake OPI Tokens'
                  defaultValue='0.0'
                  id='reddit-input'
                  variant='filled'
                  error={stakeError}
                />
              </Box>

              <Button
                // onClick={() => console.log('you clicked me')}
                onClick={handleStakeSubmit}
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
          </form>
          <Box sx={{ marginBottom: '2em', paddingTop: '.5em' }}>
            <Typography variant='caption'>OPI Tokens in Wallet:</Typography>
            <Typography
              variant='caption'
              sx={{ fontWeight: 'bold' }}
              gutterBottom>
              {' '}
              3,944.16
            </Typography>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
