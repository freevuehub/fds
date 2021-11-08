import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Component, { IProps } from './index';
import { Divider } from '../'

export default {
  title: 'Component/UI/Image',
  component: Component,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <h1 className="mb-5">Image</h1>
        <Divider className="mb-5" />
        <Story />
      </div>
    )
  ],
  argTypes: {
    src: { control: 'input' }
  },
  args: {
    src: 'https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg'
  },
} as Meta

const Template: Story<IProps>  = (args) => <Component {...args} />

export const Image = Template.bind({})
