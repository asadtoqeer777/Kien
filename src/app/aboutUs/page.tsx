"use client";
import React from "react";
import { useRouter } from "next/navigation";
import footerLogo from "../__assets/images/svgs/mainFooterLogo.svg";
import backArrow from ".././__assets/images/svgs/backArrowWhite.svg";
import Image from "next/image";
import Header from "../__components/header/Header";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen relative SpaceGrotesk overflow-hidden">
      <Header navTheme={"bg-white text-black"} navBorArrow={false} />
      <div className=" grid grid-cols-11 h-screen">
        <div className=" col-span-5 bg-black relative">
          <div className="w-[1px] h-screen bg-white absolute top-0 left-[17%]"></div>
        </div>
        <div className=" col-span-6  2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[22px] text-[20px]  font-normal 2xl:leading-[39px] xl:leading-[34px] md:leading-[30px] leading-[20px] tracking-[-1.4px]">
          <div className="2xl:px-[34px] xl:px-[30px] lg:px-[28px] px-[15px] pt-[48px] 2xl:pb-14 xl:pb-10">

          <div className=" mb-8">
            We employ an innovative method to integrate essential travel
            personalities and creators.
          </div>
          <div className="mb-8">
            Transforming the travel landscape into an experience that truly
            captures its essence, evoking wonder, knowledge, and joy.
          </div>

          </div>

          <div className="grid grid-cols-10 border-t-[1px] border-black h-[75vh]">
          <div className="hidden md:block md:col-span-2 lg:col-span-4"></div> 
          <div className="col-span-10 md:col-span-8 lg:col-span-6 border-l-[1px] border-black h-[100%] 2xl:p-6 xl:p-5 lg:p-4 md:p-3 p-2">
            <div className="flex items-start 2xl:gap-[23px] xl:gap-[20px] lg:gap-[18px] gap-[15px]">
            <div className="w-5 h-5 rounded-full bg-black shrink-0 translate-y-[5px]"></div>
            <div className="2xl:text-[23px] xl:text-[20px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[30px] xl:leading-[25px] md:leading-[20px] leading-[15px] tracking-[-0.92px]">
              <div className=" mb-8">
              Kien provides meticulously curated, creative travel experiences and vibrant communities for the new generation of inquisitive and expressive travellers & creatives. 
              </div>
              <div>
              Our offerings break free from the confines of rigid itineraries and mundane travel packages, catering to those who crave unique adventures and a deeper connection with the essential beauty of travel and exploration.
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute flex items-center gap-[10px] top-[48px] left-7">
        <div
          className="cursor-pointer  2xl:w-[48px] xl:w-[44px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[28px]"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={backArrow}
            alt="arrow-icon"
            className="custom-img cursor-pointer"
            fill
          />
        </div>
        <div className="2xl:text-[32px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-medium text-white CraftworkGrotesk">About</div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full mx-auto py-3 px-8 gap-5">
        <div className="2xl:text-[92px] xl:text-[80px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] font-medium 2xl:leading-[89px] xl:leading-[73px] lg:leading-[63px] md:leading-[53px] leading-[30px] text-white lg:tracking-[-4.08px] tracking-[-2.08px]  mb-[40px] w-[40%] CraftworkGrotesk">
          Creative travel experiences for the driven traveler.
        </div>
        <div className="flex flex-wrap justify-between items-center ">
          <div className="max-w-sm w-full flex items-end text-white">
            <div className="flex justify-between gap-6 w-full">
              <p className="w-max text-xs">
                (04)
                <br />
                RELEVANT INFO
              </p>
              <p className="w-max text-xs">IND</p>
              <p className="w-max text-xs">
                (04)
                <br />
                RELEVANT INFO
              </p>
            </div>
          </div>
          <div className=" w-max ml-auto">
            <Image src={footerLogo} alt="footer-logo" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
