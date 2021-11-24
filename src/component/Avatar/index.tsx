import React from 'react'
import { css, Theme } from '@emotion/react'
import { Image } from '../'

export interface IProps {
  tile?: boolean
  rounded?: boolean
  size?: number
  className?: string
  src: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  border-radius: ${props.tile ? 'unset' : props.rounded ? '15px' : '50%'};
  width: ${props.size || 110}px;
  height: ${props.size || 110}px;
  background-color: ${theme.common.grey};
  overflow: hidden;
`
const Avatar: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={props.className || ''}>
      <Image src={props.src} />
    </div>
  )
}

Avatar.defaultProps = {
  tile: false
}

export default Avatar
