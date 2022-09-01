import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';
import { Hero, Products, Community, Blogs, Explore } from '../src/components';

const Home: NextPage = () => {


  return (
    <>
      <Container>
        <Hero />
        <Products />
        <Community />
        <Blogs />
      </Container>
      <Explore />
    </>
  );
};

export default Home;
