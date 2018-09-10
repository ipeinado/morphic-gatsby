module.exports = {
  siteMetadata: {
    title: 'Morphic',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: 'gatsby-source-drupal',
  		options: {
  			baseUrl: 'http://dev-morphic-8.pantheonsite.io/',
  			apiBase: 'jsonapi',
  		},
  	},
  ],
}
