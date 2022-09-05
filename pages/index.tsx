import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Hero from '../src/Components/main/Hero';
import Products from '../src/Components/main/Products';
import Community from '../src/Components/main/Community';
import Blogs  from '../src/Components/main/Blogs';
import Explore from '../src/Components/main/Explore';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Products />
      <Community />
      <Blogs />
      <Explore />
    </>
  );
};

export default Home;
