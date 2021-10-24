import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import Header from './Header';
import Contacto from './Contacto';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FORMAC</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/css/layout.css" />
        <link rel="stylesheet" href="/css/landing.css" />
        <link rel="stylesheet" href="/css/about.css" />
      </Helmet>
      <Grid container direction="column" alignItems="center">
        <Header />
        {children}
        <Contacto />
      </Grid>
    </>
  );
};

export default Layout;
