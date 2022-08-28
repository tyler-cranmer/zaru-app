import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Alert,
} from '@mui/material';
import { useEthers } from '@usedapp/core';
import CloseIcon from '@mui/icons-material/Close';
import { walletlink, walletconnect } from '../util/connectors';
import Image from 'next/image';

export const ConnectWallet = (): JSX.Element => {
  const { activateBrowserWallet, activate, account, error } = useEthers();

  const [open, setOpen] = useState(false);
  const [activateError, setActivateError] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error && account) {
      setActivateError(error.message);
      return;
    }
    setActivateError('');
  }, [error, account]);

  const ConnectMetaMask = async () => {
    setActivateError('');
    activateBrowserWallet();
  };

  const ConnectWalletLink = async () => {
    try {
      setActivateError('');
      await activate(walletlink);
    } catch (error: any) {
      setActivateError(error.message);
    }
  };

  const ConnectWalletConnect = async () => {
    try {
      setActivateError('');
      await activate(walletconnect);
    } catch (error: any) {
      setActivateError(error.message);
    }
  };

  const CloseAlert = () => {
    setActivateError('');
  };

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
      {activateError != '' ? (
        <Alert onClose={CloseAlert} sx={{marginRight: '1em'}} severity='error'>
          {activateError}
        </Alert>
      ) : null}
        <Button
          onClick={handleOpen}
          variant='contained'
          sx={{ borderRadius: '10px' }}>
          Connect Wallet
        </Button>
   
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
            <IconButton
              aria-label='close'
              color='primary'
              onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              onClick={ConnectMetaMask}
              variant='outlined'
              size='large'
              endIcon={
                <Image
                  src='/images/walletIcons/metamask.svg'
                  alt='metamask'
                  height={25}
                  width={25}
                />
              }
              sx={{
                justifyContent: 'space-between',
                width: '100%',
                mb: 2,
              }}>
              MetaMask
            </Button>
            <Button
              onClick={ConnectWalletLink}
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%', mb: 2 }}
              endIcon={
                <Image
                  src='/images/walletIcons/wallet-connect.svg'
                  alt='metamask'
                  height={25}
                  width={25}
                />
              }>
              Wallet Connect
            </Button>
            <Button
              onClick={ConnectWalletConnect}
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%' }}
              endIcon={
                <Image
                  src='/images/walletIcons/coinbase-wallet.svg'
                  alt='metamask'
                  height={25}
                  width={25}
                />
              }>
              Coinbase Wallet
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

