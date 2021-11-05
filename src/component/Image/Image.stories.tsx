import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import ImageComponent, { IProps } from './index';

export default {
  title: 'Component/UI/Image',
  component: ImageComponent,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
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

const Template: Story<IProps>  = (args) => <ImageComponent {...args} />

export const Image = Template.bind({})
