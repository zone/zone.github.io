import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'

import Header from './Header'
import 'normalize.css'
import '../fonts/index.css'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gap: 2rem;
            --radius: 5px;
            --color-mint: #86e8cc;
            --color-alabaster: #f6f7f7;
            --color-grey-light: #d8d8d8;
            --color-gunmetal: #2c2b39;
            --color-white: #fff;
          }

          body {
            color: var(--color-gunmetal);
            font-family: 'Euclid Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 18px;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: -0.5px;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <Helmet defaultTitle="Zone" titleTemplate="%s - Zone">
        <html lang="en-gb" />
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      <div
        css={css`
          display: grid;
          grid-template-columns:
            [full-start] minmax(var(--gap), 1fr)
            [main-start] minmax(0, 40em)
            [main-end] minmax(var(--gap), 1fr)
            [full-end];

          & > * {
            grid-column: main;
          }
        `}
      >
        <Header />
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}
