import React from 'react'
import Header from '../__components/header/Header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/svgs/footerLogo.svg"
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div className='relative'>
      <Header navTheme={"bg-[#E3FF00]"} />
      <div className="flex justify-center items-center">
        <Image className='absolute top-[50%] left-[50%] w-[280px] h-auto  sm:w-[280px]  md:w-[290px]  lg:w-[300px] xl:w-[320px]  2xl:w-[468px] ' style={{ transform: "translate(-50%, -50%)" }} src={logo} alt='Logo' />
      </div>
      <div className="footerArea h-screen flex items-end">
        <div>
          <div className="flex px-[14px] sm:px-[34px]">
            <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-6 sm:leading-9 mr-[40px] sm:mr-[150px] md:mr-[212px] lg:mr-[262px]">
              <div className="">
                CURATED
              </div>
              <div className="">
                CREATIVE
              </div>
            </div>
            <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-6 sm:leading-9">
              <div className="">
                TRAVEL
              </div>
              <div className="">
                EXPERIENCES
              </div>
            </div>
          </div>

          <div className="text-black text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-[12px] sm:leading-[17px]  absolute bottom-[70px] right-[14px] sm:right-[34px] ">
            <div className="">
              TRAVEL
            </div>
            <div className="">
              EXPERIENCES
            </div>
            <div className="">
              TRAVEL
            </div>
            <div className="">
              EXPERIENCES
            </div>
          </div>

          <div className="w-[100vw] overflow-x-auto  mt-5 flex items-center gap-[45px] no-scrollbar">
            <div className=" flex items-center gap-[45px]">
              <div className="flex gap-1">
                <Image src={footerLogo} alt='footer logo' />
                <div>©</div>
                <div className="text-[36px]">
                  2023
                </div>
              </div>
              <div className="flex ml-12">
                <div className="text-[23px] font-semibold uppercase">
                  traveler
                </div>
              </div>
              <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
                <div className="">
                  Vital
                </div>
                <div className='h-[6px] w-[6px] bg-[#2667CF] mb-[2px]'></div>
                <div className="">
                  Expressive
                  Driven
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-[45px]">
              <div className="flex gap-1">
                <Image src={footerLogo} alt='footer logo' />
                <div>©</div>
                <div className="text-[36px]">
                  2023
                </div>
              </div>
              <div className="flex ml-12">
                <div className="text-[23px] font-semibold uppercase">
                  traveler
                </div>
              </div>
              <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
                <div className="">
                  Vital
                </div>
                <div className='h-[6px] w-[6px] bg-[#2667CF] mb-[2px]'></div>
                <div className="">
                  Expressive
                  Driven
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-[45px]">
              <div className="flex gap-1">
                <Image src={footerLogo} alt='footer logo' />
                <div>©</div>
                <div className="text-[36px]">
                  2023
                </div>
              </div>
              <div className="flex ml-12">
                <div className="text-[23px] font-semibold uppercase">
                  traveler
                </div>
              </div>
              <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
                <div className="">
                  Vital
                </div>
                <div className='h-[6px] w-[6px] bg-[#2667CF] mb-[2px]'></div>
                <div className="">
                  Expressive
                  Driven
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-[45px]">
              <div className="flex gap-1">
                <Image src={footerLogo} alt='footer logo' />
                <div>©</div>
                <div className="text-[36px]">
                  2023
                </div>
              </div>
              <div className="flex ml-12">
                <div className="text-[23px] font-semibold uppercase">
                  traveler
                </div>
              </div>
              <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
                <div className="">
                  Vital
                </div>
                <div className='h-[6px] w-[6px] bg-[#2667CF] mb-[2px]'></div>
                <div className="">
                  Expressive
                  Driven
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage