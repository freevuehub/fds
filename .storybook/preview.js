import React from 'react'
import { Style, App, Content } from '~/component'

export const decorators = [
  (Story) => {
    return (
      <Style>
        <App>
          <Content>
            <Story />
          </Content>
        </App>
      </Style>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
