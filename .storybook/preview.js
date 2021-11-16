import React from 'react'
import { Style, App, Container } from '~/component'

export const decorators = [
  (Story) => {
    return (
      <Style>
        <App>
          <Container className="pa-5">
            <Story />
          </Container>
        </App>
      </Style>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
