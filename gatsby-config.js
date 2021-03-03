/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
module.exports = {
  siteMetadata: {
    title: `The Supply`,
    description: `Talent sourcing`,
    author: `JOE SAP`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1wmnm7ky08ew`,
        accessToken: `0q8Z9KA6Pt7YSIONnZj23fxci18TIWjk4iVjkZQxOC4`,
        useNameForId: false,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: [`Whyte`, `Bogue`],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
  ],
};
