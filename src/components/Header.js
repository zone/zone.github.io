import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function Header() {
  return (
    <Link
      to="/"
      css={css`
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 0.5em 0;
      `}
    >
      <svg
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31 32"
        focusable="false"
        tabIndex="-1"
        aria-label="Zone"
        css={css`
          width: 20px;
        `}
      >
        <path
          fill="inherit"
          d="M6.83772.75172L2.0797 7.8679h14.00937L0 31.9072h25.16186l4.79772-7.18017H14.9798L31 .75172z"
        />
      </svg>
      <span
        css={css`
          color: var(--color-gunmetal);
          flex: 1;
          font-size: 0.9em;
          font-weight: normal;
          margin-left: 0.75em;
          text-transform: uppercase;
        `}
      >
        Tech
      </span>
    </Link>
  )
}
