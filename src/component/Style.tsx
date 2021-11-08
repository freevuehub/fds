import React from 'react'
import { ThemeProvider, Global } from '@emotion/react'
import { font, reset, common } from '~/styles'
import { theme } from '~/styles'

const Style: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[font, reset, common]} />
      {props.children}
    </ThemeProvider>
  )
}

export default Style
