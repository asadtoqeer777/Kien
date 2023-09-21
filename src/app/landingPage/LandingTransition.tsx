import React from 'react'
import Header from '../__components/header'
import logo from "../__assets/images/pngs/logo.png"
import footerLogo from "../__assets/images/svgs/footerLogo.svg"
import Image from 'next/image'

const LandingTransition = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./heroBg-2.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%"
      }}
    >
      <Header />
      <div className="flex justify-center items-center">
        <div className="w-[179px] h-[388px] bg-white absolute top-[50%] left-[50%] flex items-end justify-center" style={{
          transform: "translate(-50%, -50%)"
        }}>
          <Image className='w-[118px] sm:w-[138px] h-auto mb-[7px]' src={logo} alt='Logo' />
        </div>
      </div>
      <div className="footerArea h-screen flex items-end">
        <div>
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

export default LandingTransition