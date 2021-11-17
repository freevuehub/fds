import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Card from '.'
import { Image } from '../'

export default {
  title: 'Component/UI/Card',
  component: Card,
} as Meta

export const Default: Story = () => {
  return (
    <div className="pa-5">
      <Card>
        <Card.Title>
          Hello World
        </Card.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </Card.Content>
      </Card>
    </div>
  )
}

export const Border: Story = () => {
  return (
    <div className="pa-5">
      <Card border>
        <Card.Title>
          Hello World
        </Card.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </Card.Content>
      </Card>
    </div>
  )
}

export const CoverImage: Story = () => {
  return (
    <div className="pa-5">
      <Card>
        <Image
          src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=1280"
          height={250}
        />
        <Card.Title>
          Hello World
        </Card.Title>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid assumenda, beatae consequuntur distinctio, est id
          labore molestiae nihil nisi omnis, perferendis perspiciatis
          quas quasi quia repudiandae similique tenetur velit veritatis!
        </Card.Content>
      </Card>
    </div>
  )
}
