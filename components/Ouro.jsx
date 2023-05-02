import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProjectSec = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    padding: theme.spacing(7, 0, 6),
    color: '#1E1E1e',
  },
}));

const ProjectSummary = styled(Grid)(() => ({
  '&.MuiGrid-root': {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    backgroundColor: '#F5F2FF',
  },
}));

const ProjectInfo = styled(Grid)(() => ({
  paddingBottom: '0.5rem',
}));

const ProjectText = styled(Grid)(() => ({
  paddingBottom: '4rem',
}));

const OuroProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#8EABD3" }}>
      <img src="/images/Ouro/Ouro-App.png" style={{ maxWidth: '790px' }} />
    </Grid>
    <ProjectSummary container direction="column">
      <Container>
      <Typography variant='h2' component='h2' align='left'>
        Ouro
      </Typography>
      <Typography variant='subtitle1' paragraph className='pb-0-5'>
        Designing a corporate website and client portal for IT consulting and support services 
        company
      </Typography>
      <Grid container spacing={5} direction="row" className='pb-1'>
        <Grid item>
          <Button
            href="https://github.com/CholeM/ouro-app" 
            color='primary' 
            variant='contained'
            target="_blank"
          >
            View on GitHub
          </Button>
        </Grid>
        <Grid item>
          <Button
            href="https://ouro-app.vercel.app/" 
            color='primary' 
            variant='contained'
            target="_blank"
          >
            View Live Demo
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} direction='row'>
        <Grid item md={9}>
          <Typography variant='h4' component='h3' gutterBottom>
            Background
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            Ouro is an IT consulting and support company that provides 
            a wide range of services, including software development, 
            network design, cybersecurity, data backup and recovery, and IT 
            project management, and is known for its dependable and efficient 
            IT solutions.
          </Typography>

          <Typography variant='h4' component='h3' gutterBottom>
            The Problem
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            The CEO of Ouro approached me to revamp the company's website. Their 
            website at the time was outdated and with many non-functional pages. 
            The website essetianlly could not be used. They wanted the site to be 
            a hub for all information related to the company; for clients and 
            partners alike. In addition, the website should feature an updated client 
            portal in which they can easily send product updates to clients.
          </Typography>
          <Typography variant='h4' component='h3' gutterBottom>
            Solution for Ouro
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            Build a custom system for Ouro that includes a client portal accessible 
            to approved employees and clients. The portal should include tools to 
            manage client status and allow for file uploads and downloads, 
            newsletter access, and product updates. The website should be 
            responsive and reflect Ouro's brand while providing easy access to the 
            necessary features.
          </Typography>
          <Typography variant='h4' component='h3' gutterBottom>
            Results
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            After launching in 2021, <strong>traffic increased to the site by 67%</strong>, 
            with a <strong>decreased bounce rate of 55%</strong>. The company also received 
            <strong> positive feedback from over 60 different clients and partners</strong> who
            utilized the client portal.
          </Typography>
        </Grid>


        <Grid item md={3} container direction='column'>
          <ProjectInfo item>
            <Typography variant='h6'>
              Project Type
            </Typography>
            <Typography variant='p'>
              Client Project
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Deliverables
            </Typography>
            <Typography variant='p'>
              Website Prototype, code and resources, user manual, functional specification 
              document
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Duration
            </Typography>
            <Typography variant='p'>
              6 months
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
              <Typography variant='h6'>
                Team
              </Typography>
              <Typography variant='p'>
                UX Designer & Developer, Project Manager
              </Typography>
            </ProjectInfo>
            <ProjectInfo item>
              <Typography variant='h6'>
                Role
              </Typography>
              <Typography variant='p'>
                UX Designer, Developer
              </Typography>
            </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Tools
            </Typography>
            <Typography variant='p'>
              Figma, NextJs, Microsoft Teams, AWS Lightsail
            </Typography>
          </ProjectInfo>
        </Grid>
      </Grid>
      </Container>
    </ProjectSummary>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom className='pt-1'>
          Client Portal
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The client portal would be accessible to clients and approved employees. <strong>Include 
          the necessary tools that allow for the setting of a client's status from active to 
          inactive.</strong> These tools were important due to the subscription-based nature of 
          Ouro's products. Access must be able to be revoked when need be.
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item md={6}>
          <Typography variant='body1' gutterBottom>
            <strong>The client would be able to do the following:</strong>
          </Typography>
          <ul style={{ listStylePosition: "inside" }}>
          <li>Upload files and documents to the Ouro systems</li>
          <li>Download newsletters</li>
          <li>Download files uploaded by Ouro</li>
          <li>Download product updates</li>
        </ul>
          </Grid>
          <Grid item md={6}>
            <Typography variant='body1' gutterBottom>
              <strong>Ouro would be able to do the following:</strong>
            </Typography>
            <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
              <li>Upload client files, product updates and newsletters to the Ouro systems</li>
              <li>Download client files</li>
              <li>Disable client accounts</li>
              <li>Create client accounts</li>
              <li>Reset client passwords</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems='flex-end'>
          <Grid item container direction="column" alignItems="center" lg={6}>
            <img src="/images/Ouro/Upload.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">
              Upload Files Process
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" lg={6}>
            <img src="/images/Ouro/Download.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">
              Download Files Process
            </Typography>
          </Grid>
        </Grid>        
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Contributions
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I worked together in a small team of two with the project manager. In my role as UX designer and developer
          I analyzed user research, created wireframes, and communicated with the project manager to  
          create a final prototyped solution. Once approved, I also developed the website and deployed it.
        </Typography>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
      <Typography variant='h3' component='h3' gutterBottom>
          Design
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I researched similar corporate website designs and possible client portal 
          designs. I based the website design around Ouro's required pages and color scheme.
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          Low-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I proceeded with sketching initial designs for the website. After multiple iterations and 
          refinement, I developed low-fidelity wireframes. I presented the lo-fi wireframes to the 
          Ouro stakeholders and explained the process and low-level design. Once satisfied with the 
          presentation, I created the high-fidelity wireframe and the prototype.
        </Typography>
        <Grid container direction="row" spacing={3} alignItems="flex-end">
          <Grid item container direction="column" lg={6}>
            <img src='/images/Ouro/Low-Website-1.png' className='projectImg' />
            <Typography variant="subtitle1" align="center">
              Homepage / About Us
            </Typography>
          </Grid>
          <Grid item container direction="column" lg={6}>
            <img src='/images/Ouro/Low-Portal-2.png'className='projectImg' />
            <Typography variant="subtitle1" align="center">
              Client Portal - My Products / My Uploads
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h4' component='h4' gutterBottom>
          High-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I iterated to ensure I followed design principles and stayed true to the 
          company's branding. I presented these hi-fi wireframes to Ouro and allowed 
          them to test the prototype. Afterwards, I proceeded with the development process.
        </Typography>
        <Grid container direction="row" spacing={3} alignItems="flex-end">
          <Grid item container direction="column" lg={6}>
            <img src='/images/Ouro/Website-1.png' className='projectImg' />
            <Typography variant="subtitle1" align="center">
              Homepage / About Us
            </Typography>
          </Grid>
          <Grid item container direction="column" lg={6}>
            <img src='/images/Ouro/Portal-2.png' className='projectImg' />
            <Typography variant="subtitle1" align="center">
              My Products / My Uploads
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Development
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I developed the website using NextJs, MongoDB and NodeJs. Since the design was custom, 
          I built the website's functionality from the bottom up. I chose AWS Lightsail due to its 
          scalability, and the anticipated small size of the website and the files to be uploaded. 
          The previous host provider transferred the domain to Ouro for in-house management.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>The development process took approximately 6 months of total effort. </strong>
        </Typography>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Testing
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          Usability Testing
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I conducted user testing to get feedback on the website and client portal. 
          The study was an unmoderated usability study. I conducted the study among the 
          stakeholders at their leisure. They presented any issues or concerns that they may 
          have encountered.
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          Insights
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>All users were satisfied with the look and feel of the site and portal</li>
          <li>Users found the process of logging into the portal very intuitive</li>
          <li>The stakeholders requested that the website be updated to dissuade plagiarism</li>
          <li>Users requested that there be an easy way to bulk-upload client information</li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom>
          Due to this feedback, I made another round of updates; and the website was 
          then at the stage to launch.
        </Typography>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
      <Typography variant='h3' component='h3' gutterBottom>
          Results
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The Ouro website and client portal revamp project was successful and received 
          positive user feedback due to the use of custom development and the incorporation 
          of user feedback throughout the design and development process. The project could 
          be further improved in future by establishing clear timelines and project scope 
          from the beginning and incorporating more user research and testing. The 
          collaboration between the client and developer resulted in a professional, 
          user-friendly final product.
        </Typography>
      
        <Grid container direction='row'>
          <Grid item md={4}>
            <Typography variant='h3' component='h4' color="#6299E4">
              <strong>55%</strong>
            </Typography>
            <Typography variant='h4' component='h5' color="#275594">
            <strong>Decreased Bounce Rate</strong>
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant='h3' component='h4' color="#6299E4">
            <strong>67%</strong>
            </Typography>
            <Typography variant='h4' component='h5' color="#275594">
            <strong>Increased Traffic Rate</strong>
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant='h3' component='h4' color="#6299E4">
            <strong>60+</strong>
            </Typography>
            <Typography variant='h4' component='h5' color="#275594">
              <strong>Positive Ouro Client Reviews</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>
  </ProjectSec>
);

export default OuroProject;