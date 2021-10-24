import React from 'react';
import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';

const nosotros = () => {
  return (
    <Layout>
      <Grid item container direction="column" alignItems="center">
        <Grid item container direction="row" justifyContent="center">
          <Grid item xs={8}>
            <Typography className="about-header">
              En <span className="formac">FORMAC</span> buscamos impulsar el
              desarrollo integral de las comunidades del Estado de Chihuahua
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default nosotros;
