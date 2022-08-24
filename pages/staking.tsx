import React from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Header from '../src/Components/Header';
const Staking: NextPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <div>Staking Page</div>
      </Container>
    </>
  );
};

export default Staking;
