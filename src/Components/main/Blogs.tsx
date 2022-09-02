import { Box, Typography, Container } from '@mui/material';

export const Blogs = (): JSX.Element => {
  return (
    <>
      <Container maxWidth='lg' sx={{ height: '200px' }}>
        <Box
          mt={8}
          sx={{
            textAlign: 'center',
          }}>
          <Typography
            variant='h5'
            pb={2}
            sx={{ fontWeight: '400' }}
            gutterBottom>
            CHECK OUT OUR BLOGS
          </Typography>
          <Typography>I should create cards to display the blogs</Typography>
        </Box>
      </Container>
    </>
  );
};
