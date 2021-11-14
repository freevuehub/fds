import React from 'react'
import { Style } from '~/component'

export const decorators = [
  (Story) => {
    return (
      <Style>
        <div className="pa-5">
          <Story />
        </div>
      </Style>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
