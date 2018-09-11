import React from 'react';

const PageTemplate = ({ data }) => (
	<div>
		<h1>{data.article.title}</h1>
		<div id="content" dangerouslySetInnerHTML={{ __html: data.article.body.processed }} />
	</div>
)

export default PageTemplate;

export const query = graphql`
	query ArticleQuery($slug: String!) {
		article: nodeArticle(fields: { slug: { eq: $slug }}) {
			title
			body {
				processed
				value
			}
		} 
	}
`