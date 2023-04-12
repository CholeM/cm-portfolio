import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
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

const SaveUpProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#77BB7D" }}>
      <img src="/images/SaveUp/SaveUp Cover.png" style={{ maxWidth: '790px' }} />
    </Grid>
    <Container maxWidth='lg' sx={{ paddingTop: "1rem" }}>
      <Typography variant='h3' component='h2' align='left' gutterBottom>
        Save Up
      </Typography>
      <Typography variant='subtitle1' paragraph gutterBottom sx={{ paddingBottom: '1rem' }}>
        Mobile App for empowering the youth's financial future
      </Typography>

      <Grid container direction='row' sx={{ paddingBottom: '1rem' }}>
        <Grid item md={9}>
          <Typography variant='h4' component='h3' gutterBottom>
            The Problem in My Country Barbados
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            Many young Barbadians struggle to meet their financial goals 
            due to a lack of financial literacy, difficulty managing 
            expenses, and limited access to resources. 
          </Typography>
          <Typography variant='h6' paragraph gutterBottom>
            <i>
              “How might we address these challenges and empower young 
              Barbadians to take control of their finances and build a 
              strong foundation for their future?”
            </i>
          </Typography>
        </Grid>
        <Grid item md={3} container direction='column'>
          <ProjectInfo item>
            <Typography variant='h6'>
              Project Type
            </Typography>
            <Typography variant='p'>
              Design Challenge, Individual Project
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Deliverables
            </Typography>
            <Typography variant='p'>
              Mobile App Prototype
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Duration
            </Typography>
            <Typography variant='p'>
              2 months
            </Typography>
          </ProjectInfo>
          <ProjectInfo item>
            <Typography variant='h6'>
              Tools
            </Typography>
            <Typography variant='p'>
              Figma
            </Typography>
          </ProjectInfo>
        </Grid>
      </Grid>

      <hr />
      <Grid container direction='column' sx={{ paddingTop: '2rem' }}>
        <Typography variant='h4' component='h3' gutterBottom>
          Solution for Budgeting
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          SaveUp is a mobile application that allows users to set financial 
          goals and track expenses and provides a community of peers and 
          information on finance topics.
        </Typography>
       
        <Typography variant='h4' component='h3' gutterBottom>
          Design Thinking Process
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I adopted the design thinking process, which aided me in 
          developing the best possible solution for our users.
        </Typography>
        <Grid container direction="row" sx={{ paddingBottom: '1rem' }}>
          <Grid item container direction="column">
            <img src="/images/SaveUp/process.png" width="100%" />
          </Grid>
        </Grid>

        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Empathy
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          User Interviews and Surveys
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          To inform the design of our app, I <strong>conducted user interviews and surveys</strong> 
          with young Barbadians. These Barbadians ranged in age from 18 - 30 years old; but with 
          differing educational backgrounds and occupations.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I recruited 8 participants through social media, and <strong>conducted interviews in 
          person and via video conferencing</strong>. I asked open-ended questions to 
          understand their financial goals, challenges, habits, and attitudes towards 
          budgeting and saving.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          In addition to interviews, I also designed and distributed surveys to a larger 
          sample of participants. I constructed the survey questions to be structured, 
          with <strong>close-ended questions about financial behaviours, knowledge, and 
          demographic information</strong>.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Through these research methods, I identified common pain points and challenges 
          young Barbadians face in managing their finances. These insights helped me 
          develop and refine the features of the budgeting and saving app, ensuring 
          that the app meets the needs and preferences of our target users.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <b>Some insights resulting from the research include:</b>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Women were more likely to track their spending.</li>
          <li>Over 80% did not have a financial plan.</li>
          <li>90% have not saved money in a period longer than a year.</li>
          <li>
            Over 70% of participants were interested in using a mobile 
            app to track their expenses and progress towards financial goals.
          </li>
          <li>
            Young Barbadians expressed interest in learning more about financial 
            planning and investing. However, they often feel intimidated or overwhelmed 
            by the topic.
          </li>
        </ul>
            
        <Typography variant='body1' paragraph gutterBottom>
          Overall, the user interviews and surveys played a critical role in our UX design 
          process, allowing us to understand our users' needs and design a solution that is 
          both effective and engaging.
        </Typography>
       
       
        <Typography variant='h5' component='h4' gutterBottom>
          Competitive Analysis
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          During the competitive analysis process, I determined that there was no local 
          app that filled the needs of our users. As such, I widen my scope and look 
          beyond Barbados. These similar tools: <strong>Mint</strong>,{' '}
          <strong>EveryDollar</strong>,{' '}<strong>YNAB</strong>.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <b>I determined the following during my analysis:</b>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Every service offered users a way to track spending and set financial goals.</li>
          <li>Allowed users to sync with external accounts.</li>
          <li>Every service came with an attached fee, especially for premium services.</li>
          <li>Some did not have bill management.</li>
          <li>There was no currency selector for the Barbadian dollar.</li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom>
          <b>The advantage of SaveUp would be:</b>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Tailored to the Barbadian public.</li>
          <li> Offers easy-to-understand information and advice relating to finance.</li>
          <li>The separation of bills from expenses.</li>
        </ul>

        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Define
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          User Personas
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Based on the research insights, I developed two primary personas exemplifying 
          our target users, especially their goals and pain points.
        </Typography>
        <Grid item container direction='row' spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item md={6}>
            <img src='/images/SaveUp/User Persona - Jennifer.png' width='100%' />
          </Grid>
          <Grid item md={6}>
            <img src='/images/SaveUp/User Persona - George.png' width='100%' />
          </Grid>
        </Grid>
       
        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Ideate
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Affinity Mapping
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          After gathering information during the Empathy stage via user interviews and surveys, 
          I created an affinity diagram. This map helped me to gain a better understanding of 
          the users’ needs and problems. From there, I created possible solutions for each need.
        </Typography>
        <Grid container sx={{ paddingBottom: '1rem' }}>
          <img src='/images/SaveUp/SaveUp Affinity Map.png' width='100%' />
        </Grid>

        <hr />

        <Typography variant='h5' paragraph gutterBottom sx={{ paddingTop: "1rem" }}>
          User Flow
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I was determined to make app navigation as seamless and simple as possible.
        </Typography>

        <Grid container direction='row' sx={{ paddingBottom: '1rem' }}>
          <Grid item container direction='column'>
            <img src='/images/SaveUp/SaveUp Task Flow.png' width="100%" />
          <Typography variant="subtitle1" align="center">Task Flow</Typography>
          </Grid>
        </Grid>
        
        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Prototype
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Low-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I began the process of conceptualizing the mobile app. After multiple iterations 
          and refinement, I developed low-fidelity wireframes.
        </Typography>

        <Grid container direction="row">
          <Grid item container direction="column">
            <img src='/images/SaveUp/initial low fidelity.png' width="100%" />
            <Typography variant='subtitle1' align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Initial Low Fidelity Wireframes
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/SaveUp/final low fidelity.png' width="100%" />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem" }}>
              Refined Low Fidelity Wireframes
            </Typography>
          </Grid>
        </Grid>

        <Typography variant='h5' component='h4' gutterBottom  sx={{ paddingTop: '1rem'}}>
          Visual Design
        </Typography>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
              <img src='/images/SaveUp/visual design.png' width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">
              Visual Design: Colors, Fonts
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='h5' component='h4' gutterBottom>
          High-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Between the low-fidelity and high-fidelity wireframes, I iterated upon the design. 
          I followed design principles and stayed true to the branding that I created for the app.
        </Typography>
        <Grid container direction="row" sx={{ paddingBottom: '1rem' }}>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/onboarding.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Onboarding</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/Login sign up.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Login / Sign Up</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/Add Savings Goal.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Add Savings Goal</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/Add budget.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Add Budget / Expense</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/Add bill.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Add Bill</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/SaveUp/Community.png" width="100%" />
            <Typography variant="subtitle1" gutterBottom align="center">Community</Typography>
          </Grid>
        </Grid>

        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Testing
        </Typography>
        <Typography variant='h5' paragraph gutterBottom>
          Usability Testing
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          To get feedback on the budgeting app, I conducted user testing.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The study was an unmoderated usability study to get the user’s true 
          feelings about the app without my input. Since the app targeted Barbadians, 
          it was conducted in Barbados remotely so that users could feel at ease. 
          I chose 20 participants for the study, each given 60 minutes to test the app.
        </Typography>

        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>All users were satisfied with the look and feel of the app.</li>
          <li>19 out of 20  users were able to complete the sign and login process.</li>
          <li>50% of the users did not find the tips and insights to be as engaging or noticeable.</li>
          <li>The majority of the users enjoyed the goals-setting section the most.</li>
          <li>It was difficult for users to edit their expenses, bills and goal deposits.</li>
        </ul>

        <Typography variant='h5' component='h4' gutterBottom>
          Insights
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Thanks to the feedback from real-time users, I can proceed with another 
          round of iterating and improving the app. Some insights I determined:
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Bring more focus on the tips and insights for users.</li>
          <li>
            Edit expenses, bills, goals and deposits more intuitive for 
            users by adding a button.
          </li>
        </ul>

        <hr />
              
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Retrospective
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          One of the biggest challenges of this project was balancing the needs 
          of the target audience with the constraints of the Barbados banking system.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Designing an app (or any tool) for social good requires dedication and 
          multiple revisions. This dedication ensures the product accomplishes 
          its goal instead of marginalizing the target audience. <strong>One must 
          listen and internalize the user feedback to meet their needs.</strong>
        </Typography>
      </Grid>
    </Container>
  </ProjectSec>
);

export default SaveUpProject;