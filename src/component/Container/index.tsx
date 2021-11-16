import React from 'react'

interface IProps {
  className?: string
}

const Container: React.FC<IProps> = (props) => {
  return (
    <div className={`fill height ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Container
