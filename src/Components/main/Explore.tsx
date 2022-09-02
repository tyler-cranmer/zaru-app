import { Box, Typography, Container, Button } from '@mui/material';
import theme from '../../theme';

function Explore(): JSX.Element {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Box mt={4} mb={4} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box pr={9}>
              <Typography variant='h5'>Explore Zaru Finance</Typography>
              <Typography variant='body1'>
                Start building your wealth with $OPI
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant='contained'>Launch App</Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default Explore;
