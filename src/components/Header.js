import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  IconButton,
  Grid,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import { useIsMobile } from '../hooks';

const Header = ({ activeTab }) => {
  const [drawer, setDrawer] = useState(false);
  const { isMobile } = useIsMobile();

  const toggleDrawer = (event, open) => {
    console.log('inside toggleDrawer, open', open, ' event ', event);
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {['Nosotros', 'Proyectos', 'Multimedia'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemButton>
              <Link
                to={`/${text.toLowerCase()}`}
                className="header-link"
                activeClassName="header-link-active"
              >
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navBar = () => (
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
  );

  const menuButton = () => (
    <Grid
      item
      container
      xs={3}
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <IconButton
        aria-label="open drawer"
        onClick={(e) => toggleDrawer(e, true)}
      >
        <MenuIcon />
      </IconButton>
    </Grid>
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems={isMobile ? 'center' : 'flex-end'}
      className="header"
    >
      <Grid item xs={isMobile ? 7 : 4} className="header-logo" />
      {isMobile ? menuButton() : navBar()}
      <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
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
