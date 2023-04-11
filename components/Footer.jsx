import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const Foot = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 0, 6),
    color: '#FFF',
  },
}));

const Footer = () => {
  return (
    <Foot>
      <Container>
        <Typography variant='body1' textAlign='center'>
          <strong>Built with 💖, {' '} <a href="/about">Chole</a></strong>
        </Typography>
      </Container>
    </Foot>
  );
};

export default Footer;