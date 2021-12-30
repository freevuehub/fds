import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Component from '.';

export default {
  title: 'Component/UI/Logo',
  component: Component,
} as Meta

export const Default: Story = () => <Component width={100} />
