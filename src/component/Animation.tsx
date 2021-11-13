import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

interface IProps {
  name: string
  duration: number
  delay?: number
  active: boolean
  className?: string
}

const OnCss = (props: IProps) => css`
  animation-duration: ${props.duration / 1000}s;
`
const Animation: React.FC<IProps> = (props) => {
  const [on, setOn] = useState<boolean>(props.active)
  const [active, setActive] = useState<boolean>(props.active)

  const onNavTransitionEnd = () => {
    if (!props.active) {
      setActive(false)
    }
  }

  useEffect(() => {
    setOn(props.active)

    if (props.active) {
      setActive(true)
    }
  }, [props.active])

  return active ? (
    <div
      css={OnCss(props)}
      className={`${props.className || ''} ${props.name} ${props.name}-${on ? 'enter' : 'leave'}`}
      onAnimationEnd={onNavTransitionEnd}
    >
      {props.children}
    </div>
  ) : <></>
}

export default Animation
