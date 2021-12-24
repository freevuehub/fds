import React from 'react'
import { css, Theme } from '@emotion/react'

interface IProps {
  className?: string
}

const WrapCss = (theme: Theme) => css`
  background-color: ${theme.color.content};
  transition: background-color .3s;
`
const View: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss} className={props.className || ''}>
      {props.children}
    </div>
  )
}

export default View
