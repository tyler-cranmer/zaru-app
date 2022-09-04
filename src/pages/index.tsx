import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Hero from '../components/main/Hero';
import Products from '../components/main/Products';
import Community from '../components/main/Community';
import Blogs  from '../components/main/Blogs';
import Explore from '../components/main/Explore';

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
