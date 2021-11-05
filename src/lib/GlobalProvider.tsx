import React from 'react'
import { Global } from '@emotion/react'
import { font, reset, common } from '~/styles'

const GlobalProvider: React.FC = (props) => {
  return (
    <>
      <Global styles={[font, reset, common]} />
      {props.children}
    </>
  )
}

export default GlobalProvider
