import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Chip, Container, Grid, Link, Typography } from '@mui/material';

const PortBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor:"#FFF",
    padding: theme.spacing(15, 0, 6),
  },
}));

const ProjectChip = styled(Chip)(() => ({
  '&.MuiChip-root': {
    backgroundColor: '#429EBD',
    color: '#FFF',
  },
}));

const Head2 = styled(Typography)(() => ({
  '&.MuiTypography-root': {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
}));

const ClientWork = () => (
  <PortBox>
    <Container maxWidth="lg">   
      <Typography variant="h3" component="h2" align="left" gutterBottom>
        Client Work
      </Typography> 
      <Typography variant="body1" paragraph gutterBottom>
        View a collection of a few designs I've completed for clients across different industries.
      </Typography>
    </Container>
    <Container maxWidth="lg">
      <Grid container direction="column" sx={{ paddingTop: "2rem" }}>
        <Grid item container justifyContent="center" className='lightWork'>
          <Link href="https://www.animekonexpo.com" target="_blank">
            <img src="/images/Work/AnimeKonExpoWebsite.png" className='workRounded'  />
          </Link> 
        </Grid>
        <Grid item sm={12} sx={{ paddingTop: "1rem" }}>
          <ProjectChip label="WEB DESIGN" />
          {' '}
          <ProjectChip label="WEB DEV" />
          
          <Head2 variant="h4" component="h2">
            AnimeKon Expo Website (2023)
          </Head2>
          <Typography variant="body1" paragraph gutterBottom>
            This client approached me to redesign and develop their convention website.
            The website serves as the source for all information relating to the Caribbean 
            pop culture convention.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" sx={{ paddingTop: "2rem" }}>
        <Grid item container justifyContent="center" className='darkWork'>
          <img src="/images/Work/AnimeKonExpoComingSoon.png" className='workRounded' />
        </Grid>
        <Grid item sm={12} sx={{ paddingTop: "1rem" }}>
          <ProjectChip label="WEB DESIGN" />
          {' '}
          <ProjectChip label="WEB DEV" />
        
          <Head2 variant="h4" component="h2">
            AnimeKon Expo Coming Soon Page (2023)
          </Head2>
          <Typography variant="body1" paragraph gutterBottom>
            This client requested a "Coming Soon" landing page for their website while it 
            was in development. The landing page utilized the convention's branding and 
            allowed for newsletter subscription.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </PortBox>
);

export default ClientWork;