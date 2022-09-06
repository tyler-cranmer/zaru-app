import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Alert,
  Snackbar
} from '@mui/material';
import { useEthers } from '@usedapp/core';
import CloseIcon from '@mui/icons-material/Close';
import { walletlink, walletconnect } from '../util/connectors';
import Image from 'next/image';
import theme from '../theme';



function ConnectWallet() {
  const { activateBrowserWallet, activate, account, error } = useEthers();
  const [open, setOpen] = useState(false);
  const [activateError, setActivateError] = useState('');
  const [isError, setIsError] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error && account) {
      setActivateError(error.message);
      setIsError(true)
      return;
    }
    setActivateError('');
    setIsError(false)
  }, [error, account]);

  const ConnectMetaMask = async () => {
    setActivateError('');
    setIsError(false);
    activateBrowserWallet();
  };

  const ConnectWalletLink = async () => {
    try {
      setActivateError('');
      setIsError(false);
      await activate(walletlink);
    } catch (error: any) {
      setActivateError(error.message);
      setIsError(true);
    }
  };

  const ConnectWalletConnect = async () => {
    try {
      setActivateError('');
      setIsError(false);
      await activate(walletconnect);
    } catch (error: any) {
      setActivateError(error.message);
      setIsError(true);
    }
  };

  const CloseAlert = () => {
    setIsError(false);
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
      <Button
        onClick={handleOpen}
        variant='contained'
        sx={{ borderRadius: '10px' }}>
        Connect Wallet
      </Button>

      <Snackbar open={isError} autoHideDuration={5000} onClose={CloseAlert}>
        <Alert onClose={CloseAlert} severity='warning'>
          {activateError}
        </Alert>
      </Snackbar>

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
              sx={{ fontWeight: 500, color: theme.palette.primary.main }}>
              Connect a Wallet
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
              onClick={ConnectWalletConnect}
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%', mb: 2 }}
              endIcon={
                <Image
                  src='/images/walletIcons/wallet-connect.svg'
                  alt='wallet connect'
                  height={25}
                  width={25}
                />
              }>
              Wallet Connect
            </Button>
            <Button
              onClick={ConnectWalletLink}
              variant='outlined'
              size='large'
              sx={{ justifyContent: 'space-between', width: '100%' }}
              endIcon={
                <Image
                  src='/images/walletIcons/coinbase-wallet.svg'
                  alt='coinbase'
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

export default ConnectWallet;