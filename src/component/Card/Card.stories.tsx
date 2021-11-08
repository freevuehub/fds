import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.';
import { Divider, Sheet } from '../'

export default {
  title: 'Component/UI/Card',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <h1 className="mb-5">Card</h1>
        <Divider className="mb-5" />
        <Story />
      </>
    )
  ],
} as Meta

const Default: Story<IProps> = (args) => (
  <Component {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusantium alias architecto aspernatur atque autem culpa ea
      expedita facere harum incidunt ipsum magnam minus odio, perferendis,
      praesentium reiciendis repellendus sequi voluptas?
    </p>
  </Component>
)
const Template: Story<IProps> = () => {
  return (
    <>
      <h3>Default</h3>
      <Sheet width={400} className="mt-2 mb-5">
        <h5>Only Content</h5>
        <Default className="mt-2 mb-5" />
        <h5>With Title</h5>
        <Default title="Hello World" className="mt-2" />
      </Sheet>
      <h3>Border</h3>
      <Sheet width={400} className="mt-2 mb-5">
        <Default border />
      </Sheet>
      <h3>Cover Image</h3>
      <Sheet width={400} className="mt-2 mb-5">
        <Default cover="https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg" />
      </Sheet>
    </>
  )
}

export const Card = Template.bind({})
