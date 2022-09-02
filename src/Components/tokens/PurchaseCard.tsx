import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActionArea,
  TextField,
  Box,
  IconButton,
  Button,
  Chip,
  InputAdornment,
} from '@mui/material';
import theme from '../../theme';
import { CustomChip } from './CustomChip';
import { IoSwapVertical } from 'react-icons/io5';


export const PurchaseCard = () => {
  return (
    <>
      <Card
        sx={{ maxWidth: 400, backgroundColor: theme.palette.secondary.main }}>
        <Box>
          <CardHeader title='Swap' />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>From:</Typography>
              <TextField
              // InputProps={{
              //   endAdornment: (

              //   ),
              // }}
              />
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
              <TextField></TextField>
              <Typography variant='caption'>Balance: </Typography>
            </Box>
            <Box>
              <Button variant='contained' fullWidth>
                Connect Wallet
              </Button>
            </Box>
          </CardContent>
          <CustomChip
            alt='eth'
            src='/images/ethereum-eth-logo.png'
            width={16}
            height={16}
            name='ETH'
          />
        </Box>
      </Card>
    </>
  );
};
