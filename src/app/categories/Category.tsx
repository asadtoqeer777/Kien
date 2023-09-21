import React from 'react'
import Header from '../__components/header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/pngs/footerLogo.png"
import Image from 'next/image'
import Button from '../__components/buttons'
import style from "./style.module.css"

const Category = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="mt-[30px]">
          <div className={`grid grid-cols-6 gap-2  ${style.categoryHero}`} >
            <div className="col-span-2"></div>
            <div className={`${style.categoryHeading} col-span-4 `}>
              <div>
                Peripatetic
              </div>
              <div>
                Additional Info
              </div>
            </div>

          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-6 gap-2 border-b-[1px] border-black pb-5">
            <div className="col-span-2">
              <div className="flex items-center gap-2 ml-4 mt-2">
                <Button btnClasses={"bg-transparent text-black border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"USER LOGIN"} />
                <Button btnClasses={"bg-black text-white border-[1px] border-black w-[122px] h-[20px] rounded-[19.5px] text-[12px]"} btntext={"ENROLL NOW"} />

              </div>
            </div>
            <div className="col-span-4">
              <div className={`${style.categoryHeading} col-span-4 text-[#00000080] mt-[4vh] sm:mt-[3vh]`} >
                <h1>
                  Inquisitive
                </h1>
                <h1>
                  Critical • Profound
                </h1>
              </div>

            </div>

          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-2"></div>
          <div className="col-span-4">
            <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px]">
              <div className={`${style.categorySubHeading} text-[#00000080]`}>
                <div>
                  Peripatetic Refers
                </div>
              </div>
              <div className={`${style.categorySubHeadDes} text-[#00000033]`}>
                <div>
                  A seeker who explores the world's heart to understand its essence, connecting nature, people, and culture on a profound philosophical & critical quest.
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
      <div className="footerArea flex justify-end mt-6 mr-4">
        <Image className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[150px] xl:w-[200px] 2xl:w-[300px]' src={footerLogo} alt='footerLogo' />
      </div>
    </div>
  )
}

export default Category