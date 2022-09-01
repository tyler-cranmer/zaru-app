import { Box, Typography, Container, Button, styled } from '@mui/material';
import { padding } from '@mui/system';
import theme from '../../theme';


const InverseButton = styled(Button)({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: "white",
    boxShadow: 'none',
  },
});

export const Community = (): JSX.Element => {
  return (
    <>
      <Container maxWidth='lg' sx={{ height: '300px' }}>
        <Box
          mt={10}
          sx={{
            textAlign: 'center',
          }}>
          <Typography
            variant='h5'
            pb={2}
            sx={{ fontWeight: '400' }}
            gutterBottom>
            OUR COMMUNITY
          </Typography>
          <Box mb={2} pb={1} sx={{ textAlign: 'left' }}>
            <Typography mb={2} pb={1}>
              $RU is a governance token used to vote in changes to the Zaru
              Finance. RU holders may vote in smart contract upgrades to Zaru,
              vote in new Zaru products, vote on allocation of the Zaru
              treasury, and more.
            </Typography>
            <Typography mb={2} pb={1}>
              Zaru Finance was established as a DAO because we feel our
              customers are also our community. As a DAO, the community can
              determine the future of Zaru, such as which products to launch and
              what their methodology is.
            </Typography>
          </Box>

          <InverseButton variant='outlined' size='medium'>
            Learn More
          </InverseButton>
        </Box>
      </Container>
    </>
  );
};
