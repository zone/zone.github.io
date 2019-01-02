import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export default function Content({ children, ...rest }) {
  return (
    <div
      css={css`
        blockquote {
          background-color: var(--color-alabaster);
          border-left: 5px solid var(--color-mint);
          border-radius: var(--radius);
          font-size: 1.2em;
          margin: 1.25em 0;
          padding: 1.25em 1em;
        }

        ul,
        ol,
        p,
        blockquote {
          margin-bottom: 1.5em;
          margin-top: 0;
        }

        blockquote > :first-of-type {
          margin-top: 0;
        }

        > :last-child,
        blockquote > :last-child {
          margin-bottom: 0;
        }

        ul {
          border-top: 1px dashed var(--color-grey-light);
          list-style: none;
          padding-left: 0;
          padding-right: 0;
        }

        li {
          border-bottom: 1px dashed var(--color-grey-light);
          padding: 0.7em 0 0.75em;
        }

        code {
          border-radius: var(--radius);
          display: inline-block;
          font-family: monospace;
          font-weight: normal;
          background-color: var(--color-alabaster);
          padding: 0 0.3em;
        }

        h1,
        h2,
        h3 {
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }

        a {
          color: inherit;
          background-image: linear-gradient(rgba(16, 16, 229, 0.15), rgba(16, 16, 229, 0.15));
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 100% 0.5em;
          font-weight: bolder;
          transition: background-size 0.2s ease-out;
        }

        a:hover,
        a:focus {
          background-size: 100% 100%;
        }

        table {
          border-spacing: 0;
          border-collapse: collapse;
        }

        th {
          text-align: left;
        }

        th,
        td {
          border: 1px solid var(--color-grey-light);
          padding: 0.5em 0.75em;
        }
      `}
      {...rest}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
}
