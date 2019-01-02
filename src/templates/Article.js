import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Content from '../components/Content'
import Hero from '../components/Hero'

export default function Article({ children, data: { page } }) {
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
