import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Card, { IProps } from './index';

export default {
  title: 'UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ],
  args: {
    border: false,
  },
} as Meta

const Template: Story<IProps>  = (args) => <Card {...args}>Hello World</Card>

export const Default = Template.bind({})
export const Cover = Template.bind({})

Cover.args = {
  cover: 'https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg'
}
