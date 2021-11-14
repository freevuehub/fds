import React from 'react'
import { css } from '@emotion/react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

interface IProps {
  icon: any
  className?: string
}

const IconCss = css`
  display: block;
  width: 100%;
`

const Icon: React.FC<IProps> = (props) =>(
  <FontAwesomeIcon css={IconCss} icon={props.icon} className={props.className} />
)

export default Icon
