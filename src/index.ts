export * from './component'
export * from './hooks'

export type TypeThemeMode = 'light' | 'dark'

export * from '@fortawesome/free-solid-svg-icons'

export interface IColorSet {
  common: {
    primary: string
    white: string
    black: string
    grey: string
  }
  color: {
    app: string
    content: string
    text: string
    table: {
      th: string
      td: string
      background: string
      border: string
    }
  }
  pantone: {
    [key: number]: string[]
  }
}

export interface IBreakPoint {
  notebook: number
  ipadPro: number
  ipad: number
  foldInner: number
  mobile: number
  foldFront: number
}

export interface Theme extends IColorSet {
  mode: TypeThemeMode
  style: {
    shadow: string
  }
  breakPoint: IBreakPoint
}
