import React from 'react'
import { css, Theme } from '@emotion/react'
import { Image } from '../'

export interface IProps {
  className?: string
  onClick?: Function
  cover?: string
  border?: boolean
  title?: string
}

const BorderCss = (theme: Theme) => css`
  box-shadow: none;
  border: 1px solid ${theme.common.primary};
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  overflow: hidden;
  border-radius: 15px;
  background-color: ${theme.color.content};
  box-shadow: ${theme.style.shadow};
  .card--title {
  
  }
  
  ${props.border && BorderCss(theme)}
`
const Card: React.FC<IProps> = (props) => {
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <div
      css={WrapCss(props)}
      className={props.className || ''}
      onClick={onClick}
    >
      {props.cover && <Image src={props.cover} />}
      {
        props.title && (
          <h4 className="card--title pl-2 pr-2 pt-2">{props.title}</h4>
        )
      }
      {
        props.children && (
          <div className="pa-2">
            {props.children}
          </div>
        )
      }
    </div>
  )
}

Card.defaultProps = {
  border: false,
  title: '',
  cover: '',
  className: '',
}

export default Card
