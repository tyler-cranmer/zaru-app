import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Button,
  Typography,
  styled,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import theme from '../../theme';
import { useBalanceOf, useStakeContractFunc, useStakeTokens } from '../../hooks';
import { CustomTextField } from '../minorComponents/CustomTextField';
import networkMapping from '../../abis/map.json';
import { useEthers, useTokenBalance, useNotifications } from '@usedapp/core';
import { constants, utils } from 'ethers';
import { formatUnits } from '@ethersproject/units';
import { formatEther } from 'ethers/lib/utils';


const StyledFields = styled(Box)({
  backgroundColor: '#F3F8FC',
  display: 'flex',
  flexDirection: 'column',
  width: '11em',
  borderRadius: '10px',
  marginRight: '1em',
  padding: '8px 12px 8px 12px',
});



export const StakingCard = () => {
  const { chainId, account } = useEthers();
  const { notifications } = useNotifications();
  const [stake, setStake] = useState<number | string | Array<number | string>>(
    0
  ); //Need to move functionality to stakeAmount, setStakeAmount
  const [stakeError, setStakeError] = useState(false);
  const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] =
    useState(false);
   const [showStakeTokensSuccess, setShowStakeTokensSuccess] = useState(false);
  const [stakeAmount, setStakeAmount] = useState<
    number | string | Array<number | string>
    >(0);
  
    const opiTokenAddress = chainId
      ? networkMapping[String(chainId)]['OPIToken'][0]
      : constants.AddressZero;
  const isConnected = account !== undefined;
  

     const stakedTokenBalance = useBalanceOf(account);
     const walletBalance = useTokenBalance(opiTokenAddress, account);
     const rewardsEarned = useStakeContractFunc('earned', account);


   const formattedTokenBalance: number = walletBalance
     ? parseFloat(formatUnits(walletBalance, 18))
     : 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStakeError(false);

    if (stake == 0) {
      setStakeError(true);
    }

    if (stake) {
      console.log(stake);
    }
  };
/*
  const { send: stakeTokensSend, state: stakeTokensState } = useStakeTokens(opiTokenAddress);
  
  const handleStakeSubmit = () => {
    const amountAsWei = utils.parseEther(stakeAmount.toString());
    return stakeTokensSend(amountAsWei.toString())
  }

    const handleCloseSnack = () => {
      showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(false);
      showStakeTokensSuccess && setShowStakeTokensSuccess(false);
    };
  
  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Approve ERC20 transfer'
      ).length > 0
    ) {
      !showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(true);
      showStakeTokensSuccess && setShowStakeTokensSuccess(false);
    }

    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Stake tokens'
      ).length > 0
    ) {
      showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(false);
      !showStakeTokensSuccess && setShowStakeTokensSuccess(true);
    }
  }, [notifications, showErc20ApprovalSuccess, showStakeTokensSuccess]);

  const isMining = stakeTokensState.status === 'Mining';

  const hasZeroBalance = formattedTokenBalance === 0;
  const hasZeroAmountSelected = parseFloat(stakeAmount.toString()) === 0;

  */

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '20px',
      }}>
      <Box pl='3em' pr='1.5em'>
        <CardContent>
          <Typography
            variant='h5'
            component='h1'
            color='text.primary'
            pt='.5em'
            gutterBottom>
            Stake Your $OPI to Earn $RU
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Box
            sx={{
              display: 'flex',
              marginBottom: '1.5em',
              paddingBottom: '1em',
            }}>
            <StyledFields>
              <Typography variant='caption'> Staked OPI</Typography>
              {stakedTokenBalance && (
                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                  {formatEther(stakedTokenBalance)}
                </Typography>
              )}
            </StyledFields>
            <StyledFields>
              <Typography variant='caption'>RU Earned</Typography>
              {rewardsEarned && (
                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                  {formatEther(rewardsEarned)}
                </Typography>
              )}
            </StyledFields>
            <Button
              variant='contained'
              sx={{
                borderRadius: '10px',
                paddingLeft: '2em',
                paddingRight: '2em',
                margin: '2px',
              }}>
              Unstake
            </Button>
          </Box>

          <form noValidate autoComplete='off'>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <CustomTextField
                  // onChange={}
                  label='Stake OPI Tokens'
                  id='reddit-input'
                  variant='filled'
                  type={'number'}
                  value={stake}
                  error={stakeError}
                />
              </Box>

              <Button
                onClick={() => console.log('you clicked me')}
                type='submit'
                variant='contained'
                fullWidth
                sx={{
                  borderRadius: '10px',

                  paddingLeft: '2.75em',
                  paddingRight: '2.75em',
                  margin: '1px',
                }}>
                Stake
              </Button>
            </Box>
          </form>
          <Box sx={{ marginBottom: '2em', paddingTop: '.5em' }}>
            <Typography variant='caption'>OPI Tokens in Wallet:</Typography>
            {walletBalance && (
              <Typography
                variant='caption'
                sx={{ fontWeight: 'bold' }}
                gutterBottom>
                {' '}
                {formatEther(walletBalance)}
              </Typography>
            )}
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};
