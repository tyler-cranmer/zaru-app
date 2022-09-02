import { Box, Button, Typography, Container } from '@mui/material';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
        }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: ' 0 auto',
          }}>
          <Typography gutterBottom sx={{ fontWeight: '400', fontSize: 64 }}>
            The leader in tokenized asset strategies
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle1' gutterBottom>
            Everyone should achieve abundance through the emergence of Web3 and
            Digital Currency.
          </Typography>
        </Box>
        <Button variant='contained' size='large' sx={{ marginTop: '2em' }}>
          {' '}
          Start investing with $opi
        </Button>
      </Container>
    </>
  );
}

export default Hero;
