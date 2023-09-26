import React from 'react'

const Container = ({ children, styles }: any) => {
  return (
    <div className={`container mx-auto w-full md:px-8 px-4 ${styles}`}>{children}</div>
  )
}

export default Container