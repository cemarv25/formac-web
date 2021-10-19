import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["'Open Sans', sans-serif"],
  },
  palette: {
    primary: {
      main: 'hsl(135, 54%, 21%)',
      transparent: 'hsla(135, 54%, 21%, 70%)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
