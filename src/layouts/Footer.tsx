import { Box, Typography, Container, IconButton  } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaDiscord } from 'react-icons/fa';
export const Footer = () => {
  return (
    <>
      <Box>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              height: '100px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Box>
              <Typography>
                {' '}
                © Zaru Finance {new Date().getFullYear()}. All Rights Reserved.
              </Typography>
            </Box>
            <Box>
              <IconButton color='primary' aria-label='go to twitter'>
                <TwitterIcon fontSize='large' />
              </IconButton>
              <IconButton color='primary' aria-label='go to discord'>
                <FaDiscord size={32} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
