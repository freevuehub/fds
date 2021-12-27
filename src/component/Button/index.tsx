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
  text?: boolean
  fill?: boolean
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
const TextCss = () => css`
  color: inherit;
  background-color: transparent;
  box-shadow: unset;
`
const ButtonCss = (props: IProps) => (theme: Theme) => css`
  cursor: pointer;
  font-size: inherit;
  color: ${theme.color.text};
  box-shadow: 0 10px 20px -10px ${props.color || theme.common.primary};
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
    box-shadow: 0 8px 25px 0 ${props.color || theme.common.primary}30;
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px 0 ${props.color || theme.common.primary}30;
  }
  
  ${props.flat && FlatCss(props, theme)}
  ${props.dark && DarkCss(theme)}
  ${props.text && TextCss()}
`
const Button: React.FC<IProps> = (props) => {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <button css={ButtonCss(props)} onClick={onButtonClick} className={`d-flex ${props.className || ''}`}>
      <div className={!!props.fill ? 'pa-0' : 'pa-2'}>
        {
          typeof props.icon === 'undefined' ? props.children : <Icon icon={props.icon} size={16} />
        }
      </div>
    </button>
  )
}

export default Button
