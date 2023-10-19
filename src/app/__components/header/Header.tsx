"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import NavArrow from "../../__assets/images/pngs/navArrow.png"
import NavArrowWhite from "../../__assets/images/svgs/backArrowWhite.svg"

interface Props {
  navTheme: string,
  toggleNav?: boolean,
  handleNav?: any,
  navBorArrow?: boolean,
  navCol?: number
}

const Header = ({ navTheme, toggleNav, handleNav, navCol, navBorArrow }: Props) => {
  const [activeNav, setActiveNav] = useState(false);
  const router = useRouter()

  const handleNavInternal = () => {    
    setActiveNav((activeNav) => !activeNav)
  };
  return (
    <header className='relative w-full CraftworkGrotesk'>

      <div className={activeNav || toggleNav ? "hidden" : `flex justify-between items-center h-[30px] ${navTheme} pl-[25px] sm:pl-[35px] pr-[50px] fixed top-0 left-0 z-20 w-[100%] text-sm not-italic font-normal cursor-pointer AuxMono`}>
        <div onClick={handleNav || handleNavInternal}>
          MENU
        </div>
        <div >
          EXPERIENCES
        </div>
        <div onClick={() => {
          router.push('/login')
          setActiveNav(false)
        }}>
          LOGIN
        </div>
      </div>

      <div className={ activeNav || toggleNav ? `h-auto ${navTheme}  pl-[25px] sm:pl-[35px] pr-[50px] w-[auto] sm:w-[620px] md:w-[690px] lg:w-[700px] xl:w-[790px] pb-[57px] transition duration-500 ease-out fixed top-0 left-0 z-50` : "h-0 w-0 transition duration-1000 ease-out"}>
        <div className={toggleNav || activeNav  ? "" : "hidden"} >

          <div className=" text-sm not-italic font-normal pt-2 cursor-pointer" onClick={handleNav || handleNavInternal}>
            MENU
          </div>

          <div className='cursor-pointer' onClick={() => {
          router.push('/aboutUs')
          setActiveNav(false)
        }}>
            <div className={`flex justify-between items-center w-[100%] sm:w-[80%] border-b-2  boredr-[1px] mt-[21px] ${navBorArrow ? "border-white" : " border-black"}`}>
              <h2 className=" text-[42px] sm:text-[52px] md:text-[60px] lg:text-[67px] xl:text-[75px] font-medium leading-[70px]">
                About
              </h2>
              <div className="">
                {navBorArrow ?  <Image className='shrink-0 rotate-180' src={NavArrowWhite} alt='NavArrow' /> : <Image className='shrink-0' src={NavArrow} alt='NavArrow' /> }
               
              </div>
            </div>
            <div className="flex mt-1 SpaceGrotesk">
              <div className="w-[120px] sm:w-[300px]">

                <div className={`w-3 h-3 ${navBorArrow? "bg-white" : "bg-black"} rounded-[50%]`}></div>
              </div>
              <div>
                <div className=" text-sm not-italic font-normal">
                  OUR STORY
                </div>
                <div className=" text-sm not-italic font-normal">
                  PHILOSOPHY & STORYLINE
                </div>
              </div>
            </div>
          </div>

          <div className='cursor-pointer' >
            <div className={`flex justify-between items-center w-[100%] sm:w-[80%] border-b-2  boredr-[1px] mt-[21px] ${navBorArrow ? "border-white" : " border-black"}`} onClick={() => {
            router.push('/members')
            // handleNav() || handleNavInternal()
            setActiveNav(false)
          }}>
              <h2 className=" text-[42px] sm:text-[52px] md:text-[60px] lg:text-[67px] xl:text-[75px] font-medium leading-[70px]">
                Members
              </h2>
              <div className="">
               {navBorArrow ?  <Image className='shrink-0 rotate-180' src={NavArrowWhite} alt='NavArrow' /> : <Image className='shrink-0' src={NavArrow} alt='NavArrow' /> }
              </div>
            </div>
            <div className="flex mt-1 SpaceGrotesk" onClick={() => {
            router.push('/teamMembers')
            // handleNav() || handleNavInternal()
            setActiveNav(false)
          }}>
              <div className="w-[120px] sm:w-[300px]">

                <div className={`w-3 h-3 ${navBorArrow? "bg-white" : "bg-black"} rounded-[50%]`}></div>
              </div>
              <div>
                <div className=" text-sm not-italic font-normal">
                  CORE TEAM
                </div>
                <div className=" text-sm not-italic font-normal">
                  EXTERNAL TEAM
                </div>
              </div>
            </div>
          </div>

          <div className='cursor-pointer' onClick={() => {
            router.push('/connect')
            // handleNav() || handleNavInternal()
            setActiveNav(false)
          }}>
            <div className={`flex justify-between items-center w-[100%] sm:w-[80%] border-b-2  boredr-[1px] mt-[21px] ${navBorArrow ? "border-white" : " border-black"}`}>
              <h2 className=" text-[42px] sm:text-[52px] md:text-[60px] lg:text-[67px] xl:text-[75px] font-medium leading-[70px]">
                Connect
              </h2>
              <div className="">
                {navBorArrow ?  <Image className='shrink-0 rotate-180' src={NavArrowWhite} alt='NavArrow' /> : <Image className='shrink-0' src={NavArrow} alt='NavArrow' /> }
              </div>
            </div>
            <div className="flex mt-1 SpaceGrotesk">
              <div className="w-[120px] sm:w-[300px]">

                <div className={`w-3 h-3 ${navBorArrow? "bg-white" : "bg-black"} rounded-[50%]`}></div>
              </div>
              <div>
                <div className=" text-sm not-italic font-normal">
                  EMAIL : CONNECT@KIEN.TRAVEL
                </div>
                <div className=" text-sm not-italic font-normal">
                  +91 930 13 13 138
                </div>
                <div className=" text-sm not-italic font-normal">
                  BANGALORE, KARNATAKA
                </div>
              </div>
            </div>
          </div>

          <div className='cursor-pointer' onClick={() => {
            router.push('/philosophy')
            // handleNav() || handleNavInternal()
            setActiveNav(false)
          }}>
            <div className={`flex justify-between items-center w-[100%] sm:w-[80%] border-b-2  boredr-[1px] mt-[21px] ${navBorArrow ? "border-white" : " border-black"}`}>
              <h2 className=" text-[42px] sm:text-[52px] md:text-[60px] lg:text-[67px] xl:text-[75px] font-medium leading-[70px]">
                Process
              </h2>
              <div className="">
                {navBorArrow ?  <Image className='shrink-0 rotate-180' src={NavArrowWhite} alt='NavArrow' /> : <Image className='shrink-0' src={NavArrow} alt='NavArrow' /> }
              </div>
            </div>
            <div className="flex mt-1 SpaceGrotesk">
              <div className="w-[120px] sm:w-[300px]">

                <div className={`w-3 h-3 ${navBorArrow? "bg-white" : "bg-black"} rounded-[50%]`}></div>
              </div>
              <div>
                <div className=" text-sm not-italic font-normal">
                  PHILOSOPHY
                </div>
                <div className=" text-sm not-italic font-normal">
                  CURATOR’S PAGE
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header >
  )
}

export default Header