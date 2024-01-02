/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
};

if (process.env.CYPRESS_SUPPORT == 'y')
{
  module.exports['plugins'].push(
    {
      resolve: `gatsby-source-mock`,
      options: {
        count: 10,
        schema: {
          CustomerID: (faker) => faker.random.alpha({ count: 5, upcase: true }),
          CompanyName: `{{company.companyName}}`,
          ContactName: `{{name.firstName}} {{name.lastName}}`,
          ContactTitle: `{{name.jobTitle}}`,
          Address: `{{address.streetAddress}}`,
        },
        seed: 123456,
        type: `Customers`,
      },
    }
  );
} else {
  module.exports['plugins'].push(
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          database: process.env.MYSQL_DATABASE,
          host: process.env.MYSQL_HOST,
          password: process.env.MYSQL_PASSWORD,
          user: process.env.MYSQL_USER,
        },
        queries: [
          {
            statement: 'SELECT * FROM customers',
            idFieldName: 'CustomerID',
            name: 'customers',
          },
          {
            statement: 'SELECT * FROM course_details',
            idFieldName: 'course_id',
            name: 'courses',
          },
        ],
      },
    }
  );
}
