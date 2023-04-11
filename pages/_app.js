import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/styles/globals.css';
import theme from '../styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/branding.css';

export default function App({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>Chole M Portfolio</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
