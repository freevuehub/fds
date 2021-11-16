import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'

export default {
  title: 'Component/UI/Nav Button',
  component: Component,
} as Meta

const Template: Story<IProps> = (props) => <Component {...props} />

export const NavButton = Template.bind({})
