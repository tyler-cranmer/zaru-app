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
import { IoSwapVertical } from 'react-icons/io5';
import SwapInputField from '../minorComponents/SwapInputField';
import CustomTextField from '../minorComponents/CustomTextField';
import TokenSelectButton from '../minorComponents/TokenSelectButton';


export const PurchaseCard = (): JSX.Element => {
  return (
    <>
      <Card
        sx={{ maxWidth: 400, backgroundColor: theme.palette.secondary.main }}>
        <Box>
          <CardHeader title='Trade' />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>From:</Typography>
              <SwapInputField />
              <Typography variant='caption'>Balance: </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <IconButton aria-label='swap' size='small'>
                <IoSwapVertical size={32} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>To:</Typography>
              <SwapInputField />
              <Typography variant='caption'>Balance: </Typography>
            </Box>
            <Box>
              <Button variant='contained' fullWidth>
                Connect Wallet
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
