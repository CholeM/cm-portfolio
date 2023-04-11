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

const ThePubProject = () => (
  <ProjectSec>
    <Grid container direction="row" justifyContent="center" sx={{ backgroundColor: "#F9B03E" }}>
      <img src="/images/ThePub/ThePub.png" style={{ maxWidth: '790px' }} />
    </Grid>
    <Container maxWidth='lg' sx={{ paddingTop: "1rem" }}>
      <Typography variant='h3' component='h2' align='left' gutterBottom>
        ThePub
      </Typography>

      <Typography variant='subtitle1' paragraph gutterBottom sx={{ paddingBottom: '1rem' }}>
        Mobile App for those who want to order from ThePub restaurant
      </Typography>

      <Grid container direction='row' sx={{ paddingBottom: '1rem' }} spacing={3}>
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

      <hr />
      <Grid container direction='column' sx={{ paddingTop: '2rem' }}>
        <Typography variant='h4' component='h3' gutterBottom>
          Solution for Food Ordering
        </Typography>

        <Typography variant='body1' paragraph gutterBottom>
          ThePub, a mobile application that allows users to order from
          the restaurant of the same name.
        </Typography>

        <hr />
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Empathy
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          User Interviews and Surveys
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I examined the best user research methods for this project and the problem. 
          I determined it would be best to conduct surveys and user interviews.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I created surveys to get as much varied feedback as possible. As a result, 
          the group was individuals who frequented ThePub. Their ages ranged from 21 - 
          50 years old. I identified working adults who are always on the go as a 
          primary user group.
        </Typography>
        
        <Typography variant='body1' paragraph gutterBottom>
          To have a better understanding of this group, I proceeded to conduct 
          interviews with a smaller sample group.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I initially assumed that time would be the only limiting factor. However, 
          obligations, disabilities and dietary concerns were some of the other challenges 
          that made it difficult to order food from ThePub.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>Some pain points I determined based on the research:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
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
        <Typography variant='body1' paragraph gutterBottom>
          The user interviews and surveys I conducted were crucial in the UX design process. 
          It helped me understand the users' needs, behaviours, and attitudes. By gathering 
          insights about users, I can create a design that is more effective, efficient, 
          and satisfying to use.
        </Typography>

        <Typography variant='h5' component='h4' gutterBottom>
          Competitive Analysis
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>During the competitive analysis process, I determined that three apps 
            filled the needs of our users. These are:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>
            Chipotle - a Mexican fast-food chain from America, is an indirect competitor
          </li>
          <li>J
            Jack Astor’s Bar and Grill - a restaurant chain from Canada that provides a 
            fun environment and is a direct competitor.
          </li>
          <li>
            Red Lobster - a seafood restaurant chain from America, is an indirect competitor.
          </li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom>
          The goal of the competitive audit compare the ordering process and ease
          of use of each competitior's app.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>I determined the following during my analysis:</strong>
        </Typography>
        <ul style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>
            Each service had one of the following: strong brand identity, great 
            mobile experience, easy-to-use or unique features
          </li>
          <li>There was a lack of accessibility on their mobile app or website</li>
          <li>For some, the user flow wasn't always intuitive </li>
        </ul>
        <Typography variant='body1' paragraph gutterBottom>
          As a result of the gaps and weaknesses in the competitors, it was easier 
          to determine how to optimise ThePub.
        </Typography>
        
        <Typography variant='body1' paragraph gutterBottom>
          I want to focus on making the product more accessible for those with disabilities. 
          This includes alt text on all images and optimising the website for screen reader use. 
          Provide an intuitive approach in which to order from the website. The process would 
          be similar to in-person ordering at the same restaurant.
        </Typography>

        <hr />
        
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Define
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          User Personas
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Based on the research insights and competitive analysis, I developed two 
          persona illustrating our target users, their goals and pain points.
        </Typography>
        <Grid item container direction='row' spacing={2} sx={{ paddingBottom: "1rem" }}>
          <Grid item md={6}>
            <img src='/images/ThePub/User Persona - Alyssa.png' className='projectImg' />
          </Grid>
          <Grid item md={6}>
            <img src='/images/ThePub/User Persona - Ben.png' className='projectImg' />
          </Grid>
        </Grid>

        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Ideate
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          User Journey Map
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Based on the user research, I created a user journey map to understand the crucial 
          pain points and mindsets one may encounter while ordering from The Pub.
        </Typography>
        <Grid container sx={{ paddingBottom: '1rem' }} justifyContent='center'>
          <img src='/images/ThePub/user-journey-map.png' className='projectImg' />
        </Grid>

        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Prototype
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom>
          Paper Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Drafting iterations of each screen on paper ensured that necessary 
          elements that made it to the digital wireframe would be well-suited 
          to address the user's pain points. For the home screen, I focused on 
          an easy ordering process.
        </Typography>

        <Grid container justifyContent='center'>
          <img src='/images/ThePub/paper-wireframe.png' className='projectImg' />
            <Typography variant='subtitle1' align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              The asterisks were used to mark elements of each sketch used 
              in the initial digital wireframes
            </Typography>
        </Grid>

        <Typography variant='h5' component='h4' gutterBottom>
          Low-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I refined the paper wireframes of the mobile app, and after multiple 
          iterations, I developed the low-fidelity wireframes.
        </Typography>

        <Grid container direction="row">
          <Grid item container direction="column">
            <img src='/images/ThePub/Original.png' className='projectImg' />
            <Typography variant='subtitle1' align="center" sx={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              Initial Low Fidelity Wireframes
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <img src='/images/ThePub/Updated.png' className='projectImg' />
            <Typography variant="subtitle1" align="center" sx={{ paddingTop: "0.5rem" }}>
              Refined Low Fidelity Wireframes
            </Typography>
          </Grid>
        </Grid>

        <Typography variant='h5' component='h4' gutterBottom>
          Usability Study
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          I then conducted a usability study based on these wireframes. The feedback 
          received aided in further refining and developing the high-fidelity wireframes.
        </Typography>
        
        <Typography variant='body1' paragraph gutterBottom>
          The findings of the first and second round are as follows:
        </Typography>
        <Grid container direction="row" wrap='nowrap'>
          <Grid item container direction="column">
            <Typography variant='h6' component='h5' gutterBottom>
              Round 1 Findings
            </Typography>
            <ol style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
              <li>Users want to order meals quickly</li>
              <li>Users want to customize their meals</li>
              <li>Users want a pickup/delivery option</li>
            </ol>
          </Grid>
          <Grid item container direction="column">
            <Typography variant='h6' component='h5' gutterBottom>
              Round 2 Findings
            </Typography>
            <ol style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
              <li>Meal customization process was confusing</li>
              <li>The profile creation was not straightforward</li>
              <li>There was no way to edit meal orders</li>
            </ol>
          </Grid>
        </Grid>
        

        <Typography variant='h5' component='h4' gutterBottom>
          High-Fidelity Wireframes
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Early designs allowed for customization. But after the usability study, I made 
          the customization section more distinct with added information (limits, sections etc.).
        </Typography>
        
        <Typography variant='body1' paragraph gutterBottom>
          The second usability study revealed frustration with the tedious customization process. 
          To make it easier, I added the 'quick-add meals' option for orders to the homepage.
        </Typography>
        <Grid container direction="row" sx={{ paddingBottom: '1rem' }}>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/ThePub/Login-View-Profile.png" className='projectImg' />
            <Typography variant="subtitle1" gutterBottom align="center">Login and User Profile</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/ThePub/Homepage-Meal-Favorites.png" className='projectImg' />
            <Typography variant="subtitle1" gutterBottom align="center">Landing Page, Meal Page and Favorites Page</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center">
            <img src="/images/ThePub/Order-Process.png" className='projectImg' />
            <Typography variant="subtitle1" gutterBottom align="center">ThePub Order Process</Typography>
          </Grid>
        </Grid>

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
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
        <ol style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>
            Added alt text to images for screen readers.
          </li>
          <li>
            Used icons to help make navigation easier.
          </li>
          <li>
            Used distinct colours to differentiate between selected/highlighted text and buttons. 
            Doing so helped users better understand the designs
          </li>
        </ol>
        <hr />

        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Going Forward
        </Typography>
        <Typography variant='h5' component='h4' gutterBottom sx={{ paddingTop: '1rem' }}>
          Takeaways
        </Typography>
        <Grid container direction="row">
          <Grid item container direction="column" md={6}>
            <Typography variant='h6' paragraph gutterBottom>
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
            <Typography variant='h6' paragraph gutterBottom>
              What I learned
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              I learned that designing an app is a very involved process. It requires 
              a lot of refining to meet the users' needs. The first designs only build 
              the groundwork for what the app can become.
            </Typography>
            <Typography variant='body1' paragraph gutterBottom>
              The peer feedback and usability studies are essential to the 
              development of an app and its design.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant='h5' component='h4' gutterBottom>
          Next Steps
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          <strong>In the future, I plan to take the following steps for the app:</strong>
        </Typography>
        <ol style={{ listStylePosition: "inside", paddingBottom: "1rem" }}>
          <li>Conduct more user research to determine any new areas of need</li>
          <li>
            Conduct another round of usability studies to determine if all pain 
            points have been addressed and corrected
          </li>
        </ol>

        <hr />
              
        <Typography variant='h4' component='h3' gutterBottom sx={{ paddingTop: '1rem' }}>
          Retrospective
        </Typography>
        <Typography variant="body1" paragraph gutterBottom>
          I'm proud of what I achieved in terms of accessibility and customization. 
          <strong>I designed the app with inclusive practices to make it usable for people 
          with disabilities. Additionally, I provided options for customizing meals to 
          cater to individual preferences.</strong>.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          However, there were a few challenges that I encountered during the project. 
          For instance, I struggled with finding the right balance between simplicity 
          and customization. I also spent a long time researching and testing different 
          accessibility features to ensure their efficiency.
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          Overall, <strong>I learned many things from this project. Including the 
          importance of incorporating accessibility features from the start, balancing 
          simplicity and customization, and testing and iterating on designs.</strong>. 
          I look forward to using this experience to improve future projects.
        </Typography>
      </Grid>
    </Container>
  </ProjectSec>
);

export default ThePubProject;