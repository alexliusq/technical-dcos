console.log(process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  pathPrefix: NODE_ENV === 'production' ? '/portfolio' : '/',
  siteMetadata: {
    title: `Alex's Portfolio`,
    description: `Everything fit to print`,
    author: `Alex Liu`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz'
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-YK59HW0HJ1"
        ],
        gtagConfig: {
          anonymize_ip: false
        },
        pluginConfig: {
          // Setting this parameter is also optional
          respectDNT: true,
        },
      }
    },
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
