import React from 'react'
import { css, Theme } from '@emotion/react'

export interface ICardProps {
  className?: string
  onClick?: Function
  border?: boolean
}
export interface ICardTitleProps {
  className?: string
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export interface ICardContentProps {
  className?: string
}
export interface ICard extends React.FC<ICardProps> {
  Title: React.FC<ICardTitleProps>
  Content: React.FC<ICardContentProps>
}

const ClickCss = () => css`
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`
const BorderCss = (theme: Theme) => css`
  box-shadow: none;
  border: 1px solid ${theme.common.primary};
`
const WrapCss = (props: ICardProps) => (theme: Theme) => css`
  border-radius: 20px;
  box-shadow: ${theme.style.shadow};
  background-color: ${theme.color.content};
  transition: all .3s;
  
  ${!!props.border && BorderCss(theme)}
  ${!!props.onClick && ClickCss()}
`
const Card: ICard = (props) => {
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <div
      css={WrapCss(props)}
      className={`x-hidden y-hidden ${props.className || ''}`}
      onClick={onClick}
    >
      {props.children}
    </div>
  )
}

Card.Title = (props) => {
  const Heading: React.ReactType = props.heading || 'h4'

  return (
    <Heading className={`pa-2 ${props.className || ''}`}>
      {props.children}
    </Heading>
  )
}
Card.Content = (props) => (
  <div className={`pa-3 ${props.className || ''}`}>
    <p>{props.children}</p>
  </div>
)

Card.defaultProps = {
  border: false,
  className: '',
}
Card.Title.defaultProps = {
  heading: 'h4'
}

export default Card
