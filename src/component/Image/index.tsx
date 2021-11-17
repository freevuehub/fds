import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'

export interface IProps {
  src: string
  alt?: string
  className?: string
  onClick?: Function
  width?: number
  height?: number
}

const WrapCss = (props: IProps) => () => css`
  position: relative;
  height: ${props.height ? `${props.height}px` : 'auto'};
  width: ${props.width ? `${props.width}px` : 'auto'};
  canvas {
    display: none;
    filter: blur(5px);
    transition: all .3s;
  }
  &.on {
    canvas {
      display: block;
      filter: blur(0);
    }
  }
`
const CanvasCss = css`
  display: block;
  min-height: 100%;
`

const LazyImage: React.FC<IProps> = (props) => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const onImageClick = () => {
    props.onClick?.()
  }
  const onImageLoad = (event: any) => {
    const { current: $canvas } = canvas
    const $img: HTMLImageElement = event.currentTarget

    if ($canvas !== null) {
      const { width, height } = $img
      const context = $canvas.getContext('2d')

      $canvas.width = width
      $canvas.height = height

      if (context) {
        const { clientWidth, clientHeight } = $canvas

        $canvas.width = clientWidth
        $canvas.height = clientHeight

        context.clearRect(0, 0, clientWidth, clientHeight)
        context.drawImage($img, 0, 0, clientWidth, clientHeight)

        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(() => {
      const image = new Image()

      image.onload = onImageLoad

      if (loading) {
        image.src = props.src
      }
    })

    if (canvas.current) {
      io.observe(canvas.current)
    }
  }, [props.src])

  return props.src ? (
    <div
      css={WrapCss(props)}
      className={`d-flex ai-center jc-center x-hidden y-hidden ${props.className || ''} ${loading ? '' : 'on'}`}
      onClick={onImageClick}
    >
      <canvas className="fill width" css={CanvasCss} ref={canvas} />
    </div>
  ) : <></>
}

export default LazyImage
