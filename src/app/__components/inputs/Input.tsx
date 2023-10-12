import React from 'react'

interface Props {
  inputLabel: string;
  inputLabelExtCSS: string;
  inputExtCSS: string;
  inputType: string
}

const Input = ({ inputLabel, inputLabelExtCSS, inputExtCSS, inputType }: Props) => {
  return (
    <div>
      <div className="relative" >
        <input className={`${inputExtCSS} bg-transparent w-[100%] h-[45px] xl:h-[55px] 2xl:h-[68px] md:w-[390px] md:h-[50px] border-[1px]  rounded-[19.5px] p-[14px] pt-[25px] `} type={inputType} />
        <div className={`${inputLabelExtCSS} absolute top-[7px] left-[15px] font-semibold text-sm uppercase `}>
          {inputLabel}
        </div>
      </div>
    </div>
  )
}

export default Input