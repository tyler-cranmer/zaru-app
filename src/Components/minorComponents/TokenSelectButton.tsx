import React from 'react';

import {IconButton, Button, styled, ButtonProps, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';


const TokenButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
  color: 'black',
  borderColor: 'black',

  backgroundColor: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
    borderColor: 'black',
  },
}));

type Props = {
    // onClick?: React.MouseEventHandler;
    tokenName: string;
    // tokenIcon: string;
};

function TokenSelectButton({ tokenName }: Props): JSX.Element {
  return (
    <>
      <TokenButton size='medium' sx={{ borderRadius: '10px' }}>
        <Image
          src='/images/ethereum-eth-logo.png'
          alt='eth'
          height={14}
          width={14}
        />
        <Typography variant= 'subtitle2' sx={{ paddingLeft: '.25em' }}>{tokenName}</Typography>
        <KeyboardArrowDownIcon fontSize='small' />
      </TokenButton>
    </>
  );
}

export default TokenSelectButton