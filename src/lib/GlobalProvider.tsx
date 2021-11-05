import React from 'react'
import { Global } from '@emotion/react'
import { reset } from '~/styles'

const GlobalProvider: React.FC = (props) => {
  return (
    <>
      <Global styles={[reset]} />
      {props.children}
    </>
  )
}

export default GlobalProvider
