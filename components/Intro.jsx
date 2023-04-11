import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typewriter from 'typewriter-effect';

const Hero = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: theme.palette.primary.main,//'#010E21',
    padding: theme.spacing(8, 0, 3),
    color: '#FFF',
  },
}));

const IntroButton = styled(Button)(({}) => ({
  '&.MuiButton-root': {  
    color: '#429EBD', 
    marginTop: '0.5rem',
    borderColor: '#429EBD',
    '&hover': {
      backgroundColor: '#FFF',
    },
  },
}));

const Intro = () => (
  <Hero>
    <Container>
      <Grid container direction='row' spacing={3} alignItems='center'>
        <Grid item sm={6}>
          <Typography variant='h2' align='left' gutterBottom>
            Hello, I'm Chole!
          </Typography>
          <Typography variant='h3' component='h1' align='left' gutterBottom color='#B1CEFB'>
          <Typewriter
            options={{
              strings: ['UX Designer', 'UI Designer', 'Front-end Developer'],
              autoStart: true,
              loop: true,
            }}
          />
          </Typography>
          <Typography variant='h6' align='left' gutterBottom>
            I create beautiful and engaging digital products.
          </Typography>
          <IntroButton
            href='/contact'
            variant='outlined' 
            disableElevation 
            size='large' 
            endIcon={<ArrowForwardIcon />}
          >
            Keep In Touch
          </IntroButton>
        </Grid>
        <Grid item sm={6}>
          <img src='/images/room-girl-working.png' width='100%' />
        </Grid>
      </Grid>
    </Container>
  </Hero>
);

export default Intro;