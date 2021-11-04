import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta

export const Default = () => <Card>Hello World</Card>
