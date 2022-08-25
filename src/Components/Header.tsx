import React from 'react';
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
import CustomMenu from './CustomMenu';


function Header() {
  return (
    <>
      <AppBar
        position='static'
        sx={{ background: theme.palette.primary.light, boxSizing: "None" }}>
        <Toolbar sx={{justifyContent: 'space-between', margin: '0 10em'}} >
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
              <Button variant='contained' sx={{ borderRadius: '10px' }}>
                Connect Wallet
              </Button>
              <CustomMenu />
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
