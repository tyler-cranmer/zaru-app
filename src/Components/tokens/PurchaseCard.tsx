import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import theme from '../../theme';
import SwapInputField from '../minorComponents/SwapInputField';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export const PurchaseCard = (): JSX.Element => {
  return (
    <>
      <Card
        sx={{
          width: '100%',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '10px',
        }}>
        <Box>
          <CardHeader title='Trade' sx={{ paddingBottom: '0' }} />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>From:</Typography>
              <SwapInputField tokenName='ETH' />
              <Typography variant='caption' mt={1}>
                Balance:
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}>
              <Box
                sx={{
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  border: '.5px solid',
                  marginTop: '5%',
                  marginBottom: '5%',
                  borderColor: 'black',
                }}
              />
              <IconButton aria-label='swap' size='small'>
                <SwapVertIcon fontSize='medium' sx={{ color: 'black' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>To:</Typography>
              <SwapInputField tokenName='OPI'/>
              <Typography variant='caption' mt={1}>
                Balance:
              </Typography>
            </Box>
            <Box mt={2}>
              <Button variant='contained' fullWidth size='large'>
                Connect Wallet
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
