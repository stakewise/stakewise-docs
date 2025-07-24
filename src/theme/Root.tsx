import React from 'react'


type RootProps = {
  children: React.ReactNode
}


const Root: React.FC<RootProps> = (props) => {
  const { children } = props

  return (
    <>
      <div id="tooltips" />
      {children}
    </>
  )
}


export default Root
