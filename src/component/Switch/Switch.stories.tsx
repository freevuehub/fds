import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Component, { IProps } from './';
import { Divider } from '../'

export default {
  title: 'Component/UI/Switch',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1 className="mb-5">Switch</h1>
        <Divider className="mb-5" />
        <Story />
      </>
    )
  ],
} as Meta

const Template: Story<IProps>  = (args) => <Component {...args} />

export const Switch = Template.bind({})
