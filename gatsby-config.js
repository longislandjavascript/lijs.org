module.exports = {
  siteMetadata: {
    title: `gatsby-starter-typescript-deluxe`,
    description: `A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.`,
    author: `@gojutin`,
    url: "https://gatsby-starter-typescript-deluxe.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`BenchNine`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        // Learn about environment variables: https://gatsby.app/env-vars
        // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
        // key: process.env.MEETUP_API_KEY,
        // Mandatory: the URL name of a Meetup Group.
        // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
        groupUrlName: "long-island-javascript-group",
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: "upcoming",
        desc: "true",
        page: 10,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-typescript-deluxe`,
        short_name: `gatsby-starter-typescript-deluxe`,
        description: `A Gatsby starter with TypeScript, Storybook, Styled Components, Framer Motion, Jest, and more.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: "src/images/icon.png",
        // icons: [
        //   {
        //     src: "icons/icon_512x512.png",
        //     sizes: "512x512",
        //     types: "image/png",
        //   },
        //   {
        //     src: "icons/icon_192x192.png",
        //     sizes: "192x192",
        //     types: "image/png",
        //   },
        // ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
