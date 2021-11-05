import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Component, { IProps } from './';

export default {
  title: 'Component/UI/Switch',
  component: Component,
  decorators: [
    (Story) => (
      <Story />
    )
  ],
} as Meta

const Template: Story<IProps>  = (args) => <Component {...args} />

export const Switch = Template.bind({})
