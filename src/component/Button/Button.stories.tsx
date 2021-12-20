import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Button from '.'
import { Sheet } from '~/component'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Component/UI/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Sheet className="pa-5">
        <Story />
      </Sheet>
    )
  ]
} as Meta

export const Default: Story = () => {
  return (
    <Button dark>Click</Button>
  )
}

export const Flat: Story = () => {
  return (
    <Button flat>Click</Button>
  )
}

export const Icon: Story = () => {
  return (
    <Button icon={faPlay} dark>Click</Button>
  )
}
