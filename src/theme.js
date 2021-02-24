import { createMuiTheme } from '@material-ui/core/styles';

const cream = { main: '#F8F7F2' };
const pink = { main: '#FFE0F0' };
const lightPeach = { main: '#FFE8E1', contrastText: '#141A2E' };
const salmon = { main: '#FEB29C' };
const orange = { main: '#F7941D' };
const goldLeather = { main: '#CA7F28' };
const lilac = { main: '#BB9CFE' };
const cobalt = { main: '#356AD2', contrastText: pink };
const seaGreen = { main: '#5F8B86', contrastText: pink };


// A custom theme for this app
const theme = createMuiTheme({
  spacing: factor => `${0.8 * factor}rem`,
  typography: {
    htmlFontSize: 10, // Paired with the html 62.5% font-size specified in withMaterialUI
    h1: {
      fontFamily: '"Bogue-Extrabold", Garamond, Baskerville, sans-serif',
      fontSize: '10rem',
      lineHeight: '11rem',
      letterSpacing: '-2px',
    },
    h2: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '7.2rem',
      lineHeight: '8.6rem',
      letterSpacing: '-1px',
    },
    h3: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '3.2rem',
      lineHeight: '8.6rem',
      letterSpacing: '-1px',
    },
    // body regular
    body1: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      fontSize: '1.8rem',
      lineHeight: '2.8rem',
    },
    // body LG
    body2: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      fontSize: '2.2rem',
      lineHeight: '3.4rem',
    },
    // body XL
    subtitle1: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      fontSize: '3.2rem',
      lineHeight: '4.2rem',
    },
    caption: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
    },
    button: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      // fontSize: '2.4rem',
      // lineHeight: '3.4rem',
    },
    a: {
      color: '#8357DF',
      transition: '0.25s ease',
      "&:hover": {
        color: '#356AD2',
        transition: '0.25s ease',
      }
    }
  },
  palette: {
    primary: {
      ...lightPeach
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: lightPeach.main,
    },
    text: {
      primary: '#162C29',
    },
    supply: {
      cream,
      pink,
      lightPeach,
      salmon,
      orange,
      goldLeather,
      lilac,
      cobalt,
      seaGreen,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '1.3rem 2.6rem',
        borderRadius: '25px',
      },
      containedPrimary: {
        backgroundColor: lightPeach.main,
        '&:hover': {
          backgroundColor: '#FFCBBB',
          transition: '0.25s ease',
        },
      },
      containedSecondary: {
        backgroundColor: '#254A45',
        '&:hover': {
          backgroundColor: '#162C29',
          transition: '0.25s ease',
        },
      }
    },
    MuiContainer: {
      // root: {
      //   paddingLeft: '4rem',
      //   paddingRight: '4rem',
      // },
    }
  }
});

export default theme;