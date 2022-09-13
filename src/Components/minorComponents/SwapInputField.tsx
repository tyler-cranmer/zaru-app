import React, { useState } from 'react';
import TokenSelectButton from './TokenSelectButton';
import CustomTextField from '../minorComponents/CustomTextField';
import { Typography } from '@mui/material';


type Props = {
    // amount: number
    tokenName: string;
}

function SwapInputField({ tokenName }: Props): JSX.Element {
  return (
    <>
      <CustomTextField
        hiddenLabel
        variant='filled'
        type={'number'}
        fullWidth
        InputProps={{
          inputProps: { min: 0, max: 10 },
          disableUnderline: true,
          endAdornment: <TokenSelectButton tokenName={tokenName} />,
        }}
      />
    </>
  );
}

export default SwapInputField;
