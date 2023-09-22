import React from 'react'

const Container = ({ children, styles }: any) => {
  return (
    <div className={`container mx-auto max-w-[1515px] w-full px-8 ${styles}`}>{children}</div>
  )
}

export default Container