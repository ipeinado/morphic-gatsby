const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators }) => {
	// console.log(node.internal.type);
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === "node__page") {
		const slug = `/pages/${node.nid}`;
		console.log(node)
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
		const pageTemplate = path.resolve('src/templates/page.js');
		resolve(
			graphql(
				`
					{
						pages: allNodePage {
							edges {
								node {
									nid
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
						path: node.fields.slug,
						component: pageTemplate,
						context: {
							slug: node.fields.slug,
						},
					});
				});
				resolve()
			})
		);
	});
};