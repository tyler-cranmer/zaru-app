import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  styled,
  Snackbar,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  useBalanceOf,
  useStakeContractFunc,
  useStakeTokens,
} from '../../hooks';
import { formatUnits } from '@ethersproject/units';
import { formatEther } from 'ethers/lib/utils';
import { useUnstakeTokens } from '../../hooks';
import { useEthers, useTokenBalance, useNotifications } from '@usedapp/core';
import opiToken from '../../abis/opi_test.json';
import { utils } from 'ethers';
import { CustomTextField } from '../minorComponents/CustomTextField';

export const StakeForm = (): JSX.Element => {

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

  const stakedTokenBalance = useBalanceOf(account);
  const walletBalance = useTokenBalance(opiTokenAddress, account);
  const rewardsEarned = useStakeContractFunc('earned', account);

  const formattedTokenBalance: number = walletBalance
    ? parseFloat(formatUnits(walletBalance, 18))
    : 0;

  const { send: stakeTokensSend, state: stakeTokensState } =
    useStakeTokens(opiTokenAddress);
  

  const handleStakeSubmit = () => {
     setStakeError(false);
    if (parseFloat(amount.toString()) === 0) {
      setStakeError(true);
    } else {
      const amountAsWei = utils.parseEther(amount.toString());
      return stakeTokensSend(amountAsWei.toString());
    }
  };

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
    const hasZeroAmountSelected = parseFloat(amount.toString()) === 0;
    
    return (
        <>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <CustomTextField
                  onChange={(e) => setAmount(e.currentTarget.value)}
                  label='Stake OPI Tokens'
                  id='reddit-input'
                  variant='filled'
                  type={'number'}
                  value={amount}
                  error={stakeError}
                  disabled={isMining || hasZeroBalance}
                />
              </Box>

              <Button
                onClick={handleStakeSubmit}
                // disabled={isMining || hasZeroAmountSelected}
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
              <Typography variant='caption'>OPI Tokens in Wallet:</Typography>
              {walletBalance && (
                <Typography
                  variant='caption'
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom>
                  {' '}
                  {formattedTokenBalance}
                </Typography>
              )}
            </Box>
        </>
    )
}