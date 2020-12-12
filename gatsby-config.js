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
    title: `Gatsby Blog Site`,
    description: `Write your site description here!`,
    author: `JOE SAP`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1wmnm7ky08ew`,
        accessToken: `y31MsxmOcgj1EbsmwBHT89sfMvFXtgo-HbaZRRTJaRw`,
      },
    },
  ],
}