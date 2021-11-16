import React from 'react'
import { css, Theme } from '@emotion/react'

interface IProps {
  className?: string
}

const ContentCss = (theme: Theme) => css`
  max-width: 1280px;
  margin: 0 auto;
  
  @media screen and (max-width: ${theme.breakPoint.notebook}px) {
    max-width: 980px;
  }
  @media screen and (max-width: ${theme.breakPoint.ipadPro}px) {
    max-width: 840px;
  }
  @media screen and (max-width: ${theme.breakPoint.ipad}px) {
    max-width: 640px;
    flex-direction: column;
  }
  @media screen and (max-width: ${theme.breakPoint.foldInner}px) {
    max-width: 460px;
  }
  @media screen and (max-width: ${theme.breakPoint.mobile}px) {
    max-width: unset;
    width: 100%;
  }
`
const Content: React.FC<IProps> = (props) => {
  return (
    <div css={ContentCss} className={props.className || ''}>
      {props.children}
    </div>
  )
}

export default Content
