import React, { useState } from 'react';
import { Box, Button, Modal, Typography, IconButton } from '@mui/material';
import { useEthers } from '@usedapp/core';
import CloseIcon from '@mui/icons-material/Close';

function ConnectWallet(): JSX.Element {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    width: 448,
    flexDirection: 'column',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    pt: 1,
    pr: 2,
    pb: 3,
    pl: 2,
  };

  return (
    <>
      <Box>
        <Button
          onClick={handleOpen}
          variant='contained'
          sx={{ borderRadius: '10px' }}>
          Connect Wallet
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}>
            <Typography
              id='modal-modal-title'
              variant='h5'
              color='primary'
              sx={{ fontWeight: 500 }}>
              Connect to a wallet
            </Typography>
            <IconButton aria-label='close' color='primary' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              variant='outlined'
              size='large'
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                mb: 2,
              }}>
              MetaMask
            </Button>
            <Button
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%', mb: 2 }}>
              Wallet Connect
            </Button>
            <Button
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%' }}>
              Coinbase Wallet
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ConnectWallet;
