import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import { css } from 'glamor'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      css={{
        maxWidth: 960,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 0,
        '@media(min-width: 576px)': {
          maxWidth: 540,
        },
        '@media(min-width: 768px)': {
          maxWidth: 720,
        },
        '@media(min-width: 992px)': {
          maxWidth: 960,
        },
        '@media(min-width: 1200px)': {
          maxWidth: 1140,
        },
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
