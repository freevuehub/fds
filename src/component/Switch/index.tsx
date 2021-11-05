import React, { useState, useEffect } from 'react'
import { css, Theme } from '@emotion/react'

export interface IProps {
  onChange: Function
  value?: boolean
  label?: string
}

const WrapCss = (theme: Theme) => css`
  background-color: ${theme.color.content};
  color: ${theme.color.text};
  font-size: 14px;
  cursor: pointer;
  input {
    appearance: none;
  }
  p {
    margin-right: 10px;
  }
  .checkbox {
    position: relative;
    width: 36px;
    height: 14px;
    font-size: 0;
    border-radius: 7px;
    background-color: #c5c5c5;
    &:after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: ${theme.color.content};
      box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
      border-radius: 50%;
      left: 0;
      top: 50%;
      margin-top: -10px;
      transform: translateX(0);
      transition: transform .3s;
    }
  }
  &.on {
    .checkbox {
      background-color: ${theme.common.primary}70;
      &:after {
        background-color: ${theme.common.primary};
        transform: translateX(16px);
      }
    }
  }
`
const Switch: React.FC<IProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(!!props.value)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    props.onChange(checked)
  }, [checked])

  return (
    <label css={WrapCss} className={`${checked ? 'on' : ''} d-flex`}>
      {props.label && (<p>{props.label}</p>)}
      <input onChange={onInputChange} type="checkbox" checked={checked} />
      <div className="checkbox">
        checkbox
      </div>
    </label>
  )
}

export default Switch
