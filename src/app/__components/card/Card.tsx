import Image from 'next/image'
import React from 'react'
import PlusIcon from "../../__assets/images/pngs/plusIcon.png"
import Face from "../../__assets/images/svgs/face.svg"
import Eye from "../../__assets/images/svgs/eye.svg"
import Hiking from "../../__assets/images/svgs/hiking.svg"

interface Props{
  title: string,
  subTitle: string,
  Name: string,
  CountryName: string,
  travel: string,
  logo: any,
  status: string
}

const Card = ({title, subTitle, Name, CountryName, travel, logo, status} : Props) => {
  console.log("dfjksdajf", logo);
  
  return (
    <div>
      <div className="w-[100%] sm:w-[267px] md:w-[230px] lg:w-[100%] lg:h-[165px] 2xl:h-[224.762px] xl:w-[254.286px] h-[224.762px] bg-[#2667CF] rounded-2xl px-3 py-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="text-white text-[15px] font-medium">
              {title}
            </div>
            <div className="text-[12px] font-medium text-[#ffffffb3]">
              {subTitle}
            </div>
          </div>
          <div>
            <Image className='w-[30.833px] h-[30.833px]' src={PlusIcon} alt='plaua icon' />
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <div>
            {/* <Image className='w-[30.833px] h-[30.833px]' src={PlusIcon} alt='plaua icon' /> */}
            <div className="w-[42px] h-[42px] rounded-[50%]">
              <Image src={logo} alt='card logo'/>
            </div>
          </div>
          <div className="">

            <div className="text-white text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px]  2xl:text-[26px] font-medium ">
              <div className="leading-5">
                {Name}
              </div>
              <div className="">
                {CountryName}
              </div>
            </div>
            <div className="flex gap-[25px]">
              <div className="flex gap-1 ">
                <Image className='w-[18px] h-[18px]' src={Hiking} alt='' />
                <div className="text-[12px] text-[#ffffffb3] mt-[3px]">{travel}</div>
              </div>

              <div className="flex gap-1 items-center">
                <Image className='w-[18px] h-[18px]' src={Face} alt='' />
                <div className="text-[12px] text-[#ffffffb3]">{status}</div>
              </div>

              <div className="">
                <Image className='w-[18px] h-[18px]' src={Eye} alt='' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card