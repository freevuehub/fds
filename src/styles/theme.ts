import { Theme } from '@emotion/react'


const light = {
  app: '#ffffff',
    content: '#ffffff',
    text: '#37352f',
    table: {
    th: '#263747',
      td: '#263747',
      background: '#32329005',
      border: '#D7E2EB',
  },
}
const dark = {
  app: '#121212',
    content: '#1e1e1e',
    text: '#ffffff',
    table: {
    th: '#263747',
      td: '#263747',
      background: '#32329005',
      border: '#D7E2EB',
  },
}

const theme: Theme = {
  mode: 'light',
  common: {
    primary: '#6bb3b8',
    white: '#ffffff',
    black: '#000000',
  },
  color: {
    ...light,
  },
  style: {
    shadow: `4px 12px 30px 6px rgb(0 0 0 / 9%)`
  }
}

export default theme
