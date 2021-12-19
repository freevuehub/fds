import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Avatar, { IProps } from '.'

export default {
  title: 'Component/UI/Avatar',
  component: Avatar,
  args: {
    src: 'https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_1280.png'
  }
} as Meta

export const Default: Story<IProps> = (props) => (
  <>
    <Avatar {...props} />
  </>
)

export const Tile: Story<IProps> = (props) => (
  <>
    <Avatar {...props} tile />
  </>
)
export const Circle: Story<IProps> = (props) => (
  <>
    <Avatar {...props} circle />
  </>
)

export const Size: Story<IProps> = (props) => (
  <div className="d-flex ai-center jc-space-around">
    <Avatar {...props} size={120} />
    <Avatar {...props} size={80} />
    <Avatar {...props} size={40} />
  </div>
)
