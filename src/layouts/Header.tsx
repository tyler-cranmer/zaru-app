import React, { useState, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Alert,
  SvgIcon
} from '@mui/material';
import theme from '../theme';
import { ConnectWallet } from '../components';
import { useEthers, useNotifications } from '@usedapp/core';
import Image from 'next/image';


// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

function Header() {

  const { account, deactivate } = useEthers();
  const isConnected = account !== undefined;


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleDeactivate = () => {
    deactivate();
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 0px 0px',
          borderBottom: '1px solid #e5e5e5',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <Link href='/' sx={{ textDecoration: 'none' }}>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              disableRipple
              sx={{ color: theme.palette.primary.main }}>
              <Box
                sx={{
                  display: { md: 'flex', xs: 'none' },
                  paddingLeft: '.5em',
                }}>
                <Image
                  alt='logo'
                  src='/images/Zaru-bowl-removebg.svg'
                  width={45}
                  height={45}
                />
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.primary.main,
                    alignSelf: 'center',
                    marginTop: '.25em'
                  }}>
                  Zaru Finance
                </Typography>
              </Box>
            </IconButton>
          </Link>
          <Box display={'inherit'}>
            {isConnected ? (
              <div>
                <Button
                  variant='contained'
                  aria-controls={menuOpen ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={menuOpen ? 'true' : undefined}
                  onClick={handleClick}>
                  {truncateHash(account)}
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}>
                  <MenuItem onClick={handleDeactivate}>Disconnect</MenuItem>
                </Menu>
              </div>
            ) : (
              <ConnectWallet />
            )}
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
          <Button href='/Learn'>
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
          <Button href='/Stake' variant='text'>
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
