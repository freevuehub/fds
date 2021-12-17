import React from 'react'
import { css, Theme } from '@emotion/react'

interface IProps {
  className?: string
}

const WrapCss = (theme: Theme) => css`
  background-color: ${theme.color.content};
`
const Container: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss} className={`fill height ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Container
