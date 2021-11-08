import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Sheet, Divider } from './'

export default {
  title: 'Component/UI/Typography',
  decorators: [
    (Story) => (
      <>
        <h1 className="mb-5">Typography</h1>
        <Divider className="mb-5" />
        <Story />
      </>
    )
  ],
} as Meta

const Template: Story  = () => (
  <>
    <h3>Heading</h3>
    <Sheet className="mt-2 mb-5">
      <h1 className="mb-3">Hello World. (h1)</h1>
      <h2 className="mb-3">Hello World. (h2)</h2>
      <h3 className="mb-3">Hello World. (h3)</h3>
      <h4 className="mb-3">Hello World. (h4)</h4>
      <h5 className="mb-3">Hello World. (h5)</h5>
      <h6>Hello World. (h6)</h6>
    </Sheet>
    <h3>Text</h3>
    <Sheet className="mt-2 mb-5">
      <div className="mb-3">
        <p>Hello World. (Default)</p>
      </div>
      <div className="mb-3">
        <mark>Hello World. (Mark)</mark>
      </div>
      <div className="mb-3">
        <i>Hello World. (Italic)</i>
      </div>
      <div className="mb-3">
        <strong>Hello World. (Strong)</strong>
      </div>
      <div className="mb-3">
        <u>Hello World. (Underline)</u>
      </div>
      <div className="mb-3">
        <del>Hello World. (Delete)</del>
      </div>
      <div>
        <code>Hello World. (Code)</code>
      </div>
    </Sheet>
  </>
)

export const Typography = Template.bind({})
