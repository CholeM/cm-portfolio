import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
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

const ThePubProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#F9B03E" }}>
      <img src="/images/ThePub/ThePub.png" style={{ maxWidth: '790px' }} />
    </Grid>

    <ProjectSummary container direction="column">
      <Container>
        <Typography variant='h2' component='h2' align='left'>
          ThePub
        </Typography>
        <Typography variant='subtitle1' paragraph gutterBottom className='pb-1'>
          Designing a mobile app for those who want to order from ThePub restaurant
          while on the go.
        </Typography>

        <Grid container direction='row' spacing={3}>
        <Grid item md={9}>
          <Typography variant='h4' component='h3' gutterBottom>
            ThePub's Problem
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            ThePub is a popular restaurant in Toronto. In this era, they want to 
            expand their business’ online presence. Their target audiences are busy, 
            young professionals and remote workers.
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            To get their order during peak hours, users have long wait times. Busy 
            professionals and remote workers do not have easy access to the 
            restaurant and must travel to eat there.
          </Typography>
          <Typography variant='h6' paragraph gutterBottom>
            <i>
              “How might we allow potential customers to order and receive 
              their food from the restaurant with ease?”
            </i>
          </Typography>
          <Typography variant='h4' component='h3' gutterBottom>
          Solution for Food Ordering
        </Typography>

        <Typography variant='body1' paragraph gutterBottom>
          ThePub, a mobile application that allows users to order from
          the restaurant of the same name. Users will be be able to order
          and have their desired meal ready for pick-up, delivery or 
          dine-in.
        </Typography>
          <Typography variant='h4' component='h3' gutterBottom>
            Results
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            The mobile application for ThePub was designed with accessibility 
            in mind to ensure usability for people with disabilities. The app 
            has been successful in addressing user needs and has received 
            positive feedback, expected to contribute to the expansion of the 
            restaurant's online presence. The team intends to measure the success 
            of the product by conducting a final usability study, looking at app
            downloads, and user engagement.
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
              UX Designer, Project Manager, UX Manager, Marketing Manager
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
              1 month
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
        <Typography variant='h3' component='h3' className='pt-1'>
          Research
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          User Interviews and Surveys
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          ThePub team decided to use surveys and user interviews to gather 
          feedback from their regular patrons, who are considered busy, 
          working adults aged between 21-50 years old. The UX researcher 
          also conducted interviews with a smaller group of survey participants 
          to gain a better understanding of the group and discovered that 
          factors like obligations, disabilities, and dietary concerns posed 
          challenges in ordering food from ThePub, in addition to time 
          constraints.
        </Typography>

        <Typography variant='body1' paragraph>
          <strong>Pain points:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            Food ordering platforms are not well-equipped with assistive technology.
          </li>
          <li>
            Busy customers do not have time to order from The Pub via phone.
          </li>
          <li>
            It is not easy to place orders during ThePub’s peak hours, making it frustrating for customers.
          </li>
          <li>
            Users want to know more about the food they order and customize it.
          </li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom className='pb-1'>
          The user interviews and surveys conducted were crucial in the UX design process. 
          It helped the team understand the users' needs, behaviours, and attitudes. By gathering 
          insights about users, we can create a design that is more effective, efficient, 
          and satisfying to use.
        </Typography>

        <Typography variant='h4' component='h4' gutterBottom>
          Competitive Analysis
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>During the competitive analysis process, I determined that three apps 
            filled the needs of our users. These are:</strong>
        </Typography>

        <Grid container direction='row' spacing={3} className="pb-2">
          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>Chipotle</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Mexican fast-food chain from America, is an indirect competitor.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>Jack Astor's Bar and Grill</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Rrestaurant chain from Canada that provides a fun environment,
                 is a direct competitor.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h6" color="Highlight" gutterBottom>Red Lobster</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Seafood restaurant chain from America, is an indirect competitor.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='h5' paragraph textAlign='center' className='pb-2'>
          <i>
            The goal of the competitive audit compare the ordering process and ease
            of use of each competitior's app. We determined the following during the audit:
          </i>
        </Typography>

        <Grid container direction='row' spacing={3} className="pb-2">
          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>1</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Each service had one of the following: strong brand identity, great 
                mobile experience, easy-to-use or unique features
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>2</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                There was a lack of accessibility on their mobile app or website
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction='column' lg={4}>
            <Grid item>
              <Typography variant="h2" color="Highlight" textAlign='center'>3</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                For some competitiors, the user flow wasn't always intuitive
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='body1' paragraph gutterBottom>
          ThePub team identified gaps and weaknesses in our competitors, 
          allowing us to determine how to improve our product. We plan to make
           the app more accessible for users with disabilities by including alt 
           text on images and optimizing the app for screen reader use. Additionally, 
           we aim to provide an intuitive ordering process that is similar to 
           in-person ordering at the restaurant.
        </Typography>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Our Users
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Based on the research insights and competitive analysis, I developed two 
          persona illustrating our target users, their goals and pain points.
        </Typography>
        <Grid item container direction='row' spacing={2}>
          <Grid item md={6}>
            <img src='/images/ThePub/User Persona - Alyssa.png' className='projectImg' />
          </Grid>
          <Grid item md={6}>
            <img src='/images/ThePub/User Persona - Ben.png' className='projectImg' />
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction='column'>
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Visualising the User Journey
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Based on the user research, I created a user journey table to understand the crucial 
          pain points and mindsets one may encounter while ordering from The Pub.
        </Typography>
        <Grid container justifyContent='center'>
          <img src='/images/ThePub/user-journey-map.png' className='projectImg' />
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Prototype
        </Typography>
        <Grid item container direction="row" spacing={3} className='pb-2'>
          <Grid item container direction="column" lg={4}>
            <Typography variant='h4' component='h4' gutterBottom>
              Paper Wireframes
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              Drafting iterations of each screen on paper ensured that necessary 
              elements that made it to the digital wireframe would be well-suited 
              to address the user's pain points. For the home screen, I focused on 
              an easy ordering process.
            </Typography>
          </Grid>
          <Grid item lg={8}>
            <Grid container justifyContent='center'>
              <img src='/images/ThePub/paper-wireframe.png' className='projectImg' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction="row" spacing={3} className='pb-2'>
          <Grid item lg={8}>
            <Grid item container direction="column">
              <img src='/images/ThePub/Original.png' className='projectImg' />
            </Grid>
          </Grid>
          <Grid item container direction="column" lg={4}>
            <Typography variant='h4' component='h4' gutterBottom>
              Low-Fidelity Wireframes
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              I refined the paper wireframes of the mobile app, and after multiple 
              iterations, I developed the low-fidelity wireframes.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className='pb-3'>
          <Typography variant='h4' component='h4' gutterBottom>
            Usability Study
          </Typography>
          <Typography variant='body1' paragraph gutterBottom>
            I then conducted a usability study based on these wireframes. The feedback 
            received aided in further refining and developing the high-fidelity wireframes.
            The findings of the first and second round are as follows:
          </Typography>
          <Grid container direction="row">
            <Grid item container direction="column" lg={6}>
              <Typography variant='h6' component='h5' color="Highlight" gutterBottom>
                Round 1 Findings
              </Typography>
              <ol style={{ listStylePosition: "inside" }}>
                <li>Users want to order meals quickly</li>
                <li>Users want to customize their meals</li>
                <li>Users want a pickup/delivery option</li>
              </ol>
            </Grid>
            <Grid item container direction="column" lg={6}>
              <Typography variant='h6' component='h5' color="Highlight" gutterBottom>
                Round 2 Findings
              </Typography>
              <ol style={{ listStylePosition: "inside" }}>
                <li>Meal customization process was confusing</li>
                <li>The profile creation was not straightforward</li>
                <li>There was no way to edit meal orders</li>
              </ol>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction="row" spacing={3}>
          <Grid item container direction="column" lg={4}>
            <Typography variant='h4' component='h4' gutterBottom>
              Refined Wireframes
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              After conducting an initial usability study, the author improved 
              the customization section of their app by making it more distinct 
              and providing additional information. However, a second study 
              revealed that users still found the process tedious. To address 
              this, the author added a "quick-add meals" option to the homepage 
              to streamline the ordering process.
            </Typography>
          </Grid>
          <Grid item lg={8}>
            <Grid container justifyContent='center'>
              <img src='/images/ThePub/Updated.png' className='projectImg' />
            </Grid>
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
          Converting the low-fidelity into high-fidelity mockups, I iterated upon the design. 
          I followed design principles and stayed true to the branding provided by the marketing team.
        </Typography>

        <Grid container direction="row" className="pb-1">
          <Grid item lg={4}> 
            <Typography variant='h6' color='Highlight' paragraph>Homepage, Meal, Favourites</Typography>
            <Typography variant='body1' paragraph>
              When a user enters the app, they are met with the homepage of the app, displaying
              the day's special for quick ordering, the ability to browse by category and popular
              meals.
              They are also able to add meals to their favourites lists, and customise the meal before
              adding it to their order.
            </Typography>
          </Grid>
          <Grid item lg={8}>
            <img src="/images/ThePub/Homepage-Meal-Favorites.png" className='projectImg' />
          </Grid>
        </Grid>

        <Grid container direction="row" className="pb-1">
          <Grid item lg={8}>
            <img src="/images/ThePub/Order-Process.png" className='projectImg' />
          </Grid>
          <Grid item lg={4}> 
            <Typography variant='h6' color='Highlight' paragraph>Ordering Process</Typography>
            <Typography variant='body1' paragraph>
              The order process is simplified for the user, they can add meals to their order,
              check out, choose their dining experience, enter their payment details and 
              submit their order.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Accessibility Concerns
        </Typography>
        
        <Typography variant='body1' paragraph gutterBottom>
          It's important to consider accessibility concerns when designing products or services. 
          I strive to incorporate inclusive design practices that ensure usability for all, 
          including people with disabilities such as visual, auditory, physical, or 
          cognitive impairments.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>For the app, this has been addressed via the following:</strong>
        </Typography>
        <ol style={{ listStylePosition: "inside" }}>
          <li>
            Added alt text to images for screen readers.
          </li>
          <li>
            Used icons to help make navigation easier.
          </li>
          <li>
            Used distinct colours to differentiate between selected/highlighted text and buttons. 
          </li>
        </ol>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h3' component='h3' gutterBottom>
          Going Forward
        </Typography>
        <Typography variant='h4' component='h4' gutterBottom>
          Takeaways
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item container direction="column" md={6}>
            <Typography variant='h5' paragraph gutterBottom>
              Impact
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              The app makes users feel like ThePub really wants to meet 
              their needs.
            </Typography>
            <Typography variant='h6' gutterBottom>
              <i>
                “This app makes it so easy to customize my meal. I’m able to 
                exclude the ingredients I am allergic to. I would definitely 
                use this when I’m on the go and need a fast, healthy meal!”
              </i>
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              - Peer feedback participant
            </Typography>
          </Grid>
          <Grid item container direction="column" md={6}>
            <Typography variant='h5' paragraph gutterBottom>
              What I learned
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              Designing an app is a complex process that requires continuous 
              refinement to meet user needs. The initial designs serve as a 
              foundation for further development, and peer feedback and usability 
              studies are crucial to the app's design and overall development.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='h5' component='h5' gutterBottom>
          Next Steps
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>In the future, I plan to take the following steps for the app:</strong>
        </Typography>
        <ol style={{ listStylePosition: "inside" }}>
          <li>Conduct more user research to determine any new areas of need</li>
          <li>
            Conduct another round of usability studies to determine if all pain 
            points have been addressed and corrected
          </li>
        </ol>
      </Container>
    </ProjectText>

    <ProjectText container direction="column">
      <Container>
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Retrospective
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          I am proud of achieving accessibility and customization in the app, 
          but faced challenges in finding the right balance between simplicity 
          and customization. They learned about the importance of incorporating 
          accessibility features from the start, balancing simplicity and 
          customization, and testing and iterating on designs for future 
          projects.<br /><br />

          Working with a team contributed to me a growing a designer, as it was important
          to get feedback from other members of the UX team.
        </Typography>
      </Container>
    </ProjectText>
    <Container maxWidth='lg' sx={{ paddingTop: "1rem" }}>
      
      <Grid container direction='column' sx={{ paddingTop: '2rem' }}>

              
        
      </Grid>
    </Container>
  </ProjectSec>
);

export default ThePubProject;