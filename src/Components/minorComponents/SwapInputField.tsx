import React, { useState } from 'react';
import TokenSelectButton from './TokenSelectButton';
import CustomTextField from '../minorComponents/CustomTextField';


type Props = {
    amount: number
    tokenName: string;
}

function SwapInputField(): JSX.Element {


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
          endAdornment: <TokenSelectButton tokenName='ETH' />,
        }}
      />
    </>
  );
}

export default SwapInputField;
