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
const purple = { main: '#8357DF' };

// A custom theme for this app
const theme = createMuiTheme({
  spacing: (factor) => `${0.8 * factor}rem`,
  typography: {
    htmlFontSize: 10, // Paired with the html 62.5% font-size specified in withMaterialUI
    h1: {
      fontFamily: '"Bogue-Bold", Garamond, Baskerville, sans-serif',
      fontSize: '7rem',
      lineHeight: '1',
    },
    h2: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '2.4rem',
      lineHeight: '3.4rem',
    },
    // Who we work with text
    h3: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '7.2rem',
      // lineHeight: '24.6rem',
      letterSpacing: '-1px',
    },
    h4: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '2.4rem',
      lineHeight: '3.4rem',
      letterSpacing: '-1px',
    },

    h5: {
      fontFamily: '"Bogue-Black", Garamond, Baskerville, sans-serif',
      fontSize: '3.2rem',
      lineHeight: '3.8rem',
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
      fontSize: '2.6rem',
      lineHeight: '3.6rem',
    },
    // body XL
    subtitle1: {
      fontFamily: '"Bogue-Regular", Garamond, Baskerville, sans-serif',
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
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
      purple,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
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
      textPrimary: {
        color: textBlack,
        transition: '0.25s ease',
        '&:hover': {
          color: '#254A45',
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
    transitions: {
      easing: {
        linear: 'cubic-bezier(0.25, 0.25, 0.75, 0.75)',
        default: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        in: 'cubic-bezier(0.42, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.58, 1)',
        inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
        inQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        inCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        inQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        inQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        inSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        inCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        outQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        outCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        outQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
        outSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
        outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        inOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        inOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        inOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
        inOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
        inOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        inOutExpo: 'cubic-bezier(1, 0, 0, 1)',
        inOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
});

export default theme;
