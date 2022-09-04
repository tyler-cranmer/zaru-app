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
import { useBalanceOf, useStakeContractFunc } from '../../hooks';
import { formatEther } from 'ethers/lib/utils';
import { formatUnits } from '@ethersproject/units';
import { useUnstakeTokens } from '../../hooks';

const StyledFields = styled(Box)({
  backgroundColor: '#F3F8FC',
  display: 'flex',
  flexDirection: 'column',
  width: '11em',
  borderRadius: '10px',
  marginRight: '1em',
  padding: '8px 12px 8px 12px',
});
import { useEthers, useNotifications } from '@usedapp/core';

export const UnstakeForm = (): JSX.Element => {
  const { account } = useEthers();
  const { notifications } = useNotifications();
  const stakedTokenBalance = useBalanceOf(account);
  const rewardsBalance = useStakeContractFunc('earned', account);

  // const formattedTokenBalance: number = stakedTokenBalance
  //   ? +parseFloat(formatUnits(stakedTokenBalance, 18)).toFixed(10)
  //   : 0;

  const formattedTokenBalance: string | number = stakedTokenBalance
    ? formatEther(stakedTokenBalance)
    : 0.0;

  const { send: unstakeTokensSend, state: unstakeTokensState } =
    useUnstakeTokens();

  const handleUnstakeSubmit = () => {
    return unstakeTokensSend();
  };

  const [showUnstakeSuccess, setShowUnstakeSuccess] = useState(false);

  const handleCloseSnack = () => {
    showUnstakeSuccess && setShowUnstakeSuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === 'transactionSucceed' &&
          notification.transactionName === 'Unstake tokens'
      ).length > 0
    ) {
      !showUnstakeSuccess && setShowUnstakeSuccess(true);
    }
  }, [notifications, showUnstakeSuccess]);

  const isMining = unstakeTokensState.status === 'Mining';
  const hasZeroBalance = formattedTokenBalance === 0;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginBottom: '1.5em',
          paddingBottom: '1em',
        }}>
        <Box sx={{ display: 'flex' }}>
          <StyledFields sx={{ marginLeft: '8px' }}>
            <Typography variant='caption'> Staked OPI</Typography>
            {stakedTokenBalance ? (
              <Typography
                variant='body2'
                sx={{ fontWeight: 'bold', overflow: 'hidden' }}>
                {formattedTokenBalance}
              </Typography>
            ) : (
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                0
              </Typography>
            )}
          </StyledFields>
          <StyledFields>
            <Typography variant='caption'>RU Earned</Typography>
            {rewardsBalance ? (
              <Typography
                variant='body2'
                sx={{ fontWeight: 'bold', overflow: 'hidden' }}>
                {formattedTokenBalance}
              </Typography>
            ) : (
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                0
              </Typography>
            )}
          </StyledFields>
        </Box>
        <Button
          onClick={handleUnstakeSubmit}
          disabled={isMining || hasZeroBalance}
          variant='contained'
          sx={{
            borderRadius: '10px',
            paddingLeft: '2em',
            paddingRight: '2em',
            margin: '1px',
          }}>
          {isMining ? <CircularProgress size={26} /> : `Unstake`}
        </Button>
      </Box>
      <Snackbar
        open={showUnstakeSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity='success'>
          Tokens unstaked successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
