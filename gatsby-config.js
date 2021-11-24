module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/static/portfolio/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Pipla - portfolio',
        short_name: 'Pipla',
        start_url: '/',
        background_color: '#0a192f',
        theme_color: '#64ffda',
        icon: 'src/static/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
