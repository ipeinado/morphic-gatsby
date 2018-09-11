import React from 'react';

function getToc() {
	const contentDiv = document.getElementById('content')
	document.querySelectorAll("h2, h3, h4, h5")
	
}

const PageTemplate = ({ data }) => (
	<div>
		<h1>{data.page.title}</h1>
		<div id="content" dangerouslySetInnerHTML={{ __html: data.page.body.processed }} />
	</div>
);

export default PageTemplate;

export const query = graphql`
	query PageQuery($alias: String!) {
		page: nodePage(path: { alias: { eq: $alias }}) {
			title
			body {
				processed
				value
			}
		} 
	}
`;