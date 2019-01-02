import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Content from '../components/Content'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function IndexPage({ data: { pages } }) {
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
    {},
  )

  return (
    <Layout>
      <Hero title="Zone Tech" />
      <Content>
        <ul>
          {formattedPages.map(({
            id, title, slug, depth,
          }) => (
            <li key={id} style={{ paddingLeft: `${1 * depth}em` }}>
              {new Array(depth + 1).join('-')} <Link to={slug}>{title}</Link>
            </li>
          ))}
        </ul>
      </Content>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.array.isRequired,
  }).isRequired,
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
