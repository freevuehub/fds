import React from 'react'
import { Meta, Story } from '@storybook/react'
import Icon, { IProps } from '.'
import { faSolid } from '../../'

export default {
  title: 'Component/UI/Icon',
  component: Icon,
} as Meta

export const Default: Story<IProps> = () => {
  const { faTimes, faSpinner, faCross, faStar } = faSolid

  return (
    <div className="d-flex jc-space-around">
      {
        React.Children.toArray(
          [faTimes, faSpinner, faCross, faStar].map((icon) => <Icon icon={icon} />)
        )
      }
    </div>
  )
}

export const Size: Story<IProps> = () => {
  const { faTimes, faSpinner, faCross, faStar } = faSolid

  return (
    <>
      {
        [100, 60, 20].map((size) => (
          <div className="d-flex pt-5 pb-5 jc-space-evenly" key={size}>
            {
              React.Children.toArray(
                [faTimes, faSpinner, faCross, faStar].map((icon) => <Icon size={size} icon={icon} />)
              )
            }
          </div>
        ))
      }
    </>
  )
}

export const Color: Story<IProps> = () => {
  const { faTimes, faSpinner, faCross, faStar } = faSolid

  return (
    <>
      {
        ['red', 'blue', 'green'].map((color) => (
          <div className="d-flex pt-5 pb-5 jc-space-evenly" key={color}>
            {
              React.Children.toArray(
                [faTimes, faSpinner, faCross, faStar].map((icon) => <Icon color={color} icon={icon} />)
              )
            }
          </div>
        ))
      }
    </>
  )
}
