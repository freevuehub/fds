import React from 'react'
import styled from '@emotion/styled'
import { Image } from '~/component'

export interface IProps {
  className?: string
  onClick?: Function
  cover?: string
  border?: boolean
}

const Wrap = styled.div`
  overflow: hidden;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`
const Content = styled.div`
  padding: 20px;
`
const Card: React.FC<IProps> = (props) => {
  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    props.onClick && props.onClick(event)
  }

  return (
    <Wrap className={props.className || ''} onClick={onClick}>
      {props.cover && <Image src={props.cover} />}
      {
        props.children && (
          <Content>
            {props.children}
          </Content>
        )
      }
    </Wrap>
  )
}

Card.defaultProps = {
  border: false
}

export default Card
