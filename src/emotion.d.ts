import '@emotion/react'
import { Theme as FDSTheme } from '.'

declare module '@emotion/react' {
  export interface Theme extends FDSTheme {}
}
