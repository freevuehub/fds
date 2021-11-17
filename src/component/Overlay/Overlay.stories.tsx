import React from 'react'
import { Meta, Story } from '@storybook/react'
import Overlay from '.'
import { Sheet, Card } from '../'

export default {
  title: 'Component/UI/Overlay',
  Component: Overlay,
  decorators: [
    (Story) => (
      <Sheet width={800} className="pa-5 relative">
        <Story />
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci alias aspernatur assumenda consectetur dolorum
            eveniet exercitationem expedita inventore, iure magni
            molestias non, porro qui reprehenderit sed tempora temporibus.
            Dolor, rerum?
          </Card.Content>
        </Card>
      </Sheet>
    )
  ]
} as Meta

export const Default: Story = () => {
  return (
    <Overlay className="d-flex ai-center jc-center">
      <Overlay.Content>
        <Card>
          <Card.Title>
            Hello World
          </Card.Title>
        </Card>
      </Overlay.Content>
    </Overlay>
  )
}

export const BackgroundClick: Story = () => {
  const onClose = () => {
    alert('Background Click!!')
  }

  return (
    <Overlay className="d-flex ai-center jc-center" onClose={onClose}>
      <Overlay.Content>
        <Card>
          <Card.Title>
            Hello World
          </Card.Title>
        </Card>
      </Overlay.Content>
    </Overlay>
  )
}
