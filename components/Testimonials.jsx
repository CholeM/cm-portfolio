import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

const TesttBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#f9f9f9',
    padding: theme.spacing(8, 0, 6),
  },
}));

const Testimonials = () => (
  <TesttBox>
    <Typography variant='h4' component='h2' align='center' gutterBottom>
      Testimonials
    </Typography>
    <Carousel
      swipeable
      draggable
      showDots={false}
      response={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      <Typography variant='body1' component='p'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tristique lorem, eu suscipit elit. Duis
        vestibulum augue eu mi laoreet elementum. Sed tincidunt nulla felis, at sagittis metus fermentum et."
      </Typography>
      <Typography variant='subtitle1' component='h3'>
        - John Doe, CEO at Acme Inc
      </Typography>
    </Carousel>
  </TesttBox>
);

export default Testimonials;