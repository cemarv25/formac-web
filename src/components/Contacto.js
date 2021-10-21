import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useIsMobile } from '../hooks';

const Contacto = () => {
  const { isMobile } = useIsMobile();
  return (
    <Grid item container xs={12} justifyContent="center">
      <Typography className="title">Contáctanos</Typography>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        style={{ marginBottom: '5rem' }}
      >
        <Grid item container xs={12} md={6} direction="column">
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <svg className="contact-icon phone" width="50px" height="50px" />
            <Typography className="contact-text">(614) 259 45 30</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <svg className="contact-icon email" width="50px" height="50px" />
            <Typography className="contact-text">
              direccion@gidst.com.mx
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} direction="column">
          <Grid
            item
            container
            direction="row"
            justifyContent={isMobile ? 'center' : 'flex-start'}
            alignItems="center"
          >
            <svg className="contact-icon facebook" width="50px" height="50px" />
            <Typography className="contact-text-small">
              Fortalecimiento Comunitario y del Medio Ambiente
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent={isMobile ? 'center' : 'flex-start'}
            alignItems="center"
          >
            <svg className="contact-icon location" width="50px" height="50px" />
            <Typography className="contact-text-small">
              Rivera Las Vírgenes No. 338 <br />
              Colonia Coronado, Guadalupe y Calvo, Chih.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <svg className="header-logo" />
    </Grid>
  );
};

export default Contacto;
