/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: createFilePath({
        node,
        getNode,
        basePath: `content`,
        trailingSlash: false,
      }),
    })
  }
}

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const ArticleTemplate = path.resolve(`src/templates/Article.js`)
  const ListingTemplate = path.resolve(`src/templates/Listing.js`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: ASC, fields: [fields___slug] }) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                description
                subTitle
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        return reject(errors)
      }

      data.allMarkdownRemark.edges.forEach(({ node }) => {
        const isListing = node.fileAbsolutePath.endsWith('/index.md')

        createPage({
          path: node.fields.slug,
          component: isListing ? ListingTemplate : ArticleTemplate,
          context: {
            ...node.frontmatter,
            slug: node.fields.slug,
            subPageRegex: `/^${node.fields.slug}//`,
          },
        })
      })

      resolve()
    })
  })
}
