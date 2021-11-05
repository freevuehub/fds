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
  border: 1px solid ${theme.color.primary};
`
const WrapCss = (props: IProps) => (theme: Theme) => css`
  overflow: hidden;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  
  ${props.border && BorderCss(theme)}
`
const ContentCss = css`
  padding: 20px;
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
        props.children && (
          <div css={ContentCss}>
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
