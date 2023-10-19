import React from 'react'

interface Props {
  btnClasses?: string;
  btntext?: string
}

const Button = ({ btnClasses="bg-white text-black", btntext }: Props) => {
  return (
      <button className={` leading-[0px] py-px px-3 text-center min-w-[162px] rounded-full uppercase  ${btnClasses}`}>{btntext}</button>
  )
}

export default Button