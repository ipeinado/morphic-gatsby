module.exports = {
  siteMetadata: {
    title: 'Morphic',
  },
  pathPrefix: '/morphic',
  plugins: [
  	'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
  	{
  		resolve: 'gatsby-source-drupal',
  		options: {
  			baseUrl: 'http://dev-morphic-8.pantheonsite.io/',
  			apiBase: 'jsonapi',
  		},
  	},
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
