import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { Snackbar, Alert, Typography } from '@mui/material';
import { useEthers } from '@usedapp/core';


export type Token = {
  image: string;
  address: string;
  name: string;
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { error } = useEthers();
  const [showNetworkError, setShowNetworkError] = useState(false);

  const handleCloseNetworkError = (
    event: React.SyntheticEvent <any, Event> | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    showNetworkError && setShowNetworkError(false);
  };

   
  /**
   * useEthers will return a populated 'error' field when something has gone wrong.
   * We can inspect the name of this error and conditionally show a notification
   * that the user is connected to the wrong network.
   */

  useEffect(() => {
      if (error && error.name === 'ChainIdError') {
      !showNetworkError && setShowNetworkError(true);
    } else {
      showNetworkError && setShowNetworkError(false);
    }
  }, [error, showNetworkError]);

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer/>
      <Snackbar
        open={showNetworkError}
        autoHideDuration={5000}
        onClose={handleCloseNetworkError}>
        <Alert onClose={handleCloseNetworkError} severity='warning'>
          You gotta connect to the Optimism Georli network!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Layout;
