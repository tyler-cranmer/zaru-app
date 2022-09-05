import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Button,
  Typography,
  Snackbar,
  CircularProgress,
  Alert,
} from '@mui/material';
import theme from '../../theme';
import { UnstakeForm } from './UnstakeForm';
import { useStakeTokens } from '../../hooks';
import MaxButton from '../minorComponents/MaxSubmitButton';
import CustomTextField from '../minorComponents/CustomTextField';
import opiToken from '../../abis/opi_test.json';
import { useEthers, useTokenBalance, useNotifications } from '@usedapp/core';
import { utils } from 'ethers';
import { formatEther } from 'ethers/lib/utils';

export const StakingCard = (): JSX.Element => {
  const { account } = useEthers();
  const { notifications } = useNotifications();
  const [stakeError, setStakeError] = useState(false);
  const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] =
    useState(false);
  const [showStakeTokensSuccess, setShowStakeTokensSuccess] = useState(false);
  const [amount, setAmount] = useState<
    number | string | Array<number | string>
  >(0);

  const { address } = opiToken;
  const opiTokenAddress = address;

  const walletBalance = useTokenBalance(opiTokenAddress, account);

  // const formattedTokenBalance: number = walletBalance
  //   ? parseFloat(formatUnits(walletBalance, 18))
  //   : 0;

  const formattedTokenBalance: string | number = walletBalance
    ? formatEther(walletBalance)
    : 0.0;

  const { send: stakeTokensSend, state: stakeTokensState } =
    useStakeTokens(opiTokenAddress);

  // Submitting the stake token hook.
  const handleStakeSubmit = () => {
    setStakeError(false);
    if (parseFloat(amount.toString()) === 0) {
      setStakeError(true);
    } else {
      const amountAsWei = utils.parseEther(amount.toString());
      return stakeTokensSend(amountAsWei.toString());
    }
  };

  const handleMaxSubmit = () => {
    setAmount(formattedTokenBalance);
  };

  const handleCloseSnack = () => {
    showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(false);
    showStakeTokensSuccess && setShowStakeTokensSuccess(false);
  };

  // Tracking the states of approving erc20 transfer and staking the tokens
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
  const hasZeroAmountSelected = parseFloat(amount.toString()) === 0;
  const hasNoInput = amount.toString() == ""

  return (
    <>
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '20px',
        }}>
        <Box
          sx={{
            pl: { xs: '1em', md: '3em' },
            pr: { xs: '.5em', md: '1.5em' },
          }}>
          <CardContent>
            <Typography
              color='text.primary'
              pt='.5em'
              sx={{ fontSize: { xs: '1.35em', md: '1.5em' } }}
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
            <UnstakeForm />
            <Box sx={{ display: 'flex' }}>
              <Box>
                <CustomTextField
                  onChange={(e: any) => setAmount(e.currentTarget.value)}
                  label='Stake OPI Tokens'
                  variant='filled'
                  type={'number'}
                  InputProps={{
                    inputProps: { min: 0, max: formattedTokenBalance },
                    disableUnderline: true,
                    endAdornment: <MaxButton onClick={handleMaxSubmit} />,
                  }}
                  value={amount}
                  error={stakeError}
                  disabled={isMining || hasZeroBalance}
                  sx={{ width: { xs: '13em', sm: '24em', md: '24em' } }}
                />
              </Box>
              <Button
                onClick={handleStakeSubmit}
                disabled={isMining || hasZeroAmountSelected || hasNoInput}
                variant='contained'
                fullWidth
                sx={{
                  borderRadius: '10px',
                  paddingLeft: '2.75em',
                  paddingRight: '2.75em',
                  margin: '1px',
                }}>
                {isMining ? <CircularProgress size={26} /> : 'Stake'}
              </Button>
            </Box>
            <Box sx={{ marginBottom: '2em', paddingTop: '.5em' }}>
              <Typography variant='caption' mr={1}>
                OPI Tokens in Wallet:
              </Typography>
              {walletBalance && (
                <>
                  <Typography
                    variant='caption'
                    sx={{ fontWeight: 'bold' }}
                    gutterBottom>
                    {formattedTokenBalance}
                  </Typography>
                </>
              )}
            </Box>
          </CardActions>
        </Box>
      </Card>
      <Snackbar
        open={showErc20ApprovalSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity='success'>
          ERC-20 token transfer approved successfully! Waiting to initiate the
          staking transfer.
        </Alert>
      </Snackbar>
      <Snackbar
        open={showStakeTokensSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity='success'>
          Tokens staked successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
