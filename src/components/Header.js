import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = ({ activeTab }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
      className="header"
    >
      <Grid item xs={4} className="header-logo" />
      <Grid item xs={8} container justifyContent="space-evenly">
        <Link
          to="/nosotros"
          className="header-link"
          activeClassName="header-link-active"
        >
          <Typography className="header-text">Nosotros</Typography>
        </Link>
        <Link
          to="/proyectos"
          className="header-link"
          activeClassName="header-link-active"
        >
          <Typography className="header-text">Proyectos</Typography>
        </Link>
        <Link
          to="/media"
          className="header-link"
          activeClassName="header-link-active"
        >
          <Typography className="header-text">Multimedia</Typography>
        </Link>
        <Button className="header-button">
          <Typography className="header-text">Contacto</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  activeTab: PropTypes.oneOf([
    'nosotros',
    'proyectos',
    'multimedia',
    'contacto',
  ]),
};

export default Header;
