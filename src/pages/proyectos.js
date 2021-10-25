import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import React from 'react';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

// image imports
import lluvia1 from '../../static/img/cosecha-lluvia/1.jpg';

const proyectos = () => {
  const style = {
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
  };

  const imagesArray = [
    '/img/cosecha-lluvia/1.jpg',
    '/img/cosecha-lluvia/2.jpg',
    '/img/cosecha-lluvia/3.jpg',
    '/img/cosecha-lluvia/4.jpg',
    '/img/cosecha-lluvia/5.jpg',
    '/img/cosecha-lluvia/6.jpg',
    '/img/cosecha-lluvia/7.jpg',
  ];

  console.log('lluvia1', lluvia1);

  return (
    <Layout>
      <Grid item container direction="column">
        <Grid item container direction="row" justifyContent="center" xs={10}>
          <Typography className="title">Nuestros proyectos</Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Grid item xs={10}>
            <Accordion elevation={0} className="accordion">
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                }
                sx={style}
                className="accordion-summary"
              >
                <Typography className="accordion-summary-text">
                  Cosecha de agua de lluvia
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="green-bg">
                <Grid container direction="column" alignItems="center">
                  <Typography className="accordion-details-title">
                    Cosecha de agua de lluvia
                  </Typography>
                  <Typography className="accordion-details-text">
                    Actualmente se ha contribuido al acceso de agua y
                    mejoramiento en la vivienda de{' '}
                    <span className="bold">437 familias</span> en comunidades de
                    muy alta y alta marginación del municipio de Guadalupe y
                    Calvo. Además se están por implementar{' '}
                    <span className="bold">469 sistemas más</span> de captación
                    de agua de lluvia en los municipios de{' '}
                    <span className="bold">Guadalupe y Calvo</span> y{' '}
                    <span className="bold">Guachochi</span>.
                  </Typography>
                  {/* <div>
                    <img src={lluvia1} height="50px"></img>
                  </div> */}

                  <Carousel images={imagesArray} name="lluvia" />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className="accordion">
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                }
                sx={style}
                className="accordion-summary"
              >
                <Typography className="accordion-summary-text">
                  Cosecha de agua de lluvia
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column" alignItems="center">
                  <Typography className="accordion-details-title">
                    Cosecha de agua de lluvia expandido
                  </Typography>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default proyectos;
