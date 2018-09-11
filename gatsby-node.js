const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators }) => {
	// console.log(node.internal.type);
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === "node__article") {
		const slug = `/help/${node.nid}`
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const pageTemplate = path.resolve('src/templates/page.js')
		const articleTemplate = path.resolve('src/templates/article.js')

		resolve(
			graphql(
				`
					{
						pages: allNodePage {
							edges {
								node {
									path {
										alias
									}
								}
							}
						}
						articles: allNodeArticle {
							edges {
								node {
									fields {
										slug
									}
								}
							}
						}
					}
				`
			).then(result => {
				result.data.pages.edges.forEach(({ node }) => {
					createPage({
						path: node.path.alias,
						component: pageTemplate,
						context: {
							alias: node.path.alias,
						},
					})
				})
				result.data.articles.edges.forEach(({ node }) => {
					createPage({
						path: node.fields.slug,
						component: articleTemplate,
						context: {
							slug: node.fields.slug,
						},
					})
				})
				resolve()
			})
		)
	})
}