import { ThemeProvider, Global } from '@emotion/react'

export const decorators = [
  Story => (
    <ThemeProvider theme={{}}>
      <Global styles={[]} />
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
