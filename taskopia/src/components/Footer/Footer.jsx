import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1} sx={{ color: '#fff' }}>
      {'Copyright © '}
      <Link href="#">Taskopia&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={
                  'logo.svg'
                }
                style={logoStyle}
                alt="logo of taskopia"
              />
            </Box>
            <Typography variant="body2" fontWeight={300} gutterBottom sx={{ color: '#fff' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2} sx={{ color: '#fff' }}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                InputProps={{
                  style: { color: 'white' }, // Changes the input text color
                }}
                sx={{
                  input: { color: 'white' }, // Ensure the text color is white
                  '& label.Mui-focused': { color: 'white' }, // Label color when focused
                  '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color before focus
                  '& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Underline color on focus
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' }, // Border color
                    '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
                    '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color on focus
                  },
                }}
              />


              <Button variant="contained" sx={{ flexShrink: 0, backgroundImage: 'linear-gradient(45deg, #0095ff 30%, #0072ff 90%)' }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
            Product
          </Typography>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Features
          </Link>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
            Company
          </Typography>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            About us
          </Link>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Careers
          </Link>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{ color: '#fff' }}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Terms
          </Link>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Privacy
          </Link>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: '#fff',
        }}
      >
        <div>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5, color: 'fff' }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#" sx={{ color: '#fff' }}>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{
              color: '#0095ff', alignSelf: 'center',
              '&:hover': {
                color: '#fff',
                transform: 'scale(1.2)',
              },
              transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{
              color: '#0095ff', alignSelf: 'center',
              '&:hover': {
                color: '#fff',
                transform: 'scale(1.2)',
              },
              transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
            }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{
              color: '#0095ff', alignSelf: 'center',
              '&:hover': {
                color: '#fff',
                transform: 'scale(1.2)',
              },
              transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/material.ui"
            aria-label="Facebook"
            sx={{
              color: '#0095ff', alignSelf: 'center',
              '&:hover': {
                color: '#fff',
                transform: 'scale(1.2)',
              },
              transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/material.ui/"
            aria-label="Instagram"
            sx={{
              color: '#0095ff', alignSelf: 'center',
              '&:hover': {
                color: '#fff',
                transform: 'scale(1.2)',
              },
              transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}