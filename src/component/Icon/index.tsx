import React from 'react'
import { css } from '@emotion/react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

export interface IProps {
  icon: any
  className?: string
  size?: number
}

const IconCss = (props: IProps) => () => css`
  display: block;
  width: 100%;
  font-size: ${props.size ? `${props.size}px` : 'auto'};
`

const Icon: React.FC<IProps> = (props) =>(
  <FontAwesomeIcon css={IconCss(props)} icon={props.icon} className={props.className} />
)

export default Icon
