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
const textBlack = '#162C29';

// A custom theme for this app
const theme = createMuiTheme({
  spacing: (factor) => `${0.8 * factor}rem`,
  typography: {
    htmlFontSize: 10, // Paired with the html 62.5% font-size specified in withMaterialUI
    h1: {
      fontFamily: '"Bogue-Bold", Garamond, Baskerville, sans-serif',
      fontSize: '10rem',
      lineHeight: '11rem',
    },
    h2: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '7.2rem',
      lineHeight: '8.6rem',
    },
    // Who we work with text
    h3: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '15rem',
      // lineHeight: '24.6rem',
      letterSpacing: '-1px',
    },
    h4: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '3.2rem',
      // lineHeight: '8.6rem',
      letterSpacing: '-1px',
    },

    h5: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '6rem',
      lineHeight: '6.4rem',
      letterSpacing: '-1px',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
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
      lineHeight: '3.2rem',
    },
    // body XL
    subtitle1: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '3.2rem',
      lineHeight: '4.2rem',
      color: lightPeach.main,
    },
    // footer link text
    subtitle2: {
      fontFamily: '"Whyte", Helvetica, sans-serif',
      fontSize: '1.6rem',
      lineHeight: '2rem',
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
      '&:hover': {
        color: '#356AD2',
        transition: '0.25s ease',
      },
    },
  },
  palette: {
    primary: {
      ...lightPeach,
    },
    secondary: {
      ...pink,
    },
    background: {
      default: lightPeach.main,
    },
    text: {
      primary: textBlack,
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 800,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '1.3rem 2.6rem',
        borderRadius: '40px',
        textTransform: 'none',
      },
      containedPrimary: {
        backgroundColor: textBlack,
        color: lightPeach.main,
        fontSize: '2.4rem',
        '&:hover': {
          backgroundColor: '#254A45',
          transition: '0.25s ease',
        },
      },
      containedSecondary: {
        backgroundColor: lightPeach.main,
        color: lightPeach.contrastText,
        fontSize: '2.4rem',
        '&:hover': {
          backgroundColor: '#FFCBBB',
          transition: '0.25s ease',
        },
      },
    },
    MuiInput: {
      root: {
        // borderBottom: `3px solid #162C29`,
        // '&$focused': {
        //   color: textBlack,
        // },
        // '&$focused': {
        //   borderBottom: `3px solid #162C29`,
        //   // outline: `1px solid red`,
        //   '&:before': {
        //     borderBottom: `3px solid #162C29`,
        //   },
        // },
      },
      // underline: {
      //   '&$hover': {
      //     '&$before': {
      //       borderBottom: `1px solid aqua`,
      //     },
      //   },
      //   '&:after': {
      //     backgroundColor: seaGreen.main,
      //   },
      // },
    },
    MuiPopover: {
      paper: {
        maxWidth: '400px',
        transform: 'rotate(-15deg)',
        borderRadius: '8px',
        backgroundColor: cream.main,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        display: 'none',
      },
    },
    MuiRadio: {
      colorSecondary: {
        display: 'none',
      },
    },
  },
});

export default theme;
