import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Global, ThemeProvider } from "@emotion/react"
import { ThemeProvider as MaterialUiThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';
import styles from './globalStyles.styles';

const TopLayout = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MaterialUiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Global styles={styles} />
          <CssBaseline />
          <DndProvider backend={HTML5Backend}>
            {props.children}
          </DndProvider>
        </ThemeProvider>
      </MaterialUiThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

export default TopLayout;