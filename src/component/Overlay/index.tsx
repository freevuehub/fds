import React from 'react'
import { css } from '@emotion/react'

interface IOverlayProps {
  className?: string
  onClose?: Function
}
interface IOverlayContentProps {
  className?: string
}
interface IOverlay extends React.FC<IOverlayProps> {
  Content: React.FC<IOverlayContentProps>
}

const WrapCss = () => css`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
`
const Overlay: IOverlay = (props) => {
  const onBgClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    props.onClose?.()
  }

  return (
    <div
      css={WrapCss}
      className={`overlay fill width height ${props.className || ''}`}
      onClick={onBgClick}
    >
      {props.children}
    </div>
  )
}

Overlay.Content = (props) => {
  const onContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div onClick={onContentClick} className={props.className || ''}>
      {props.children}
    </div>
  )
}

export default Overlay
