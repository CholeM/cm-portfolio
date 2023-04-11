import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const ContactBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#FFF',
    padding: theme.spacing(15, 0, 6),
  },
}));

const ContactMe = () => (
  <ContactBox>
    <Container maxWidth='lg'>
    <Typography variant='h3' component='h2' align='left' gutterBottom>
      Contact Me
    </Typography>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField id='name' label='Name' variant='outlined' fullWidth required sx={{ color: '#FFF' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id='email' label='Email' variant='outlined' fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField id='message' label='Message' variant='outlined' fullWidth multiline rows={4} required />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' size='large'>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
    </Container>
  </ContactBox>
);

export default ContactMe;