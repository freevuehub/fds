import React from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  width?: number
  height?: number
  className?: string
  color?: string
}

const WrapCss = (props: IProps) => (theme: Theme) => css`
  width: ${props.width ? `${props.width}px` : 'auto'};
  height: ${props.height ? `${props.height}px` : 'auto'};
  background-color: ${props.color || theme.color.content}30;
`
const Sheet: React.FC<IProps> = (props) => {
  return (
    <div css={WrapCss(props)} className={`${props.className || ''} pa-5`}>
      {props.children}
    </div>
  )
}

export default Sheet
