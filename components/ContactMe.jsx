import { Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const ContactBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#FFF',
    padding: theme.spacing(15, 0, 6),
  },
}));

const ContactMe = () => {

  return (
    <ContactBox>
      <Container maxWidth='lg'>
      <Typography variant='h3' component='h2' align='left' gutterBottom>
        Contact Me
      </Typography>
      <form 
        name='contact' 
        method='POST' 
        netlify-honeypot="bot-field" 
        data-netlify="true"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: { xs: 'none'} }}>
          <TextField
            label='Do not fill this out if you are human:'
            name="bot-field"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              id='name' 
              label='Name' 
              variant='outlined' 
              fullWidth 
              required 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='email'
              label='Email' 
              variant='outlined' 
              fullWidth
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id='message' 
              label='Message' 
              variant='outlined' 
              fullWidth 
              multiline 
              rows={8} 
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              size='large'
              type='submit'
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
      </Container>
    </ContactBox>
  );
};

export default ContactMe;