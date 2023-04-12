import { Alert, Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from "react";
import { styled } from '@mui/material/styles';
import { sendContactForm } from "services";
import CloseIcon from '@mui/icons-material/Close';

const ContactBox = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: '#FFF',
    padding: theme.spacing(15, 0, 6),
  },
}));

const ContactMe = () => {
  const [alert, setAlert] = useState('');
  const [alertModal, setAlertModal] = useState(true);
  const formRef = useRef();
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    if (formData.get('bot-field')) {

      return;
    } else {
      const res = await sendContactForm({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (res == 0) {
        setAlert("Thank you for your valuable message!");
        setAlertModal(true)
        formRef.current.reset();
      } else {
        setAlert("Something went wrong! Please try again");
        setAlertModal(true);
      }
    }
  };

  return (
    <ContactBox>
      <Container maxWidth='lg'>
        <Typography variant='h3' component='h2' align='left' gutterBottom>
          Contact Me
        </Typography>
        <Collapse in={alertModal}>
          <Alert
            severity='info'
            sx={{ mb: 2 }}
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setAlertModal(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
          >
            {alert}
          </Alert>
        </Collapse>
        <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
          <TextField 
            name="bot-field" 
            placeholder='do not fill this' 
            type='hidden' 
            sx={{ display: { xs: 'none' } }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label='Name'
                id="name"
                name="name"
                fullWidth
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='email'
                label='Email' 
                name='email'
                variant='outlined' 
                fullWidth
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id='message' 
                label='Message'
                name='message'
                variant='outlined' 
                fullWidth 
                multiline 
                rows={8} 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
}

export default ContactMe;