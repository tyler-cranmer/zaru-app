import { Box, Typography, Container, Button } from '@mui/material';
import theme from '../../theme';

export const Explore = (): JSX.Element => {
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
          <Box
            mt={2}
            pt={2}
            mb={4}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box >
              <Typography variant='h5'>Explore Zaru Finance</Typography>
              <Typography variant='body1'>
                Start building your wealth with $OPI
              </Typography>
            </Box>
            <Box>
              <Button variant='contained'>Launch App</Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};
