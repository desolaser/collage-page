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
    `gatsby-theme-material-ui`,
    `gatsby-plugin-anchor-links`
  ],
};