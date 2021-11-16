import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0'
import Component, { IProps } from '.';
import { Sheet, Switch } from '../'
import { useThemeMode } from '~/hooks'

export default {
  title: 'Component/UI/Card',
  component: Component,
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
  const [mode, setMode] = useThemeMode()

  const onChange = () => {
    setMode()
  }

  return (
    <>
      <Switch onChange={onChange} value={mode === 'dark'} />
      <h3>Default</h3>
      <div className="mt-2 mb-5 d-flex">
        <div className="pa-2">
          <Default />
        </div>
        <div className="pa-2">
          <Default title="Hello World" />
        </div>
      </div>
      <h3>Border</h3>
      <div className="mt-2 mb-5 d-flex">
        <div className="pa-2">
          <Default border />
        </div>
        <div className="pa-2">
          <Default border title="Hello World" />
        </div>
      </div>
      <h3>Cover Image</h3>
      <div className="mt-2 mb-5">
        <Default cover="https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg" />
      </div>
      <h3>Click Event</h3>
      <Sheet width={400} className="mt-2 mb-5">
        <Default
          onClick={() => alert('Hello')}
          cover="https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg"
        />
      </Sheet>
    </>
  )
}

export const Card = Template.bind({})
