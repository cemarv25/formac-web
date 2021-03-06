import * as React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Grid container>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-end"
          xs={12}
          className="banner"
        >
          <Grid
            item
            container
            direction="column"
            textAlign="center"
            xs={8}
            md={3}
            className="white"
          >
            <Typography className="block-title">MISIÓN</Typography>
            <Grid item textAlign="center" className="green">
              <Typography className="block-text">
                Somos una institución que busca generar procesos de desarrollo
                sustentable en territorios marginados del estado de Chihuahua.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            textAlign="center"
            xs={8}
            md={3}
            className="white"
          >
            <Typography className="block-title">VISIÓN</Typography>
            <Grid item textAlign="center" className="green">
              <Typography className="block-text-small">
                Ser una organización referente para el colectivo por implementar
                procesos de impacto en el desarollo humano, productivo,
                económico y ambiental, responsable, comprometida y en mejora
                continua.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            textAlign="center"
            xs={8}
            md={3}
            className="white"
          >
            <Typography className="block-title">OBJETIVO</Typography>
            <Grid
              item
              container
              justifyContent="center"
              textAlign="center"
              className="green"
            >
              <Typography className="block-text">
                Impulsar el desarrollo integral de comunidades de Chihuahua.
              </Typography>
              <Grid className="more-btn">
                <Link to="/nosotros" className="more-text">
                  Conoce más
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className="divider" />
      <Grid container direction="column" alignItems="center" className="values">
        <Typography variant="h2" className="title">
          Nuestros valores
        </Typography>
        <Grid container direction="row" justifyContent="center">
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={3}
            alignItems="center"
          >
            <svg
              className="value-image compromiso"
              width="210px"
              height="210px"
            />
            <Typography className="value-title">Compromiso</Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={3}
            alignItems="center"
          >
            <svg
              className="value-image solidaridad"
              width="210px"
              height="210px"
            />
            <Typography className="value-title">Solidaridad</Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={3}
            alignItems="center"
          >
            <svg className="value-image respeto" width="210px" height="210px" />
            <Typography className="value-title">Respeto</Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={3}
            alignItems="center"
          >
            <svg
              className="value-image integridad"
              width="210px"
              height="210px"
            />
            <Typography className="value-title">Integridad</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider className="divider" />
    </Layout>
  );
}
