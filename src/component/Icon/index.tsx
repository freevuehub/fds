import React from 'react'
import { css } from '@emotion/react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

export interface IProps {
  icon: any
  className?: string
  size?: number
  color?: string
}

const IconCss = (props: IProps) => () => css`
  display: block;
  width: 100%;
  font-size: ${props.size ? `${props.size}px` : 'inherit'};
  color: ${props.color || 'inherit'};
`

const Icon: React.FC<IProps> = (props) =>(
  <FontAwesomeIcon css={IconCss(props)} icon={props.icon} className={props.className} />
)

export default Icon
