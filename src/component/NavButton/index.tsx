import React, {useEffect, useState} from 'react'
import { css, Theme } from '@emotion/react'
import { Button } from '../'

export interface IProps {
  onChange?: Function
  active: boolean
  className?: string
}

const ButtonCss = (theme: Theme) => css`
  z-index: 11;
  & > div {
    padding: 0;
    .line-wrap {
      transition: transform .3s;
      width: 32px;
      height: 20px;
      span {
        transition: transform .3s;
        background-color: ${theme.color.text};
        font-size: 0;
        text-indent: -9999px;
        height: 3px;
      }
    }
  }
  &.on {
    & > div {
      padding: 0;
      .line-wrap {
        transform: rotate(-180deg);
        span {
          &:nth-of-type(1) {
            transform: translateY(8.5px) rotate(60deg);
          }
          &:nth-of-type(2) {
            transform: rotate(360deg);
          }
          &:nth-of-type(3) {
            transform: translateY(-8.5px) rotate(-60deg);
          }
        }
      }
    }
  }
`
const NavButton: React.FC<IProps> = (props) => {
  const [active, setActive] = useState<boolean>(props.active)

  const useActive = () => {
    if (props.active !== active) {
      setActive(props.active)
    }
  }

  const onNavButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    props.onChange?.(!active)

    setActive(!active)
  }

  useEffect(useActive, [props.active])

  return (
    <Button
      text
      onClick={onNavButtonClick}
      css={ButtonCss}
      className={`${active ? 'on' : ''} ${props.className || ''}`}
    >
      <div className="d-flex line-wrap dir-column flex-wrap jc-space-between">
        <span className="fill width">line</span>
        <span className="fill width">line</span>
        <span className="fill width">line</span>
      </div>
    </Button>
  )
}

export default NavButton
