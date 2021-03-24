import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MaterialUiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import styles from './globalStyles.styles';

const muiTheme = {
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiTypography: {
      body1: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.6rem',
        },
      },
      h5: {
        [theme.breakpoints.up('md')]: {
          fontSize: '6rem',
          lineHeight: '6.4rem',
        },
      },
    },
  },
};

const Layout = (props) => {
  const pageMetaQuery = useStaticQuery(graphql`
    query pageMetaQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              title
              description
            }
          }
        }
      }
    }
  `);

  const {
    allSite: { edges },
  } = pageMetaQuery;

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="utf-8" />
        <title>{edges[0].node.siteMetadata.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content={edges[0].node.siteMetadata.description}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MaterialUiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <Global styles={styles} />
          <CssBaseline />
          <DndProvider backend={HTML5Backend}>{props.children}</DndProvider>
        </ThemeProvider>
      </MaterialUiThemeProvider>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
