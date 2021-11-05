import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '~/styles'

const Provider: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Provider
