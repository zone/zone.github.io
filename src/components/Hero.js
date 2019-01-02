import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export default function Hero({ title, subTitle }) {
  return (
    <div
      css={css`
        align-items: center;
        background-color: var(--color-gunmetal);
        color: var(--color-white);
        display: flex;
        grid-column: full;
        justify-content: center;
        min-height: 20vh;
        padding: 4rem var(--gap);
        text-align: center;
      `}
    >
      <h1
        css={css`
          font-size: 3rem;
          line-height: 1.1;
          margin: 0;
        `}
      >
        {subTitle && (
          <small
            css={css`
              display: block;
              font-size: 0.5em;
              font-weight: 300;
              margin-bottom: 0.75em;
              text-transform: uppercase;
            `}
          >
            {subTitle}
          </small>
        )}
        {title}
      </h1>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
