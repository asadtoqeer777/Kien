import React from 'react'
import Header from '../__components/header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/pngs/footerLogo.png"
import Image from 'next/image'
import Button from '../__components/buttons'
import DarkPlus from "../__assets/images/svgs/darkPlus.svg"
import Card from '../__components/card'
import Tick from "../__assets/images/pngs/navArrow.png"

const CategoriesList = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="mt-[30px]">
          <div className="grid grid-cols-6 gap-2 border-b-[1px] border-black">
            <div className="col-span-2"></div>
            <div className="col-span-4 text-[35px] sm:text-[60px] md:text-[70px]: lg:text-[80px] xl:text-[90px] 2xl:text-[120px] leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[100px]	mt-[42px]">
              <h1>
                Peripatetic
              </h1>
              <h1>
                Additional Info
              </h1>
            </div>

          </div>
        </div>
        <div className="">
          <div className="pb-5">
            <div className="flex mx-4 mt-2 justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 ">
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"USER LOGIN"} />
                <Button btnClasses={"bg-black text-white border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"ENROLL NOW"} />

              </div>
              <div className="flex items-center gap-2 ">
                <Image src={DarkPlus} alt='DarkPlus' />
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"VIEW ALL CARDS"} />
              </div>
            </div>

          </div>
          <div className="w-[100%] px-[43px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="footerArea flex justify-end mt-6 px-[43px]">
            <Image className='w-[60px] sm:w-[70px] md:w-[90px]' src={Tick} alt='Tick' />
          </div>
        </div>

      </div>
      <div className="footerArea flex justify-end mt-6">
        <Image className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[200px] 2xl:w-[300px]' src={footerLogo} alt='footerLogo' />
      </div>
    </div>
  )
}

export default CategoriesList