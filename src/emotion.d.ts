import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark'
    common: {
      primary: string
      white: string
      black: string
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
    style: {
      shadow: string
    }
  }
}
