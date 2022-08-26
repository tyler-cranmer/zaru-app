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
  Alert
} from '@mui/material';
import theme from '../theme';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import CustomMenu from '../components/CustomMenu';
import ConnectWallet from './ConnectWallet';
import { useEthers, useNotifications } from '@usedapp/core';
import { MenuOpen } from '@mui/icons-material';

// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

function Header() {
  const [open, isOpen] = useState(false)
  const { account, deactivate } = useEthers();
  const { notifications } = useNotifications();
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
