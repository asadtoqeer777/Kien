import React from 'react'
import Image from "next/image";
import footerLogo from "../../__assets/images/pngs/logoWhite.png";

const Footer = () => {
  return (
    <div className="flex items-center gap-[45px] mr-9 text-white">
    <div className="flex items-center gap-1 SpaceGrotesk">
      <Image className='w-[87px] h-[28px]' src={footerLogo} alt="footer logo" />
      <div className=" translate-y-[6.5px]">©</div>
      <div className="text-[36px]">2023</div>
    </div>

    <div className="flex mx-12">
      <div className="text-[23px] font-semibold uppercase CraftworkGrotesk">INQUISITIVE</div>
    </div>

    <div className="flex items-baseline gap-1 text-[13p x] font-semibold w-36 AuxMono mr-[71px]">
      <div className="AuxMono">Vital</div>
      
      <div className="h-[6px] w-[6px] bg-[#2667CF] translate-y-[5px] text-transparent">.</div>

      <div className="">Expressive Driven</div>
    </div>
  </div>
  )
}

export default Footer