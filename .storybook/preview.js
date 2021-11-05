import { ThemeProvider, GlobalProvider } from '~/lib'

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalProvider>
        <Story />
      </GlobalProvider>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
