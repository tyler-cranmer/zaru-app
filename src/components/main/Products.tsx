import { Box, Typography, Container } from '@mui/material';
import theme from '../../theme';
import CustomCard from './CustomCard';

const cardOneContent: string =
  'The Optimism Ecosystem Index (OPI) offers you broad exposure to the Optimistic network and applications within, including $OP, $SNX, $VELO, $LYRA & more!';
const cardTwoContent: string =
  'Early supports of Zaru can earn $RU tokens by buying and staking their $OPI token.';

function Products(): JSX.Element {
  return (
    <>
      <Box sx={{ borderTop: '1px solid grey' }}>
        <Container maxWidth='lg' sx={{ height: '600px' }}>
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
              OUR STORY
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
              <Typography variant='body1' mb={5} pb={5}>
                Zaru was created to guide you on the path to building wealth
                through a suite of tokenized asset strategies (TAS) that
                amplify, optimize, de-risk, and protect your portfolio.
              </Typography>
            </Box>
            <Box
              maxWidth='md'
              sx={{
                display: 'flex',
                backgroundColor: theme.palette.secondary.main,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
              }}>
              <Typography
                variant='h5'
                mt={2}
                mb={2}
                pt={1}
                pb={2}
                sx={{ fontWeight: '400' }}>
                OUR PRODUCTS
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CustomCard
                  title='$OPI'
                  content={cardOneContent}
                  buttonTitle='Buy $OPI'
                />
                <CustomCard
                  title='$OPI Staking'
                  content={cardTwoContent}
                  buttonTitle='Stake $OPI'
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Products;