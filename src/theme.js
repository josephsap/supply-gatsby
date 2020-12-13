import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  spacing: factor => `${0.8 * factor}rem`,
  typography: {
    htmlFontSize: 10, // Paired with the html 62.5% font-size specified in withMaterialUI
    h1: {
      fontSize: '3.9rem',
      lineHeight: '4.4rem',
      letterSpacing: 0,
    },
    body1: {
      fontSize: '1.6rem',
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#fff0f5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff0f5',
    },
  },
});

export default theme;