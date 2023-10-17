import React from 'react'
import Image from "next/image";
interface Props{
	ArchetypeImg: any
	heading: string
	subHeading: string
	text: string
}

const ArchetypeImgCon = ({
	ArchetypeImg, subHeading, heading,
	text
} : Props) => {
  return (
	<div>
		<div className="relative ">
            <Image
              className="w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[60vh] "
              src={ArchetypeImg}
              alt=""
            />

            <div className="absolute left-1 md:left-2 bottom-4 z-10 text-white " style={{
				writingMode:  "vertical-rl",
				transform: "scale(-1, -1)"
			}}>
            <div className=" uppercase">
              <div className="text-[24px] sm:text-[27px] md:text-[28px] lg:text-[30px] xl:text-[33px] 2xl:text-[50px] leading-[28px] xl:leading-[45px] SpaceGrotesk">
                {heading}
              </div>
              <div className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px] AuxMono">
               {subHeading}
              </div>
            </div>

            </div>
            <div className="absolute right-1 bottom-4 z-10 text-white SpaceGrotesk" style={{
				writingMode:  "vertical-rl",
				transform: "scale(-1, -1)"
			}}>{text}</div>

          </div>
	</div>
  )
}

export default ArchetypeImgCon