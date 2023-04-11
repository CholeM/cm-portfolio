import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Service = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#FFF',
    padding: theme.spacing(8, 0, 6),
  },
}));

const Services = () => (
  <Service id='services'>
    <Typography variant='h4' component='h2' align='center' gutterBottom>
      Services
    </Typography>
    <Container maxWidth='lg'>
      <Grid container spacing={2} justifyContent='center' direction="row">
        <Grid item md={4}>
          <Typography variant='h5' color='primary' component='h2' gutterBottom>
            <b>Web Design</b>
          </Typography>
          <Typography variant='body1' color="textPrimary" component='p'>
            I design and develop custom websites that are tailored to your business 
              needs and target audience.
          </Typography>
        </Grid>

        <Grid item md={4}>
          <Typography variant='h5' color='primary' component='h2' gutterBottom>
            <b>Front-end Development</b>
          </Typography>
          <Typography variant='body1' color="textPrimary" component='p'>
            I specialize in frontend development using modern frameworks 
            such as Laravel, React and Next.js.
          </Typography>
        </Grid>

        <Grid item md={4}>
          <Typography variant='h5' color='primary' component='h2' gutterBottom>
            <b>UX Design</b>
          </Typography>
          <Typography variant='body1' color="textPrimary" component='p'>
            I use my expertise in user experience to design interfaces that are 
            intuitive and visually appealing.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Service>
);

export default Services;