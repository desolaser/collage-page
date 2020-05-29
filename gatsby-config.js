/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Imagini",
    description: "Encuentra las imágenes que desees",
    url: "http://discretuum.com/projects/imagini",
    image: "/office.jpg",
    author: "Discretuum"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};