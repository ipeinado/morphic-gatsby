import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

import logo from './logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	expanded: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
  	e.preventDefault()
  	this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
    	<header css={{
    		marginBottom: '2rem',
    	}}>
	      <nav css={{
	      	position: 'relative',
	      	padding: '0.5rem 1rem',
	      	backgroundColor: 'rgba(255, 255, 255, .9)',
	      	borderBottom: '1px solid #71C5EE',
	      	zIndex: 10000,
	      	display: 'flex',
	      	flexWrap: 'wrap',
	      	justifyContent: 'space-between',
	      	alignItems: 'center',
	      	'@media(min-width: 768px)': {
	      		flexFlow: 'row nowrap',
	      		justifyContent: 'flex-start',
	      	},
	      }}>
	    		<div css={{
	    			display: 'inline-block',
	    			paddingTop: '0.3125rem',
	    			paddingBottom: 0,
	    			marginRight: '1rem',
	    			whiteSpace: 'nowrap',
	    			flexShrink: 0,
	    		}}>
	        	<Link to="/">
	          	<img src={ logo } alt="Morphic logo" css={{ marginBottom: 0, }}/>
	        	</Link>
	      	</div>
	      	<button 
	        	type="button" 
	        	data-target="#navbar" 
	        	aria-controls="navbar" 
	        	aria-expanded={ this.state.expanded } 
	        	aria-label="Toggle navigation"
	        	css={{
	        		backgroundColor: 'transparent',
	        		fontSize: '2rem',
	        		lineHeight: '40px',
	        		borderRadius: '0.25rem',
	        		cursor: 'pointer',
	        		color: 'rgba(0, 0, 0, 0.5)',
	        		borderColor: 'rgba(0, 0, 0, 0.1)',
	        		':hover': {
	        			color: 'rgba(0, 0, 0, 0.7)',
	        			borderColor: 'rgba(0, 0, 0, 0.3)',
	        		},
	        		'@media(min-width: 768px)': {
	        			display: 'none',
	        		},
	        	}}
	        	onClick={ this.handleClick }
	      	>
	      		&#9776;
	    		</button>
	    		<div 
	    			id="navbar"
	    			css={{
	    				flexBasis: '100%',
							flexGrow: 1,
							alignItems: 'center',
							'@media(max-width: 767px)': {
								':not(.show)': {
									display: 'none',
								},
							},
							'@media(min-width: 768px)': {
								display: 'flex',
								flexBasis: 'auto',
							},
	    			}}
	    			className={ this.state.expanded ? 'show' : '' }
	    		>
	    			<ul css={{ 
	    				listStyle: 'none',
	    				display: 'flex',
	    				paddingLeft: 0,
	    				marginLeft: 0,
	    				marginBottom: 0,
	    				flexDirection: 'column',
	    				flexBasis: '100%',
	    				'@media(min-width: 768px)': {
	    					flexBasis: 'auto',
								flexDirection: 'row',
								marginLeft: 'auto !important',
	    				},
	    				'>li': {
	    					display: 'list-item',
								marginBottom: 0,
	    					'>a': {
	    						display: 'block',
									textDecoration: 'none',
									paddingRight: 0,
									paddingLeft: 0,
									paddingTop: '0.5rem',
									paddingBottom: '0.5rem',
									color: '#373968',
									':hover': {
										textDecoration: 'underline',
									},
									'@media(min-width: 768px)': {
										paddingRight: '0.5rem',
										paddingLeft: '0.5rem',
									},
	    					},
	    				},
	    			}}>
	    				<li>
	    					<Link to='/pages/1'>About</Link>
	    				</li>
	    				<li>
	    					<Link to='/pages/10'>Help and Learning</Link>
	    				</li>
	    			</ul>
	    		</div>
	  		</nav>
  		</header>
    )
  }
} 
  

export default Header
