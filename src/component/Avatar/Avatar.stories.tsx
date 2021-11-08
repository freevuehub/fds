import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.'
import { Divider } from '../'

export default {
  title: 'Component/UI/Avatar',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1 className="mb-5">Avatar</h1>
        <Divider className="mb-5" />
        <Story />
      </>
    )
  ],
  args: {
    src: 'https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_1280.png'
  }
} as Meta

const Default: Story<IProps> = (args) => <Component {...args} />
const Template: Story<IProps> = (args) => (
  <>
    <h3 className="mb-2">Size 180px</h3>
    <div className="d-flex">
      <Default size={180} className="mb-5 mr-3" {...args}  />
      <Default size={180} className="mb-5" tile {...args}  />
    </div>
    <h3 className="mb-2">Size 110px (Default)</h3>
    <div className="d-flex">
      <Default className="mb-5 mr-3" {...args}  />
      <Default className="mb-5" tile {...args}  />
    </div>
    <h3 className="mb-2">Size 80px</h3>
    <div className="d-flex">
      <Default size={80} className="mb-5 mr-3" {...args}  />
      <Default size={80} className="mb-5" tile {...args}  />
    </div>
  </>
)

export const Avatar = Template.bind({})
