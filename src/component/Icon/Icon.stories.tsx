import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Component/UI/Icon',
  component: Component,
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    )
  ]
} as Meta

const Template: Story<IProps> = () => <Component icon={faTimes} />

export const Icon = Template.bind({})
