import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Typography,
  IconButton,
  Button,

} from '@mui/material';
import theme from '../theme';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import CustomMenu from '../components/CustomMenu';
import ConnectWallet from './ConnectWallet';

function Header() {
  const [open, isOpen] = useState(false)

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 0px 0px',
          borderBottom: '1px solid #e5e5e5',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between', margin: '0 10em' }}>
          <Link href='/' sx={{ textDecoration: 'none' }}>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              sx={{ color: theme.palette.primary.main }}>
              <RiceBowlIcon />
              <Box
                sx={{
                  display: { md: 'inline', xs: 'none' },
                  paddingLeft: '.5em',
                }}>
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.primary.main,
                  }}>
                  Zaru Finance
                </Typography>
              </Box>
            </IconButton>
          </Link>
          <Box display={'inherit'}>
            {/* <Button variant='contained' sx={{ borderRadius: '10px' }}>
              Connect Wallet
            </Button> */}
            <ConnectWallet/>
            <CustomMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box margin={'0 1.5em'}>
          <Button href='/learn'>
            <Typography
              variant='h4'
              gutterBottom
              sx={{ color: theme.palette.grey[700], fontWeight: 'bold' }}>
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
          <Button href='/stake' variant='text'>
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
    </>
  );
}

export default Header;
