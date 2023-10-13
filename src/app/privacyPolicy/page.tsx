import React from "react";
import footerLogo from "../__assets/images/svgs/mainFooterLogo.svg";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen w-screen">
      <div className=" grid grid-cols-11 h-screen">
        <div className=" col-span-5 bg-black relative">
          <div className="w-[1px] h-screen bg-white absolute top-0 left-[15%]"></div>
          <div className="w-[1px] h-screen bg-white absolute top-0 right-[30%]"></div>
        </div>
        <div className=" col-span-6 pl-[53px] pr-[35px] pt-[30px] 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[24px] text-[20px]  font-normal 2xl:leading-[39px] leading-[34px] tracking-[-1.4px]">
          <div className=" mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="mb-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className=" mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full mx-auto py-3 px-8 gap-5">
        <div className="2xl:text-[102px] xl:text-[90px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] font-medium leading-[89px] text-white tracking-[-4.08px] mb-[40px]">
          Privacy Policy
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

export default PrivacyPolicy;
