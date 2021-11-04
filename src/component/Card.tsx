import React from 'react'
import { css } from '@emotion/react'

const Card: React.FC = (props) => {
  return (
    <div css={css`color: red;`}>
      {props.children}
    </div>
  )
}

export default Card
