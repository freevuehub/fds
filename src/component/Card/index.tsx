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
  background-color: #fff;
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
          <h3 className="card--title pl-5 pr-5 pt-5">{props.title}</h3>
        )
      }
      {
        props.children && (
          <div className="pa-5">
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
