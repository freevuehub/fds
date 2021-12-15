import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Image, { IProps } from './index';

export default {
  title: 'Component/UI/Image',
  component: Image,
  argTypes: {
    src: { control: 'input' }
  },
  args: {
    width: 600,
    height: 400,
    src: 'https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg'
  },
} as Meta

export const Default: Story<IProps> = (props) => <Image {...props} />
export const Now: Story<IProps> = (props) => <Image {...props} now />
