import { Style } from '~/component'

export const decorators = [
  Story => (
    <Style>
      <Story />
    </Style>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
