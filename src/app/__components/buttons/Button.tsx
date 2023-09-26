import React from 'react'

interface Props {
  btnClasses?: string;
  btntext?: string
}

const Button = ({ btnClasses="bg-white text-black", btntext }: Props) => {
  return (
      <button className={`py-px px-3 text-center min-w-[162px] rounded-full md:text-base text-sm uppercase ${btnClasses}`}>{btntext}</button>
  )
}

export default Button