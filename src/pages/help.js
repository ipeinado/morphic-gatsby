import React from 'react'

import { css } from 'glamor'

export default ({ data }) => {
	console.log(data.terms)
	return (
		<div>
			<h1>Help and Learning</h1>
			{ data.terms.edges.map(({ node }) => (
				<div key={ node.tid }>
					<p>{node.name}</p>
				</div>
			))}
		</div>
	)
}

export const query = graphql`
	query TaxonomyQuery {
		terms: allTaxonomyTermSupportCategories {
    	edges {
      	node {
      		tid
        	name
        	description {
          	value
          	processed
        	}
        	relationships {
          	node__article {
            	nid
            	title
          	}
        	}
      	}
    	}
  	}
	}
`