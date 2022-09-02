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
} from '@mui/material';
import theme from '../theme';
import { ConnectWallet } from '../components';
import { useEthers} from '@usedapp/core';
import Image from 'next/image';
import { Container } from '@mui/system';


// Takes a long hash string and truncates it.
function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

function Header() {

  const { activateBrowserWallet, account, deactivate, error } = useEthers();
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
      <Container
        maxWidth={false}
        sx={{
          borderBottom: '1px solid #e5e5e5',
        }}>
        <Container maxWidth='lg'>
          <AppBar
            position='static'
            sx={{
              backgroundColor: 'transparent',
              boxShadow: '0px 0px 0px 0px',
            }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Link href='/' sx={{ textDecoration: 'none' }}>
                <IconButton
                  size='large'
                  edge='start'
                  aria-label='logo'
                  disableRipple
                  sx={{ color: theme.palette.primary.main }}>
                  <Box
                    sx={{
                      display: { md: 'flex', xs: 'none' }
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
                        marginTop: '.25em',
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
        </Container>
      </Container>
    </>
  );
}

export default Header;
