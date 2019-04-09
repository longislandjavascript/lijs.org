var proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: `Long Island JavaScript Group`,
    description: `A Meetup group for JavaScript developers in the Long Island area.`,
    author: `@gojutin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-source-meetup-members`,
    `gatsby-source-meetup-group`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lijs-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // This option is used when using Netlify lambda functions, which proxies the url target on development mode.
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions": "",
  //       },
  //     })
  //   );
  // },
};
