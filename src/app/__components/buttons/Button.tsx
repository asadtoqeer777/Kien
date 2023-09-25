import React from 'react'

interface Props {
  btnClasses: string;
  btntext: string
}

const Button = ({ btnClasses, btntext }: Props) => {
  return (
    <div>
      <button className={btnClasses}>{btntext}</button>
    </div>
  )
}

export default Button