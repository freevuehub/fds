import React from 'react'
import { Global } from '@emotion/react'
import { ThemeProvider } from '~/provider'
import { common, font, reset } from '~/styles'

interface IProps {
  styles?: any[]
}

const Style: React.FC<IProps> = (props) => {
  return (
    <ThemeProvider>
      <Global styles={[font, reset, common, ...(props.styles || [])]} />
      {props.children}
    </ThemeProvider>
  )
}

export default Style
