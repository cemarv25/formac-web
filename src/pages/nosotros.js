import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import Layout from '../components/Layout';

const nosotros = () => {
  return (
    <Layout>
      <Grid item container direction="column" alignItems="center" >
        <Grid item container direction="row" justifyContent="center" className="about-section">
          <Grid item xs={8}>
            <Typography className="about-header">
              En <span className="formac">FORMAC</span> buscamos impulsar el
              desarrollo integral de las comunidades del Estado de Chihuahua
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="space-around" alignItems="center" className="about-section about-2">
          <Grid item xs={8} md={5}>
            <Typography className="about-2-text">
              Promovemos el aprovechamiento sustentable de los recursos naturales y la apreciación de los servicios ambientales que estos proporcionan
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="about-2-img"/>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="center" className="about-section about-team">
          <Grid item xs={8}>
            <Typography className="about-team-text">Tenemos un equipo de técnicos especialistas en trabajo comunitario</Typography>
          </Grid>
          <Grid item xs={12} className="about-team-img"/>
        </Grid>
      </Grid>
      <Divider className="divider"/>
    </Layout>
  );
};

export default nosotros;
