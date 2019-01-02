import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Content from '../components/Content'
import Hero from '../components/Hero'

export default function Article({ data: { page } }) {
  return (
    <Layout {...page.frontmatter}>
      <Hero {...page.frontmatter} />
      <div
        css={css`
          margin: 2.5rem 0;
        `}
      >
        <Content dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.array.isRequired,
  }).isRequired,
}

export const query = graphql`
  query($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        subTitle
        title
      }
    }
  }
`
