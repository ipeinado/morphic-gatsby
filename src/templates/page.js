import React from 'react';

const PageTemplate = ({ data }) => (
	<div>
		<h1>{data.page.title}</h1>
		<div dangerouslySetInnerHTML={{ __html: data.page.body.processed }} />
	</div>
);

export default PageTemplate;

export const query = graphql`
	query PageQuery($slug: String!) {
		page: nodePage(fields: { slug: { eq: $slug }}) {
			title
			body {
				processed
				value
			}
		}
	}
`;