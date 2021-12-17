import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Card from '.'
import { Sheet, Image } from '../'

export default {
  title: 'Component/UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Sheet width={400} className="ml-auto mr-auto">
        <Story />
      </Sheet>
    )
  ]
} as Meta

export const Default: Story = () => {
  return (
    <Card>
      <Card.Title>
        Hello World
      </Card.Title>
      <Card.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </p>
      </Card.Content>
    </Card>
  )
}

export const Border: Story = () => {
  return (
    <Card border>
      <Card.Title>
        Hello World
      </Card.Title>
      <Card.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </p>
      </Card.Content>
    </Card>
  )
}

export const CoverImage: Story = () => {
  return (
    <Card>
      <Image
        src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=1280"
        height={250}
      />
      <Card.Title>
        Hello World
      </Card.Title>
      <Card.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </p>
      </Card.Content>
    </Card>
  )
}

export const Click: Story = () => {
  const onCardClick = () => {
    alert('Click!')
  }

  return (
    <Card onClick={onCardClick}>
      <Card.Content>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </p>
      </Card.Content>
    </Card>
  )
}
