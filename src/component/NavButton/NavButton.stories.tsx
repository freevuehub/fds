import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'
import { Sheet } from '../'

export default {
  title: 'Component/UI/Nav Button',
  component: Component,
  decorators: [
    (Story) => (
      <Sheet className="pa-5">
        <Story />
      </Sheet>
    )
  ]
} as Meta

const Template: Story<IProps> = (props) => <Component {...props} />

export const NavButton = Template.bind({})
