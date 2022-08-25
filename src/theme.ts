import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#665EF3', //purple
      light: '#F3F8FC', //white
    },
    secondary: {
      main: '#CBEBE3', //seafoam
    },
    common: {
      black: '#101828',
      white: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000000', //black
      secondary: '#FFFFFF', // pure white
    },
    grey: {
      100: "#f2f2f2",
      200: "#e5e5e5",
      300: "#3d8d8d8",
      400: "#cccccc",
      500: "#bfbfbf",
      600: "#b2b2b2",
      700: "#a6a6a6",
      800: '#6B7280', // lightish gray
    },
  },

});

export default theme;
