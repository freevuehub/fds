import React from 'react'
import { Style, App, Container } from '~/component'

export const decorators = [
  (Story) => {

    return (
      <Style>
        <App>
          <Container>
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
