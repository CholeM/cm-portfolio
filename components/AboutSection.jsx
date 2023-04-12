import { Box, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const AboutSec = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    padding: theme.spacing(15, 0, 6),
    color: '#1E1E1E',
  },
}));

const AboutHeading = styled(Typography)(() => ({
  '&.MuiTypography-root': {
    fontWeight: '700',
    color: '#429EBD',
  },
}));

const AboutSection = () => (

  <AboutSec>
    <Container maxWidth="lg" sx={{ marginBottom: '4rem' }}>
      <Grid container direction="row" spacing={{ xs: 0, sm: 5, md: 3 }} alignItems='center'>
        <Grid item sm={4}>
          <img src='/images/me.png' />
        </Grid>
        <Grid item sm={8}>
          <Typography variant='h3' component='h2' gutterBottom>
            Hi, I'm Chole
          </Typography>
        <Typography variant='body1' paragraph>
            A UX Designer and Front-end Developer with a passion for creating user-friendly 
            and visually appealing digital experiences. I specialize in designing and developing websites 
            and applications that are both beautiful and functional.
          </Typography>
          <Typography variant="body1" paragraph>
            I've been working in the tech industry for over 5 years and have experience working with a range 
            of clients, from startups to corporate companies. My skills include user research, wireframing, 
            prototyping, coding, and testing, and I'm always eager to learn new tools and techniques to 
            improve my craft.
          </Typography>
          <Typography variant='body1' paragraph>
            I bring a unique perspective to my work that's informed by my experiences and the diverse 
            communities I've been a part of. I believe in the power of design to create positive change 
            and make the world a more inclusive and equitable place. When I'm not designing or coding, 
            you can find me sewing, reading and drawing.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="lg">
      <Typography variant='h3' gutterBottom>
        My Design Philosophy
      </Typography>
      <Grid container direction='row' justifyContent='center' spacing={3}>
        <Grid item md={4}>
          <AboutHeading variant='h6' gutterBottom>
            Aesthetic and Functional Design
          </AboutHeading>
          <Typography variant='body1' gutterBottom>
            As a UX Designer with a Front-end Developer background, my design philosophy is 
            centered around creating digital experiences that are both aesthetically pleasing 
            and functional. I believe that good design is intuitive and user-centered, and 
            that a well-designed product should seamlessly integrate with the user's needs and behaviors.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <AboutHeading variant='h6' gutterBottom>
            Technical Understanding
          </AboutHeading>
          <Typography variant='body1' gutterBottom>
            I approach each project with a deep understanding of the technical limitations and 
            possibilities, allowing me to design solutions that are not only visually appealing 
            but also feasible to implement.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <AboutHeading variant='h6' gutterBottom>
            User-centered Design
          </AboutHeading>
          <Typography variant='body1' gutterBottom>
            My goal is to create digital experiences that are accessible, inclusive, and enjoyable 
            for all users, and to continuously improve my craft through user research and feedback.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant='h3'sx={{ marginTop: '4rem' }}>
          Let's connect
        </Typography>
        </Grid>
        <Grid item container direction='row' spacing={2}>
          <Grid item>
            <a href="https://github.com/CholeM" target="_blank">
              <i><FontAwesomeIcon icon={faGithub} size="4x" /></i>
            </a>
          </Grid>
          <Grid item>
           <a href="https://dribbble.com/cholefolio" target="_blank">
              <i><FontAwesomeIcon icon={faDribbble} size="4x" /></i>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </AboutSec>
);

export default AboutSection;