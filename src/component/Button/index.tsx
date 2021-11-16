import React from 'react'
import { css, Theme } from '@emotion/react'

interface IProps {
  className?: string
  onClick: Function
}

const ButtonCss = (theme: Theme) => css`
  cursor: pointer;
  font-size: inherit;
  color: ${theme.color.text};
`
const Button: React.FC<IProps> = (props) => {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <button css={ButtonCss} onClick={onButtonClick} className={props.className || ''}>
      {props.children}
    </button>
  )
}

export default Button
