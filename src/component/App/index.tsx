import React from 'react'
import { css, Theme } from '@emotion/react'

interface IProps {
  className?: string
}

const WrapCss = (theme: Theme) => css`
  background-color: ${theme.color.app};
  transition: background-color .3s;
`
const App: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss} className={`fill width height y-hidden ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default App
