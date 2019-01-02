import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Hero from '../components/Hero'

export default function Listing({ data: { page, subPages } }) {
  return (
    <Layout {...page.frontmatter}>
      <Hero {...page.frontmatter} />
      <div
        css={css`
          margin: 2.5rem 0;

          > :first-of-type {
            margin-top: 0;
          }
        `}
      >
        <h2>Pages</h2>
        <Content>
          {subPages && (
            <ul>
              {subPages.edges.map(
                ({
                  node: {
                    id,
                    path,
                    context: { title },
                  },
                }) => (
                  <li key={id}>
                    <Link to={path}>{title}</Link>
                  </li>
                )
              )}
            </ul>
          )}
        </Content>
        {!subPages && <p>No pages found.</p>}
        <Content dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $subPageRegex: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        subTitle
        title
      }
    }
    subPages: allSitePage(filter: { path: { regex: $subPageRegex } }) {
      edges {
        node {
          id
          path
          context {
            title
          }
        }
      }
    }
  }
`
