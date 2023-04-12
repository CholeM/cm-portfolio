import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, Link, Typography } from '@mui/material';

const PortBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#FFF',
    padding: theme.spacing(15, 0, 6),
  },
}));

const ProjectChip = styled(Chip)(() => ({
  '&.MuiChip-root': {
    backgroundColor: '#429EBD',
    color: '#FFF',
  },
}));

const ProjectSection = () => (
  <PortBox>
    <Container maxWidth='lg'>   
      <Typography variant='h3' component='h2' align='left' gutterBottom>
        Case Studies
      </Typography> 
      <Typography variant='body1' paragraph gutterBottom sx={{ paddingBottom: '1rem' }}>
        Here are some of my UX case studies.
      </Typography>

      <Grid
        container
        direction="row" 
        justifyContent='center' 
        spacing={2} 
        alignItems='center'
        sx={{ paddingBottom: '2rem' }}
      >
        <Grid item>
          <a href="/saveup">
            <div className="projectCard">
              <img src="/images/SaveUp/SaveUp Cover.png" title='Save Up' className="rounded" />
            </div>
          </a>
        </Grid>
        <Grid item sm={10} md={4}>
          <ProjectChip label="UX / UI DESIGN" />
          <br /> <br />
          <Typography gutterBottom variant="h4" component='h2'>
            Save Up
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Budgeting and saving mobile app for young Barbadians. Proving 
            them with financial freedom.
          </Typography>
          <Link href="/saveup" variant="h5">View Case Study</Link>
        </Grid>
      </Grid>

      <Grid 
        container
        direction='row'
        justifyContent='center' 
        spacing={2}
        alignItems='center' 
        sx={{ paddingBottom: '2rem' }}
      >
        <Grid item>
          <a href="/thepub">
            <div className='projectCard'>
              <img src='/images/ThePub/ThePub.png' title='ThePub' className="rounded" />
            </div>
          </a>
        </Grid>
        <Grid item sm={10} md={4}>
          <ProjectChip label="UX / UI DESIGN" />
          <br /><br />
          <Typography gutterBottom variant="h4" component='h2'>
            ThePub
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Food ordering mobile app for young people who are on the go,
            and want to dine at or order from ThePub.
          </Typography>
          <Link href="/thepub" variant="h5">View Case Study</Link>
        </Grid>
      </Grid>

      <Grid 
        container
        direction='row'
        justifyContent='center' 
        spacing={2}
        alignItems='center' 
        sx={{ paddingBottom: '5rem' }}
      >
        <Grid item>
          <a href="/ouro">
            <div className='projectCard'>
              <img src='/images/Ouro/Ouro-App.png' title='Ouro' className="rounded" />
            </div>
          </a>
        </Grid>
        <Grid item sm={10} md={4}>
          <ProjectChip label="UX / UI DESIGN" />
          {' '}
          <ProjectChip label="WEB DEV" />
          <br /><br />
          <Typography gutterBottom variant="h4" component='h2'>
            Ouro
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Responsive corporate website with client portal for management 
            and technology company.
          </Typography>
          <Link href="/ouro" variant="h5">View Case Study</Link>
        </Grid>
      </Grid>


      <Typography variant='h3' component='h2' align='left' gutterBottom>
        Coding Projects
      </Typography> 
      <Typography variant='body1' paragraph gutterBottom>
        Here are some of my coding projects.
      </Typography>
      Check out my <Link href='https://github.com/CholeM' target="_blank">GitHub</Link> for more projects.

      <Grid container direction="row" spacing={3} sx={{ paddingTop: "1rem" }}>
        <Grid item md={6}>
          <Card className='codeCards'>
            <CardActionArea href="https://github.com/CholeM/ouro-app" target="_blank">
              <CardContent>
                <Typography variant="h3" gutterBottom color='white'>
                  Ouro
                </Typography>
                <Typography variant="body1" gutterBottom color='white'>
                  Responsive corporate website with client portal for 
                  management and technology company.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </PortBox>
);

export default ProjectSection;