import { styled } from '@mui/material/styles';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
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

const SaveUpProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#77BB7D" }}>
      <img src="/images/SaveUp/SaveUp Cover.png" style={{ maxWidth: '790px' }} />
    </Grid>
    
    <ProjectSummary container direction="column">
      <Container>
        <Typography variant='h2' component='h2' align='left' gutterBottom>
          Save Up
        </Typography>
        <Typography variant='subtitle1' paragraph gutterBottom className='pb-1'>
          Designing a mobile app that helps the youth to save and make better financial decisions.
        </Typography>

        <Grid container direction='row' spacing={4}>
          <Grid item md={9}>
            <Typography variant='h4' component='h3' gutterBottom>
              The Problem in My Country Barbados
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              Many young Barbadians struggle to meet their financial goals 
              due to a lack of financial literacy, difficulty managing 
              expenses, and limited access to resources. 
            </Typography>
            <Typography variant='h5' paragraph gutterBottom className='pb-1'>
              <i>
                “How might we address these challenges and empower young 
                Barbadians to take control of their finances and build a 
                strong foundation for their future?”
              </i>
            </Typography>
          
            <Typography variant='h4' component='h3' gutterBottom>
              Solution for Budgeting
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              SaveUp is a mobile application that allows users to set financial 
              goals and track expenses and provides a community of peers and 
              information on finance topics.
            </Typography>
            <Typography variant='h4' component='h3' gutterBottom>
              Results
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              The app's look and feel was satisfactory for all users, and 19 out 
              of 20 users were able to complete the sign and login process. However, 
              half of the users did not find the tips and insights engaging or noticeable. 
              The majority of users enjoyed the goal-setting section the most, but had 
              difficulty editing their expenses, bills, and goal deposits.
            </Typography>
          </Grid>
          <Grid item md={3} container direction='column'>
            <ProjectInfo item>
              <Typography variant='h6'>
                Project Type
              </Typography>
              <Typography variant='p'>
                Design Challenge, Team Project
              </Typography>
            </ProjectInfo>
            <ProjectInfo item>
              <Typography variant='h6'>
                Team
              </Typography>
              <Typography variant='p'>
                UX Designer, Project Manager, Design Team
              </Typography>
            </ProjectInfo>
            <ProjectInfo item>
              <Typography variant='h6'>
                Role
              </Typography>
              <Typography variant='p'>
                UX Designer
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
      </Container>
    </ProjectSummary>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' color="primary" className="pt-1 pb-0-5">
          Research
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          User Interviews and Surveys
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The SaveUp team was interested in understanding the financial issues that affected young
          Barbadians. User interviews and surveys were conducted among the target group, and questions 
          were formulated around participants financial goals, challenges, habits and attitudes towards 
          saving and budgeting. The team used the insights gathered from the research to refine app 
          features to meet the needs and preferences of the target users.
        </Typography>

        <Typography variant='body1' paragraph gutterBottom>
          <strong>Research insights:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
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

        <Typography variant='h4' component='h4' gutterBottom>
          Competitive Analysis
        </Typography>
        <Grid container direction='row' wrap='nowrap' spacing={3} className="pb-2">
          <Grid item container direction='column'>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>EveryDollar</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Budgeting app that offers free version and paid version. The free version carries for
                basic features. The paid version offers additional advanced features.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column'>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>Mint</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Budgeting app that helps users track their expenses, set financial goals, and save money. 
                Offers a free trial and a paid version that costs $84 per year.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column'>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>YNAB</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Budgeting app that allows users to create a budget, track their spending, and manage 
                their investments. Free to use, and offers personalized financial advice 
                based on user spending habits.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='h5' paragraph textAlign='center' className='pb-2'>
          <i>
            We wanted to ensure that we kept SaveUp competitive when compared to the larger market space 
            by studying other budgeting apps. Through this competitive analysis, we noticed some key takeaways: 
          </i>
        </Typography>

        <Grid container direction='row' spacing={3}>
          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>1</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                The foundation of each service was offering users a way to track spending and set 
                financial goals.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>2</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                While all three services offer a free version, some of the more advanced features 
                require users to pay a monthly or yearly subscription fee. Mint, in particular, 
                displays advertisements for financial products, which can be annoying for some users.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>3</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Some users find that the budgeting categories provided by these apps are too general 
                and don't allow for enough customization to reflect their unique financial situation.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Our Users
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          From the insights and data gathered, we were able to come up with the user persona 
          and prioritize features to support them. 
        </Typography>

        <Grid item container direction='row' spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item md={6}>
            <img src='/images/SaveUp/User Persona - Jennifer.png' width='100%' />
          </Grid>
          <Grid item md={6}>
            <img src='/images/SaveUp/User Persona - George.png' width='100%' />
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction='column'>
      <Container>
        <Typography variant='h3' component='h3' gutterBottom sx={{ paddingTop: "1rem" }}>
          Visualising the User Journey
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The user journey showcases the significant steps taken by users, starting from the 
          moment they access the SaveUp app.
        </Typography>
        <Grid container direction='column'>
          <img src='/images/SaveUp/SaveUp Task Flow.png' width="100%" />
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Prototype
        </Typography>
        <Grid item container direction="row" spacing={3} className='pb-1-5'>
          <Grid item container direction="column" lg={4}>
            <Typography variant='h4' component='h4' gutterBottom>
              Low-Fidelity Wireframes
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              I visualised the flow into sketches. After multiple iterations 
              and refinement, I developed low-fidelity wireframes.
            </Typography>
            <Typography variant='body1'>
              <strong>Goals</strong>
            </Typography>
            <ul style={{ listStylePosition: "inside" }}>
              <li>Brainstorm content to show on the homepage</li>
              <li>Consider how to best showcase the user's data at a glance</li>
            </ul>
          </Grid>
          <Grid item lg={8}>
            <img src='/images/SaveUp/initial low fidelity.png' width="100%" />
          </Grid>
        </Grid>
        
        <Typography variant='h5' paragraph textAlign='center' className='pb-1'>
          <i>
            Feedback indicated that the home page, and onboarding process needed improvements.
          </i>
        </Typography>

        <Grid item container direction="row" spacing={3}>
          <Grid item lg={8}>
            <img src='/images/SaveUp/final low fidelity.png' width="100%" />
          </Grid>
          <Grid item container direction="column" lg={4}>
            <Typography variant='h4' component='h4' gutterBottom>
                Refined Wireframes
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              I applied this feedback and updated the lowfidelity wireframes.
            </Typography>
            <ul style={{ listStylePosition: "inside" }}>
              <li>Refine the home screen</li>
              <li>Add an onboarding process</li>
              <li>Refine the visual design</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>


    <ProjectText container direction="column">
      <Container>
        <Typography variant='h4' component='h4' gutterBottom>
          Visualising the Experience
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Between the low-fidelity and high-fidelity wireframes, I iterated upon the design. 
          I followed design principles and stayed true to the branding that I created for the app.
        </Typography>
        <Grid container direction="row" className="pb-1">
          <Grid item lg={8}>
            <img src='/images/SaveUp/onboarding.png' width="100%" />
          </Grid>
          <Grid item lg={4}> 
            <Typography variant='h6' color='Highlight' paragraph>Onboarding</Typography>
            <Typography variant='body1' paragraph>
              When a user enters the app for the first time they are welcome with a 
              minimal, intuitive and clean onboarding guiding them through the first 
              phase of the app.
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className="pb-1">
          <Grid item lg={4}> 
            <Typography variant='h6' color='Highlight' paragraph>Add Savings Goal</Typography>
            <Typography variant='body1' paragraph>
              From the app homepage, users can begin the process of adding their first savings goal.
              The goal is easily trackable from the homepage.
            </Typography>
          </Grid>
          <Grid item lg={8}>
            <img src='/images/SaveUp/add savings goal.png' width="100%" />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={9}>
            <img src='/images/SaveUp/community.png' width="100%" />
          </Grid>
          <Grid item lg={3}> 
            <Typography variant='h6' color='Highlight' paragraph>Community</Typography>
            <Typography variant='body1' paragraph>
              Users have access to the community for added information and help on achieving
              their savings goals. The community is divided into forums and articles.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>
    
    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Testing
        </Typography>
        <Typography variant='h4' paragraph gutterBottom>
          Usability Testing
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          The team finally conducted an unmoderated usability study with 20 participants 
          remotely in Barbados to get feedback on SaveUp. Each participant 
          was given 60 minutes to test the app, ensuring that users could share their 
          honest opinions.
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          Insights
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Thanks to the feedback from real-time users, we can proceed with another 
          round of iterating and improving the app. Some insights we determined:
        </Typography>
        <ul style={{ listStylePosition: "inside"}}>
          <li>Bring more focus to the tips and insights for users.</li>
          <li>
            Edit expenses, bills, goals and deposits to be more intuitive for 
            users by adding a button.
          </li>
        </ul>
      </Container>
    </ProjectText>  

    <ProjectText container direction='column'>
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
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
      </Container>
    </ProjectText>
  </ProjectSec>
);

export default SaveUpProject;