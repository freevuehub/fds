import React from 'react'
import { Meta, Story } from '@storybook/react'
import Icon, { IProps } from '.'
import { faTimes, faSpinner, faCross, faStar } from '../../'

export default {
  title: 'Component/UI/Icon',
  component: Icon,
} as Meta

const icons = [faTimes, faSpinner, faCross, faStar]

export const Default: Story<IProps> = () => (
  <div className="d-flex jc-space-around">
    {
      React.Children.toArray(
        icons.map((icon) => <Icon icon={icon} />)
      )
    }
  </div>
)

export const Size: Story<IProps> = () => (
  <>
    {
      [100, 60, 20].map((size) => (
        <div className="d-flex pt-5 pb-5 jc-space-evenly" key={size}>
          {
            React.Children.toArray(
              icons.map((icon) => <Icon size={size} icon={icon} />)
            )
          }
        </div>
      ))
    }
  </>
)

export const Color: Story<IProps> = () => (
  <>
    {
      ['red', 'blue', 'green'].map((color) => (
        <div className="d-flex pt-5 pb-5 jc-space-evenly" key={color}>
          {
            React.Children.toArray(
              icons.map((icon) => <Icon color={color} icon={icon} />)
            )
          }
        </div>
      ))
    }
  </>
)
