import React from 'react'
import { css, Theme } from '@emotion/react'
import { Icon } from '../'

interface IProps {
  icon?: any
  className?: string
  onClick?: Function
  color?: string
  dark?: boolean
  light?: boolean
  flat?: boolean
}

const FlatCss = (props: IProps, theme: Theme) => css`
  color: ${props.color || theme.common.primary};
  background-color: ${props.color || theme.common.primary}50;
  box-shadow: unset;
  &:active {
    color: ${theme.common.white};
    background-color: ${props.color || theme.common.primary};
    transform: translateY(0);
  }
`
const DarkCss = (theme: Theme) => css`
  color: ${theme.common.white};
`
const ButtonCss = (props: IProps) => (theme: Theme) => css`
  cursor: pointer;
  font-size: inherit;
  color: ${theme.color.text};
  box-shadow: 0 10px 20px -10px ${theme.common.primary};
  border-radius: 12px;
  user-select: none;
  background-color: ${props.color || theme.common.primary};
  position: relative;
  transition: all 0.3s;
  & > div {
    color: inherit;
  }
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(8px);
    box-shadow: 0 0 0 0 ${theme.common.primary};
  }
  
  ${props.flat && FlatCss(props, theme)}
  ${props.dark && DarkCss(theme)}
`
const Button: React.FC<IProps> = (props) => {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <button css={ButtonCss(props)} onClick={onButtonClick} className={`d-flex ${props.className || ''}`}>
      <div className="pa-2">
        {
          typeof props.icon === 'undefined' ? props.children : <Icon icon={props.icon} size={16} />
        }
      </div>
    </button>
  )
}

export default Button
