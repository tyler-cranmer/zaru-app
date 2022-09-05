import { Button, styled, ButtonProps } from '@mui/material';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'black',
  borderColor: 'black',

  backgroundColor: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
    borderColor: 'black',
  },
}));

type Props = {
  onClick?: React.MouseEventHandler;
};

function MaxButton({ onClick }: Props): JSX.Element {
  return (
    <>
      <ColorButton
        onClick={onClick}
        variant='outlined'
        size='small'
        sx={{
          borderRadius: '20px',
          fontSize: { xs: 8, md: 10 },
          padding: '.25em',
        }}>
        Max
      </ColorButton>
    </>
  );
}

export default MaxButton;
