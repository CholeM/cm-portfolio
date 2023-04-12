import React from "react"
import { styled } from "@mui/material/styles"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Container, Grid, Link, Typography } from "@mui/material";

const PortBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: "#FFF",
    padding: theme.spacing(8, 0, 6),
  },
}));

const ProjectChip = styled(Chip)(() => ({
  '&.MuiChip-root': {
    backgroundColor: '#429EBD',
    color: '#FFF',
  },
}));

const Portfolio = () => (
  <PortBox id="portfolio">
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Portfolio
    </Typography>
    <Container>    

      <Grid
        container
        direction="row" 
        justifyContent="center" 
        spacing={2} 
        alignItems="center"
        sx={{ marginBottom: "2rem" }}
      >
        <Grid item>
          <a href="/saveup">
            <div className='projectCard'>
              <img src="/images/SaveUp/SaveUp Cover.png" className="rounded" title="Save Up" />
            </div>
          </a>
        </Grid>
        <Grid item sm={10} md={4}>
          <ProjectChip label="UX / UI DESIGN" />
          <br /> <br />
          <Typography gutterBottom variant="h4" component="h2">
            Save Up
          </Typography>
          <Typography color="textPrimary" variant="body1" component="p" gutterBottom sx={{ paddingBottom: "0.5rem" }}>
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
        direction="row"
        justifyContent="center" 
        spacing={2}
        alignItems="center" 
        sx={{ marginBottom: "5rem" }}
      >
        <Grid item>
          <a href="/ouro">
            <div className='projectCard'>
              <img src="/images/Ouro/Ouro-App.png" className="rounded" title="Ouro" />
            </div>
          </a>
        </Grid>
        <Grid item sm={10} md={4}>
          <ProjectChip label="UX / UI DESIGN" />
          {" "}
          <ProjectChip label="WEB DEV" />
          <br /><br />
          <Typography gutterBottom variant="h3" component="h2">
            Ouro
          </Typography>
          <Typography color="textPrimary" variant="body1" component="p" sx={{ paddingBottom: "0.5rem" }}>
            Responsive corporate website with client portal for management 
            and technology company.
          </Typography>
          <Link href="/ouro" variant="h5">View Case Study</Link>
          <br />
          <div style={{ paddingTop: "1rem" }}>
          <Button
            href="https://github.com/CholeM/ouro-app" 
            color='primary' 
            variant='contained'
            target="_blank"
          >
            View on GitHub
          </Button>
            {' '}
          <Button
            href="https://ouro-app.vercel.app/" 
            color='primary' 
            variant='contained'
            target="_blank"
          >
            View Live Demo
          </Button>
          </div>
        </Grid>
      </Grid>


      <Grid container direction="row" justifyContent="center">
        <Card>
          <CardActionArea href="/work">
            <CardMedia 
              component="img"
              image="/images/Work/AnimeKonExpoWebsite.png"
              sx={{ maxWidth: "628px" }}
            />
            <CardContent>
              <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
                Client Work
              </Typography>
              <Typography variant="body1" component="p" textAlign="center" color="#1e1e1e" gutterBottom>
                Explore a selection of projects I"ve worked on for clients across various
                industries.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  </PortBox>
);

export default Portfolio;