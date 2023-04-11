import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProjectSec = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    padding: theme.spacing(7, 0, 6),
    color: '#1E1E1e',
  },
}));

const ProjectInfo = styled(Grid)(() => ({
  paddingBottom: '0.4rem',
}));

const OuroProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#8EABD3" }}>
      <img src="/images/Ouro/Ouro-App.png" style={{ maxWidth: '790px' }} />
    </Grid>
    <Container maxWidth='lg' sx={{ paddingTop: "1rem" }}>
      <Typography variant='h3' component='h2' align='left' gutterBottom>
        Ouro
      </Typography>
      <Typography variant='subtitle1' paragraph gutterBottom sx={{ paddingBottom: '1rem' }}>
        Corporate website and client portal for IT consulting and support services 
        company
      </Typography>
      <Grid container spacing={5} direction="row" sx={{ paddingBottom: '1rem' }}>
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

      <Grid container spacing={2} direction='row' sx={{ paddingBottom: '1rem' }}>
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
              Tools
            </Typography>
            <Typography variant='p'>
              Figma, NextJs, Microsoft Teams, AWS Lightsail
            </Typography>
          </ProjectInfo>
        </Grid>
      </Grid>

      <hr />
      <Grid container direction='column' sx={{ paddingTop: '2rem' }}>
        <Typography variant='h4' component='h3' gutterBottom>
          Solution for Company
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Build a custom system that Ouro staff, potential clients and partners can use. Create 
          a professional theme that aligns with Ouro's brand. <strong>Make the website 
          responsive so clients and partners can view it on the go.</strong>
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The client portal would be accessible to clients and approved employees. <strong>Include 
          the necessary tools that allow for the setting of a client's status from active to 
          inactive.</strong> These tools were important due to the subscription-based nature of 
          Ouro's products. Access must be able to be revoked when need be.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
        <strong>The client would be able to do the following:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Upload files and documents to the Ouro systems</li>
          <li>Download newsletters</li>
          <li>Download files uploaded by Ouro</li>
          <li>Download product updates</li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom>
        <strong>Ouro would be able to do the following:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Upload client files, product updates and newsletters to the Ouro systems</li>
          <li>Download client files</li>
          <li>Disable client accounts</li>
          <li>Create client accounts</li>
          <li>Reset client passwords</li>
        </ul>
        <Grid container direction="row" sx={{ paddingBottom: '1rem' }} wrap='nowrap' alignItems='flex-end'>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/Ouro/Upload.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">
              Upload Files Process
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/Ouro/Download.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">
              Download Files Process
            </Typography>
          </Grid>
        </Grid>

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Contributions / Impact
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Contributions to the Team
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I worked independently analyzing user research, wireframing, and iterating 
          with stakeholder feedback to create a final prototyped solution. Once 
          approved, I also developed the website and deployed it.
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Impact
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          After launching in 2021, <strong>traffic increased to the site by 67%, 
          with a decreased bounce rate of 55%</strong>. The company also received 
          positive feedback from clients and partners who utilized the client portal.
        </Typography>

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Design
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I researched similar corporate website designs and possible client portal 
          designs. I kept in mind what the client required for their site.
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Low-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I proceeded with sketching initial designs for the website. After multiple iterations and 
          refinement, I developed low-fidelity wireframes. I presented the lo-fi wireframes to the 
          Ouro stakeholders and explained the process and low-level design. Once satisfied with the 
          presentation, I created the high-fidelity wireframe and the prototype.
        </Typography>
        <Grid container direction="row" wrap='nowrap' spacing={1} alignItems="flex-end">
          <Grid item container direction="column">
            <img src='/images/Ouro/Low-Website-1.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Homepage / About Us
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/Ouro/Low-Website-2.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Services / Products
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" wrap='nowrap' spacing={1} alignItems="flex-end">
          <Grid item container direction="column">
            <img src='/images/Ouro/Low-Portal-1.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Login / Dashboard
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/Ouro/Low-Portal-2.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              My Products / My Uploads
            </Typography>
          </Grid>
        </Grid>

        <Typography variant='h5' component='h4' gutterBottom>
          High-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I iterated to ensure I followed design principles and stayed true to the 
          company's branding. I presented these hi-fi wireframes to Ouro and allowed 
          them to test the prototype. Afterwards, I proceeded with the development process.
        </Typography>
        <Grid container direction="row" wrap='nowrap' spacing={1} alignItems="flex-end">
          <Grid item container direction="column">
            <img src='/images/Ouro/Website-1.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Homepage / About Us
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/Ouro/Website-2.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Services / Products
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" wrap='nowrap' spacing={1} alignItems="flex-end">
          <Grid item container direction="column">
            <img src='/images/Ouro/Portal-1.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Login / Dashboard
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/Ouro/Portal-2.png' width='100%' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              My Products / My Uploads
            </Typography>
          </Grid>
        </Grid>

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
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

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Testing
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Usability Testing
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I conducted user testing to get feedback on the website and client portal. 
          The study was an unmoderated usability study. I conducted the study among the 
          stakeholders at their leisure. They presented any issues or concerns that they may 
          have encountered.
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom sx={{ paddingTop: '0.5rem' }}>
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

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Results
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Overall, the project was a success. The new website and client portal met the client's 
          goals and receive positive user feedback. <strong>The use of custom development 
          allowed for a tailored solution that fit the specific needs of Ouro, and the 
          incorporation of user feedback throughout the design and development process 
          ensured that the result was intuitive and user-friendly.</strong>
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          One area for improvement in future projects is establishing clear timelines and 
          project scope from the beginning to manage client expectations and avoid any 
          misunderstandings or changes in direction that could prolong the development process. 
          Additionally, incorporating more user research and testing could further enhance the 
          usability and effectiveness of the final product.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          In conclusion, the Ouro website revamp project was a successful collaboration 
          between myself and the client, resulting in a professional, user-friendly website 
          and client portal that met the client's needs and goals.
        </Typography>
      </Grid>
      
      <Grid container direction='row' sx={{ paddingBottom: '1rem' }}>
        <Grid item md={4}>
          <Typography variant='h4' component='h4' color="#6299E4">
            <strong>55%</strong>
          </Typography>
          <Typography variant='h5' component='h5' color="#275594">
          <strong>Decreased Bounce Rate</strong>
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant='h4' component='h4' color="#6299E4">
          <strong>67%</strong>
          </Typography>
          <Typography variant='h5' component='h5' color="#275594">
          <strong>Increased Traffic Rate</strong>
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant='h4' component='h4' color="#6299E4">
          <strong>60+</strong>
          </Typography>
          <Typography variant='h5' component='h5' color="#275594">
            <strong>Positive Ouro Client Reviews</strong>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </ProjectSec>
);

export default OuroProject;