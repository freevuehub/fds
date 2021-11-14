import React from 'react'
import { ThemeProvider } from '~/provider'

const Style: React.FC = (props) => {
  return (
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  )
}

export default Style
