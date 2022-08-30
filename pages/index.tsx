import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, Button, TextField, Typography, Container, Snackbar } from '@mui/material';
import { useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';
import { useBalanceOf, useSimpleFunction } from '../src/hooks';
import { CustomTextField } from '../src/components/minorComponents/CustomTextField';
import { formatUnits } from '@ethersproject/units';

const Home: NextPage = () => {
  const { account } = useEthers();
  const Rutoken: string = '0x3d4DF72c7C70dfD127f5470ED7350fBd7bF63f7B';
  const testToken: string = '0x068F465A140131f6996Bbc5c5B7435A1a52c7DA2';
  const ruTokenBalance = useTokenBalance(Rutoken, account);
  const testTokenBalance = useTokenBalance(testToken, account);
  const rewardAddress = useSimpleFunction('rewardsToken');
  const rewardsDistributionAddress = useSimpleFunction('rewardsDistribution');
  const stakingTokenAddress = useSimpleFunction('stakingToken');
  const periodFinish = useSimpleFunction('periodFinish');
  const rewardRate = useSimpleFunction('rewardRate');
  const rewardsDuration = useSimpleFunction('rewardsDuration');
  const lastTimeUpdated = useSimpleFunction('lastUpdatedTime')
  const rewardsPerToken = useSimpleFunction('rewardPerTokenStored')
  

  const [stakeAmount, setStakeAmount] = useState<
    number | string | Array<number | string>
  >(0);

  const [userBalance, setUserBalance] = useState<string>('');
  const [rewardAddressData, setRewardAddressData] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userBalance) {
      console.log(userBalance)

    }
  };




  const formatter = new Intl.NumberFormat('en-us', {
    // this came from usedapp example. trying to figure out input formats
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });

  const style = {
    marginTop: '.8em',
    marginBottom: '1em',
    marginRight: '1em',
  };

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h4' component='h1' gutterBottom>
          useDapp tutorial page
        </Typography>
        <Box>
          {account && <p>Account: {account}</p>}
          {ruTokenBalance && (
            <p>Ru token balance: {formatEther(ruTokenBalance)} RU </p>
          )}
          {testTokenBalance && (
            <p>OPI balance: {formatEther(testTokenBalance)} OPI </p>
          )}
          <Typography variant='h4'>Staking Contract Info</Typography>
          {rewardAddress && <p> reward token address: {rewardAddress}</p>}
          {stakingTokenAddress && (
            <p> reward token address: {stakingTokenAddress}</p>
          )}
          {rewardsDistributionAddress && (
            <p> rewards distributor address: {rewardsDistributionAddress}</p>
          )}

          {periodFinish && <p> period finish: {formatEther(periodFinish)}</p>}
          {rewardRate && <p> reward rate: {formatEther(rewardRate)}</p>}
          {rewardsDuration && (
            <p> rewards duration: {formatEther(rewardsDuration)}</p>
          )}
          {lastTimeUpdated && (
            <p> Last Time Updated: {formatEther(lastTimeUpdated)}</p>
          )}
          {rewardsPerToken && (
            <p> Rewards Per Token: {formatEther(rewardsPerToken)}</p>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Box sx={{ marginBottom: '1em' }}>
            <Button sx={style} variant='contained'>
              exit
            </Button>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <Button sx={style} variant='contained'>
              getReward
            </Button>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                notifyRewardAmount
              </Button>
              <CustomTextField variant='filled' label='amount' />
            </form>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                Stake
              </Button>
              <CustomTextField variant='filled' label='amount' />
            </form>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                Withdraw
              </Button>
              <CustomTextField variant='filled' label='amount' />
            </form>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
              <Button sx={style} variant='contained' type='submit'>
                Balance of
              </Button>
              <TextField
                value={userBalance}
                label='address'
                variant='filled'
                onChange={(e) => setUserBalance(e.target.value)}
              />
            </form>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                earned
              </Button>
              <CustomTextField variant='filled' label='address' />
            </form>
          </Box>


          <Box sx={{ marginBottom: '1em' }}>
            <Button sx={style} variant='contained'>
              Reward Token Per Call
            </Button>
          </Box>

          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                Rewards
              </Button>
              <CustomTextField variant='filled' label='address' />
            </form>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <Button sx={style} variant='contained'>
              Total Supply
            </Button>
          </Box>
          <Box sx={{ marginBottom: '1em' }}>
            <form>
              <Button sx={style} variant='contained'>
                User Rewards Token Pay
              </Button>
              <CustomTextField variant='filled' label='address' />
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
