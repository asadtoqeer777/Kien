import React from "react";
import Header from "../__components/header/Header";
import logo from "../__assets/images/pngs/logo.png";
import footerLogo from "../__assets/images/svgs/footerLogo.svg";
import Image from "next/image";

const LandingTransition = () => {
  return (
    <div className="h-screen w-[100vw]">
      <div
        style={{
          backgroundImage: "url(./heroBg-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
        }}
        className="relative"
      >
        <div className="flex justify-center items-center">
          <div
            className="w-[179px] h-[388px] bg-white absolute top-[50%] left-[50%] flex items-end justify-center landingTransitionImage"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              className="w-[118px] sm:w-[138px] h-auto mb-[7px]"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>

        <div className="LandingPage h-screen w-full absolute top-0 left-0 bg-white z-[1]">
          <div className="flex justify-center items-center">
            <Image
              className="landingPageMainImage absolute top-[50%] left-[50%] w-[118px] h-auto  sm:w-[280px]  md:w-[290px]  lg:w-[300px] xl:w-[320px]  2xl:w-[468px] landing-logo"
              style={{ transform: "translate(-50%, -50%)" }}
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="landingPageFooter h-screen flex items-end landing-logo relative">
            <div>
              <div>
                <div className=" w-full absolute bottom-[70px] right-[14px]">
                  <div className="flex justify-between pr-4">
                    <div className="flex justify-between px-[14px] sm:px-[34px]">
                      <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-6 sm:leading-9 mr-[40px] sm:mr-[150px] md:mr-[212px] lg:mr-[262px]">
                        <div className="">CURATED</div>
                        <div className="">CREATIVE</div>
                      </div>
                      <div className="text-black text-[18px] md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-6 sm:leading-9">
                        <div className="">TRAVEL</div>
                        <div className="">EXPERIENCES</div>
                      </div>
                    </div>
                    <div className="text-black text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-[12px] sm:leading-[17px]  sm:right-[34px] ">
                      <div className="">TRAVEL</div>
                      <div className="">EXPERIENCES</div>
                      <div className="">TRAVEL</div>
                      <div className="">EXPERIENCES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="w-[100vw] overflow-x-auto  mt-5 flex items-center gap-[45px] no-scrollbar absolute bottom-0 left-0 z-20">
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
        <div className=" flex items-center gap-[45px]">
          <div className="flex gap-1">
            <Image src={footerLogo} alt="footer logo" />
            <div>©</div>
            <div className="text-[36px]">2023</div>
          </div>
          <div className="flex ml-12">
            <div className="text-[23px] font-semibold uppercase">traveler</div>
          </div>
          <div className="flex items-baseline gap-1 text-[13px] font-semibold w-36">
            <div className="">Vital</div>
            <div className="h-[6px] w-[6px] bg-[#2667CF] mb-[2px]"></div>
            <div className="">Expressive Driven</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTransition;
