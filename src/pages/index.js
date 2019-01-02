import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Content from '../components/Content'

const IndexPage = ({ data: { pages } }) => {
  const formattedPages = pages.edges.map(
    ({
      node: {
        id,
        frontmatter: { title },
        fields: { slug },
      },
    }) => {
      const depth = slug.split('/').length - 2

      return {
        id,
        title,
        slug,
        depth,
      }
    },
    {}
  )

  return (
    <Layout>
      <Hero title="Zone Tech" />
      <Content>
        <ul>
          {formattedPages.map(({ id, children, title, slug, depth }) => (
            <li key={id} style={{ paddingLeft: `${1 * depth}em` }}>
              {new Array(depth + 1).join('-')} <Link to={slug}>{title}</Link>
              {children && <PageGroup items={children} />}
            </li>
          ))}
        </ul>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  {
    pages: allMarkdownRemark(sort: { order: ASC, fields: [fields___slug] }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
