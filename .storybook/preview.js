import { ThemeProvider } from '@emotion/react'
import { GlobalProvider } from '~/lib'

export const decorators = [
  Story => (
    <ThemeProvider theme={{}}>
      <GlobalProvider>
        <Story />
      </GlobalProvider>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
