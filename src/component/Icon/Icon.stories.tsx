import React from 'react'
import { Meta, Story } from '@storybook/react'
import Component, { IProps } from '.'
import { faTimes, faSpinner } from '../../'

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

const Template: Story<IProps> = () => (
  <>
    <Component icon={faTimes} />
    <Component icon={faSpinner} />
  </>
)

export const Icon = Template.bind({})
