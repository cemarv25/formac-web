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
  const lluviaImagesArray = [
    '/img/cosecha-lluvia/1.jpg',
    '/img/cosecha-lluvia/2.jpg',
    '/img/cosecha-lluvia/3.jpg',
    '/img/cosecha-lluvia/4.jpg',
    '/img/cosecha-lluvia/5.jpg',
    '/img/cosecha-lluvia/6.jpg',
    '/img/cosecha-lluvia/7.jpg',
  ];

  const sistImagesArray = [
    '/img/sistemas-colectivos/1.jpg',
    '/img/sistemas-colectivos/2.jpg',
    '/img/sistemas-colectivos/3.png',
    '/img/sistemas-colectivos/4.png',
    '/img/sistemas-colectivos/5.jpg',
  ];

  const restImagesArray = [
    '/img/rest-reforest/1.jpg',
    '/img/rest-reforest/2.jpg',
    '/img/rest-reforest/3.jpg',
    '/img/rest-reforest/4.jpg',
    '/img/rest-reforest/5.jpg',
  ];

  const aguacateImagesArray = [
    '/img/prod-alim/aguacate/1.jpg',
    '/img/prod-alim/aguacate/2.jpg',
    '/img/prod-alim/aguacate/3.jpg',
  ];

  const bovinosImagesArray = [
    '/img/prod-alim/bovinos/1.jpg',
    '/img/prod-alim/bovinos/2.jpg',
    '/img/prod-alim/bovinos/3.jpg',
  ];
  const cerdoImagesArray = [
    '/img/prod-alim/cerdo/1.jpg',
    '/img/prod-alim/cerdo/2.jpg',
    '/img/prod-alim/cerdo/3.jpg',
  ];

  const hortalizasImagesArray = [
    '/img/prod-alim/hortalizas/1.jpg',
    '/img/prod-alim/hortalizas/2.jpg',
    '/img/prod-alim/hortalizas/3.jpg',
  ];
  const huevoImagesArray = [
    '/img/prod-alim/huevo/1.jpg',
    '/img/prod-alim/huevo/2.jpg',
    '/img/prod-alim/huevo/3.jpg',
  ];

  const maizImagesArray = [
    '/img/prod-alim/maiz/1.jpg',
    '/img/prod-alim/maiz/2.jpg',
    '/img/prod-alim/maiz/3.jpg',
  ];

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
                    mejoramiento en la vivienda de <strong>437 familias</strong>{' '}
                    en comunidades de muy alta y alta marginaci??n del municipio
                    de Guadalupe y Calvo. Adem??s se est??n por implementar{' '}
                    <strong>469 sistemas m??s</strong> de captaci??n de agua de
                    lluvia en los municipios de{' '}
                    <strong>Guadalupe y Calvo</strong> y{' '}
                    <strong>Guachochi</strong>.
                  </Typography>
                  <Carousel images={lluviaImagesArray} />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className="accordion">
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                }
                className="accordion-summary"
              >
                <Typography className="accordion-summary-text">
                  Sistemas colectivos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column" alignItems="center">
                  <Typography className="accordion-details-title">
                    Sistemas colectivos
                  </Typography>
                  <Typography className="accordion-details-text">
                    Los Sistemas Colectivos tienen como fin la conducci??n,
                    almacenamiento y distribuci??n de agua potable a viviendas
                    ubicadas en comunidades marginadas. Se comenz?? con el
                    establecimiento de <strong>8 sistemas</strong> colectivos en
                    el estado, en los municipios de{' '}
                    <strong>Guadalupe y Calvo</strong>,{' '}
                    <strong>Guachochi</strong>, <strong>Bocoyna</strong> y{' '}
                    <strong>Urique</strong>, beneficiando a{' '}
                    <strong>1189 habitantes</strong>.
                  </Typography>
                  <Carousel images={restImagesArray} />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className="accordion">
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                }
                className="accordion-summary"
              >
                <Typography className="accordion-summary-text">
                  Restauraci??n y Reforestaci??n
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="green-bg">
                <Grid container direction="column" alignItems="center">
                  <Typography className="accordion-details-title">
                    Restauraci??n y Reforestaci??n
                  </Typography>
                  <Typography className="accordion-details-text">
                    En los municipios de <strong>Bocoyna</strong> y{' '}
                    <strong>Urique</strong>, se realizaron las actividades de
                    restauraci??n y reforestaci??n de ??reas
                    <strong>afectadas por incendios</strong>, con un total de{' '}
                    <strong>130 hect??reas</strong>
                    trabajadas. Se realiz?? la limpieza y acomodo de material
                    muerto, la protecci??n del ??rea con cercado y la plantaci??n
                    de pinos.
                  </Typography>
                  <Carousel images={sistImagesArray} />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} className="accordion">
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                }
                className="accordion-summary"
              >
                <Typography className="accordion-summary-text">
                  Producci??n de alimentos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column" alignItems="center">
                  <Typography className="accordion-details-title">
                    Producci??n de alimentos
                  </Typography>
                  <Typography className="accordion-details-text">
                    En Guadalupe y Calvo, FORMAC ha trabajado con poco m??s de{' '}
                    <strong>80 comunidades</strong> de muy alta y alta
                    marginaci??n, asesorando a <strong>1,500 productores</strong>{' '}
                    e incentivando la soberan??a alimentaria en las familias. Los
                    sistemas productivos trabajados fueron: frutales como{' '}
                    <strong>aguacate</strong> y <strong>manzana</strong>,{' '}
                    <strong>ganado bovino</strong> carne,{' '}
                    <strong>hortalizas</strong> de valor comercial y traspatio,
                    producci??n de <strong>carne de cerdo para venta</strong> en
                    pie y transformaci??n, <strong>trucha para venta</strong>,{' '}
                    <strong>producci??n de granos b??sicos</strong> (ma??z y
                    frijol) y <strong>producci??n de huevo</strong> en traspatio.
                  </Typography>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Aguacate
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={aguacateImagesArray} />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Ganader??a: bovinos carne
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={bovinosImagesArray} />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Ganader??a: carne de cardo y embutidos
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={cerdoImagesArray} />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Ganader??a: producci??n de huevo
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={huevoImagesArray} />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Hortalizas
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={hortalizasImagesArray} />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    elevation={0}
                    square
                    className="inner-acc"
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />
                      }
                      className="inner-acc-sum"
                    >
                      <Typography sx={{ marginLeft: '1rem' }}>
                        Producci??n de ma??z
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="inner-acc-det">
                      <Carousel images={maizImagesArray} />
                    </AccordionDetails>
                  </Accordion>
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
